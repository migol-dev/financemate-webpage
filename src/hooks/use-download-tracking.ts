"use client";

import { useEffect, useState, useCallback } from "react";
import { getVisitorId } from "@/lib/utils";

const STORAGE_KEY = "fm_has_downloaded";

/** Tracks whether this browser has already attempted a download of the app
 *  (clicked the download button or opened the releases page). Persists a
 *  flag locally and logs an anonymous event to the backend so the admin
 *  can see aggregate download attempts. */
export function useDownloadTracking() {
  const [hasDownloaded, setHasDownloaded] = useState(false);

  useEffect(() => {
    setHasDownloaded(localStorage.getItem(STORAGE_KEY) === "1");
  }, []);

  const logDownload = useCallback(async (version: string) => {
    localStorage.setItem(STORAGE_KEY, "1");
    setHasDownloaded(true);
    try {
      await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ visitorId: getVisitorId(), version }),
      });
    } catch {
      // Non-critical — never block the actual download on this.
    }
  }, []);

  return { hasDownloaded, logDownload };
}
