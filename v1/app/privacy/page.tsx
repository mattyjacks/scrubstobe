import Link from "next/link";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-5 py-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary mb-2 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            Privacy Policy & Data Protection
          </h1>
          <p className="text-muted-foreground mt-2">Last updated: October 2, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {/* Commitment to Privacy */}
          <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 mb-12">
            <div className="flex items-start gap-4">
              <Lock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3 mt-0">Our Commitment to Your Privacy</h2>
                <p className="text-muted-foreground mb-0">
                  At Scrubs to Be, protecting your personal information and learning data is fundamental to our mission. 
                  We maintain the highest standards of data security and comply with all applicable regulations including 
                  FERPA, HIPAA, and international data protection laws.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-primary" />
              Information We Collect
            </h2>
            
            <h3 className="text-xl font-semibold mb-3">Account Information</h3>
            <ul className="space-y-2 mb-6">
              <li>Name, email address, and institutional affiliation</li>
              <li>Educational background and career goals</li>
              <li>Profile preferences and settings</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Learning Data</h3>
            <ul className="space-y-2 mb-6">
              <li>Quiz and test performance metrics</li>
              <li>Study patterns and time spent on platform</li>
              <li>Progress tracking and achievement data</li>
              <li>Content interactions and preferences</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Technical Information</h3>
            <ul className="space-y-2">
              <li>Device type, browser, and operating system</li>
              <li>IP address and general location (country/region)</li>
              <li>Session data and analytics</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-border bg-card">
                <h3 className="font-semibold mb-2">Educational Purposes</h3>
                <p className="text-muted-foreground text-sm mb-0">
                  To provide personalized learning experiences, track your progress, and adapt content to your needs
                </p>
              </div>

              <div className="p-4 rounded-lg border border-border bg-card">
                <h3 className="font-semibold mb-2">Platform Improvement</h3>
                <p className="text-muted-foreground text-sm mb-0">
                  To analyze aggregate data for improving content, features, and user experience
                </p>
              </div>

              <div className="p-4 rounded-lg border border-border bg-card">
                <h3 className="font-semibold mb-2">Communication</h3>
                <p className="text-muted-foreground text-sm mb-0">
                  To send important updates, educational content, and respond to your inquiries
                </p>
              </div>

              <div className="p-4 rounded-lg border border-border bg-card">
                <h3 className="font-semibold mb-2">Institutional Reporting</h3>
                <p className="text-muted-foreground text-sm mb-0">
                  To provide aggregate analytics to partner institutions (individual data only with explicit consent)
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Data Protection & Security</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-bold mb-3">Encryption</h3>
                <p className="text-sm text-muted-foreground">
                  All data is encrypted in transit (TLS 1.3) and at rest (AES-256)
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-bold mb-3">Access Control</h3>
                <p className="text-sm text-muted-foreground">
                  Role-based access with multi-factor authentication for sensitive data
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-bold mb-3">Regular Audits</h3>
                <p className="text-sm text-muted-foreground">
                  Third-party security audits and penetration testing quarterly
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-bold mb-3">Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  SOC 2 Type II certified, FERPA and HIPAA compliant
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            
            <p className="mb-4">You have the following rights regarding your personal data:</p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                <Eye className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Access</h3>
                  <p className="text-sm text-muted-foreground mb-0">
                    Request a copy of all personal data we hold about you
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Correction</h3>
                  <p className="text-sm text-muted-foreground mb-0">
                    Update or correct any inaccurate information
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                <Lock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Deletion</h3>
                  <p className="text-sm text-muted-foreground mb-0">
                    Request deletion of your personal data (subject to legal requirements)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Portability</h3>
                  <p className="text-sm text-muted-foreground mb-0">
                    Export your data in a machine-readable format
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">FERPA Compliance</h2>
            <p className="mb-4">
              For students at partner institutions, we comply with the Family Educational Rights and Privacy Act (FERPA):
            </p>
            <ul className="space-y-2">
              <li>Educational records are protected and not disclosed without consent</li>
              <li>Institutions maintain control over their students&apos; educational data</li>
              <li>Students have the right to review their educational records</li>
              <li>We act as a school official under FERPA when providing services to institutions</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
            <p className="mb-4">
              We retain your data for as long as your account is active or as needed to provide services:
            </p>
            <ul className="space-y-2">
              <li><strong>Active accounts:</strong> Data retained while account is in use</li>
              <li><strong>Inactive accounts:</strong> Anonymized after 2 years of inactivity</li>
              <li><strong>Deleted accounts:</strong> Personal data removed within 30 days</li>
              <li><strong>Legal requirements:</strong> Some data retained longer if required by law</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="mb-4">
              We use select third-party services that have been vetted for security and privacy compliance:
            </p>
            <ul className="space-y-2">
              <li>Cloud hosting: AWS (SOC 2, ISO 27001 certified)</li>
              <li>Analytics: Privacy-focused analytics with no personal data sharing</li>
              <li>Email: Encrypted email service providers</li>
              <li>Payment processing: PCI DSS compliant processors</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              For any privacy-related questions or to exercise your rights:
            </p>
            <div className="p-6 rounded-xl border border-border bg-card">
              <p className="mb-2"><strong>Data Protection Officer</strong></p>
              <p className="text-sm text-muted-foreground mb-2">Email: privacy@scrubstobe.com</p>
              <p className="text-sm text-muted-foreground mb-2">Phone: (555) 123-4569</p>
              <p className="text-sm text-muted-foreground">
                Address: 123 Medical Education Way, Boston, MA 02115
              </p>
            </div>
          </section>

          <div className="p-6 rounded-xl bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground mb-0">
              <strong>Changes to This Policy:</strong> We may update this privacy policy periodically. 
              We will notify you of significant changes via email and platform notifications. 
              Continued use of our services constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
