import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-background font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold gradient-text">freetoken.site</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted source for crypto earning opportunities. Start building your crypto portfolio today.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/referral" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Referral Program
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#faucets" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Faucets
                </Link>
              </li>
              <li>
                <Link href="#ptc" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  PTC Sites
                </Link>
              </li>
              <li>
                <Link href="#games" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Games
                </Link>
              </li>
              <li>
                <Link
                  href="#passive-income"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Passive Income
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:awaisfarman00099@gmail.com" className="hover:text-primary transition-colors">
                awaisfarman00099@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} freetoken.site. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
