import Link from "next/link";
import { Scale, FileText, AlertTriangle } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-5 py-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary mb-2 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Scale className="w-8 h-8 text-primary" />
            Terms of Service
          </h1>
          <p className="text-muted-foreground mt-2">Last updated: October 2, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 py-12">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          {/* Agreement Notice */}
          <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 mb-12">
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3 mt-0">Agreement to Terms</h2>
                <p className="text-muted-foreground mb-0">
                  By accessing and using Scrubs to Be, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, 
                  you are prohibited from using or accessing this platform.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-primary" />
              Platform Description
            </h2>
            <p className="mb-4">
              Scrubs to Be is an educational platform designed to support medical students, healthcare professionals, 
              and institutions with:
            </p>
            <ul className="space-y-2 mb-6">
              <li>Interactive medical education content and 3D anatomical models</li>
              <li>Practice examinations and assessment tools</li>
              <li>Progress tracking and performance analytics</li>
              <li>Community features and educational resources</li>
              <li>Institutions maintain control over their students&apos; educational data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">User Accounts and Registration</h2>
            
            <h3 className="text-xl font-semibold mb-3">Account Creation</h3>
            <ul className="space-y-2 mb-6">
              <li>You must provide accurate, current, and complete information during registration</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You must be at least 13 years old to create an account</li>
              <li>One person may not maintain multiple accounts</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Account Responsibilities</h3>
            <ul className="space-y-2">
              <li>You are responsible for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Keep your contact information up to date</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Acceptable Use Policy</h2>
            
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 mb-6">
              <h3 className="font-semibold mb-2 text-green-800 dark:text-green-200">Permitted Uses</h3>
              <ul className="text-sm space-y-1 text-green-700 dark:text-green-300">
                <li>Educational and professional development purposes</li>
                <li>Collaborative learning with other users</li>
                <li>Sharing educational insights and experiences</li>
                <li>Using content for personal study and review</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
              <h3 className="font-semibold mb-2 text-red-800 dark:text-red-200 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Prohibited Activities
              </h3>
              <ul className="text-sm space-y-1 text-red-700 dark:text-red-300">
                <li>Sharing account credentials or allowing unauthorized access</li>
                <li>Copying, distributing, or selling platform content without permission</li>
                <li>Using automated tools to scrape or download content</li>
                <li>Uploading malicious code, viruses, or harmful content</li>
                <li>Harassment, discrimination, or inappropriate behavior toward other users</li>
                <li>Impersonating other individuals or organizations</li>
                <li>Using the platform for commercial purposes without authorization</li>
                <li>Attempting to circumvent security measures or access restrictions</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-semibold mb-3">Platform Content</h3>
            <p className="mb-4">
              All content on Scrubs to Be, including but not limited to text, graphics, images, 3D models, 
              videos, software, and other materials, is owned by Scrubs to Be or its licensors and is 
              protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold mb-3">User-Generated Content</h3>
            <p className="mb-4">
              By submitting content to our platform (comments, questions, study notes), you grant us 
              a non-exclusive, worldwide, royalty-free license to use, modify, and display such content 
              for educational purposes on our platform.
            </p>

            <h3 className="text-xl font-semibold mb-3">Fair Use</h3>
            <p className="mb-4">
              You may use our content for personal educational purposes. Any other use requires explicit 
              written permission from Scrubs to Be.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Educational Disclaimer</h2>
            
            <div className="p-6 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2 text-yellow-800 dark:text-yellow-200">Important Notice</h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-0">
                    Scrubs to Be is an educational platform designed to supplement, not replace, formal medical education. 
                    Our content is for educational purposes only and should not be used as a substitute for professional 
                    medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals 
                    and follow your institution&apos;s guidelines.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Privacy and Data Protection</h2>
            <p className="mb-4">
              Your privacy is important to us. Please review our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{" "}
              to understand how we collect, use, and protect your information.
            </p>
            <ul className="space-y-2">
              <li>We comply with FERPA, HIPAA, and international data protection regulations</li>
              <li>Your educational data is encrypted and securely stored</li>
              <li>We do not sell personal information to third parties</li>
              <li>You have control over your data and can request deletion at any time</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Subscription and Payment Terms</h2>
            
            <h3 className="text-xl font-semibold mb-3">Free Tier</h3>
            <p className="mb-4">
              We offer a free tier with limited access to platform features. Free accounts are subject 
              to usage limitations and may include advertisements.
            </p>

            <h3 className="text-xl font-semibold mb-3">Premium Subscriptions</h3>
            <ul className="space-y-2 mb-6">
              <li>Subscription fees are billed in advance on a monthly or annual basis</li>
              <li>All fees are non-refundable except as required by law</li>
              <li>We may change subscription prices with 30 days&apos; notice</li>
              <li>Subscriptions automatically renew unless cancelled</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Institutional Licenses</h3>
            <p className="mb-4">
              Educational institutions may purchase licenses under separate agreements with additional 
              terms and conditions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, Scrubs to Be shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, including but not limited to:
            </p>
            <ul className="space-y-2 mb-6">
              <li>Loss of profits, data, or business opportunities</li>
              <li>Service interruptions or technical difficulties</li>
              <li>Errors or omissions in educational content</li>
              <li>Actions taken based on platform content</li>
            </ul>
            <p className="mb-4">
              Our total liability for any claims arising from your use of the platform shall not exceed 
              the amount you paid for the service in the 12 months preceding the claim.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            
            <h3 className="text-xl font-semibold mb-3">By You</h3>
            <p className="mb-4">
              You may terminate your account at any time by contacting us or using the account deletion 
              feature in your settings.
            </p>

            <h3 className="text-xl font-semibold mb-3">By Us</h3>
            <p className="mb-4">
              We may suspend or terminate your account if you violate these terms, engage in prohibited 
              activities, or if required by law. We will provide notice when possible.
            </p>

            <h3 className="text-xl font-semibold mb-3">Effect of Termination</h3>
            <ul className="space-y-2">
              <li>Your access to the platform will be immediately revoked</li>
              <li>Your data will be handled according to our Privacy Policy</li>
              <li>Certain provisions of these terms will survive termination</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms of Service at any time. We will notify users 
              of significant changes via email and platform notifications. Continued use of the platform 
              after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="mb-4">
              These Terms of Service are governed by the laws of the Commonwealth of Massachusetts, 
              United States, without regard to conflict of law principles. Any disputes will be 
              resolved in the courts of Massachusetts.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="p-6 rounded-xl border border-border bg-card">
              <p className="mb-2"><strong>Legal Department</strong></p>
              <p className="text-sm text-muted-foreground mb-2">Email: legal@scrubstobe.com</p>
              <p className="text-sm text-muted-foreground mb-2">Phone: (555) 123-4567</p>
              <p className="text-sm text-muted-foreground">
                Address: 123 Medical Education Way, Boston, MA 02115
              </p>
            </div>
          </section>

          <div className="p-6 rounded-xl bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground mb-0">
              <strong>Effective Date:</strong> These Terms of Service are effective as of October 2, 2025. 
              By using Scrubs to Be after this date, you agree to be bound by these terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
