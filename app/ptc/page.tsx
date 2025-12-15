"use client"

import { Header } from "@/components/header"
import { PlatformCard } from "@/components/platform-card"
import { AdPlaceholder } from "@/components/ad-placeholder"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function PTCPage() {
  const ptcSites = [
    {
      name: "Freecash",
      description: "Complete surveys and offers for crypto rewards",
      reward: "Top Offers",
      link: "https://freecash.com/r/102388037003421523928",
      category: "PTC",
      earningInfo: [
        "Earn $0.50-$50 per survey/offer completed",
        "Daily average earnings: $5-$20",
        "Cashout to PayPal, crypto, or gift cards",
      ],
    },
    {
      name: "AdBTC",
      description: "View advertisements and earn Bitcoin",
      reward: "BTC Ads",
      link: "https://r.adbtc.top/2629974",
      category: "PTC",
      earningInfo: [
        "Earn 10-100 satoshi per ad view",
        "View up to 50 ads daily for maximum profit",
        "Low withdrawal: only 10,000 satoshi ($2)",
      ],
    },
    {
      name: "EarnBitMoon",
      description: "Watch ads and complete tasks for crypto",
      reward: "Multiple Tasks",
      link: "https://earnbitmoon.club/?ref=1230176",
      category: "PTC",
      earningInfo: [
        "Multiple earning methods: ads, tasks, faucet",
        "Average daily earning: $1-$5",
        "Withdraw to multiple cryptocurrencies",
      ],
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Header Spacing */}
        <div className="h-16"></div>

        {/* Top Ad */}
        <div className="container mx-auto px-4 py-8">
          <ScrollReveal>
            <AdPlaceholder size="banner" />
          </ScrollReveal>
        </div>

        {/* PTC Sites Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  <span className="gradient-text">PTC Sites</span> & Offers
                </h1>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                  Complete tasks, view ads, and earn crypto rewards. These verified platforms offer consistent earning
                  opportunities.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {ptcSites.map((site, index) => (
                <ScrollReveal key={site.name} delay={index * 100}>
                  <PlatformCard
                    name={site.name}
                    description={site.description}
                    reward={site.reward}
                    referralLink={site.link}
                    category={site.category}
                    earningInfo={site.earningInfo}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Ad */}
        <div className="container mx-auto px-4 py-8">
          <ScrollReveal>
            <AdPlaceholder size="banner" />
          </ScrollReveal>
        </div>

        {/* Bottom Spacing */}
        <div className="h-16"></div>
      </main>
      <Footer />
    </>
  )
}
