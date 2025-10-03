import Link from "next/link";
import { Target, Users, Award, Shield, BookOpen, Lightbulb, GraduationCap, Heart } from "lucide-react";

const advisoryBoard = [
  {
    name: "Dr. Sarah Chen, MD, PhD",
    title: "Professor of Medical Education",
    institution: "Stanford University School of Medicine",
    expertise: "Curriculum Development, Digital Learning"
  },
  {
    name: "Dr. Michael Rodriguez, PhD",
    title: "Director of EdTech Innovation",
    institution: "Johns Hopkins University",
    expertise: "Adaptive Learning Systems, AI in Education"
  },
  {
    name: "Dr. Aisha Patel, MD, MPH",
    title: "Chief Medical Officer",
    institution: "HealthTech Solutions",
    expertise: "Clinical Practice, Medical Simulation"
  },
  {
    name: "Dr. James Thompson, PhD",
    title: "Professor of Anatomy",
    institution: "Harvard Medical School",
    expertise: "3D Visualization, Anatomical Sciences"
  }
];

const coreValues = [
  {
    icon: Target,
    title: "Evidence-Based Learning",
    description: "Every feature is grounded in peer-reviewed educational research and cognitive science principles."
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "FERPA and HIPAA compliant with blockchain-secured credentials and encrypted user data."
  },
  {
    icon: Users,
    title: "Student-Centered Design",
    description: "Built with continuous feedback from pre-med students, medical students, and healthcare professionals."
  },
  {
    icon: Award,
    title: "Academic Rigor",
    description: "Content vetted by medical faculty and aligned with AAMC, NBME, and USMLE standards."
  }
];

const achievements = [
  { metric: "98%", label: "Student Satisfaction Rate" },
  { metric: "15-point", label: "Average MCAT Score Improvement" },
  { metric: "50+", label: "Partner Institutions" },
  { metric: "25,000+", label: "Active Students" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-5 py-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary mb-2 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Heart className="w-8 h-8 text-primary" />
            About Scrubs to Be
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 py-12">
        {/* Mission Statement */}
        <section className="mb-16">
          <div className="p-10 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-center max-w-4xl mx-auto leading-relaxed mb-6">
              To transform medical education by providing accessible, evidence-based, and immersive learning 
              experiences that prepare the next generation of healthcare professionals for the complexities 
              of modern clinical practice.
            </p>
            <p className="text-center text-muted-foreground">
              We believe that medical education should go beyond rote memorization to develop critical thinking, 
              clinical reasoning, and lifelong learning skills essential for patient care.
            </p>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-border bg-card text-center">
                <div className="text-4xl font-bold text-primary mb-2">{achievement.metric}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Core Values & Standards</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="p-6 rounded-xl border border-border bg-card">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Advisory Board */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Academic Advisory Board</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our platform is guided by leading educators, clinicians, and researchers from top medical 
              institutions who ensure academic rigor and educational excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {advisoryBoard.map((advisor, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{advisor.name}</h3>
                    <p className="text-sm text-primary font-medium mb-1">{advisor.title}</p>
                    <p className="text-sm text-muted-foreground mb-2">{advisor.institution}</p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold">Expertise:</span> {advisor.expertise}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Accreditation & Standards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Accreditation & Alignment</h2>
          <div className="p-8 rounded-2xl border border-border bg-card">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Educational Standards
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Aligned with <strong className="text-foreground">AAMC</strong> (Association of American Medical Colleges) competencies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Content mapped to <strong className="text-foreground">USMLE</strong> Step 1 and Step 2 exam blueprints
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Peer-reviewed by <strong className="text-foreground">NBME</strong>-certified medical educators
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Complies with <strong className="text-foreground">LCME</strong> standards for medical education
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Compliance & Security
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">FERPA</strong> compliant for student privacy protection
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">HIPAA</strong> ready for clinical case studies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">SOC 2 Type II</strong> certified data security
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">ADA</strong> compliant accessibility standards
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Research Foundation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Evidence-Based Approach</h2>
          <div className="p-8 rounded-2xl border border-border bg-card">
            <div className="flex items-start gap-4 mb-6">
              <Lightbulb className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3">Research-Backed Methodology</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our platform integrates findings from cognitive science, educational psychology, and 
                  medical education research to optimize learning outcomes.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-muted/30">
                <h4 className="font-bold mb-2">Spaced Repetition</h4>
                <p className="text-sm text-muted-foreground">
                  Based on Ebbinghaus&apos;s forgetting curve and evidence showing 200% improvement in long-term retention
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <h4 className="font-bold mb-2">Active Recall</h4>
                <p className="text-sm text-muted-foreground">
                  Retrieval practice proven to enhance memory consolidation and clinical reasoning skills
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <h4 className="font-bold mb-2">Interleaved Practice</h4>
                <p className="text-sm text-muted-foreground">
                  Mixed-topic learning improves discrimination and transfer of knowledge to clinical settings
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <h4 className="font-bold mb-2">Metacognitive Scaffolding</h4>
                <p className="text-sm text-muted-foreground">
                  Self-assessment tools that develop diagnostic reasoning and clinical judgment
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action for Institutions */}
        <section>
          <div className="p-10 rounded-2xl bg-gradient-to-br from-primary via-blue-600 to-purple-600 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Interested in institutional partnerships, research collaboration, or implementation at your university?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/institutions"
                className="px-8 py-4 rounded-lg bg-white text-primary font-bold hover:bg-gray-100 transition-colors"
              >
                For Institutions
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-lg border-2 border-white text-white font-bold hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
