"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus, Minus } from "lucide-react" // Using Plus/Minus for custom trigger icon

const faqs = [
  {
    question: "What is custom software development?",
    answer:
      "Custom software development involves designing, creating, deploying, and maintaining software applications specifically for a set of users, functions, or organizations. Unlike off-the-shelf software, custom solutions are tailored to meet unique business requirements and processes.",
  },
  {
    question: "Why should I choose custom software over off-the-shelf solutions?",
    answer:
      "Custom software offers several advantages: it perfectly aligns with your business processes, provides a competitive edge, scales with your growth, offers enhanced security, and eliminates unnecessary features found in generic solutions. It's an investment tailored for long-term efficiency and innovation.",
  },
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
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
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
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section
      className="relative overflow-hidden bg-black py-20 lg:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      {/* Grid background */}
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

      {/* Ambient lighting effects (subtle blurred circles) */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/1 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          variants={itemVariants} // Use itemVariants for header elements
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-white mx-auto mb-8"
          />
          <h2 className="mb-6 text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Frequently Asked
            <span className="block text-5xl lg:text-6xl font-extrabold mt-2 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg lg:text-xl text-gray-300 leading-relaxed">
            Find answers to common questions about our custom software development services.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={itemVariants}>
              <AccordionItem
                value={`item-${index}`}
                className="relative rounded-xl overflow-hidden border border-white/[0.05] hover:border-white/[0.1] transition-colors duration-300"
              >
                {/* Glass background for item */}
                <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-xl rounded-xl"></div>

                <AccordionTrigger className="relative z-10 flex justify-between items-center w-full text-left text-lg font-semibold text-white hover:text-gray-200 transition-colors duration-300 px-6 py-4">
                  {faq.question}
                  {/* Custom icon for trigger */}
                  <span className="accordion-icon transition-transform duration-300">
                    <Plus className="h-5 w-5 text-gray-400 group-data-[state=open]:hidden" />
                    <Minus className="h-5 w-5 text-white group-data-[state=closed]:hidden" />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="relative z-10 text-gray-300 px-6 pb-4 pt-0 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </motion.section>
  )
}
