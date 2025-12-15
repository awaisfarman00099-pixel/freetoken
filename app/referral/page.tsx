"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Copy, Check, Users, TrendingUp, Gift, DollarSign } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ReferralPage() {
  const { toast } = useToast()
  const [copied, setCopied] = useState(false)

  // This would typically come from a database/auth system
  const referralLink = "https://freetoken.site?ref=YOUR_USERNAME"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralLink)
      setCopied(true)
      toast({
        title: "Copied!",
        description: "Referral link copied to clipboard",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      })
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="gradient-text">Referral Program</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Earn extra crypto by inviting friends to freetoken.site
                </p>
              </div>

              {/* Referral Link Card */}
              <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30">
                <h2 className="text-2xl font-bold mb-4 text-center">Your Referral Link</h2>
                <p className="text-muted-foreground text-center mb-6">
                  Share this link with your friends and earn commissions from their activities
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 p-4 rounded-lg bg-background border border-border">
                    <code className="text-sm text-foreground break-all">{referralLink}</code>
                  </div>
                  <Button
                    onClick={copyToClipboard}
                    className="bg-gradient-to-r from-primary to-secondary text-background font-semibold hover:opacity-90"
                  >
                    {copied ? (
                      <>
                        <Check className="mr-2 w-4 h-4" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 w-4 h-4" /> Copy Link
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 rounded-xl bg-card border border-border text-center">
                  <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="text-3xl font-bold mb-2">0</h3>
                  <p className="text-sm text-muted-foreground">Total Referrals</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border text-center">
                  <TrendingUp className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="text-3xl font-bold mb-2">0</h3>
                  <p className="text-sm text-muted-foreground">Active Referrals</p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border text-center">
                  <DollarSign className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="text-3xl font-bold mb-2">$0.00</h3>
                  <p className="text-sm text-muted-foreground">Total Earnings</p>
                </div>
              </div>

              {/* How It Works */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  How the <span className="gradient-text">Referral Program</span> Works
                </h2>

                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-card border border-border">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Share Your Link</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Copy your unique referral link and share it with friends, family, or on social media. Anyone
                          who clicks your link will be tracked as your referral.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-card border border-border">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">They Start Earning</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          When your referrals sign up and start using the platforms listed on freetoken.site, their
                          activity begins generating commissions for you.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-card border border-border">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Earn Passive Income</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          You'll earn a percentage of the commission from platforms your referrals use. The more active
                          referrals you have, the more you earn - completely passively!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="p-8 rounded-2xl bg-muted/30 border border-border">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Gift className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold">Referral Benefits</h2>
                </div>

                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong className="text-foreground">Lifetime Commissions:</strong> Earn from your referrals'
                      activities for as long as they use the platforms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong className="text-foreground">Unlimited Referrals:</strong> There's no limit to how many
                      people you can refer
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong className="text-foreground">Passive Income:</strong> Earn money while your referrals do
                      the work
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong className="text-foreground">Real-Time Tracking:</strong> Monitor your referrals and
                      earnings in your dashboard
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong className="text-foreground">Easy Sharing:</strong> Share your link anywhere - social
                      media, blogs, forums, or direct messages
                    </span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-6">
                  Start building your crypto income stream today by sharing freetoken.site with others!
                </p>
                <Button
                  onClick={copyToClipboard}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary text-background font-semibold hover:opacity-90"
                >
                  <Copy className="mr-2 w-5 h-5" /> Copy Referral Link
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
