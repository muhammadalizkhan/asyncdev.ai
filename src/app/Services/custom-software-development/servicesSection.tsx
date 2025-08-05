"use client"

import { motion } from "framer-motion"
import { Code2, Smartphone, Cloud, Layout, Database, Blocks, Users, Laptop, Building } from "lucide-react"

const services = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Technical Consulting",
    description:
      "Our experts design customized software project roadmaps to ensure your finished product complements your existing technology.",
  },
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "New Product Development",
    description:
      "Our global team uses proprietary methodology to develop MVPs that bring new features to market faster while ensuring maximum quality.",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Legacy Application Modernization",
    description:
      "We offer modernization to improve the performance and capabilities of existing technologies in the most cost-effective way.",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud Development",
    description:
      "Our experts can help migrate your existing applications to the cloud or build new cloud-native apps optimized for performance.",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Full-Stack Development",
    description:
      "Our team takes a holistic approach to creating innovative applications with optimized front-end, back-end, and middleware integrations.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile App Development",
    description:
      "We offer comprehensive mobile development services for native and hybrid applications with customizable frameworks.",
  },
  {
    icon: <Blocks className="h-6 w-6" />,
    title: "API-Driven Development",
    description:
      "By leveraging fully vetted API integrations with third-party services, we streamline development and build seamless communication.",
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: "UX/UI Design & Ideation",
    description:
      "We optimize user experience using root-cause analysis, interface architecture, and animation-driven experiences.",
  },
  {
    icon: <Building className="h-6 w-6" />,
    title: "Enterprise Software Development",
    description:
      "With industry-specific expertise, we deliver customized enterprise software solutions faster and easier than building them in-house.",
  },
]

export default function ServicesOffersRealisticGlass() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  }

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-full w-full grid grid-cols-12 opacity-5">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border-r border-white/10 h-full"></div>
            ))}
        </div>
        <div className="absolute top-0 left-0 h-full w-full grid grid-rows-12 opacity-5">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border-b border-white/10 w-full"></div>
            ))}
        </div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-white/2 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-white/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-white/4 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative overflow-hidden">
              <div className="relative h-full rounded-2xl overflow-hidden">
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-500"></div>
                <div className="relative h-full backdrop-blur-xl bg-white/5 rounded-2xl p-8 transition-all duration-500 group-hover:bg-white/10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-white/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="mb-6 relative">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-110">
                        {service.icon}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                    <h3 className="mb-4 text-xl font-semibold text-white transition-all duration-300 group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="inline-flex items-center space-x-2 text-sm text-gray-400 mb-6">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-white/30"></div>
            <span>Ready to get started?</span>
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-white/30"></div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 group-hover:border-white/20 transition-colors duration-300"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 text-white font-medium">Discuss Your Project</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
