"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Search, Layers, Heart, Bone, Brain as BrainIcon, Eye, Ear, ChevronDown, ChevronUp } from "lucide-react";
import { allDefinitions } from "./definitions";

// Sample encyclopedia entries
const encyclopediaEntries = [
  {
    id: 1,
    title: "Cardiovascular System",
    icon: Heart,
    description: "The heart and blood vessels that pump and circulate blood throughout the body",
    category: "Systems",
    color: "red",
    topics: [
      "Heart Anatomy",
      "Blood Vessels",
      "Cardiac Cycle",
      "Blood Pressure",
      "Common Conditions"
    ]
  },
  {
    id: 2,
    title: "Skeletal System",
    icon: Bone,
    description: "The framework of bones and cartilage that provides structure and support",
    category: "Systems",
    color: "gray",
    topics: [
      "Bone Structure",
      "Major Bones",
      "Joints & Ligaments",
      "Bone Growth",
      "Fractures & Healing"
    ]
  },
  {
    id: 3,
    title: "Nervous System",
    icon: BrainIcon,
    description: "The brain, spinal cord, and nerves that control body functions and sensations",
    category: "Systems",
    color: "purple",
    topics: [
      "Brain Anatomy",
      "Spinal Cord",
      "Neurons & Synapses",
      "Reflexes",
      "Neurological Disorders"
    ]
  },
  {
    id: 4,
    title: "Visual System",
    icon: Eye,
    description: "The eyes and related structures responsible for vision and visual processing",
    category: "Sensory",
    color: "blue",
    topics: [
      "Eye Anatomy",
      "Vision Process",
      "Common Eye Conditions",
      "Visual Cortex",
      "Color Perception"
    ]
  },
  {
    id: 5,
    title: "Auditory System",
    icon: Ear,
    description: "The ears and structures involved in hearing and balance",
    category: "Sensory",
    color: "orange",
    topics: [
      "Ear Anatomy",
      "Sound Processing",
      "Balance Mechanism",
      "Hearing Loss",
      "Inner Ear Disorders"
    ]
  },
  {
    id: 6,
    title: "Respiratory System",
    icon: Layers,
    description: "The lungs and airways that facilitate breathing and gas exchange",
    category: "Systems",
    color: "cyan",
    topics: [
      "Lung Anatomy",
      "Gas Exchange",
      "Breathing Mechanics",
      "Respiratory Disorders",
      "Oxygen Transport"
    ]
  }
];

const colorClasses = {
  red: {
    bg: "bg-red-500/10",
    text: "text-red-500",
    border: "border-red-500/20",
    hover: "hover:border-red-500/50"
  },
  gray: {
    bg: "bg-gray-500/10",
    text: "text-gray-500",
    border: "border-gray-500/20",
    hover: "hover:border-gray-500/50"
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-500",
    border: "border-purple-500/20",
    hover: "hover:border-purple-500/50"
  },
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-500",
    border: "border-blue-500/20",
    hover: "hover:border-blue-500/50"
  },
  orange: {
    bg: "bg-orange-500/10",
    text: "text-orange-500",
    border: "border-orange-500/20",
    hover: "hover:border-orange-500/50"
  },
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-500",
    border: "border-cyan-500/20",
    hover: "hover:border-cyan-500/50"
  }
};

export default function EncyclopediaPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAllDefinitions, setShowAllDefinitions] = useState(false);
  const [definitionsSearch, setDefinitionsSearch] = useState("");
  const [expandedDefinition, setExpandedDefinition] = useState<number | null>(null);
  const [selectedEntry, setSelectedEntry] = useState<number | null>(null);

  const filteredEntries = encyclopediaEntries.filter(entry => {
    const matchesSearch = entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         entry.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || entry.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(encyclopediaEntries.map(e => e.category)));

  const filteredDefinitions = allDefinitions.filter(def => {
    const matchesSearch = def.term.toLowerCase().includes(definitionsSearch.toLowerCase()) ||
                         def.definition.toLowerCase().includes(definitionsSearch.toLowerCase());
    return matchesSearch;
  });

  const getEntryDefinitions = (entryId: number) => {
    return allDefinitions.filter(def => def.categoryId === entryId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-5 py-6">
          <Link href="/hub" className="text-sm text-muted-foreground hover:text-primary mb-2 inline-block">
            ← Back to Hub
          </Link>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            Medical Encyclopedia
          </h1>
          <p className="text-muted-foreground mt-2">
            Explore comprehensive medical knowledge with interactive 3D models
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-12">
        {/* All Definitions Section */}
        <div className="mb-12">
          <button
            onClick={() => setShowAllDefinitions(!showAllDefinitions)}
            className="w-full p-6 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-purple-500/5 hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold mb-1">All Definitions</h2>
                  <p className="text-muted-foreground text-sm">
                    Browse all {allDefinitions.length} medical terms and definitions
                  </p>
                </div>
              </div>
              {showAllDefinitions ? (
                <ChevronUp className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              ) : (
                <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              )}
            </div>
          </button>

          {showAllDefinitions && (
            <div className="mt-6 p-6 rounded-2xl border border-border bg-card">
              {/* Definitions Search */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search all definitions..."
                  value={definitionsSearch}
                  onChange={(e) => setDefinitionsSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              {/* Definitions Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto pr-2">
                {filteredDefinitions.map(def => {
                  const entryColors = colorClasses[encyclopediaEntries.find(e => e.id === def.categoryId)?.color as keyof typeof colorClasses];
                  
                  return (
                    <div
                      key={def.id}
                      className={`p-4 rounded-xl border ${entryColors?.border || 'border-border'} ${entryColors?.bg || 'bg-muted/20'} hover:shadow-lg transition-all duration-200 cursor-pointer`}
                      onClick={() => setExpandedDefinition(expandedDefinition === def.id ? null : def.id)}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className={`font-bold text-sm ${entryColors?.text || 'text-foreground'}`}>
                          {def.term}
                        </h3>
                        {expandedDefinition === def.id ? (
                          <ChevronUp className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        ) : (
                          <ChevronDown className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        )}
                      </div>
                      <p className={`text-xs text-muted-foreground mb-2 ${expandedDefinition === def.id ? '' : 'line-clamp-2'}`}>
                        {def.definition}
                      </p>
                      <span className="text-xs text-muted-foreground/70">
                        {def.category}
                      </span>
                    </div>
                  );
                })}
              </div>

              {filteredDefinitions.length === 0 && (
                <div className="text-center py-12">
                  <Search className="w-12 h-12 mx-auto mb-3 text-muted-foreground/50" />
                  <p className="text-muted-foreground">No definitions found</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search encyclopedia entries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-5 py-2 rounded-lg font-medium transition-colors ${
                !selectedCategory
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              All Categories
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Model Feature Banner */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Layers className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Interactive 3D Models</h3>
              <p className="text-muted-foreground">
                Each encyclopedia entry includes immersive 3D anatomical models that you can rotate, zoom, and explore layer by layer. 
                Click on any entry to access interactive visualizations.
              </p>
            </div>
          </div>
        </div>

        {/* Encyclopedia Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEntries.map(entry => {
            const Icon = entry.icon;
            const colors = colorClasses[entry.color as keyof typeof colorClasses];
            const entryDefinitions = getEntryDefinitions(entry.id);
            const isExpanded = selectedEntry === entry.id;
            
            return (
              <div
                key={entry.id}
                className={`group rounded-2xl border ${colors.border} bg-card hover:shadow-2xl ${colors.hover} transition-all duration-300 ${isExpanded ? 'md:col-span-2 lg:col-span-3' : ''}`}
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setSelectedEntry(isExpanded ? null : entry.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-7 h-7 ${colors.text}`} />
                      </div>
                      
                      <div className="mb-2">
                        <span className={`text-xs font-semibold ${colors.text} uppercase tracking-wide`}>
                          {entry.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3">{entry.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {entry.description}
                      </p>

                      {/* Topics List */}
                      {!isExpanded && (
                        <div className="space-y-2 mb-4">
                          {entry.topics.slice(0, 3).map((topic, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className={`w-1.5 h-1.5 rounded-full ${colors.bg}`} />
                              <span>{topic}</span>
                            </div>
                          ))}
                          {entry.topics.length > 3 && (
                            <div className="text-sm text-muted-foreground pl-3.5">
                              +{entry.topics.length - 3} more topics
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {isExpanded ? (
                      <ChevronUp className={`w-6 h-6 ${colors.text} flex-shrink-0 ml-4`} />
                    ) : (
                      <ChevronDown className={`w-6 h-6 ${colors.text} flex-shrink-0 ml-4`} />
                    )}
                  </div>

                  <div className={`flex items-center gap-2 ${colors.text} font-semibold text-sm mt-auto`}>
                    <span>{isExpanded ? 'Hide' : 'View'} {entryDefinitions.length} Definitions</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>

                {/* Expanded Definitions */}
                {isExpanded && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-border pt-6">
                      <h4 className="text-lg font-bold mb-4">Medical Definitions ({entryDefinitions.length})</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {entryDefinitions.map(def => (
                          <div
                            key={def.id}
                            className={`p-4 rounded-xl border ${colors.border} ${colors.bg} hover:shadow-md transition-all duration-200`}
                          >
                            <h5 className={`font-bold text-sm mb-2 ${colors.text}`}>
                              {def.term}
                            </h5>
                            <p className="text-xs text-muted-foreground">
                              {def.definition}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredEntries.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
            <h3 className="text-xl font-bold mb-2">No entries found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Coming Soon Banner */}
        <div className="mt-12 p-8 rounded-2xl border border-border bg-card text-center">
          <h3 className="text-2xl font-bold mb-3">More Content Coming Soon</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos;re constantly expanding our medical encyclopedia with new systems, detailed articles, 
            and interactive 3D models. Check back regularly for updates!
          </p>
        </div>
      </div>
    </div>
  );
}
