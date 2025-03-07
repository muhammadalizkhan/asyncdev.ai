"use client"

import { motion } from "framer-motion"
import { Code2, Smartphone, Cloud, Layout, Database, Blocks, Users, Laptop, Building } from "lucide-react"

const services = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Technical consulting",
    description:
      "Our experts design customized software project roadmaps to ensure your finished product complements your existing technology.",
    gradient: "from-blue-500/10 to-purple-500/10",
  },
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "New product development",
    description:
      "Our global team uses proprietary methodology to develop MVPs that bring new features to market faster while ensuring maximum quality.",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Legacy application modernization",
    description:
      "We offer modernization to improve the performance and capabilities of existing technologies in the most cost-effective way.",
    gradient: "from-pink-500/10 to-orange-500/10",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud development",
    description:
      "Our experts can help migrate your existing applications to the cloud or build new cloud-native apps optimized for performance.",
    gradient: "from-orange-500/10 to-yellow-500/10",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Full-stack development",
    description:
      "Our team takes a holistic approach to creating innovative applications with optimized front-end, back-end, and middleware integrations.",
    gradient: "from-yellow-500/10 to-green-500/10",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile app development",
    description:
      "We offer comprehensive mobile development services for native and hybrid applications with customizable frameworks.",
    gradient: "from-green-500/10 to-teal-500/10",
  },
  {
    icon: <Blocks className="h-6 w-6" />,
    title: "API-driven development",
    description:
      "By leveraging fully vetted API integrations with third-party services, we streamline development and build seamless communication.",
    gradient: "from-teal-500/10 to-cyan-500/10",
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: "UX/UI design and ideation",
    description:
      "We optimize user experience using root-cause analysis, interface architecture, and animation-driven experiences.",
    gradient: "from-cyan-500/10 to-blue-500/10",
  },
  {
    icon: <Building className="h-6 w-6" />,
    title: "Enterprise software development",
    description:
      "With industry-specific expertise, we deliver customized enterprise software solutions faster and easier than building them in-house.",
    gradient: "from-blue-500/10 to-indigo-500/10",
  },
]

export default function ServicesOffers() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[800px] w-[800px] rounded-full bg-gradient-to-r from-purple-100/40 to-pink-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Custom software development services we offer
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg text-gray-600">
            Empower your business with our comprehensive range of software development services, tailored to meet your
            specific needs and challenges.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 opacity-0 bg-gradient-to-r ${service.gradient} transition-opacity duration-300 group-hover:opacity-100`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-gray-600 transition-colors duration-300 group-hover:bg-white/90 group-hover:text-gray-900">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                  {service.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute -right-4 -top-4 h-16 w-16 rotate-45 bg-gradient-to-r from-gray-50 to-gray-100 transition-colors duration-300 group-hover:from-white/50 group-hover:to-white/60" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

