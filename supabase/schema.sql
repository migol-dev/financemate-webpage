-- Finance Mate — Supabase schema
-- Run this in the Supabase SQL editor (or via `supabase db push`).

create extension if not exists "pgcrypto";

-- ── Reviews ──────────────────────────────────────────────────────────────
create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 60),
  email text not null,
  rating smallint not null check (rating between 1 and 5),
  comment text not null check (char_length(comment) between 5 and 800),
  has_downloaded boolean not null default false,
  approved boolean not null default true,
  created_at timestamptz not null default now()
);
create index if not exists reviews_created_at_idx on reviews (created_at desc);

-- ── Bug reports / suggestions ───────────────────────────────────────────
create table if not exists reports (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('bug','suggestion')),
  name text,
  email text,
  title text not null check (char_length(title) between 3 and 120),
  description text not null check (char_length(description) between 5 and 2000),
  status text not null default 'open' check (status in ('open','in_review','resolved')),
  created_at timestamptz not null default now()
);
create index if not exists reports_created_at_idx on reports (created_at desc);

-- ── Gallery images (admin-managed) ──────────────────────────────────────
create table if not exists gallery_images (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  image_url text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);
create index if not exists gallery_sort_idx on gallery_images (sort_order asc);

-- ── Download attempts (used to detect "already tried the app") ─────────
create table if not exists download_events (
  id uuid primary key default gen_random_uuid(),
  visitor_id text not null,
  version text not null,
  created_at timestamptz not null default now()
);
create index if not exists download_visitor_idx on download_events (visitor_id);

-- ── Row Level Security ───────────────────────────────────────────────────
alter table reviews enable row level security;
alter table reports enable row level security;
alter table gallery_images enable row level security;
alter table download_events enable row level security;

-- Public can read approved reviews and gallery images only.
create policy "public read approved reviews" on reviews
  for select using (approved = true);

create policy "public read gallery" on gallery_images
  for select using (true);

-- Public can insert their own review / report / download event,
-- but writes go through the API routes using the anon key with these
-- policies — no update/delete for anonymous users.
create policy "public insert reviews" on reviews
  for insert with check (true);

create policy "public insert reports" on reports
  for insert with check (true);

create policy "public insert download events" on download_events
  for insert with check (true);

-- All UPDATE/DELETE and gallery writes are performed exclusively by the
-- admin API routes using the Supabase service role key, which bypasses RLS.
-- No additional policies are needed for that path.
