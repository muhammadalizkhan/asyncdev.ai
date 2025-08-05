"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "What is your custom software development process?",
    answer:
      "Our process typically involves several key phases: Discovery & Planning, UI/UX Design, Development & Iteration (Agile methodology), Quality Assurance & Testing, Deployment, and Post-Launch Support & Maintenance. We ensure transparency and collaboration at every step.",
  },
  {
    question: "How long does custom software development take?",
    answer:
      "The timeline varies greatly depending on the project's complexity, features, and scope. A simple application might take a few months, while complex enterprise solutions can take over a year. We provide a detailed timeline after the discovery phase.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in a wide range of modern technologies including React, Node.js, Python, AWS, Azure, Google Cloud, Docker, Kubernetes, various databases (SQL and NoSQL), and mobile development frameworks like React Native and Flutter. Our team continuously adapts to emerging technologies.",
  },
  {
    question: "How much does custom software development cost?",
    answer:
      "Custom software development costs depend on factors like project scope, complexity, features, and the technologies used. We offer flexible engagement models (fixed-price, time & material) and provide a transparent, detailed quote after understanding your specific needs during the discovery phase.",
  },
  {
    question: "Do you provide post-development support and maintenance?",
    answer:
      "Yes, we offer comprehensive post-development support and maintenance services to ensure your software runs smoothly. This includes bug fixes, performance optimization, security updates, feature enhancements, and technical support.",
  },
]

export default function FaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-full w-full opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      </div>
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.005] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[300px] bg-white/[0.003] rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        <motion.div
          className="text-center mb-20 lg:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <motion.div
            className="h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-12"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "120px", opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />

          <h2 className="text-5xl lg:text-7xl font-light tracking-tight mb-8">
            <span className="text-white font-extralight">Frequently</span>
            <br />
            <span className="font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Asked Questions
            </span>
          </h2>

          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Everything you need to know about our custom software development services.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {faqs.map((faq, index) => {
            const isOpen = openItem === index

            return (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  className="group relative"
                  layout
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="absolute inset-0 rounded-lg border border-white/[0.03] group-hover:border-white/[0.08] transition-colors duration-500" />

                  <div className="absolute inset-0 bg-white/[0.008] group-hover:bg-white/[0.015] backdrop-blur-sm rounded-lg transition-all duration-500" />

                  <button
                    className="relative w-full text-left p-8 lg:p-10 focus:outline-none focus:ring-1 focus:ring-white/10 rounded-lg transition-all duration-300"
                    onClick={() => setOpenItem(isOpen ? null : index)}
                  >
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="text-xl lg:text-2xl font-medium text-white group-hover:text-gray-100 transition-colors duration-300 leading-relaxed">
                        {faq.question}
                      </h3>

                      <motion.div
                        className="flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors duration-300"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        <Plus className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.25, 0.46, 0.45, 0.94],
                          opacity: { duration: 0.3 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="relative px-8 lg:px-10 pb-8 lg:pb-10">
                          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

                          <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                            className="text-gray-300 leading-relaxed text-lg font-light"
                          >
                            {faq.answer}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-white/5 rounded-lg blur-xl" />
            <div className="relative border border-white/10 rounded-lg p-8 bg-white/[0.01] backdrop-blur-sm">
              <h3 className="text-2xl font-light text-white mb-4">Still have questions?</h3>
              <p className="text-gray-400 mb-6 font-light">{"Get in touch with our team for personalized answers."}</p>
              <motion.button
                className="relative px-8 py-3 border border-white/20 text-white font-light rounded-lg hover:bg-white/5 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] rounded-lg transition-colors duration-300" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
