"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Users, TrendingUp, Target } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                    About <span className="gradient-text">Freetoken.site</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Your trusted platform for discovering legitimate cryptocurrency earning opportunities
                  </p>
                </div>
              </ScrollReveal>

              <div className="prose prose-invert max-w-none">
                <ScrollReveal delay={100}>
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      At Freetoken.site, we are dedicated to helping people discover legitimate ways to earn
                      cryptocurrency without any upfront investment. We carefully curate and verify every platform
                      listed on our site to ensure our users have access to safe, reliable earning opportunities.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Whether you're new to cryptocurrency or an experienced earner, our platform provides comprehensive
                      information about faucets, PTC sites, passive income opportunities, and gaming platforms that
                      actually pay.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                  <ScrollReveal delay={200}>
                    <div className="p-6 rounded-xl bg-card border border-border">
                      <Shield className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Verified Platforms</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Every platform is thoroughly tested and verified before being listed. We only recommend sites
                        with proven payment history.
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={250}>
                    <div className="p-6 rounded-xl bg-card border border-border">
                      <Users className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Join thousands of users who trust Freetoken.site for their crypto earning journey. We value
                        community feedback and continuously improve.
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={300}>
                    <div className="p-6 rounded-xl bg-card border border-border">
                      <TrendingUp className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Maximum Earnings</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We focus on platforms with the highest earning potential and best user experience. Your time is
                        valuable, and we help you maximize it.
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={350}>
                    <div className="p-6 rounded-xl bg-card border border-border">
                      <Target className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Always Updated</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Our team constantly monitors platform performance and updates our listings to ensure you always
                        have access to the best opportunities.
                      </p>
                    </div>
                  </ScrollReveal>
                </div>

                <ScrollReveal delay={400}>
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Freetoken.site is a comprehensive aggregation platform that brings together the best crypto
                      earning opportunities in one place:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          <strong className="text-foreground">Crypto Faucets:</strong> Claim free cryptocurrency every
                          few minutes from verified faucet platforms
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          <strong className="text-foreground">PTC Sites:</strong> Earn by viewing advertisements and
                          completing simple tasks
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          <strong className="text-foreground">Passive Income:</strong> Make money automatically by
                          sharing your unused internet bandwidth
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          <strong className="text-foreground">Gaming Platforms:</strong> Play games and visit crypto
                          casinos with faucet features
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          <strong className="text-foreground">Pick Faucets:</strong> Choose the right option and win
                          multiplied rewards
                        </span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={500}>
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Why Trust Us?</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We understand that trust is essential when it comes to earning and managing cryptocurrency. That's
                      why we:
                    </p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Only list platforms that we have personally tested and verified</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Regularly monitor all listed platforms for any issues or changes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Remove platforms that fail to meet our standards or show suspicious behavior</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Provide transparent information about earning potential and requirements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>Never promote scams or unverified platforms</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={600}>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30">
                    <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Ready to start earning free cryptocurrency? Browse our curated list of platforms and find the ones
                      that work best for you. Remember, consistency is key – regular claiming and participation will
                      help you maximize your earnings over time.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions or need assistance, feel free to reach out to us at{" "}
                      <a href="mailto:awaisfarman00099@gmail.com" className="text-primary hover:underline">
                        awaisfarman00099@gmail.com
                      </a>
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
