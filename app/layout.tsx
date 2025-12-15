import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/toaster";
import { AdBlockDetector } from "@/components/adblock-detector";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freetoken - Earn Free Crypto & Tokens Daily",
  description:
    "Discover the best crypto faucets, PTC sites, games, and passive income opportunities.",
  keywords:
    "crypto faucet, free crypto, bitcoin faucet, ethereum faucet, PTC sites",
  verification: {
    google: "NB4gJ75ZD-A1vsMU_mdDWtn-LNEncAQ-YWONbUlGcCs",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* ================= META VERIFICATION ================= */}
        <meta name="coinzilla" content="1ee0d5ed4b10c3bb18381a6e61831f75" />
        <meta name="monetag" content="dd257f886ff10cad0a8bd5eb3e306c13" />
        <meta name="cryptocoinsad" content="cryptocoinsad-82241" />
        <meta name="bitmedia-site-verification" content="82fbea72af4e7f4116aa24f27e3bc44d" />
        <meta
          name="73e334785c1de208673b6c63c2e7f89564a8b323"
          content="73e334785c1de208673b6c63c2e7f89564a8b323"
        />
      </head>

      <body className={`${inter.className} font-sans antialiased`}>

        {/* ================= EZOIC CMP / PRIVACY ================= */}
        <Script strategy="beforeInteractive" data-cfasync="false"
          src="https://cmp.gatekeeperconsent.com/min.js" />
        <Script strategy="beforeInteractive" data-cfasync="false"
          src="https://the.gatekeeperconsent.com/cmp.min.js" />

        {/* ================= EZOIC CORE ================= */}
        <Script strategy="beforeInteractive"
          src="//www.ezojs.com/ezoic/sa.min.js" />
        <Script strategy="beforeInteractive" id="ezoic-init">
          {`
            window.ezstandalone = window.ezstandalone || {};
            ezstandalone.cmd = ezstandalone.cmd || [];
          `}
        </Script>

        {/* ================= MAIN CONTENT ================= */}
        {children}

        {/* ================= MONETAG ================= */}
        <Script
          strategy="afterInteractive"
          src="https://quge5.com/88/tag.min.js"
          data-zone="193139"
          data-cfasync="false"
        />

        {/* ================= HILLTOP POP ================= */}
        <Script strategy="afterInteractive" id="hilltop-pop">
          {`
            (function(vci){
              var d=document,s=d.createElement("script"),
              l=d.scripts[d.scripts.length-1];
              s.settings=vci||{};
              s.src="//buttery-cause.com/bTXQV/s.d/G-l/0ZYeWmcu/weAm/9YuaZzUel/k/PbTeYr3/M/jYcs2/MtTfUjtHN/jEc/yMNqzDY/xYNlgI";
              s.async=true;
              s.referrerPolicy="no-referrer-when-downgrade";
              l.parentNode.insertBefore(s,l);
            })({});
          `}
        </Script>

        {/* ================= EXTRA POP ================= */}
        <Script strategy="afterInteractive" id="extra-pop">
          {`
            (function(oom){
              var d=document,s=d.createElement("script"),
              l=d.scripts[d.scripts.length-1];
              s.settings=oom||{};
              s.src="//insignificant-constant.com/c/Dd9.6lbo2c5Vl_StWpQL9xNkjXcnyHN/zsY_x_O/Sj0/2NNEzfIJ3ZNXjcI/wC";
              s.async=true;
              s.referrerPolicy="no-referrer-when-downgrade";
              l.parentNode.insertBefore(s,l);
            })({});
          `}
        </Script>

        {/* ================= GOOGLE ANALYTICS ================= */}
        <Script strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-H5TVS39R5K" />
        <Script strategy="afterInteractive" id="ga-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "G-H5TVS39R5K");
          `}
        </Script>

        {/* ================= ASTREAR BANNER 728x90 ================= */}
        <Script strategy="afterInteractive" id="adsterra-728">
          {`
            window.atOptions = {
              key: "3ec2c1202744a3469ed447460a8201b4",
              format: "iframe",
              height: 90,
              width: 728,
              params: {}
            };
          `}
        </Script>
        <Script
          strategy="afterInteractive"
          src="https://www.highperformanceformat.com/3ec2c1202744a3469ed447460a8201b4/invoke.js"
        />

        {/* ================= ASTREAR POP ================= */}
        <Script
          strategy="afterInteractive"
          src="https://pl28259990.effectivegatecpm.com/a3/d3/c1/a3d3c1a5d7b5c6dd42e555bb8c189e07.js"
        />

        {/* ================= COMPONENTS ================= */}
        <AdBlockDetector />
        <Toaster />
        <Analytics />

        {/* ================= A-ADS STICKY MOBILE ================= */}
        <div style={{ position: "fixed", bottom: 0, width: "100%", zIndex: 99999 }}>
          <iframe
            data-aa="2420763"
            src="//acceptable.a-ads.com/2420763/?size=Adaptive"
            style={{
              border: 0,
              width: "100%",
              height: "auto",
              overflow: "hidden",
            }}
          />
        </div>

      </body>
    </html>
  );
}
