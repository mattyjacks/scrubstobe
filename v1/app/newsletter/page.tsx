"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Send, CheckCircle2, Calendar, TrendingUp, Users, Award, Newspaper } from "lucide-react";

// Sample newsletter articles
const newsletters = [
  {
    id: 1,
    title: "Welcome to Scrubs to Be: Your Journey Begins",
    date: "2025-10-01",
    category: "Platform Updates",
    excerpt: "Discover how Scrubs to Be is revolutionizing medical education through adaptive learning, 3D anatomy, and blockchain credentials.",
    featured: true
  },
  {
    id: 2,
    title: "Study Tips: Mastering Medical Terminology",
    date: "2025-09-28",
    category: "Study Tips",
    excerpt: "Learn effective strategies for memorizing and understanding complex medical terminology with our expert-recommended techniques.",
    featured: false
  },
  {
    id: 3,
    title: "New Feature: Interactive 3D Heart Model",
    date: "2025-09-25",
    category: "New Features",
    excerpt: "Explore the cardiovascular system like never before with our newly released interactive 3D heart model featuring detailed chambers and vessels.",
    featured: false
  },
  {
    id: 4,
    title: "Community Spotlight: Success Stories",
    date: "2025-09-20",
    category: "Community",
    excerpt: "Meet Sarah, a pre-med student who improved her MCAT score by 15 points using Scrubs to Be's adaptive learning platform.",
    featured: false
  }
];

const stats = [
  { icon: Users, label: "Active Learners", value: "10,000+" },
  { icon: Award, label: "Credentials Issued", value: "2,500+" },
  { icon: TrendingUp, label: "Avg. Score Improvement", value: "15%" },
];

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-5 py-6">
          <Link href="/hub" className="text-sm text-muted-foreground hover:text-primary mb-2 inline-block">
            ← Back to Hub
          </Link>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Newspaper className="w-8 h-8 text-primary" />
            Newsletter & Updates
          </h1>
          <p className="text-muted-foreground mt-2">
            Stay informed about medical education trends, platform updates, and community success stories
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 py-12">
        {/* Subscribe Section */}
        <div className="mb-16 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary via-blue-600 to-purple-600 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Community
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get weekly insights, study tips, and exclusive updates delivered to your inbox
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-4 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-4 rounded-lg bg-white text-primary font-bold hover:bg-gray-100 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    "Subscribing..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Subscribe
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 bg-white/20 px-6 py-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-semibold">Successfully subscribed! Check your email for confirmation.</span>
              </div>
            )}

            <p className="text-sm mt-4 opacity-80">
              Join 10,000+ healthcare students already receiving our newsletter
            </p>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="p-6 rounded-xl border border-border bg-card text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Recent Newsletters */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recent Updates</h2>
          
          <div className="space-y-6">
            {newsletters.map(newsletter => (
              <article
                key={newsletter.id}
                className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  newsletter.featured
                    ? "border-primary bg-primary/5 hover:shadow-2xl"
                    : "border-border bg-card hover:shadow-xl hover:border-primary/50"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                      {newsletter.category}
                    </span>
                    {newsletter.featured && (
                      <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-600 text-xs font-semibold mb-3 ml-2">
                        Featured
                      </span>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{newsletter.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(newsletter.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {newsletter.excerpt}
                </p>
                
                <button className="text-primary font-semibold hover:underline flex items-center gap-2">
                  Read More
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </article>
            ))}
          </div>
        </div>

        {/* Community Channels */}
        <div className="p-8 rounded-2xl border border-border bg-card">
          <h2 className="text-2xl font-bold mb-6">Connect With Our Community</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="https://discord.gg/scrubstobe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-indigo-500" />
              </div>
              <h3 className="font-bold mb-2">Discord Community</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Join 5,000+ students discussing medical topics and sharing study tips
              </p>
              <span className="text-primary font-semibold text-sm group-hover:underline">
                Join Discord →
              </span>
            </a>

            <a
              href="https://reddit.com/r/scrubstobe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
                <Newspaper className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-bold mb-2">Reddit Community</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Participate in AMAs, discussions, and get peer support
              </p>
              <span className="text-primary font-semibold text-sm group-hover:underline">
                Visit Reddit →
              </span>
            </a>

            <a
              href="mailto:newsletter@scrubstobe.com"
              className="p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Email Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Weekly curated content delivered straight to your inbox
              </p>
              <span className="text-primary font-semibold text-sm group-hover:underline">
                Contact Us →
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
