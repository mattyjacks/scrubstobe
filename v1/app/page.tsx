import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";
import { Stethoscope, Brain, Blocks, Shield, Users, Zap, GraduationCap, Trophy, Target } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-background to-muted/20">
      <div className="flex-1 w-full flex flex-col items-center">
        {/* Navigation */}
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
          <div className="w-full max-w-7xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"} className="flex items-center gap-2 text-xl">
                <Stethoscope className="w-6 h-6 text-primary" />
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Scrubs to Be
                </span>
              </Link>
              <div className="hidden md:flex items-center gap-6 ml-8 text-sm">
                <Link href="/hub" className="text-muted-foreground hover:text-primary transition-colors">
                  Hub
                </Link>
                <Link href="/test-prep" className="text-muted-foreground hover:text-primary transition-colors">
                  Test Prep
                </Link>
                <Link href="/encyclopedia" className="text-muted-foreground hover:text-primary transition-colors">
                  Encyclopedia
                </Link>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="/institutions" className="text-muted-foreground hover:text-primary transition-colors">
                  For Institutions
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="w-full max-w-7xl px-5 py-20 md:py-32">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              <span>Transforming Medical Education</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Your Journey from
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Pre-Med to Professional
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              An adaptive, interactive ecosystem integrating applied skills, critical thinking, 
              and career readiness for the next generation of healthcare professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <Link
                href="/hub"
                className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Start Learning
              </Link>
              <Link
                href="#features"
                className="px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </section>

        {/* Key Innovation Banner */}
        <section className="w-full bg-primary/5 border-y border-primary/10 py-8">
          <div className="max-w-7xl mx-auto px-5">
            <p className="text-center text-lg md:text-xl font-medium text-foreground/90">
              The first EdTech solution to unify <span className="text-primary font-semibold">visualization</span>, 
              <span className="text-primary font-semibold"> gamification</span>, 
              <span className="text-primary font-semibold"> adaptive AI</span>, and 
              <span className="text-primary font-semibold"> blockchain security</span> into one scalable platform
            </p>
          </div>
        </section>

        {/* Core Features Grid */}
        <section id="features" className="w-full max-w-7xl px-5 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Multi-Modal Innovation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced technologies converge into a single, comprehensive learning ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 3D Anatomical Models */}
            <div className="group p-8 rounded-2xl border border-border bg-card hover:shadow-2xl hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Blocks className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">3D Anatomical Models</h3>
              <p className="text-muted-foreground leading-relaxed">
                Immersive, manipulable tools enabling exploration of human anatomy in layered, 
                interactive formats. Experience anatomy like never before.
              </p>
            </div>

            {/* Gamified Simulations */}
            <div className="group p-8 rounded-2xl border border-border bg-card hover:shadow-2xl hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Gamified Simulations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Scenario-based exercises replicating diagnostic and treatment decisions, 
                requiring critical thinking and rapid judgment in real-world contexts.
              </p>
            </div>

            {/* Adaptive Learning */}
            <div className="group p-8 rounded-2xl border border-border bg-card hover:shadow-2xl hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Driven Adaptive Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Personalized learning paths that track performance and dynamically adjust 
                content delivery to match your unique pace and style.
              </p>
            </div>

            {/* Blockchain Integration */}
            <div className="group p-8 rounded-2xl border border-border bg-card hover:shadow-2xl hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Blockchain Credentials</h3>
              <p className="text-muted-foreground leading-relaxed">
                Secure, verifiable micro-credentials with intellectual property protection. 
                Your achievements are permanently recorded and universally recognized.
              </p>
            </div>

            {/* Community Ecosystem */}
            <div className="group p-8 rounded-2xl border border-border bg-card hover:shadow-2xl hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-pink-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Community Ecosystem</h3>
              <p className="text-muted-foreground leading-relaxed">
                Engage through Discord, Reddit, and newsletters, blending structured 
                instruction with peer-to-peer learning and collaboration.
              </p>
            </div>

            {/* Career-Long Learning */}
            <div className="group p-8 rounded-2xl border border-border bg-card hover:shadow-2xl hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-7 h-7 text-cyan-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Career-Long Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                From pre-med through professional licensing and beyond. A comprehensive 
                solution that grows with you throughout your entire healthcare journey.
              </p>
            </div>
          </div>
        </section>

        {/* Competitive Advantage */}
        <section className="w-full bg-gradient-to-br from-primary/5 to-purple-500/5 py-20">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Beyond Traditional Test Prep
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                While competitors focus on rote memorization or standardized tests, 
                Scrubs to Be delivers clinical readiness, verified credentials, and lifelong learning
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Clinical Readiness</h3>
                <p className="text-muted-foreground">
                  Not just test scores, but real-world diagnostic and treatment skills
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Verified Credentials</h3>
                <p className="text-muted-foreground">
                  Blockchain-secured micro-credentials recognized by institutions
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized Journey</h3>
                <p className="text-muted-foreground">
                  AI-driven adaptation that evolves with your learning style
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="w-full bg-background border-y border-border py-16">
          <div className="max-w-7xl mx-auto px-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Proven Results</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">25,000+</div>
                <div className="text-muted-foreground">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15-pt</div>
                <div className="text-muted-foreground">Avg MCAT Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Partner Institutions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full max-w-7xl px-5 py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Students & Educators Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                &quot;This platform completely changed how I study. The 3D anatomy models and adaptive quizzes helped me improve my MCAT score by 18 points!&quot;
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-bold">Sarah Johnson</div>
                <div className="text-sm text-primary">Pre-Med Student, UC Berkeley</div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                &quot;As a medical educator, I&apos;m impressed by the evidence-based approach and alignment with USMLE standards. Our students love it.&quot;
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-bold">Dr. Michael Chen, MD</div>
                <div className="text-sm text-primary">Professor, Johns Hopkins School of Medicine</div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                &quot;The gamified simulations make learning actually fun. I finally understand pathophysiology instead of just memorizing it.&quot;
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-bold">Marcus Williams</div>
                <div className="text-sm text-primary">1st Year Medical Student, Stanford</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full max-w-7xl px-5 py-20">
          <div className="rounded-3xl bg-gradient-to-br from-primary via-blue-600 to-purple-600 p-12 md:p-20 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Medical Education?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-2xl mx-auto">
              Join the next generation of healthcare professionals learning with 
              immersive technology and adaptive AI
            </p>
            <Link
              href="/hub"
              className="inline-block px-10 py-5 rounded-lg bg-white text-primary font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl hover:scale-105 transform duration-200"
            >
              Get Started Today
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-border py-12 mt-20">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Stethoscope className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Scrubs to Be</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Transforming medical education through innovation and technology
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Platform</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/hub" className="hover:text-primary transition-colors">Hub</Link></li>
                  <li><Link href="/test-prep" className="hover:text-primary transition-colors">Test Prep</Link></li>
                  <li><Link href="/encyclopedia" className="hover:text-primary transition-colors">Encyclopedia</Link></li>
                  <li><Link href="/newsletter" className="hover:text-primary transition-colors">Newsletter</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Company</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                  <li><Link href="/institutions" className="hover:text-primary transition-colors">For Institutions</Link></li>
                  <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                  <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Connect</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="https://discord.gg/scrubstobe" className="hover:text-primary transition-colors">Discord</a></li>
                  <li><a href="https://reddit.com/r/scrubstobe" className="hover:text-primary transition-colors">Reddit</a></li>
                  <li><a href="mailto:support@scrubstobe.com" className="hover:text-primary transition-colors">Email</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
              <p>© 2025 Scrubs to Be. All rights reserved. | Redefining medical education as an immersive, personalized, and lifelong journey</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
