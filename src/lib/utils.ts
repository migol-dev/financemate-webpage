import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Generates (and persists in localStorage) an anonymous visitor id used
 *  only to avoid duplicate "download attempt" logs from the same browser. */
export function getVisitorId(): string {
  if (typeof window === "undefined") return "server";
  const key = "fm_visitor_id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}
