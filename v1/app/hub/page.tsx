"use client";

import Link from "next/link";
import { BookOpen, Brain, Trophy, Users, TrendingUp, Clock, Target, Flame, Zap, Star, CheckCircle, Heart, Sparkles, ArrowUpRight, Calendar, BarChart3, Medal, Library, ExternalLink, FileText, Newspaper, Stethoscope, Microscope, Pill, Activity, Home, Menu, X } from "lucide-react";
import { useState } from "react";

export default function HubPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simulated data - in production, this would come from database
  const userData = {
    name: "Student",
    streak: 0,
    level: 1,
    xp: 0,
    xpToNextLevel: 1000,
    questionsCompleted: 0,
    points: 0,
    accuracy: 0,
    studyTime: 0,
    badges: [],
    recentActivity: []
  };

  const achievements = [
    { id: 1, name: "First Steps", description: "Complete your first quiz", icon: Target, unlocked: false, color: "text-blue-500", bgColor: "bg-blue-500/10" },
    { id: 2, name: "Quick Learner", description: "Complete 10 questions", icon: Zap, unlocked: false, color: "text-yellow-500", bgColor: "bg-yellow-500/10" },
    { id: 3, name: "Dedicated", description: "Maintain a 7-day streak", icon: Flame, unlocked: false, color: "text-orange-500", bgColor: "bg-orange-500/10" },
    { id: 4, name: "Perfect Score", description: "Get 100% on any quiz", icon: Star, unlocked: false, color: "text-purple-500", bgColor: "bg-purple-500/10" }
  ];

  const quickActions = [
    { title: "Continue General Exam", subtitle: "Question 3 of 5", href: "/test-prep", icon: Brain, color: "text-blue-500", bgColor: "bg-blue-500/10" },
    { title: "Study Cardiovascular System", subtitle: "15 min remaining", href: "/encyclopedia", icon: Heart, color: "text-red-500", bgColor: "bg-red-500/10" },
    { title: "Review Missed Questions", subtitle: "3 questions to review", href: "/test-prep", icon: CheckCircle, color: "text-green-500", bgColor: "bg-green-500/10" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/10 to-muted/20">
      {/* Navigation Bar */}
      <nav className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Stethoscope className="w-6 h-6 text-primary" />
              <span>Scrubs to Be</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Home className="w-4 h-4" />
                Home
              </Link>
              <Link href="/hub" className="text-primary font-semibold">
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
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-2">
                <Link 
                  href="/" 
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Home className="w-4 h-4" />
                  Home
                </Link>
                <Link 
                  href="/hub" 
                  className="px-3 py-2 rounded-lg text-primary font-semibold bg-primary/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hub
                </Link>
                <Link 
                  href="/test-prep" 
                  className="px-3 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Test Prep
                </Link>
                <Link 
                  href="/encyclopedia" 
                  className="px-3 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Encyclopedia
                </Link>
                <Link 
                  href="/about" 
                  className="px-3 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/institutions" 
                  className="px-3 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  For Institutions
                </Link>
                <Link 
                  href="/contact" 
                  className="px-3 py-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Header with Streak & Level */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Welcome Back, {userData.name}! 👋
              </h1>
              <p className="text-muted-foreground">Continue your journey to becoming a healthcare professional</p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Streak Counter */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
                <Flame className="w-5 h-5 text-orange-500" />
                <div>
                  <div className="text-xs text-muted-foreground">Streak</div>
                  <div className="text-lg font-bold text-orange-500">{userData.streak} days</div>
                </div>
              </div>
              
              {/* Level Badge */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Level</div>
                  <div className="text-lg font-bold text-primary">{userData.level}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* XP Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Progress to Level {userData.level + 1}</span>
              <span className="font-semibold">{userData.xp} / {userData.xpToNextLevel} XP</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary via-blue-500 to-purple-500 transition-all duration-500 rounded-full"
                style={{ width: `${(userData.xp / userData.xpToNextLevel) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-12">
        {/* Quick Actions - Prominent Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              Quick Actions
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, idx) => {
              const Icon = action.icon;
              return (
                <Link key={idx} href={action.href} className="group">
                  <div className={`p-6 rounded-xl border border-border bg-card hover:shadow-xl hover:border-primary/50 transition-all duration-300 ${action.bgColor}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl ${action.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 ${action.color}`} />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold mb-1">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.subtitle}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Enhanced Stats with Visual Appeal */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-blue-500/50 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <span className="text-3xl font-bold text-blue-500">{userData.questionsCompleted}</span>
            </div>
            <p className="text-sm font-medium text-muted-foreground">Questions Completed</p>
            <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-0 group-hover:w-full transition-all duration-500" />
            </div>
          </div>

          <div className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-yellow-500/50 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 rounded-xl bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors">
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
              <span className="text-3xl font-bold text-yellow-500">{userData.points}</span>
            </div>
            <p className="text-sm font-medium text-muted-foreground">Points Earned</p>
            <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-yellow-500 w-0 group-hover:w-full transition-all duration-500" />
            </div>
          </div>

          <div className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-green-500/50 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 rounded-xl bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <span className="text-3xl font-bold text-green-500">{userData.accuracy}%</span>
            </div>
            <p className="text-sm font-medium text-muted-foreground">Accuracy Rate</p>
            <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-0 group-hover:w-full transition-all duration-500" />
            </div>
          </div>

          <div className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                <Clock className="w-6 h-6 text-purple-500" />
              </div>
              <span className="text-3xl font-bold text-purple-500">{userData.studyTime}h</span>
            </div>
            <p className="text-sm font-medium text-muted-foreground">Study Time</p>
            <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 w-0 group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Medal className="w-6 h-6 text-primary" />
              Achievements
            </h2>
            <Link href="/achievements" className="text-primary font-semibold hover:underline text-sm">
              View All
            </Link>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={achievement.id} 
                  className={`p-6 rounded-xl border ${achievement.unlocked ? 'border-primary/50 bg-card' : 'border-border bg-muted/30'} transition-all duration-300 ${achievement.unlocked ? 'hover:shadow-lg' : 'opacity-60'}`}
                >
                  <div className={`w-16 h-16 rounded-full ${achievement.unlocked ? achievement.bgColor : 'bg-muted'} flex items-center justify-center mx-auto mb-4 ${achievement.unlocked ? 'animate-pulse' : ''}`}>
                    <Icon className={`w-8 h-8 ${achievement.unlocked ? achievement.color : 'text-muted-foreground'}`} />
                  </div>
                  <h3 className="font-bold text-center mb-2">{achievement.name}</h3>
                  <p className="text-xs text-muted-foreground text-center">{achievement.description}</p>
                  {!achievement.unlocked && (
                    <div className="mt-3 text-center">
                      <span className="text-xs font-semibold text-muted-foreground">🔒 Locked</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Study Calendar */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                This Week
              </h2>
            </div>
            <div className="space-y-3">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                <div key={day} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <span className="font-semibold">{day}</span>
                  <div className="flex items-center gap-2">
                    {idx < 0 ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm text-muted-foreground">15 min</span>
                      </>
                    ) : (
                      <span className="text-sm text-muted-foreground">Not started</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Chart */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                Performance Trends
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">General Medical</span>
                  <span className="text-sm font-bold">0%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: '0%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Cardiology</span>
                  <span className="text-sm font-bold">0%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-red-500" style={{ width: '0%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Anesthesiology</span>
                  <span className="text-sm font-bold">0%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: '0%' }} />
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-lg bg-muted/30">
              <p className="text-sm text-muted-foreground text-center">
                Complete exams to see your performance trends
              </p>
            </div>
          </div>
        </div>

        {/* Main Navigation Cards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            Explore Learning Paths
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/test-prep" className="group">
              <div className="relative overflow-hidden p-8 rounded-2xl border border-border bg-gradient-to-br from-blue-500/10 to-blue-500/5 hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Brain className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Test Prep</h3>
                  <p className="text-muted-foreground mb-4">
                    3 specialized exams with randomized questions
                  </p>
                  <div className="flex items-center text-blue-500 font-semibold">
                    Start Practicing
                    <ArrowUpRight className="w-5 h-5 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/encyclopedia" className="group">
              <div className="relative overflow-hidden p-8 rounded-2xl border border-border bg-gradient-to-br from-green-500/10 to-green-500/5 hover:shadow-2xl hover:border-green-500/50 transition-all duration-300 h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-green-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Encyclopedia</h3>
                  <p className="text-muted-foreground mb-4">
                    6 systems with interactive 3D models
                  </p>
                  <div className="flex items-center text-green-500 font-semibold">
                    Explore Now
                    <ArrowUpRight className="w-5 h-5 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/newsletter" className="group">
              <div className="relative overflow-hidden p-8 rounded-2xl border border-border bg-gradient-to-br from-purple-500/10 to-purple-500/5 hover:shadow-2xl hover:border-purple-500/50 transition-all duration-300 h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Community</h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with 25,000+ medical students
                  </p>
                  <div className="flex items-center text-purple-500 font-semibold">
                    Join Now
                    <ArrowUpRight className="w-5 h-5 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Medical Library Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Library className="w-6 h-6 text-primary" />
            Free Medical Resources Library
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* PubMed */}
            <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <FileText className="w-6 h-6 text-blue-500" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-bold mb-2">PubMed</h3>
              <p className="text-sm text-muted-foreground">35+ million citations for biomedical literature from MEDLINE and life science journals</p>
            </a>

            {/* WHO Resources */}
            <a href="https://www.who.int/health-topics" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-green-500/10">
                  <Activity className="w-6 h-6 text-green-500" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-bold mb-2">WHO Health Topics</h3>
              <p className="text-sm text-muted-foreground">Comprehensive health information and guidelines from the World Health Organization</p>
            </a>

            {/* CDC Resources */}
            <a href="https://www.cdc.gov/" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-red-500/10">
                  <Stethoscope className="w-6 h-6 text-red-500" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-bold mb-2">CDC Resources</h3>
              <p className="text-sm text-muted-foreground">Disease control, prevention guidelines, and public health information</p>
            </a>

            {/* Gray's Anatomy */}
            <a href="https://www.bartleby.com/lit-hub/grays-anatomy/" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-purple-500/10">
                  <BookOpen className="w-6 h-6 text-purple-500" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-bold mb-2">Gray&apos;s Anatomy</h3>
              <p className="text-sm text-muted-foreground">Classic anatomical reference text available free online</p>
            </a>

            {/* OpenMD */}
            <a href="https://www.ncbi.nlm.nih.gov/books/NBK547852/" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-orange-500/10">
                  <Microscope className="w-6 h-6 text-orange-500" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-bold mb-2">NCBI Bookshelf</h3>
              <p className="text-sm text-muted-foreground">Free access to books and documents in life science and healthcare</p>
            </a>

            {/* MedlinePlus */}
            <a href="https://medlineplus.gov/" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-cyan-500/10">
                  <Pill className="w-6 h-6 text-cyan-500" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-bold mb-2">MedlinePlus</h3>
              <p className="text-sm text-muted-foreground">Trusted health information from the National Library of Medicine</p>
            </a>
          </div>
        </div>

        {/* Newsletter & Community Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Newspaper className="w-6 h-6 text-primary" />
            Stay Connected
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Newsletter */}
            <Link href="/newsletter" className="group">
              <div className="p-8 rounded-xl border border-border bg-card hover:shadow-xl hover:border-primary/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-4 rounded-lg bg-primary/10">
                    <Newspaper className="w-8 h-8 text-primary" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">Weekly Newsletter</h3>
                <p className="text-muted-foreground mb-4">
                  Get the latest medical education tips, study strategies, and platform updates delivered to your inbox every week
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>10,000+ subscribers</span>
                </div>
              </div>
            </Link>

            {/* Community */}
            <Link href="/newsletter" className="group">
              <div className="p-8 rounded-xl border border-border bg-card hover:shadow-xl hover:border-primary/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-4 rounded-lg bg-purple-500/10">
                    <Users className="w-8 h-8 text-purple-500" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">Join the Community</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with fellow medical students on Discord and Reddit. Share notes, ask questions, and collaborate
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>25,000+ active members</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Motivational Banner */}
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary via-blue-600 to-purple-600 text-white shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ready to Level Up? 🚀</h2>
              <p className="text-white/90 text-lg">
                Complete your first exam today and earn 100 XP!
              </p>
            </div>
            <Link
              href="/test-prep"
              className="px-8 py-4 rounded-lg bg-white text-primary font-bold hover:bg-gray-100 transition-colors shadow-xl whitespace-nowrap"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-background/80 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-5 py-12">
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
                <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><a href="mailto:support@scrubstobe.com" className="hover:text-primary transition-colors">Support</a></li>
                <li><a href="mailto:legal@scrubstobe.com" className="hover:text-primary transition-colors">Legal</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Scrubs to Be. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
              <a href="mailto:support@scrubstobe.com" className="hover:text-primary transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
