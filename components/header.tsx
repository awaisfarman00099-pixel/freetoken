'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check initial scroll position after mount
    setIsScrolled(window.scrollY > 20)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/faucets", label: "Faucets" },
    { href: "/ptc", label: "PTC" },
    { href: "/games", label: "Games" },
    { href: "/about", label: "About Us" },
    { href: "/privacy", label: "Privacy Policy" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        mounted && isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold gradient-text">Freetoken.site</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/faucets">
              <Button variant="outline" className="border-primary/50 hover:bg-primary/10 bg-transparent">
                View Faucets
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-primary to-secondary text-background font-semibold hover:opacity-90">
                Claim Free Crypto
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/faucets">
                <Button
                  variant="outline"
                  className="w-full border-primary/50 hover:bg-primary/10 bg-transparent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View Faucets
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  className="w-full bg-gradient-to-r from-primary to-secondary text-background font-semibold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Claim Free Crypto
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
