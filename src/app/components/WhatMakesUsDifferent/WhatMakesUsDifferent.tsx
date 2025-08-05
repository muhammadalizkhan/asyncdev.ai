"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Lightbulb, Puzzle, Shield, Target, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const differentiators = [
  {
    id: "approach",
    icon: Lightbulb,
    title: "Consultative Approach",
    description:
      "We partner closely with you, diving deep into your vision to craft solutions that truly align with your strategic goals.",
    points: [
      "In-depth discovery workshops",
      "Comprehensive business process analysis",
      "Strategic technology roadmapping",
      "Continuous stakeholder collaboration",
    ],
  },
  {
    id: "expertise",
    icon: Puzzle,
    title: "Cross-Domain Expertise",
    description:
      "Our diverse team brings a wealth of knowledge from various industries, enabling us to tackle your most complex challenges with innovative solutions.",
    points: [
      "Full-stack development capabilities",
      "Specialized domain knowledge (finance, healthcare, retail)",
      "Exceptional UX/UI design",
      "Advanced data science & AI integration",
    ],
  },
  {
    id: "methodology",
    icon: Target,
    title: "Adaptive Methodology",
    description:
      "We tailor our proven development methodologies to fit your unique project needs, ensuring flexibility, transparency, and predictable outcomes.",
    points: [
      "Flexible Agile frameworks (Scrum, Kanban)",
      "Transparent progress tracking & reporting",
      "Iterative delivery cycles for rapid feedback",
      "Continuous feedback integration & refinement",
    ],
  },
  {
    id: "security",
    icon: Shield,
    title: "Security-First Mindset",
    description:
      "Security is embedded into every layer of our development process from day one, protecting your assets and ensuring compliance.",
    points: [
      "Secure Software Development Lifecycle (SSDLC)",
      "Regular penetration testing & vulnerability assessments",
      "Adherence to industry security standards (GDPR, HIPAA)",
      "Proactive threat intelligence & management",
    ],
  },
  {
    id: "partnership",
    icon: Users,
    title: "Lifetime Partnership",
    description:
      "Our commitment extends beyond deployment. We foster long-term relationships, providing ongoing support and strategic guidance for your evolving needs.",
    points: [
      "Comprehensive knowledge transfer & documentation",
      "Ongoing maintenance & technical support",
      "Regular system health checks & optimization",
      "Future-proof technology evolution planning",
    ],
  },
]

export default function WhatMakesUsDifferent() {
  const [activeTab, setActiveTab] = useState("approach")
  const activeDiff = differentiators.find((d) => d.id === activeTab) || differentiators[0]

  return (
    <section className="relative py-0 overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <div className="h-full w-full opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[10%] left-[5%] w-32 h-32 bg-white/5 rounded-lg rotate-45 backdrop-blur-xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            rotate: [45, 55, 45],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[8%] w-36 h-36 bg-white/5 rounded-full backdrop-blur-xl"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{
            y: [0, -35, 0],
            x: [0, 20, 0],
            rotate: [0, 15, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-[10%] w-28 h-28 bg-white/5 rounded-full backdrop-blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-start mb-12 md:mb-16 max-w-3xl"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-white mb-6 md:mb-8 max-w-[100px]"
          />
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            <span className="block text-5xl sm:text-6xl md:text-5xl font-extrabold mt-2">What Makes</span>
            <span className="block text-5xl sm:text-6xl md:text-5xl font-extrabold mt-2">Us Different</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Beyond standard development, we bring unique perspectives and capabilities that transform how your software
            performs.
          </p>
        </motion.div>

        {/* Differentiator Navigation (Horizontal Tabs) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 md:mb-16">
          {differentiators.map((diff) => {
            const IconComponent = diff.icon
            return (
              <motion.button
                key={diff.id}
                onClick={() => setActiveTab(diff.id)}
                className={cn(
                  "flex flex-col items-center justify-center w-40 h-32 p-4 rounded-lg border transition-all duration-200",
                  "bg-black/50 backdrop-blur-sm hover:border-white/30",
                  activeTab === diff.id ? "border-white/40 bg-white/10" : "border-white/10",
                )}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * differentiators.indexOf(diff) }}
                viewport={{ once: true }}
              >
                <IconComponent className="h-8 w-8 text-white mb-3" />
                <span className="text-base font-medium text-white text-center">{diff.title}</span>
              </motion.button>
            )
          })}
        </div>

        {/* Active Differentiator Content Area */}
        <motion.div
          key={activeDiff.id} // Key for re-animating content on tab change
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg p-8 md:p-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <activeDiff.icon className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">{activeDiff.title}</h3>
              <p className="text-lg text-gray-300">{activeDiff.description}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {activeDiff.points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 shrink-0 mt-1" />
                <span className="text-base text-gray-300">{point}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button className="bg-white text-black hover:bg-gray-200 rounded-none px-8 py-7 text-lg font-medium group">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}