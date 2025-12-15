"use client";

import React from "react";

interface AdPlaceholderProps {
  size?: "banner" | "sidebar" | "square";
  className?: string;
}

export function AdPlaceholder({ size = "banner", className = "" }: AdPlaceholderProps) {
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

  const astrearSrc = {
    banner: "https://www.highperformanceformat.com/3ec2c1202744a3469ed447460a8201b4/invoke.js",
    sidebar: "https://www.highperformanceformat.com/3ec2c1202744a3469ed447460a8201b4/invoke.js",
    square: "https://www.highperformanceformat.com/3ec2c1202744a3469ed447460a8201b4/invoke.js",
  };

  const dims = iframeDims[size] || iframeDims.banner;

  return (
    <div
      className={`rounded-xl border-2 border-dashed border-border bg-muted/30 flex items-center justify-center ${className}`}
      style={{ width: dims.width, height: dims.height }}
    >
      {typeof window !== "undefined" && (
        <div className="w-full h-full flex flex-col items-center justify-center">
          {/* A-Ads iframe */}
          <iframe
            data-aa="2420763"
            src={aadsSrc[size]}
            style={{ border: 0, padding: 0, width: dims.width, height: dims.height, overflow: "hidden" }}
            title="A-Ads Advertisement"
          />

          {/* Astrear script */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                atOptions = {
                  'key' : '3ec2c1202744a3469ed447460a8201b4',
                  'format' : 'iframe',
                  'height' : ${dims.height.replace("px", "")},
                  'width' : ${dims.width.replace("px", "")},
                  'params' : {}
                };
              `,
            }}
          ></script>
          <script
            type="text/javascript"
            src={astrearSrc[size]}
            async
          ></script>
        </div>
      )}
    </div>
  );
}
