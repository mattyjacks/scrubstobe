import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { BookOpen, Brain, Trophy, Users, TrendingUp, Clock, Award, Target } from "lucide-react";

export default async function HubPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 py-6">
          <h1 className="text-3xl font-bold mb-2">Welcome to Your Learning Hub</h1>
          <p className="text-muted-foreground">Continue your journey to becoming a healthcare professional</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-12">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold">0</span>
            </div>
            <p className="text-sm text-muted-foreground">Questions Completed</p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between mb-2">
              <Trophy className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold">0</span>
            </div>
            <p className="text-sm text-muted-foreground">Points Earned</p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold">0%</span>
            </div>
            <p className="text-sm text-muted-foreground">Accuracy Rate</p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold">0h</span>
            </div>
            <p className="text-sm text-muted-foreground">Study Time</p>
          </div>
        </div>

        {/* Main Navigation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Test Prep */}
          <Link href="/test-prep" className="group">
            <div className="p-8 rounded-2xl border border-border bg-card hover:shadow-2xl hover:border-primary/50 transition-all duration-300 h-full">
              <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Test Prep</h3>
              <p className="text-muted-foreground mb-4">
                Practice with medical questions and track your progress toward licensing exams
              </p>
              <div className="flex items-center text-primary font-semibold">
                Start Practicing →
              </div>
            </div>
          </Link>

          {/* Encyclopedia */}
          <Link href="/encyclopedia" className="group">
            <div className="p-8 rounded-2xl border border-border bg-card hover:shadow-2xl hover:border-primary/50 transition-all duration-300 h-full">
              <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Encyclopedia</h3>
              <p className="text-muted-foreground mb-4">
                Explore comprehensive medical knowledge with interactive 3D models and detailed articles
              </p>
              <div className="flex items-center text-primary font-semibold">
                Explore Now →
              </div>
            </div>
          </Link>

          {/* Newsletter */}
          <Link href="/newsletter" className="group">
            <div className="p-8 rounded-2xl border border-border bg-card hover:shadow-2xl hover:border-primary/50 transition-all duration-300 h-full">
              <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Newsletter</h3>
              <p className="text-muted-foreground mb-4">
                Stay updated with the latest in medical education and connect with the community
              </p>
              <div className="flex items-center text-primary font-semibold">
                Read Latest →
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="rounded-2xl border border-border bg-card p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Recent Activity</h2>
            <Link href="/progress" className="text-primary font-semibold hover:underline">
              View All
            </Link>
          </div>
          <div className="text-center py-12 text-muted-foreground">
            <Award className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No activity yet. Start your learning journey today!</p>
          </div>
        </div>

        {/* Recommended Next Steps */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">Recommended Next Steps</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                1
              </div>
              <Link href="/test-prep" className="text-foreground hover:text-primary font-medium">
                Take your first practice quiz
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                2
              </div>
              <Link href="/encyclopedia" className="text-foreground hover:text-primary font-medium">
                Explore 3D anatomical models
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                3
              </div>
              <Link href="/newsletter" className="text-foreground hover:text-primary font-medium">
                Subscribe to the newsletter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
