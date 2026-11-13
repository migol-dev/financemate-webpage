"use client";

import { Download, CheckCircle2, Tag } from "lucide-react";
import { useDownloadTracking } from "@/hooks/use-download-tracking";

interface DownloadCtaProps {
  version: string;
  downloadUrl: string;
  releasesPageUrl: string;
}

export function DownloadCta({ version, downloadUrl, releasesPageUrl }: DownloadCtaProps) {
  const { hasDownloaded, logDownload } = useDownloadTracking();

  return (
    <>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
        <a
          href={downloadUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() => logDownload(version)}
          className="btn-primary ps-6 pe-5 group w-full sm:w-auto justify-center"
        >
          <span>Descargar APK directo (v{version})</span>
          <Download
            className="w-4 h-4 transition-transform duration-150 ease-out group-hover:translate-y-0.5"
            strokeWidth={2}
          />
        </a>
        <a
          href={releasesPageUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost px-5 w-full sm:w-auto justify-center"
        >
          <Tag className="w-4 h-4 text-primary" strokeWidth={1.75} />
          <span>Ver notas de versión en GitHub</span>
        </a>
      </div>

      {hasDownloaded && (
        <div className="inline-flex items-center gap-2 text-xs text-primary bg-muted border border-border px-3.5 py-2 rounded-xl font-mono">
          <CheckCircle2 className="w-4 h-4 shrink-0" strokeWidth={2} />
          <span>Descarga registrada en este navegador — gracias por respaldar el proyecto.</span>
        </div>
      )}
    </>
  );
}
