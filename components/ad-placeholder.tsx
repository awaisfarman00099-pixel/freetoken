"use client";

import React from "react";
import Script from "next/script";

interface AdPlaceholderProps {
  size?: "banner" | "sidebar" | "square";
  className?: string;
}

export function AdPlaceholder({
  size = "banner",
  className = "",
}: AdPlaceholderProps) {
  const iframeDims = {
    banner: { width: 728, height: 90 },
    sidebar: { width: 300, height: 600 },
    square: { width: 300, height: 250 },
  };

  const aadsSrc = {
    banner: "//acceptable.a-ads.com/2420763/?size=728x90",
    sidebar: "//acceptable.a-ads.com/2420763/?size=300x600",
    square: "//acceptable.a-ads.com/2420763/?size=300x250",
  };

  const adsterraKey = "3ec2c1202744a3469ed447460a8201b4";
  const adsterraSrc = `https://www.highperformanceformat.com/${adsterraKey}/invoke.js`;

  const dims = iframeDims[size];

  return (
    <div
      className={`rounded-xl border-2 border-dashed border-border bg-muted/30 flex items-center justify-center ${className}`}
      style={{ width: dims.width, height: dims.height }}
    >
      {/* ================= A-ADS ================= */}
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
        loading="lazy"
        title="A-Ads Advertisement"
      />

      {/* ================= ADSTERRA ================= */}
      <Script
        id={`adsterra-options-${size}`}
        strategy="afterInteractive"
      >{`
        window.atOptions = {
          key: "${adsterraKey}",
          format: "iframe",
          height: ${dims.height},
          width: ${dims.width},
          params: {}
        };
      `}</Script>

      <Script
        src={adsterraSrc}
        strategy="afterInteractive"
      />
    </div>
  );
}
