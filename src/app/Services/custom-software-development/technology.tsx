"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Code2, Server, Brain, Database, Palette, TestTube, Rocket, Globe, Zap } from "lucide-react"

// Helper function to get a dynamic logo URL (simulating a logo API)
// In a real app, this might fetch from a service like Simple Icons or your own CDN
const getTechLogoUrl = (techName: string) => {
  // Convert name to a slug for URL
  const slug = techName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
  // This is a placeholder URL. In a real scenario, you'd use a service like:
  // `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`
  // Or your own image CDN like Vercel Blob: `/api/images/tech/${slug}.png`
  // For now, we'll use a generic placeholder that still generates an image.
  return `/placeholder.svg?height=128&width=128&query=${slug}-logo`
}

const technologyCategories = {
  frontend: {
    title: "Frontend Development",
    icon: Code2,
    description: "Modern frameworks and libraries for exceptional user experiences",
    technologies: [
      {
        name: "React & Next.js",
        description: "Modern React framework with server-side rendering and static generation",
        image: getTechLogoUrl("React Next.js"),
        category: "Framework",
      },
      {
        name: "TypeScript",
        description: "Type-safe JavaScript for scalable and maintainable applications",
        image: getTechLogoUrl("TypeScript"),
        category: "Language",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapid UI development",
        image: getTechLogoUrl("Tailwind CSS"),
        category: "Styling",
      },
      {
        name: "Vue.js & Nuxt",
        description: "Progressive framework for building modern web applications",
        image: getTechLogoUrl("Vue.js Nuxt"),
        category: "Framework",
      },
      {
        name: "React Native",
        description: "Cross-platform mobile development with native performance",
        image: getTechLogoUrl("React Native"),
        category: "Mobile",
      },
      {
        name: "Flutter",
        description: "Google's UI toolkit for beautiful, natively compiled applications",
        image: getTechLogoUrl("Flutter"),
        category: "Mobile",
      },
    ],
  },
  backend: {
    title: "Backend Development",
    icon: Server,
    description: "Robust server-side technologies and scalable architectures",
    technologies: [
      {
        name: "Node.js & Express",
        description: "Fast, scalable server-side JavaScript runtime and framework",
        image: getTechLogoUrl("Node.js Express"),
        category: "Runtime",
      },
      {
        name: "Python & Django",
        description: "High-level Python framework for rapid development",
        image: getTechLogoUrl("Python Django"),
        category: "Framework",
      },
      {
        name: "Go & Gin",
        description: "Fast, simple, and efficient programming language for modern backends",
        image: getTechLogoUrl("Go Gin"),
        category: "Language",
      },
      {
        name: "Java & Spring",
        description: "Enterprise-grade framework for building robust applications",
        image: getTechLogoUrl("Java Spring"),
        category: "Framework",
      },
      {
        name: "GraphQL & REST",
        description: "Modern API development with flexible data querying",
        image: getTechLogoUrl("GraphQL REST"),
        category: "API",
      },
      {
        name: "Microservices",
        description: "Distributed architecture for scalable and maintainable systems",
        image: getTechLogoUrl("Microservices"),
        category: "Architecture",
      },
    ],
  },
  ai: {
    title: "AI & Machine Learning",
    icon: Brain,
    description: "Cutting-edge AI technologies and machine learning frameworks",
    technologies: [
      {
        name: "OpenAI & GPT",
        description: "Advanced language models and AI-powered applications",
        image: getTechLogoUrl("OpenAI GPT"),
        category: "AI Platform",
      },
      {
        name: "TensorFlow",
        description: "Open-source machine learning framework for production",
        image: getTechLogoUrl("TensorFlow"),
        category: "ML Framework",
      },
      {
        name: "PyTorch",
        description: "Dynamic neural networks and deep learning research platform",
        image: getTechLogoUrl("PyTorch"),
        category: "ML Framework",
      },
      {
        name: "Hugging Face",
        description: "Transformers and pre-trained models for NLP tasks",
        image: getTechLogoUrl("Hugging Face"),
        category: "AI Platform",
      },
      {
        name: "LangChain",
        description: "Framework for developing applications with language models",
        image: getTechLogoUrl("LangChain"),
        category: "AI Framework",
      },
      {
        name: "Computer Vision",
        description: "Image processing and computer vision solutions",
        image: getTechLogoUrl("Computer Vision"),
        category: "AI Domain",
      },
    ],
  },
  database: {
    title: "Database & Storage",
    icon: Database,
    description: "Modern database solutions and data management systems",
    technologies: [
      {
        name: "PostgreSQL",
        description: "Advanced open-source relational database system",
        image: getTechLogoUrl("PostgreSQL"),
        category: "SQL Database",
      },
      {
        name: "MongoDB",
        description: "Flexible, document-based NoSQL database solution",
        image: getTechLogoUrl("MongoDB"),
        category: "NoSQL Database",
      },
      {
        name: "Redis",
        description: "In-memory data structure store for caching and real-time apps",
        image: getTechLogoUrl("Redis"),
        category: "Cache Database",
      },
      {
        name: "Supabase",
        description: "Open-source Firebase alternative with PostgreSQL",
        image: getTechLogoUrl("Supabase"),
        category: "BaaS",
      },
      {
        name: "Prisma",
        description: "Next-generation ORM for Node.js and TypeScript",
        image: getTechLogoUrl("Prisma"),
        category: "ORM",
      },
      {
        name: "Elasticsearch",
        description: "Distributed search and analytics engine",
        image: getTechLogoUrl("Elasticsearch"),
        category: "Search Engine",
      },
    ],
  },
  uiux: {
    title: "UI/UX Design",
    icon: Palette,
    description: "Design tools and frameworks for exceptional user experiences",
    technologies: [
      {
        name: "Figma",
        description: "Collaborative design tool for UI/UX and prototyping",
        image: getTechLogoUrl("Figma"),
        category: "Design Tool",
      },
      {
        name: "Adobe Creative Suite",
        description: "Professional design software for graphics and multimedia",
        image: getTechLogoUrl("Adobe Creative Suite"),
        category: "Design Suite",
      },
      {
        name: "Framer Motion",
        description: "Production-ready motion library for React applications",
        image: getTechLogoUrl("Framer Motion"),
        category: "Animation",
      },
      {
        name: "Storybook",
        description: "Tool for building UI components and design systems",
        image: getTechLogoUrl("Storybook"),
        category: "Development",
      },
      {
        name: "Design Systems",
        description: "Scalable design patterns and component libraries",
        image: getTechLogoUrl("Design Systems"),
        category: "System",
      },
      {
        name: "User Research",
        description: "Data-driven insights for optimal user experiences",
        image: getTechLogoUrl("User Research"),
        category: "Research",
      },
    ],
  },
  testing: {
    title: "Testing & Quality",
    icon: TestTube,
    description: "Comprehensive testing frameworks and quality assurance tools",
    technologies: [
      {
        name: "Jest & Testing Library",
        description: "JavaScript testing framework with React testing utilities",
        image: getTechLogoUrl("Jest Testing Library"),
        category: "Unit Testing",
      },
      {
        name: "Cypress",
        description: "End-to-end testing framework for web applications",
        image: getTechLogoUrl("Cypress"),
        category: "E2E Testing",
      },
      {
        name: "Playwright",
        description: "Cross-browser automation and testing framework",
        image: getTechLogoUrl("Playwright"),
        category: "Browser Testing",
      },
      {
        name: "Postman",
        description: "API development and testing platform",
        image: getTechLogoUrl("Postman"),
        category: "API Testing",
      },
      {
        name: "SonarQube",
        description: "Code quality and security analysis platform",
        image: getTechLogoUrl("SonarQube"),
        category: "Code Quality",
      },
      {
        name: "Load Testing",
        description: "Performance testing tools for scalability validation",
        image: getTechLogoUrl("Load Testing"),
        category: "Performance",
      },
    ],
  },
  deployment: {
    title: "Deployment & DevOps",
    icon: Rocket,
    description: "Modern deployment strategies and infrastructure management",
    technologies: [
      {
        name: "AWS & Azure",
        description: "Enterprise cloud platforms for scalable infrastructure",
        image: getTechLogoUrl("AWS Azure"),
        category: "Cloud Platform",
      },
      {
        name: "Docker & Kubernetes",
        description: "Containerization and orchestration for modern deployments",
        image: getTechLogoUrl("Docker Kubernetes"),
        category: "Containerization",
      },
      {
        name: "Vercel & Netlify",
        description: "Modern deployment platforms for frontend applications",
        image: getTechLogoUrl("Vercel Netlify"),
        category: "Deployment",
      },
      {
        name: "GitHub Actions",
        description: "CI/CD workflows and automated deployment pipelines",
        image: getTechLogoUrl("GitHub Actions"),
        category: "CI/CD",
      },
      {
        name: "Terraform",
        description: "Infrastructure as code for cloud resource management",
        image: getTechLogoUrl("Terraform"),
        category: "Infrastructure",
      },
      {
        name: "Monitoring & Analytics",
        description: "Application performance monitoring and error tracking",
        image: getTechLogoUrl("Monitoring Analytics"),
        category: "Monitoring",
      },
    ],
  },
}

export default function Technology() {
  const [activeTab, setActiveTab] = useState<keyof typeof technologyCategories>("frontend")

  const tabIcons = {
    frontend: Globe,
    backend: Server,
    ai: Brain,
    database: Database,
    uiux: Palette,
    testing: TestTube,
    deployment: Rocket,
  }

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
            Technology Stack
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Cutting-edge technologies and tools we use to build exceptional software solutions
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div
            className="relative inline-flex p-1 bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/10 overflow-x-auto flex-nowrap
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-white/[0.05] rounded-2xl" />
            <div className="flex gap-1">
              {Object.entries(technologyCategories).map(([key, category]) => {
                const IconComponent = tabIcons[key as keyof typeof tabIcons]
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key as keyof typeof technologyCategories)}
                    className={`relative flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      activeTab === key
                        ? "bg-white/10 text-white shadow-lg backdrop-blur-sm"
                        : "text-gray-400 hover:text-white hover:bg-white/[0.02]"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="hidden sm:inline">{category.title}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Technology Cards & Category Description */}
        <motion.div
          key={activeTab} // Keep the key on the outer motion.div for proper animation
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Category Description - NOW INSIDE THE CONDITIONAL BLOCK */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              {(() => {
                const IconComponent = technologyCategories[activeTab].icon
                return <IconComponent className="w-6 h-6 text-white" />
              })()}
              <h2 className="text-2xl font-bold text-white">{technologyCategories[activeTab].title}</h2>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">{technologyCategories[activeTab].description}</p>
          </div>

          {/* Technology Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyCategories[activeTab].technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
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
                <div className="relative p-6 h-full">
                  {/* Technology Image */}
                  <div className="mb-6 overflow-hidden rounded-xl">
                    <img
                      src={tech.image || "/placeholder.svg"} // Use the dynamically generated URL
                      alt={tech.name}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                      crossOrigin="anonymous"
                    />
                  </div>

                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                      {tech.name}
                    </h3>
                    <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded-md border border-blue-400/20">
                      {tech.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
              <div className="flex items-center justify-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-white" />
                <h3 className="text-2xl font-bold text-white">Need Custom Technology Solutions?</h3>
              </div>
              <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                {"We adapt our technology stack to match your specific requirements and business goals."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Discuss Technology
                </motion.button>
                <motion.button
                  className="px-8 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/[0.05] transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Projects
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
