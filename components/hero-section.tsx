"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react"
import Link from "next/link"
import Script from "next/script"

export function HeroSection() {
  return (
    <>
      {/* ================= AD SCRIPT (CLIENT ONLY) ================= */}
      <Script id="hp-atoptions" strategy="afterInteractive">
        {`
          window.atOptions = {
            key: "8f012c7d52435368591b7f0623d50748",
            format: "iframe",
            height: 250,
            width: 300,
            params: {}
          };
        `}
      </Script>

      <Script
        src="https://www.highperformanceformat.com/8f012c7d52435368591b7f0623d50748/invoke.js"
        strategy="afterInteractive"
      />

      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-8">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                Earn Faucet Without Login - 100% Free
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Earn Free <span className="gradient-text">Crypto & Tokens</span> Without Login
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Discover the best crypto faucets, PTC sites, games, and passive income opportunities.
            </p>

            {/* ================= AD SLOT ================= */}
            <div className="my-6 flex justify-center min-h-[250px]" />

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/dashboard">
                <Button size="lg" className="px-8">
                  Claim Free Crypto <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document.getElementById("faucets")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Browse Faucets
              </Button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-card border">
                <TrendingUp className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold">High Rewards</h3>
              </div>
              <div className="p-6 rounded-xl bg-card border">
                <Shield className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold">Verified Sites</h3>
              </div>
              <div className="p-6 rounded-xl bg-card border">
                <Zap className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="font-semibold">No Login Required</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
