"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Search, Palette, Code2, TestTube, Rocket, Headphones, ArrowUpRight, Zap, Shield, Target } from "lucide-react"

const processSteps = [
  {
    id: "01",
    phase: "Discovery",
    title: "Strategic Planning & Research",
    description:
      "Deep-dive analysis of your business requirements, market research, and technical feasibility assessment.",
    icon: Search,
    duration: "1-2 weeks",
    keyPoints: ["Business Analysis", "Technical Audit", "Competitive Research", "Risk Assessment"],
    outcome: "Comprehensive project blueprint with clear objectives and success metrics.",
  },
  {
    id: "02",
    phase: "Design",
    title: "Experience & Architecture Design",
    description: "User-centered design approach combined with scalable system architecture planning.",
    icon: Palette,
    duration: "2-3 weeks",
    keyPoints: ["User Experience Design", "System Architecture", "Database Design", "API Planning"],
    outcome: "Complete design system and technical architecture ready for development.",
  },
  {
    id: "03",
    phase: "Development",
    title: "Agile Development & Integration",
    description: "Iterative development using modern frameworks with continuous integration and deployment.",
    icon: Code2,
    duration: "4-12 weeks",
    keyPoints: ["Clean Code Practices", "API Development", "Database Implementation", "Third-party Integrations"],
    outcome: "Fully functional application with robust backend and intuitive frontend.",
  },
  {
    id: "04",
    phase: "Testing",
    title: "Quality Assurance & Optimization",
    description: "Comprehensive testing across all platforms with performance optimization and security audits.",
    icon: TestTube,
    duration: "1-2 weeks",
    keyPoints: ["Automated Testing", "Manual QA", "Performance Testing", "Security Audit"],
    outcome: "Production-ready application with verified quality and performance standards.",
  },
  {
    id: "05",
    phase: "Launch",
    title: "Deployment & Go-Live",
    description: "Seamless deployment to production with monitoring, analytics, and performance tracking setup.",
    icon: Rocket,
    duration: "3-5 days",
    keyPoints: ["Production Deployment", "Monitoring Setup", "Analytics Integration", "Performance Tracking"],
    outcome: "Live application with full monitoring and analytics infrastructure.",
  },
  {
    id: "06",
    phase: "Growth",
    title: "Support & Evolution",
    description: "Ongoing maintenance, feature development, and scaling support as your business grows.",
    icon: Headphones,
    duration: "Ongoing",
    keyPoints: ["24/7 Monitoring", "Feature Updates", "Performance Optimization", "Scaling Support"],
    outcome: "Continuously evolving platform that grows with your business needs.",
  },
]

const stats = [
  { label: "Projects Delivered", value: "150+", icon: Target },
  { label: "Client Satisfaction", value: "99%", icon: Shield },
  { label: "Average Timeline", value: "8 weeks", icon: Zap },
]

export default function DevelopmentProcessApproach() {
  const [activeStep, setActiveStep] = useState<string>("01")
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section className="relative bg-black overflow-hidden" ref={containerRef}>
      {/* Advanced Background */}
      <div className="absolute inset-0">
        {/* Sophisticated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:100px_100px]" />

        {/* Dynamic gradient orbs */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-white/[0.02] to-transparent rounded-full blur-3xl"
          style={{ y, opacity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-white/[0.015] to-transparent rounded-full blur-3xl"
          style={{ y: useTransform(y, (value) => -value), opacity }}
        />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <div className="px-6 sm:px-8 lg:px-12 pt-32 pb-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center mb-20"
            >
              {/* Brand mark */}
              <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-300 tracking-wide">AsyncDevCo AI</span>
              </div>

              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight mb-8">
                <span className="block text-white/90">Our</span>
                <span className="block bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                  Process
                </span>
              </h1>

              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                A proven methodology that transforms ideas into exceptional software solutions through strategic
                planning, innovative design, and flawless execution.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 mb-4 group-hover:bg-white/[0.05] transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-white/70" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="px-6 sm:px-8 lg:px-12 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Timeline Navigation */}
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <h2 className="text-2xl font-semibold text-white mb-8">Development Phases</h2>
                  <div className="space-y-2">
                    {processSteps.map((step, index) => (
                      <motion.button
                        key={step.id}
                        onClick={() => setActiveStep(step.id)}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                          activeStep === step.id
                            ? "bg-white/[0.05] border border-white/20"
                            : "hover:bg-white/[0.02] border border-transparent"
                        }`}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                              activeStep === step.id
                                ? "bg-white/10 text-white"
                                : "bg-white/[0.03] text-gray-400 group-hover:text-white"
                            }`}
                          >
                            <span className="text-sm font-mono">{step.id}</span>
                          </div>
                          <div>
                            <div
                              className={`font-medium transition-colors duration-300 ${
                                activeStep === step.id ? "text-white" : "text-gray-300 group-hover:text-white"
                              }`}
                            >
                              {step.phase}
                            </div>
                            <div className="text-sm text-gray-500">{step.duration}</div>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="lg:col-span-8">
                {processSteps.map((step) => {
                  const IconComponent = step.icon
                  return (
                    <motion.div
                      key={step.id}
                      initial={false}
                      animate={{
                        opacity: activeStep === step.id ? 1 : 0,
                        y: activeStep === step.id ? 0 : 20,
                        display: activeStep === step.id ? "block" : "none",
                      }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="space-y-8"
                    >
                      {/* Header */}
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/20 flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-3">{step.title}</h3>
                          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">{step.description}</p>
                        </div>
                      </div>

                      {/* Key Points Grid */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="text-white font-semibold mb-4">Key Activities</h4>
                          <div className="space-y-3">
                            {step.keyPoints.map((point, index) => (
                              <div key={index} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                                <span className="text-gray-300">{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-white font-semibold mb-4">Expected Outcome</h4>
                          <p className="text-gray-300 leading-relaxed">{step.outcome}</p>
                        </div>
                      </div>

                      {/* Visual Element */}
                      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent rounded-2xl" />
                        <div className="relative">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm text-gray-400 font-mono">Phase {step.id}</span>
                            <span className="text-sm text-gray-400">{step.duration}</span>
                          </div>
                          <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-white/30 to-white/10 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: activeStep === step.id ? "100%" : 0 }}
                              transition={{ duration: 1, delay: 0.2 }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-6 sm:px-8 lg:px-12 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-white/[0.05] to-white/[0.02] rounded-3xl blur-xl" />
              <div className="relative p-12 rounded-3xl border border-white/10 bg-white/[0.01] backdrop-blur-sm">
                <h3 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Ideas?</h3>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                  {
                    "Let's discuss your project and create a custom development strategy that delivers exceptional results."
                  }
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    className="group px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Your Project
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </motion.button>

                  <motion.button
                    className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/[0.05] transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Case Studies
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
