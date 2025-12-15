"use client";

import React from "react";

interface AdPlaceholderProps {
  size?: "banner" | "sidebar" | "square";
  className?: string;
}

export function AdPlaceholder({
  size = "banner",
  className = "",
}: AdPlaceholderProps) {
  const iframeDims = {
    banner: { width: "728px", height: "90px" },
    sidebar: { width: "300px", height: "600px" },
    square: { width: "300px", height: "250px" },
  };

  const aadsSrc = {
    banner: "//acceptable.a-ads.com/2420763/?size=728x90",
    sidebar: "//acceptable.a-ads.com/2420763/?size=300x600",
    square: "//acceptable.a-ads.com/2420763/?size=300x250",
  };

  const astrearSrcOld =
    "https://www.highperformanceformat.com/3ec2c1202744a3469ed447460a8201b4/invoke.js";

  const astrearSrcNew =
    "https://www.highperformanceformat.com/8f012c7d52435368591b7f0623d50748/invoke.js";

  const dims = iframeDims[size];

  return (
    <div
      className={`rounded-xl border-2 border-dashed border-border bg-muted/30 flex items-center justify-center ${className}`}
      style={{ width: dims.width, height: dims.height }}
    >
      {typeof window !== "undefined" && (
        <div className="w-full h-full relative">
          {/* A-Ads */}
          <iframe
            data-aa="2420763"
            src={aadsSrc[size]}
            style={{
              border: 0,
              padding: 0,
              width: dims.width,
              height: dims.height,
              overflow: "hidden",
            }}
            title="A-Ads Advertisement"
          />

          {/* Old Astrear Ad */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                atOptions = {
                  key: "3ec2c1202744a3469ed447460a8201b4",
                  format: "iframe",
                  width: ${dims.width.replace("px", "")},
                  height: ${dims.height.replace("px", "")},
                  params: {}
                };
              `,
            }}
          />
          <script src={astrearSrcOld} async />

          {/* ✅ New Astrear Ad (300x250 only) */}
          {size === "square" && (
            <>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    atOptions = {
                      key: "8f012c7d52435368591b7f0623d50748",
                      format: "iframe",
                      width: 300,
                      height: 250,
                      params: {}
                    };
                  `,
                }}
              />
              <script src={astrearSrcNew} async />
            </>
          )}
        </div>
      )}
    </div>
  );
}
