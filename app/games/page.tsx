"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Gamepad2, Sparkles } from "lucide-react"

export default function GamesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 mb-8 animate-pulse">
                <Gamepad2 className="w-12 h-12 text-primary" />
              </div>

              <h1 className="text-5xl font-bold mb-6">
                <span className="gradient-text">Games Section</span>
              </h1>

              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <p className="text-2xl font-semibold text-muted-foreground">Coming Soon</p>
                <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We're working on bringing you exciting games where you can earn crypto while having fun. Stay tuned for
                amazing gaming experiences!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-xl mx-auto">
                {["Multiplayer Games", "Puzzle Challenges", "Casino Games"].map((feature, index) => (
                  <ScrollReveal key={feature} delay={200 + index * 100}>
                    <div className="p-4 rounded-lg bg-card border border-border">
                      <p className="font-semibold text-sm">{feature}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  )
}
