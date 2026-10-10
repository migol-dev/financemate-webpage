"use client";

import { useState, useCallback, useSyncExternalStore } from "react";
import { getVisitorId } from "@/lib/utils";

const STORAGE_KEY = "fm_has_downloaded";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function getServerSnapshot() {
  return false;
}

/** Tracks whether this browser has already attempted a download of the app
 *  (clicked the download button or opened the releases page). Persists a
 *  flag locally and logs an anonymous event to the backend so the admin
 *  can see aggregate download attempts. */
export function useDownloadTracking() {
  const isStored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isLoggedLocally, setIsLoggedLocally] = useState(false);

  const hasDownloaded = isStored || isLoggedLocally;

  const logDownload = useCallback(async (version: string) => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore
    }
    setIsLoggedLocally(true);
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
