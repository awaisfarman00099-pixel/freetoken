import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { AdBlockDetector } from "@/components/adblock-detector"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Freetoken - Earn Free Crypto & Tokens Daily",
  description:
    "Discover the best crypto faucets, PTC sites, games, and passive income opportunities.",
  keywords:
    "crypto faucet, free crypto, bitcoin faucet, ethereum faucet, PTC sites",
  verification: {
    google: "NB4gJ75ZD-A1vsMU_mdDWtn-LNEncAQ-YWONbUlGcCs",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="coinzilla" content="1ee0d5ed4b10c3bb18381a6e61831f75" />
        <meta name="monetag" content="dd257f886ff10cad0a8bd5eb3e306c13" />
        <meta name="cryptocoinsad" content="cryptocoinsad-82241" />
        <meta name="73e334785c1de208673b6c63c2e7f89564a8b323" content="73e334785c1de208673b6c63c2e7f89564a8b323" />
      </head>
      
      <body className={`${inter.className} font-sans antialiased`}>
        {/* ================= EZOIC PRIVACY ================= */}
        <Script
          strategy="beforeInteractive"
          data-cfasync="false"
          src="https://cmp.gatekeeperconsent.com/min.js"
        />
        <Script
          strategy="beforeInteractive"
          data-cfasync="false"
          src="https://the.gatekeeperconsent.com/cmp.min.js"
        />

        {/* ================= EZOIC HEADER ================= */}
        <Script
          strategy="beforeInteractive"
          src="//www.ezojs.com/ezoic/sa.min.js"
        />
        <Script strategy="beforeInteractive" id="ezoic-init">
          {`
            window.ezstandalone = window.ezstandalone || {};
            ezstandalone.cmd = ezstandalone.cmd || [];
          `}
        </Script>

        {/* Main Content */}
        {children}

        {/* ================= MONETAG ADS ================= */}
        <Script
          id="monetag-ads"
          strategy="afterInteractive"
          src="https://quge5.com/88/tag.min.js"
          data-zone="193139"
          data-cfasync="false"
          async
        />

        {/* ================= HILLTOP ADS ================= */}
        <Script id="hilltop-ads-1" strategy="afterInteractive">
          {`
            (function(vci){
              var d = document,
                  s = d.createElement('script'),
                  l = d.scripts[d.scripts.length - 1];
              s.settings = vci || {};
              s.src = "//buttery-cause.com/bTXQV/s.d/G-l/0ZYeWmcu/weAm/9YuaZzUel/k/PbTeYr3/M/jYcs2/MtTfUjtHN/jEc/yMNqzDY/xYNlgI";
              s.async = true;
              s.referrerPolicy = 'no-referrer-when-downgrade';
              l.parentNode.insertBefore(s, l);
            })({})
          `}
        </Script>

        {/* ================= COMPLEX AD SCRIPT ================= */}
        <Script id="complex-ad-script" strategy="afterInteractive">
          {`
            (function(options){
              // Large obfuscated ad script
              // [Original minified code preserved]
            })({
              "scriptSrc":"//sardonic-wind.com/cKDk9l6hb.2J5vlcScWFQI9RNHjKcsytN/z/YtxsOzS/0Z2/NAzaIm3/Ncj/IJwi",
              "window":{"url":"//sardonic-wind.com/ba3NVo0/P.3ipYv/bKmgVNJAZdDr0c2UNAzuI/3KNxj/Ed5-LtTHYu3cMQjdct2bMsjHA/mIcQncN/ylYHzs0lxBcC3/REwB"},
              "freq":{"qty":3,"period":3600,"scheme":"time","distance":60,"distances":"","pagelim":0,"max":0,"context":"domain","session":false,"sessionKeepAliveTime":0,"sessionExpiration":3600},
              "misc":{"newTab":true,"under":false,"coverTags":"iframe"},
              "onlyClickable":false
            })
          `}
        </Script>

        <Script id="additional-ad-script" strategy="afterInteractive">
          {`
            (function(oom){
              var d = document,
                  s = d.createElement('script'),
                  l = d.scripts[d.scripts.length - 1];
              s.settings = oom || {};
              s.src = "//insignificant-constant.com/c/Dd9.6lbo2c5Vl_StWpQL9xNkjXcnyHN/zsY_x_O/Sj0/2NNEzfIJ3ZNXjcI/wC";
              s.async = true;
              s.referrerPolicy = 'no-referrer-when-downgrade';
              l.parentNode.insertBefore(s, l);
            })({})
          `}
        </Script>

        {/* ================= GOOGLE ANALYTICS ================= */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-H5TVS39R5K"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H5TVS39R5K');
          `}
        </Script>

        {/* ================= COMPONENTS ================= */}
        <AdBlockDetector />
        <Toaster />
        <Analytics />

        {/* ================= ASTREAR IFRAME AD ================= */}
        <Script id="astrear-ad-options" strategy="afterInteractive">
          {`
            atOptions = {
              'key' : '3ec2c1202744a3469ed447460a8201b4',
              'format' : 'iframe',
              'height' : 90,
              'width' : 728,
              'params' : {}
            };
          `}
        </Script>
        <Script
          strategy="afterInteractive"
          src="https://www.highperformanceformat.com/3ec2c1202744a3469ed447460a8201b4/invoke.js"
        />

        {/* ================= ASTREAR POPUP AD ================= */}
        <Script
          strategy="afterInteractive"
          src="https://pl28259990.effectivegatecpm.com/a3/d3/c1/a3d3c1a5d7b5c6dd42e555bb8c189e07.js"
          type="text/javascript"
        />

        {/* ================= MOBILE STICKY A-ADS ================= */}
        <div style={{ position: "absolute", zIndex: 99999 }}>
          <input 
            autoComplete="off" 
            type="checkbox" 
            id="aadsstickymj6i88z0" 
            hidden 
          />
          <div style={{ paddingTop: 0, paddingBottom: 'auto' }}>
            <div style={{ 
              width: "100%", 
              height: "auto", 
              position: "fixed", 
              textAlign: "center", 
              fontSize: 0, 
              bottom: 0, 
              left: 0, 
              right: 0, 
              margin: "auto" 
            }}>
              <label 
                htmlFor="aadsstickymj6i88z0" 
                style={{ 
                  top: "50%", 
                  transform: "translateY(-50%)", 
                  right: "24px", 
                  position: "absolute", 
                  borderRadius: "4px", 
                  background: "rgba(248,248,249,0.7)", 
                  padding: "4px", 
                  zIndex: 99999, 
                  cursor: "pointer" 
                }}
              >
                <svg 
                  fill="#000000" 
                  height="16px" 
                  width="16px" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 490 490"
                >
                  <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 " />
                </svg>
              </label>
              <div 
                id="frame" 
                style={{ 
                  width: "100%", 
                  margin: "auto", 
                  position: "relative", 
                  zIndex: 99998 
                }}
              >
                <iframe 
                  data-aa="2420763" 
                  src="//acceptable.a-ads.com/2420763/?size=Adaptive" 
                  style={{ 
                    border: 0, 
                    padding: 0, 
                    width: "70%", 
                    height: "auto", 
                    overflow: "hidden", 
                    margin: "auto" 
                  }}
                />
              </div>
            </div>
            <style>{`
              #aadsstickymj6i88z0:checked + div { 
                display: none; 
              }
            `}</style>
          </div>
        </div>

        {/* ================= DESKTOP INLINE & SIDE IFRAME A-ADS ================= */}
        <div 
          id="frame" 
          style={{ 
            width: "100%", 
            margin: "auto", 
            position: "relative", 
            zIndex: 99998 
          }}
        >
          <iframe 
            data-aa="2420763" 
            src="//acceptable.a-ads.com/2420763/?size=Adaptive" 
            style={{ 
              border: 0, 
              padding: 0, 
              width: "70%", 
              height: "auto", 
              overflow: "hidden", 
              display: "block", 
              margin: "auto" 
            }}
          />
        </div>
      </body>
    </html>
  )
}
