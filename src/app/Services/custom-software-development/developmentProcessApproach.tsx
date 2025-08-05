"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  Search,
  Palette,
  Code2,
  TestTube,
  Rocket,
  Headphones,
  Zap,
  Shield,
  Users,
  Target,
  Layers,
  GitBranch,
} from "lucide-react"

const processSteps = [
  {
    id: "01",
    title: "Discovery",
    subtitle: "Research & Planning",
    description: "Understanding your vision and technical requirements",
    icon: Search,
    duration: "1-2 weeks",
  },
  {
    id: "02",
    title: "Design",
    subtitle: "UI/UX & Architecture",
    description: "Creating user experiences and system blueprints",
    icon: Palette,
    duration: "2-3 weeks",
  },
  {
    id: "03",
    title: "Development",
    subtitle: "Code & Integration",
    description: "Building with modern technologies and best practices",
    icon: Code2,
    duration: "4-12 weeks",
  },
  {
    id: "04",
    title: "Testing",
    subtitle: "Quality Assurance",
    description: "Comprehensive testing across all platforms",
    icon: TestTube,
    duration: "1-2 weeks",
  },
  {
    id: "05",
    title: "Launch",
    subtitle: "Deployment & Go-Live",
    description: "Seamless production deployment with monitoring",
    icon: Rocket,
    duration: "3-5 days",
  },
  {
    id: "06",
    title: "Support",
    subtitle: "Maintenance & Growth",
    description: "Ongoing support and feature development",
    icon: Headphones,
    duration: "Ongoing",
  },
]

const methodologies = [
  {
    title: "Agile Development",
    description: "Iterative sprints with continuous client feedback and rapid adaptation",
    icon: Zap,
    highlight: "2-week sprints",
  },
  {
    title: "Quality Assurance",
    description: "Automated testing and code reviews ensure reliable software",
    icon: Shield,
    highlight: "99.9% uptime",
  },
  {
    title: "Transparent Process",
    description: "Regular updates, demos, and clear communication throughout",
    icon: Users,
    highlight: "Daily updates",
  },
  {
    title: "Scalable Architecture",
    description: "Future-proof solutions that grow with your business needs",
    icon: Layers,
    highlight: "Cloud-native",
  },
  {
    title: "Modern Tech Stack",
    description: "Cutting-edge technologies for optimal performance",
    icon: Target,
    highlight: "Latest frameworks",
  },
  {
    title: "DevOps Integration",
    description: "Automated deployment and continuous integration pipelines",
    icon: GitBranch,
    highlight: "CI/CD ready",
  },
]

export default function DevelopmentProcessApproach() {
  const [activeTab, setActiveTab] = useState<"process" | "methodology">("process")

  return (
    <section className="bg-black py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-sm text-gray-400 font-medium tracking-wide uppercase">AsyncDevCo AI</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Development Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Proven process and methodology that delivers exceptional software solutions
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-flex p-1 bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-white/[0.05] rounded-2xl" />
            <button
              onClick={() => setActiveTab("process")}
              className={`relative px-8 py-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === "process"
                  ? "bg-white/10 text-white shadow-lg backdrop-blur-sm"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.02]"
              }`}
            >
              Development Process
            </button>
            <button
              onClick={() => setActiveTab("methodology")}
              className={`relative px-8 py-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === "methodology"
                  ? "bg-white/10 text-white shadow-lg backdrop-blur-sm"
                  : "text-gray-400 hover:text-white hover:bg-white/[0.02]"
              }`}
            >
              Our Methodology
            </button>
          </div>
        </div>

        {/* Process Cards */}
        {activeTab === "process" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Glassy card background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent rounded-2xl backdrop-blur-xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-white/[0.05] rounded-2xl" />
                  <div className="absolute inset-[1px] bg-black/20 rounded-2xl backdrop-blur-sm" />

                  {/* Shiny border effect */}
                  <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-white/30 transition-colors duration-500" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative p-8 h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-white/[0.08] backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/[0.12] transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-mono text-gray-400 bg-white/[0.05] px-2 py-1 rounded-md">
                        {step.id}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-300">{step.subtitle}</p>
                      <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Duration */}
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <span className="text-xs text-gray-500">{step.duration}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        )}

        {/* Methodology Cards */}
        {activeTab === "methodology" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {methodologies.map((method, index) => {
              const IconComponent = method.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Glassy card background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent rounded-2xl backdrop-blur-xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-white/[0.05] rounded-2xl" />
                  <div className="absolute inset-[1px] bg-black/20 rounded-2xl backdrop-blur-sm" />

                  {/* Shiny border effect */}
                  <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-white/30 transition-colors duration-500" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative p-8 h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-white/[0.08] backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/[0.12] transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-md border border-green-400/20">
                        {method.highlight}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{method.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="relative inline-block">
            {/* Glassy CTA background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent rounded-2xl backdrop-blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-white/[0.05] rounded-2xl" />
            <div className="absolute inset-[1px] bg-black/20 rounded-2xl backdrop-blur-sm" />
            <div className="absolute inset-0 rounded-2xl border border-white/20" />

            <div className="relative p-10">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                {"Let's discuss your project and create a solution that exceeds expectations."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Project
                </motion.button>
                <motion.button
                  className="px-8 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/[0.05] transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Work
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
