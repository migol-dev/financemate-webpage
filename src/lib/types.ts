export type Review = {
  id: string;
  name: string;
  email: string;
  rating: number; // 1-5
  comment: string;
  has_downloaded: boolean;
  created_at: string;
  approved: boolean;
};

export type ReportType = "bug" | "suggestion";

export type Report = {
  id: string;
  type: ReportType;
  name: string | null;
  email: string | null;
  title: string;
  description: string;
  status: "open" | "in_review" | "resolved";
  created_at: string;
};

export type GalleryImage = {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  sort_order: number;
  created_at: string;
};

export type DownloadEvent = {
  id: string;
  visitor_id: string;
  version: string;
  created_at: string;
};

export type ReleaseInfo = {
  version: string;
  url: string;
  publishedAt: string;
  notes?: string;
};
