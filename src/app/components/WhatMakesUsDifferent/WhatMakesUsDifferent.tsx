"use client"

import { useState } from "react"
import { Check, ChevronRight, Lightbulb, Puzzle, Shield, Target, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const differentiators = [
  {
    id: "approach",
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Consultative Approach",
    description: "We don't just build what you ask for—we partner with you to discover what you truly need.",
    points: [
      "In-depth discovery workshops",
      "Business process analysis",
      "Strategic technology roadmapping",
      "Continuous stakeholder collaboration",
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    lightBg: "bg-blue-500/10",
  },
  {
    id: "expertise",
    icon: <Puzzle className="h-5 w-5" />,
    title: "Cross-Domain Expertise",
    description: "Our diverse team brings knowledge from multiple industries to solve your complex challenges.",
    points: [
      "Full-stack development capabilities",
      "Domain specialists in finance, healthcare & more",
      "UX/UI design excellence",
      "Data science & AI integration",
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    lightBg: "bg-purple-500/10",
  },
  {
    id: "methodology",
    icon: <Target className="h-5 w-5" />,
    title: "Adaptive Methodology",
    description: "We tailor our development approach to match your specific project needs and constraints.",
    points: [
      "Flexible Agile frameworks",
      "Transparent progress tracking",
      "Iterative delivery cycles",
      "Continuous feedback integration",
    ],
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    lightBg: "bg-amber-500/10",
  },
  {
    id: "security",
    icon: <Shield className="h-5 w-5" />,
    title: "Security-First Mindset",
    description: "We build protection into every layer of your software from day one, not as an afterthought.",
    points: [
      "Secure development lifecycle",
      "Regular penetration testing",
      "Compliance with industry standards",
      "Proactive vulnerability management",
    ],
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    lightBg: "bg-green-500/10",
  },
  {
    id: "support",
    icon: <Users className="h-5 w-5" />,
    title: "Lifetime Partnership",
    description: "Our relationship doesn't end at deployment—we're committed to your long-term success.",
    points: [
      "Comprehensive knowledge transfer",
      "Ongoing maintenance & support",
      "Regular system health checks",
      "Technology evolution planning",
    ],
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    lightBg: "bg-rose-500/10",
  },
]

export default function WhatMakesUsDifferent() {
  const [activeTab, setActiveTab] = useState("methodology")
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null)

  const activeDiff = differentiators.find((d) => d.id === activeTab) || differentiators[0]

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-[800px] mx-auto mb-10 text-center">
          <Badge className="mb-3" variant="outline">
            Our Difference
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Makes Us Different</h2>
          <p className="text-muted-foreground">
            Beyond standard development, we bring unique perspectives and capabilities that transform how your software
            performs.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-6 max-w-[1200px] mx-auto">
          {/* Sidebar Navigation */}
          <div className="md:col-span-5 lg:col-span-4 space-y-2">
            {differentiators.map((diff) => (
              <button
                key={diff.id}
                onClick={() => setActiveTab(diff.id)}
                className={cn(
                  "w-full text-left p-4 rounded-lg border transition-all duration-200",
                  "hover:bg-muted/50 flex items-start gap-3",
                  activeTab === diff.id ? `${diff.borderColor} ${diff.bgColor} border` : "border-border",
                )}
              >
                <div className={cn("rounded-lg p-2 shrink-0", diff.bgColor, diff.color)}>{diff.icon}</div>
                <div>
                  <h3 className={cn("font-medium", activeTab === diff.id ? diff.color : "text-foreground")}>
                    {diff.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{diff.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="md:col-span-7 lg:col-span-8">
            <Card className={cn("border overflow-hidden", activeDiff.borderColor)}>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                  <div className={cn("rounded-lg p-3 w-fit", activeDiff.bgColor, activeDiff.color)}>
                    {activeDiff.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{activeDiff.title}</h3>
                    <p className="text-muted-foreground">{activeDiff.description}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  {activeDiff.points.map((point, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredPoint(`${activeDiff.id}-${idx}`)}
                      onMouseLeave={() => setHoveredPoint(null)}
                      className={cn(
                        "flex items-start gap-3 p-3 rounded-lg transition-colors",
                        hoveredPoint === `${activeDiff.id}-${idx}` ? activeDiff.lightBg : "hover:bg-muted/50",
                      )}
                    >
                      <div className={cn("rounded-full p-1 mt-1 shrink-0", activeDiff.bgColor, activeDiff.color)}>
                        <Check className="h-3 w-3" />
                      </div>
                      <span className="text-sm">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button variant="outline" className={cn("group", activeDiff.color, activeDiff.borderColor)}>
                    Learn more about our {activeDiff.title.toLowerCase()}
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

