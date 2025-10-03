import Link from "next/link";
import { Building2, Users, TrendingUp, Award, Shield, Zap, CheckCircle, BarChart3, Lightbulb } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Improved Student Outcomes",
    description: "Average 15-point MCAT improvement and 98% student satisfaction across partner institutions",
    stat: "15-point increase"
  },
  {
    icon: Shield,
    title: "Full Compliance & Security",
    description: "FERPA, HIPAA, SOC 2 Type II certified with institutional SSO integration",
    stat: "100% compliant"
  },
  {
    icon: Users,
    title: "Scalable for Any Size",
    description: "From 50 to 5,000+ students, with dedicated support and onboarding",
    stat: "Unlimited scale"
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics Dashboard",
    description: "Track student progress, engagement, and learning outcomes with institutional admin portal",
    stat: "Real-time insights"
  }
];

const features = [
  "White-label customization with institutional branding",
  "LMS integration (Canvas, Blackboard, Moodle)",
  "Single Sign-On (SSO) with SAML 2.0 and OAuth",
  "Dedicated account manager and technical support",
  "Custom content development for institutional curricula",
  "Institutional analytics and reporting dashboard",
  "Faculty training and professional development",
  "Student progress tracking and intervention alerts",
  "Blockchain-verified digital credentials and badges",
  "API access for integration with existing systems",
  "FERPA-compliant data management",
  "Multi-campus deployment capabilities"
];

const useCases = [
  {
    icon: Building2,
    title: "Medical Schools",
    description: "Supplement traditional curriculum with interactive 3D anatomy, adaptive practice questions, and clinical simulations for pre-clinical years",
    results: ["23% improvement in anatomy exam scores", "40% reduction in tutoring hours needed", "Enhanced board exam preparation"]
  },
  {
    icon: Users,
    title: "Pre-Medical Programs",
    description: "Prepare undergraduates for medical school with MCAT prep, foundational sciences, and career readiness resources",
    results: ["15-point average MCAT score increase", "85% medical school acceptance rate", "Improved retention in STEM majors"]
  },
  {
    icon: Award,
    title: "Continuing Medical Education",
    description: "Offer CME credits through engaging, evidence-based modules for practicing healthcare professionals",
    results: ["AMA PRA Category 1 Credits™ available", "Flexible, self-paced learning", "Mobile-accessible content"]
  },
  {
    icon: Lightbulb,
    title: "Healthcare Enterprises",
    description: "Train new hires, upskill clinical staff, and ensure compliance with standardized, trackable education programs",
    results: ["Reduced onboarding time by 30%", "Improved clinical competency scores", "Centralized compliance tracking"]
  }
];

const testimonials = [
  {
    quote: "Scrubs to Be has transformed how our pre-med students prepare for the MCAT. The adaptive learning and 3D models provide an edge that traditional resources simply cannot match.",
    author: "Dr. Jennifer Martinez",
    title: "Director of Pre-Medical Studies",
    institution: "University of California System"
  },
  {
    quote: "The institutional analytics give us unprecedented visibility into student engagement and mastery. We can identify struggling students early and intervene before they fall behind.",
    author: "Dr. Robert Kim",
    title: "Associate Dean for Medical Education",
    institution: "East Coast Medical School"
  },
  {
    quote: "Implementation was seamless with our Canvas LMS. Students love the gamified approach, and faculty appreciate the alignment with our curriculum standards.",
    author: "Dr. Lisa Thompson",
    title: "Chief Academic Officer",
    institution: "Regional Health Sciences University"
  }
];

export default function InstitutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 py-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary mb-2 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Building2 className="w-8 h-8 text-primary" />
            For Institutions & Enterprises
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Trusted by 50+ Institutions Nationwide</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Elevate Medical Education <br />
            <span className="text-primary">At Your Institution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Empower your students with adaptive, evidence-based learning technology that improves 
            outcomes, scales effortlessly, and integrates seamlessly with your existing systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors shadow-lg"
            >
              Schedule a Demo
            </Link>
            <Link
              href="#pricing"
              className="px-8 py-4 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Institutions Choose Scrubs to Be</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <div className="text-sm font-semibold text-primary mb-2">{benefit.stat}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Solutions for Every Educational Setting</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <div key={idx} className="p-8 rounded-2xl border border-border bg-card">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{useCase.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold mb-3">Proven Results:</div>
                    {useCase.results.map((result, ridx) => (
                      <div key={ridx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Features Checklist */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Enterprise Features & Capabilities</h2>
          <div className="p-8 rounded-2xl border border-border bg-card">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">What Education Leaders Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-border bg-card">
                <div className="mb-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-yellow-500">★</div>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed mb-4">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-primary">{testimonial.title}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.institution}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Transparent Institutional Pricing</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Flexible pricing models designed for educational institutions. Volume discounts available.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl border border-border bg-card">
              <h3 className="text-2xl font-bold mb-2">Small Program</h3>
              <div className="text-sm text-muted-foreground mb-4">50-250 students</div>
              <div className="mb-6">
                <div className="text-4xl font-bold">$15</div>
                <div className="text-muted-foreground">per student/year</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Full platform access</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Email support</span>
                </li>
              </ul>
              <Link href="/contact" className="block w-full py-3 text-center rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors">
                Contact Sales
              </Link>
            </div>

            <div className="p-8 rounded-2xl border-2 border-primary bg-primary/5 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Medium Institution</h3>
              <div className="text-sm text-muted-foreground mb-4">250-1,000 students</div>
              <div className="mb-6">
                <div className="text-4xl font-bold">$12</div>
                <div className="text-muted-foreground">per student/year</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Everything in Small</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>LMS integration</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Dedicated support</span>
                </li>
              </ul>
              <Link href="/contact" className="block w-full py-3 text-center rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                Contact Sales
              </Link>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-card">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-sm text-muted-foreground mb-4">1,000+ students</div>
              <div className="mb-6">
                <div className="text-4xl font-bold">Custom</div>
                <div className="text-muted-foreground">volume pricing</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Everything in Medium</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>White-label options</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Custom content</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>API access</span>
                </li>
              </ul>
              <Link href="/contact" className="block w-full py-3 text-center rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Seamless Implementation in 4 Weeks</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { week: "Week 1", title: "Discovery & Planning", desc: "Requirements gathering and technical assessment" },
              { week: "Week 2", title: "Integration & Setup", desc: "LMS integration and SSO configuration" },
              { week: "Week 3", title: "Training & Content", desc: "Faculty training and content customization" },
              { week: "Week 4", title: "Launch & Support", desc: "Student onboarding and ongoing support" }
            ].map((phase, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{idx + 1}</span>
                </div>
                <div className="text-sm font-semibold text-primary mb-2">{phase.week}</div>
                <h3 className="font-bold mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="p-12 rounded-2xl bg-gradient-to-br from-primary via-blue-600 to-purple-600 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Institution?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule a personalized demo and discover how Scrubs to Be can enhance learning outcomes at your institution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-lg bg-white text-primary font-bold hover:bg-gray-100 transition-colors"
              >
                Schedule Demo
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 rounded-lg border-2 border-white text-white font-bold hover:bg-white/10 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
