"use client"

import React, { useState, useRef, useMemo } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Database, Smartphone, Code, Cog, ShoppingBag, Palette, Cloud, Bug } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { ArrowRight } from "lucide-react"

const services = [
  {
    icon: Database,
    title: "Software Development",
    description: "Tailored solutions to enhance business productivity and workflow.",
    path: "/Services/custom-software-development",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Standout Android and iOS apps that elevate your mobile presence.",
    path: "/Services/mobile-application-development",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Responsive, modern, and high-performing web applications.",
    path: "/Services/web-development",
  },
  {
    icon: Cog,
    title: "DevOps",
    description: "Streamlined development pipelines with expert DevOps automation.",
    path: "/Services/devops",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce",
    description: "Secure and scalable ecosystem for your e-commerce business.",
    path: "/Services/ecommerce-ecosystem",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive interfaces that drive engagement and satisfaction.",
    path: "/Services/ui-ux-development",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Seamless cloud migration with reliable management services.",
    path: "/Services/cloud-migration-management",
  },
  {
    icon: Bug,
    title: "QA & Testing",
    description: "Flawless software through rigorous QA and automated testing.",
    path: "/Services/qa-testing-automation",
  },
]

// Generate grid background lines
const generateGridLines = (count: number) => {
  return Array.from({ length: count }).map((_, i) => i)
}

const ServiceCard = ({ service, index }: { service: (typeof services)[0]; index: number }) => {
  const Icon = service.icon
  const shouldReduceMotion = useReducedMotion()
  const [isHovered, setIsHovered] = useState(false)

  // Optimized animations
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.215, 0.61, 0.355, 1],
        delay: index * 0.1,
      },
    },
    hover: shouldReduceMotion
      ? {}
      : {
          scale: 1.02,
          transition: { duration: 0.2 },
        },
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={service.path} className="block h-full">
        <div
          className={cn(
            "relative h-full overflow-hidden border border-white/10",
            "bg-black/50 backdrop-blur-sm transition-all duration-300",
            "hover:border-white/30",
            "dark:bg-black/70 dark:hover:bg-black/80",
          )}
        >
          {/* Top right corner accent */}
          <motion.div
            className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          <div className="relative z-10 p-6 flex flex-col h-full">
            {/* Icon */}
            <div
              className={cn(
                "flex items-center justify-center w-16 h-16 mb-6 border border-white/20",
                "bg-black/50 transition-colors duration-300 group-hover:border-white/40",
              )}
            >
              <Icon className="w-7 h-7 text-white" />
            </div>

            <h3 className="mb-2 text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-white">
              {service.title}
            </h3>

            <p className="text-sm text-gray-400 mb-8">{service.description}</p>

            {/* Arrow - now part of the layout flow */}
            <div className="mt-auto flex justify-between items-center">
              <div className="h-[1px] bg-white/10 flex-grow mr-4 transition-all duration-300 group-hover:bg-white/30"></div>
              <motion.div
                className="flex items-center justify-center w-10 h-10 border border-white/20 bg-black/70 transition-colors duration-300 group-hover:border-white/40"
                animate={{
                  x: isHovered ? 0 : -5,
                  opacity: isHovered ? 1 : 0.7,
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// Memoize the service card component
const MemoizedServiceCard = React.memo(ServiceCard)

export default function ServicesSection() {
  const isMobile = useMobile()
  const shouldReduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  // Memoize the grid layout class
  const gridLayoutClass = useMemo(
    () => cn("grid gap-6", isMobile ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"),
    [isMobile],
  )

  // Grid lines
  const horizontalLines = generateGridLines(12)
  const verticalLines = generateGridLines(12)

  return (
    <motion.section
      ref={containerRef}
      className="relative py-20 md:py-32 overflow-hidden bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Grid background */}
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
          className="flex flex-col items-start mb-12 md:mb-16 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-white mb-6 md:mb-8 max-w-[100px]"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight lg:text-6xl"
          >
            <span className="block">Our</span>
            <span className="block text-5xl sm:text-6xl md:text-7xl font-extrabold mt-2">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-lg md:text-xl text-gray-300"
          >
            Innovative solutions tailored to transform your digital presence and business operations.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className={gridLayoutClass}>
            {services.map((service, index) => (
              <MemoizedServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          className="flex justify-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            size={isMobile ? "default" : "lg"}
            className="bg-white text-black hover:bg-gray-200 rounded-none px-8 py-7 text-lg font-medium group"
          >
            Explore All Services
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
