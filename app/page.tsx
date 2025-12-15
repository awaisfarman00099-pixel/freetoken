"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PlatformCard } from "@/components/platform-card"
import { AdPlaceholder } from "@/components/ad-placeholder"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SkeletonCard, SkeletonBanner } from "@/components/skeleton-loader"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const faucets = [
    {
      name: "FaucetPay",
      description: "Microwallet for multiple cryptocurrencies with instant withdrawals",
      reward: "Multi-Crypto",
      link: "https://faucetpay.io/?r=4555333",
      category: "Faucet",
      earningInfo: [
        "Supports 20+ cryptocurrencies including BTC, ETH, USDT",
        "Instant withdrawals to your wallet with low fees",
        "Connect multiple faucets to one account",
      ],
    },
    {
      name: "FireFaucet",
      description: "All-in-one crypto earning platform with faucets, offers, and games",
      reward: "High Rewards",
      link: "https://firefaucet.win/ref/1521735",
      category: "Faucet",
      earningInfo: [
        "Earn up to 500 satoshi every 30 minutes",
        "Complete offers and surveys for bonus rewards",
        "Auto-claim feature available for premium users",
      ],
    },
    {
      name: "FaucetCrypto",
      description: "Claim free crypto every hour with auto-faucet feature",
      reward: "Auto Claims",
      link: "https://faucetcrypto.com/r/11023383",
      category: "Faucet",
      earningInfo: [
        "Claim up to 250 satoshi every 5 minutes",
        "Auto-faucet earns 24/7 while you sleep",
        "Withdraw to FaucetPay or direct wallet",
      ],
    },
    {
      name: "Cointiply",
      description: "Earn Bitcoin through faucets, surveys, and watching videos",
      reward: "BTC Rewards",
      link: "https://cointiply.com/r/82VWwr",
      category: "Faucet",
      earningInfo: [
        "Claim every hour and earn up to 100,000 coins",
        "Complete surveys worth up to 500,000 coins",
        "Minimum withdrawal: 35,000 coins ($3.50)",
      ],
    },
    {
      name: "MixFaucet",
      description: "Earn multiple cryptocurrencies with daily faucet claims",
      reward: "Daily Bonus",
      link: "https://mixfaucet.com/?r=7274",
      category: "Faucet",
      earningInfo: [
        "Claim 8 different cryptocurrencies every 5 minutes",
        "Daily loyalty bonus up to 100%",
        "Instant payouts to FaucetPay wallet",
      ],
    },
    {
      name: "CoinPayU",
      description: "Watch ads and earn crypto with high payout rates",
      reward: "High CPM",
      link: "https://www.coinpayu.com/?r=Awaissubi",
      category: "Faucet",
      earningInfo: [
        "Earn $0.001 to $0.01 per ad view",
        "Daily average: $1-$5 depending on activity",
        "Low minimum withdrawal of just $0.50",
      ],
    },
    {
      name: "FreeBCH",
      description: "Claim free Bitcoin Cash every few minutes",
      reward: "BCH Faucet",
      link: "https://freebch.in?ref=UXDPsctzX7",
      category: "Faucet",
      earningInfo: [
        "Claim up to 50 BCH satoshi every 5 minutes",
        "Complete shortlinks for bonus earnings",
        "Direct withdrawal to your BCH wallet",
      ],
    },
    {
      name: "FreeTRON",
      description: "Get free TRX tokens with instant payouts",
      reward: "TRX Rewards",
      link: "https://freetron.in?ref=s9h9eyDQFn",
      category: "Faucet",
      earningInfo: [
        "Claim 0.001-0.01 TRX every 5 minutes",
        "Complete offers for up to 10 TRX",
        "Instant payouts with no minimum withdrawal",
      ],
    },
    {
      name: "FreeBNB",
      description: "Earn free Binance Coin daily",
      reward: "BNB Tokens",
      link: "https://freebnb.in?ref=eEgBRRFDU0",
      category: "Faucet",
      earningInfo: [
        "Claim up to 100 BNB satoshi every 5 minutes",
        "Complete shortlinks for 5x bonus rewards",
        "Low minimum withdrawal: 5000 satoshi",
      ],
    },
    {
      name: "FreeXRP",
      description: "Claim free Ripple tokens regularly",
      reward: "XRP Faucet",
      link: "https://freexrp.in?ref=Q6Ai2xQKFh",
      category: "Faucet",
      earningInfo: [
        "Earn 0.0001-0.001 XRP per claim every 5 minutes",
        "Daily challenges for bonus XRP rewards",
        "Automatic payouts to FaucetPay",
      ],
    },
    {
      name: "FreeSHIB",
      description: "Collect free Shiba Inu tokens",
      reward: "SHIB Rewards",
      link: "https://freeshib.in?ref=iuIDwMh9RG",
      category: "Faucet",
      earningInfo: [
        "Claim up to 1000 SHIB tokens per day",
        "Complete tasks for bonus SHIB rewards",
        "Withdraw to FaucetPay or directly to wallet",
      ],
    },
    {
      name: "FreeTrump",
      description: "Earn free Trump tokens with high frequency claims",
      reward: "Trump Tokens",
      link: "https://freetrump.in?ref=WUyG4UGN4l",
      category: "Faucet",
      earningInfo: [
        "Claim every 5 minutes with high rewards",
        "Shortlink bonuses available daily",
        "Fast growing community token",
      ],
    },
  ]

  const pickFaucets = [
    {
      name: "PolPick",
      description: "Choose between 5 crypto options and win prizes",
      reward: "Polygon",
      link: "https://polpick.io/?ref=awais0886",
      category: "Pick Faucet",
      earningInfo: [
        "Pick correctly and earn up to 10x your claim",
        "Claim 0.001-0.01 MATIC every 5 minutes",
        "Instant withdrawal to FaucetPay",
      ],
    },
    {
      name: "LitePick",
      description: "Pick and earn Litecoin rewards",
      reward: "Litecoin",
      link: "https://litepick.io/?ref=awais0886",
      category: "Pick Faucet",
      earningInfo: [
        "Choose from 5 options, win up to 100 LTC satoshi",
        "Make the right pick for bonus multipliers",
        "Low withdrawal threshold of 5000 satoshi",
      ],
    },
    {
      name: "BNBPick",
      description: "Choose wisely and earn BNB tokens",
      reward: "BNB",
      link: "https://bnbpick.io/?ref=awais0886",
      category: "Pick Faucet",
      earningInfo: [
        "Pick game with up to 10x multiplier rewards",
        "Earn 10-100 BNB satoshi per successful pick",
        "Daily bonuses for consistent players",
      ],
    },
    {
      name: "SolPick",
      description: "Pick game with Solana rewards",
      reward: "Solana",
      link: "https://solpick.io/?ref=awais0886",
      category: "Pick Faucet",
      earningInfo: [
        "Choose correctly for up to 15x your claim",
        "Earn 0.0001-0.001 SOL per pick",
        "Fast payouts to Solana wallet",
      ],
    },
    {
      name: "DogePick",
      description: "Earn Dogecoin through pick games",
      reward: "Dogecoin",
      link: "https://dogepick.io/?ref=awaisfarman984",
      category: "Pick Faucet",
      earningInfo: [
        "Pick from 5 boxes and win up to 500 DOGE satoshi",
        "Claim every 5 minutes with no limits",
        "Withdraw directly to your DOGE wallet",
      ],
    },
    {
      name: "TronPick",
      description: "Win TRX tokens by making the right choice",
      reward: "Tron",
      link: "https://tronpick.io/?ref=awaisfarman",
      category: "Pick Faucet",
      earningInfo: [
        "Pick wisely for up to 20x multiplier",
        "Average earning: 0.01-0.1 TRX per day",
        "No minimum withdrawal requirement",
      ],
    },
    {
      name: "USDPick",
      description: "Earn stablecoin rewards through picks",
      reward: "USDT",
      link: "https://usdpick.io?ref=rgy62UKObf",
      category: "Pick Faucet",
      earningInfo: [
        "Earn real USDT stablecoin rewards",
        "Pick correctly for up to $0.01 per claim",
        "Stable value - no crypto volatility",
      ],
    },
    {
      name: "SuiPick",
      description: "Pick and win SUI blockchain tokens",
      reward: "SUI",
      link: "https://suipick.io/?ref=awais0886",
      category: "Pick Faucet",
      earningInfo: [
        "New blockchain with high growth potential",
        "Earn 0.001-0.01 SUI tokens per pick",
        "Bonus rewards for early adopters",
      ],
    },
  ]

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

  const games = [
    {
      name: "SunFire Casino",
      description: "Claim from faucet and play casino games",
      reward: "Casino Faucet",
      link: "https://faucet.sunfirecasino.com/?ref=9bc6ba6c",
      category: "Casino",
      earningInfo: [
        "Free faucet claims every hour",
        "Play slots, dice, and classic casino games",
        "Win real crypto, withdraw anytime",
      ],
    },
    {
      name: "BetFury",
      description: "Crypto casino with dividends and staking",
      reward: "BFG Staking",
      link: "https://betfury.ac/?r=User1829143",
      category: "Casino",
      earningInfo: [
        "Claim free BFG tokens daily from faucet",
        "Stake tokens for passive dividend income",
        "Casino games with provably fair system",
      ],
    },
    {
      name: "Nuts.gg",
      description: "Play crash games and win crypto",
      reward: "Crash Game",
      link: "https://nuts.gg/play/Eebk8CAA",
      category: "Game",
      earningInfo: [
        "Free faucet to get started playing",
        "Crash game with multipliers up to 1000x",
        "Instant crypto payouts when you win",
      ],
    },
    {
      name: "LuckyWatch",
      description: "Earn rewards by watching and gaming",
      reward: "Watch & Win",
      link: "https://luckywatch.pro/u/0phju",
      category: "Game",
      earningInfo: [
        "Watch videos and earn crypto rewards",
        "Play mini-games for bonus earnings",
        "Daily rewards up to $2-$5",
      ],
    },
  ]

  return (
    <>
      <Header />
      <main>
        <HeroSection />

        {/* Top Banner Ad */}
        <div className="container mx-auto px-4 mb-12">
          {loading ? <SkeletonBanner /> : <AdPlaceholder size="banner" />}
        </div>

        {/* Faucets Section */}
        <section id="faucets" className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Best <span className="gradient-text">Crypto Faucets</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Claim free cryptocurrency every few minutes from these verified faucet platforms
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading
                ? [...Array(6)].map((_, i) => <SkeletonCard key={i} />)
                : faucets.map((faucet, index) => (
                    <ScrollReveal key={faucet.name} delay={index * 50}>
                      <PlatformCard
                        name={faucet.name}
                        description={faucet.description}
                        reward={faucet.reward}
                        referralLink={faucet.link}
                        category={faucet.category}
                        earningInfo={faucet.earningInfo}
                      />
                    </ScrollReveal>
                  ))}
            </div>
          </div>
        </section>

        {/* Mid-content Ad */}
        <div className="container mx-auto px-4 py-12">
          <ScrollReveal>
            <AdPlaceholder size="banner" />
          </ScrollReveal>
        </div>

        {/* Pick Faucets Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  <span className="gradient-text">Pick & Win</span> Faucets
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Choose the right option and multiply your crypto rewards
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pickFaucets.map((faucet, index) => (
                <ScrollReveal key={faucet.name} delay={index * 50}>
                  <PlatformCard
                    name={faucet.name}
                    description={faucet.description}
                    reward={faucet.reward}
                    referralLink={faucet.link}
                    category={faucet.category}
                    earningInfo={faucet.earningInfo}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* PTC Section */}
        <section id="ptc" className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  <span className="gradient-text">PTC</span> & Offers
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Complete tasks and offers to maximize your crypto earnings
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ptcSites.map((site, index) => (
                <ScrollReveal key={site.name} delay={index * 50}>
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

        {/* Mid-content Ad */}
        <div className="container mx-auto px-4 py-12">
          <ScrollReveal>
            <AdPlaceholder size="banner" />
          </ScrollReveal>
        </div>

        {/* Games & Casinos Section */}
        <section id="casinos" className="py-16">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  <span className="gradient-text">Games</span> & Casinos
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Play games and try your luck at crypto casinos
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map((game, index) => (
                <ScrollReveal key={game.name} delay={index * 50}>
                  <PlatformCard
                    name={game.name}
                    description={game.description}
                    reward={game.reward}
                    referralLink={game.link}
                    category={game.category}
                    earningInfo={game.earningInfo}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Ad */}
        <div className="container mx-auto px-4 py-12">
          <ScrollReveal>
            <AdPlaceholder size="banner" />
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  )
}
