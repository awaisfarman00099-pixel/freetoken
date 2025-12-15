"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6">Privacy Policy</h1>
                  <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
              </ScrollReveal>

              <div className="prose prose-invert max-w-none space-y-8">
                <ScrollReveal delay={100}>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Welcome to Freetoken.site. We respect your privacy and are committed to protecting your personal
                      data. This privacy policy will inform you about how we handle your information when you visit our
                      website and tell you about your privacy rights.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      When you visit Freetoken.site, we may collect the following types of information:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          <strong className="text-foreground">Usage Data:</strong> Information about how you use our
                          website, such as pages visited, time spent on pages, and links clicked
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          <strong className="text-foreground">Device Information:</strong> Browser type, operating
                          system, IP address, and device identifiers
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>
                          <strong className="text-foreground">Cookies:</strong> Small data files stored on your device
                          to enhance your browsing experience
                        </span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We use the collected information for the following purposes:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>To provide and maintain our website</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>To improve user experience and website functionality</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>To analyze website traffic and usage patterns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>To detect and prevent technical issues or fraudulent activity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>To display relevant advertisements through third-party ad networks</span>
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Our website contains links to third-party platforms and services (faucets, PTC sites, etc.). When
                      you click on these links and leave our site, you will be subject to the privacy policies of those
                      third-party websites. We are not responsible for the privacy practices or content of external
                      sites. We encourage you to review their privacy policies before providing any personal
                      information.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={500}>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Referral Links</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Please note that Freetoken.site uses referral links to the platforms listed on our website. When
                      you click on these links and sign up for a platform, we may earn a commission. This does not
                      affect your earning potential or user experience on those platforms. The use of referral links
                      helps us maintain and improve our service.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={600}>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We use cookies and similar tracking technologies to track activity on our website and store
                      certain information. Cookies are files with small amounts of data that are sent to your browser
                      from a website and stored on your device. You can instruct your browser to refuse all cookies or
                      to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be
                      able to use some portions of our website.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={700}>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Advertisements</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We use third-party advertising companies to serve ads when you visit our website. These companies
                      may use information about your visits to this and other websites in order to provide
                      advertisements about goods and services of interest to you. These advertisers may use cookies and
                      web beacons to collect information.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={800}>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The security of your data is important to us, but remember that no method of transmission over the
                      Internet or method of electronic storage is 100% secure. While we strive to use commercially
                      acceptable means to protect your information, we cannot guarantee its absolute security.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={900}>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Our website is not intended for use by children under the age of 13. We do not knowingly collect
                      personally identifiable information from children under 13. If you are a parent or guardian and
                      you are aware that your child has provided us with personal data, please contact us so that we can
                      take necessary actions.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={1000}>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                      the new Privacy Policy on this page and updating the "Last updated" date at the top of this
                      Privacy Policy. You are advised to review this Privacy Policy periodically for any changes.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={1100}>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <p className="text-primary mt-2">
                      <a href="mailto:awaisfarman00099@gmail.com" className="hover:underline">
                        awaisfarman00099@gmail.com
                      </a>
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={1200}>
                  <div className="p-6 rounded-xl bg-muted/30 border border-border mt-8">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      By using Freetoken.site, you acknowledge that you have read and understood this Privacy Policy and
                      agree to its terms.
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
