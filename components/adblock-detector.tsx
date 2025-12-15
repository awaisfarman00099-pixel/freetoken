"use client"

import { useEffect, useState } from "react"
import { AlertTriangle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AdBlockDetector() {
  const [isAdBlockEnabled, setIsAdBlockEnabled] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const checkAdBlock = async () => {
      // Create a bait element
      const bait = document.createElement("div")
      bait.className = "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links"
      bait.style.cssText = "width: 1px; height: 1px; position: absolute; left: -10000px; top: -1000px;"

      document.body.appendChild(bait)

      // Wait a bit for ad blockers to process
      await new Promise((resolve) => setTimeout(resolve, 100))

      // Check if the bait element is hidden
      const isBlocked =
        bait.offsetParent === null ||
        bait.offsetHeight === 0 ||
        bait.offsetLeft === 0 ||
        bait.offsetTop === 0 ||
        bait.offsetWidth === 0 ||
        bait.clientHeight === 0 ||
        bait.clientWidth === 0

      document.body.removeChild(bait)

      if (isBlocked) {
        setIsAdBlockEnabled(true)
      }
    }

    checkAdBlock()
  }, [])

  if (!isAdBlockEnabled || isDismissed) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative max-w-md w-full bg-card border-2 border-primary/50 rounded-2xl p-8 shadow-2xl">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 border border-primary/30">
            <AlertTriangle className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-2xl font-bold mb-3">AdBlocker Detected</h2>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            We noticed you're using an ad blocker. Advertisements help us keep freetoken.site free and maintain our
            platform. Please consider disabling your ad blocker to support us.
          </p>

          <div className="space-y-3 w-full">
            <Button
              onClick={() => setIsDismissed(true)}
              className="w-full bg-gradient-to-r from-primary to-secondary text-background font-semibold hover:opacity-90"
            >
              I've Disabled AdBlock
            </Button>
            <Button onClick={() => setIsDismissed(true)} variant="ghost" className="w-full">
              Continue Anyway
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            Thank you for supporting freetoken.site and helping us provide free crypto earning opportunities.
          </p>
        </div>
      </div>
    </div>
  )
}
