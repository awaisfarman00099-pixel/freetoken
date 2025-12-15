"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PlatformCard } from "@/components/platform-card"
import { SkeletonCard } from "@/components/skeleton-loader"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AdPlaceholder } from "@/components/ad-placeholder"
import { useState, useEffect } from "react"

export default function FaucetsPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const allFaucets = [
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
    {
      name: "ClaimBTC",
      description: "Classic Bitcoin faucet with high reliability",
      reward: "BTC Satoshi",
      link: "https://claimbtc.org/ref/18294",
      category: "Faucet",
      earningInfo: [
        "Claim up to 100 satoshi every 20 minutes",
        "Loyalty bonus increases with daily visits",
        "Direct wallet withdrawals available",
      ],
    },
    {
      name: "BTCClicks",
      description: "Oldest Bitcoin faucet and PTC combined",
      reward: "BTC + Ads",
      link: "https://www.btcclicks.com/?r=9c8e2b7a",
      category: "Faucet",
      earningInfo: [
        "Faucet claims every 15 minutes",
        "View ads for additional Bitcoin earnings",
        "Active since 2013, trusted platform",
      ],
    },
    {
      name: "AutoFaucet",
      description: "Automated faucet claiming system",
      reward: "Auto Earn",
      link: "https://autofaucet.org/?ref=285193",
      category: "Faucet",
      earningInfo: [
        "Set it and forget it - auto claims 24/7",
        "Earn while you sleep, no manual work",
        "Supports 15+ cryptocurrencies",
      ],
    },
    {
      name: "CryptoWin",
      description: "Win crypto with instant lucky number draws",
      reward: "Instant Win",
      link: "https://cryptowin.io/r/482573",
      category: "Faucet",
      earningInfo: [
        "Instant results, know if you won immediately",
        "Jackpot prizes up to 1000x claim amount",
        "Claim every 3 minutes for maximum profit",
      ],
    },
    {
      name: "StakeCube",
      description: "Faucet with staking and compound interest",
      reward: "Stake & Earn",
      link: "https://stakecube.net/?ref=user923847",
      category: "Faucet",
      earningInfo: [
        "Claim free crypto and stake for interest",
        "Compound your earnings automatically",
        "Multi-coin faucet with 30+ cryptos",
      ],
    },
    {
      name: "EarnCrypto",
      description: "Complete tasks and claim from multiple faucets",
      reward: "Task Based",
      link: "https://www.earncrypto.com/ref/928374",
      category: "Faucet",
      earningInfo: [
        "Hourly faucet claims up to 50 satoshi",
        "Complete daily tasks for bonus rewards",
        "Cashout in BTC, ETH, or 100+ altcoins",
      ],
    },
    {
      name: "GlobalHive",
      description: "Social crypto faucet with community rewards",
      reward: "Social Earn",
      link: "https://globalhive.io/?ref=582934",
      category: "Faucet",
      earningInfo: [
        "Earn by engaging with crypto community",
        "Referral rewards up to 25% commission",
        "Weekly contests with crypto prizes",
      ],
    },
    {
      name: "BitFun",
      description: "Fun Bitcoin faucet with time bonus multiplier",
      reward: "Time Bonus",
      link: "https://bitfun.co/?ref=7A5B2C9D",
      category: "Faucet",
      earningInfo: [
        "Longer you wait, higher the reward",
        "Maximum claim every 3 minutes",
        "Loyalty bonus increases daily rewards",
      ],
    },
    {
      name: "Bonus Bitcoin",
      description: "Bitcoin faucet with 5% daily interest",
      reward: "Daily Interest",
      link: "https://bonusbitcoin.co/?ref=3D8F1A2E",
      category: "Faucet",
      earningInfo: [
        "Earn 5% daily interest on your balance",
        "Claim every 15 minutes, up to 5000 satoshi",
        "Compound interest for exponential growth",
      ],
    },
    {
      name: "Moon Bitcoin",
      description: "Claim Bitcoin every 5 minutes with loyalty bonus",
      reward: "Loyalty Bonus",
      link: "https://moonbitcoin.cash/?ref=4F7E9A1C",
      category: "Faucet",
      earningInfo: ["Claims accumulate over time", "100% loyalty bonus after 1 month", "Referral commission up to 50%"],
    },
    {
      name: "AllCoins",
      description: "Multi-cryptocurrency faucet with daily bonuses",
      reward: "Multi Coin",
      link: "https://allcoins.pw/?ref=8C2A5F9E",
      category: "Faucet",
      earningInfo: [
        "Rotate between 25+ different cryptocurrencies",
        "Daily spin wheel for bonus coins",
        "Low minimum withdrawal for each coin",
      ],
    },
    {
      name: "FaucetHub",
      description: "Hub connecting 100+ crypto faucets",
      reward: "Faucet Hub",
      link: "https://faucethub.net/?ref=1E9F5D3A",
      category: "Faucet",
      earningInfo: [
        "Access 100+ faucets from one dashboard",
        "Consolidated earnings to one wallet",
        "Track all your faucet income in one place",
      ],
    },
    {
      name: "InstantBTC",
      description: "Instant Bitcoin rewards with no delays",
      reward: "Instant Pay",
      link: "https://instantbtc.net/?ref=6B3E8C1F",
      category: "Faucet",
      earningInfo: [
        "Instant credit to your account balance",
        "No waiting for confirmations",
        "Withdraw anytime with zero minimum",
      ],
    },
    {
      name: "FreeDoge",
      description: "Claim free Dogecoin every hour with multiply game",
      reward: "DOGE + Game",
      link: "https://freedoge.co.in/?r=9D5A2E7F",
      category: "Faucet",
      earningInfo: [
        "Hourly claims up to 200 DOGE",
        "Multiply game to increase your earnings",
        "Lottery tickets with every claim",
      ],
    },
    {
      name: "MultiClaim",
      description: "Claim multiple cryptocurrencies simultaneously",
      reward: "Multi Claim",
      link: "https://multiclaim.net/?ref=2A7F5C9E",
      category: "Faucet",
      earningInfo: [
        "One click claims 10+ different cryptos",
        "Save time with simultaneous claiming",
        "Highest efficiency for faucet farmers",
      ],
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="py-8"></div>

        <div className="container mx-auto px-4 mb-8">
          <AdPlaceholder size="large" />
        </div>

        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                All <span className="gradient-text">Faucets to Claim</span>
              </h1>
              <p className="text-muted-foreground">
                Browse and claim from all 27 available crypto faucets - No login required!
              </p>
            </div>
          </ScrollReveal>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(27)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allFaucets.map((faucet, index) => (
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
          )}
        </div>

        <div className="container mx-auto px-4 mt-8">
          <AdPlaceholder size="large" />
        </div>

        <div className="py-8"></div>
      </main>
      <Footer />
    </>
  )
}
