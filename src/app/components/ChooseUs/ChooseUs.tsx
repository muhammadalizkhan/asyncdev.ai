"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Code, Cpu, Gem, Globe, Layers, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored solutions built specifically for your unique business requirements and challenges.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Future-proof systems designed to grow seamlessly with your business needs.",
  },
  {
    icon: Zap,
    title: "Rapid Delivery",
    description: "Efficient development processes ensuring quick time-to-market without compromising quality.",
  },
  {
    icon: Globe,
    title: "Global Expertise",
    description: "Access to world-class talent with experience across diverse industries and technologies.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Tech",
    description: "Implementation of the latest technologies to give your business a competitive advantage.",
  },
  {
    icon: Gem,
    title: "Quality Assurance",
    description: "Rigorous testing methodologies ensuring robust, reliable, and secure software solutions.",
  },
]

const generateGridLines = (count: number) => {
  return Array.from({ length: count }).map((_, i) => i)
}

export default function ChooseUs() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const horizontalLines = generateGridLines(12)
  const verticalLines = generateGridLines(12)

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-full w-full grid grid-cols-12 opacity-15">
          {verticalLines.map((i) => (
            <div key={i} className="border-r border-white/10 h-full"></div>
          ))}
        </div>
        <div className="absolute top-0 left-0 h-full w-full grid grid-rows-12 opacity-15">
          {horizontalLines.map((i) => (
            <div key={i} className="border-b border-white/10 w-full"></div>
          ))}
        </div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-start mb-16 md:mb-24 max-w-3xl"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-white mb-6 md:mb-8 max-w-[100px]"
          />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight lg:text-6xl mb-6">
            <span className="block">Why</span>
            <span className="block text-5xl sm:text-6xl md:text-7xl font-extrabold mt-2">Choose Us</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            We combine technical excellence with deep industry knowledge to deliver custom software that drives your
            business forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="flex flex-col">
                  <div className="flex items-center mb-6 group">
                    <div className="w-12 h-12 border border-white/20 flex items-center justify-center mr-4 transition-colors duration-300 group-hover:border-white/40">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>

                  <p className="text-gray-400 mb-4">{feature.description}</p>

                  <motion.div
                    animate={{
                      x: hoveredFeature === index ? 5 : 0,
                      opacity: hoveredFeature === index ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <span className="text-sm font-medium mr-2">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-20"
        >
          <Button className="bg-white text-black hover:bg-gray-200 rounded-none px-8 py-7 text-lg font-medium group">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
