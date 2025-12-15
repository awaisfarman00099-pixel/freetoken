"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
<section className="relative overflow-hidden py-20 lg:py-32">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
    <div
      className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
      style={{ animationDelay: "2s" }}
    />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-8">
        <Zap className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium">Earn Faucet Without Login - 100% Free</span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
        Earn Free <span className="gradient-text">Crypto & Tokens</span> Without Login
      </h1>

      <p className="text-lg lg:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
        Discover the best crypto faucets, PTC sites, games, and passive income opportunities. Start earning Bitcoin,
        Ethereum, and other cryptocurrencies - no signup required!
      </p>

      {/* ===================== AD SLOT ===================== */}
      <div className="my-6 flex justify-center">
        <iframe
          data-aa="2420763"
          src="//acceptable.a-ads.com/2420763/?size=728x90"
          style={{
            border: 0,
            padding: 0,
            width: "728px",
            height: "90px",
            overflow: "hidden",
          }}
          title="Hero Ad"
        ></iframe>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
        <Link href="/dashboard">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-background font-semibold hover:opacity-90 text-base px-8"
          >
            Claim Free Crypto <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
        <Button
          size="lg"
          variant="outline"
          className="border-primary/50 hover:bg-primary/10 text-base px-8 bg-transparent"
          onClick={() => document.getElementById("faucets")?.scrollIntoView({ behavior: "smooth" })}
        >
          Browse Faucets
        </Button>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        <div className="p-6 rounded-xl bg-card border border-border">
          <TrendingUp className="w-8 h-8 text-primary mb-3 mx-auto" />
          <h3 className="font-semibold mb-2">High Rewards</h3>
          <p className="text-sm text-muted-foreground">Maximize earnings with top-paying platforms</p>
        </div>
        <div className="p-6 rounded-xl bg-card border border-border">
          <Shield className="w-8 h-8 text-primary mb-3 mx-auto" />
          <h3 className="font-semibold mb-2">Verified Sites</h3>
          <p className="text-sm text-muted-foreground">Only trusted and legitimate platforms</p>
        </div>
        <div className="p-6 rounded-xl bg-card border border-border">
          <Zap className="w-8 h-8 text-primary mb-3 mx-auto" />
          <h3 className="font-semibold mb-2">No Login Required</h3>
          <p className="text-sm text-muted-foreground">Start earning immediately, completely free</p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
