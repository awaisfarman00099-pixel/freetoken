"use client"

import type React from "react"

import { ExternalLink, TrendingUp, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface PlatformCardProps {
  name: string
  description: string
  reward: string
  referralLink: string
  category: string
  earningInfo?: string[]
}

export function PlatformCard({ name, description, reward, referralLink, category, earningInfo }: PlatformCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  const handleClaimClick = (e: React.MouseEvent) => {
    e.preventDefault()
    // Store the URL in sessionStorage
    sessionStorage.setItem(`claim_url_${name}`, referralLink)
    // Navigate to claim page
    router.push(`/claim/${encodeURIComponent(name)}`)
  }

  return (
    <div
      className="group relative p-6 rounded-xl bg-card border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect on Hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl pointer-events-none" />
      )}

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30">
              <span className="text-xl font-bold text-primary">{name.charAt(0)}</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{name}</h3>
              <Badge variant="secondary" className="text-xs mt-1">
                {category}
              </Badge>
            </div>
          </div>
          <TrendingUp className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>

        {earningInfo && earningInfo.length > 0 && (
          <div className="mb-4 space-y-1.5">
            {earningInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-xs text-muted-foreground leading-relaxed">{info}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30">
            <span className="text-xs font-medium text-primary">{reward}</span>
          </div>
          <Button
            size="sm"
            className="bg-gradient-to-r from-primary to-secondary text-background font-semibold hover:opacity-90"
            onClick={handleClaimClick}
          >
            Claim Now <ExternalLink className="ml-1 w-3 h-3" />
          </Button>
        </div>
      </div>
    </div>
  )
}
