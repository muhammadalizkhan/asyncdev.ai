"use client"

import React, { useState, useRef, useCallback, useMemo, useEffect } from "react"
import Link from "next/link"
import { motion, useReducedMotion, useSpring, useTransform, useScroll } from "framer-motion"
import { Database, Smartphone, Code, Cog, ShoppingBag, Palette, Cloud, Bug } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { throttle } from "@/lib/utils"

const services = [
  {
    icon: Database,
    title: "Custom Software",
    description: "Tailored solutions to enhance business productivity and workflow.",
    path: "/Services/custom-software-development",
    color: "from-violet-600 to-purple-600",
    lightColor: "from-violet-500/10 to-purple-500/10",
    accentColor: "text-violet-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Standout Android and iOS apps that elevate your mobile presence.",
    path: "/Services/mobile-application-development",
    color: "from-blue-600 to-cyan-600",
    lightColor: "from-blue-500/10 to-cyan-500/10",
    accentColor: "text-blue-500",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Responsive, modern, and high-performing web applications.",
    path: "/Services/web-development",
    color: "from-emerald-600 to-green-600",
    lightColor: "from-emerald-500/10 to-green-500/10",
    accentColor: "text-emerald-500",
  },
  {
    icon: Cog,
    title: "DevOps",
    description: "Streamlined development pipelines with expert DevOps automation.",
    path: "/Services/devops",
    color: "from-orange-600 to-amber-600",
    lightColor: "from-orange-500/10 to-amber-500/10",
    accentColor: "text-orange-500",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce",
    description: "Secure and scalable ecosystem for your e-commerce business.",
    path: "/Services/ecommerce-ecosystem",
    color: "from-pink-600 to-rose-600",
    lightColor: "from-pink-500/10 to-rose-500/10",
    accentColor: "text-pink-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive interfaces that drive engagement and satisfaction.",
    path: "/Services/ui-ux-development",
    color: "from-indigo-600 to-blue-600",
    lightColor: "from-indigo-500/10 to-blue-500/10",
    accentColor: "text-indigo-500",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Seamless cloud migration with reliable management services.",
    path: "/Services/cloud-migration-management",
    color: "from-sky-600 to-blue-600",
    lightColor: "from-sky-500/10 to-blue-500/10",
    accentColor: "text-sky-500",
  },
  {
    icon: Bug,
    title: "QA & Testing",
    description: "Flawless software through rigorous QA and automated testing.",
    path: "/Services/qa-testing-automation",
    color: "from-red-600 to-orange-600",
    lightColor: "from-red-500/10 to-orange-500/10",
    accentColor: "text-red-500",
  },
]

// Generate optimized floating particles - fewer for mobile
const generateParticles = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }))
}

// Mobile-optimized service card
const MobileServiceCard = ({ service, index }: { service: (typeof services)[0]; index: number }) => {
  const Icon = service.icon

  // Simplified animation variants for mobile
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10px" }}
      className="group relative"
    >
      <Link href={service.path} className="block h-full">
        <div
          className={cn(
            "relative h-full overflow-hidden rounded-xl border border-border/50",
            "bg-background/50 backdrop-blur-sm",
            "active:scale-[0.98] transition-transform duration-200",
            "dark:bg-background/30",
          )}
        >
          {/* Static gradient background for mobile */}
          <div className={cn("absolute inset-0 bg-gradient-to-br opacity-5", service.color)} />

          <div className="relative z-10 p-5">
            {/* Static icon for mobile */}
            <div
              className={cn(
                "flex items-center justify-center w-14 h-14 mb-4 rounded-xl",
                "bg-gradient-to-br",
                service.lightColor,
              )}
            >
              <Icon className={cn("w-6 h-6", service.accentColor)} />
            </div>

            <h3 className="mb-2 text-xl font-semibold tracking-tight">{service.title}</h3>

            <p className="text-sm text-muted-foreground">{service.description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// Desktop service card with animations
const DesktopServiceCard = ({
  service,
  index,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: {
  service: (typeof services)[0]
  index: number
  isActive: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}) => {
  const Icon = service.icon
  const shouldReduceMotion = useReducedMotion()

  // Optimized animations for desktop
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
    hover: shouldReduceMotion
      ? {}
      : {
          scale: 1.03,
          transition: { duration: 0.2 },
        },
  }

  // Icon animation variants
  const iconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
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
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link href={service.path} className="block h-full">
        <div
          className={cn(
            "relative h-full overflow-hidden rounded-xl border border-border/50",
            "bg-background/50 backdrop-blur-sm transition-all duration-300",
            "hover:border-primary/20 hover:shadow-lg",
            "dark:bg-background/30 dark:hover:bg-background/40",
          )}
        >
          {/* Background gradient */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-5",
              service.color,
            )}
          />

          {/* Animated corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
            <motion.div
              className={cn(
                "absolute top-0 right-0 w-20 h-20 -mt-10 -mr-10 rotate-45 bg-gradient-to-r opacity-0 group-hover:opacity-100",
                service.color,
              )}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="relative z-10 p-6">
            {/* Animated icon */}
            <motion.div
              className={cn(
                "flex items-center justify-center w-16 h-16 mb-6 rounded-xl",
                "bg-gradient-to-br",
                service.lightColor,
              )}
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              <Icon className={cn("w-7 h-7", service.accentColor)} />
            </motion.div>

            <h3 className="mb-2 text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary">
              {service.title}
            </h3>

            <p className="text-sm text-muted-foreground">{service.description}</p>

            {/* Animated arrow */}
            <motion.div
              className="absolute bottom-6 right-6"
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ scale: 1.2 }}
              animate={{
                opacity: isActive ? 1 : 0,
                x: isActive ? 0 : -10,
              }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full",
                  "bg-gradient-to-r",
                  service.color,
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// Memoize the service card components
const MemoizedMobileServiceCard = React.memo(MobileServiceCard)
const MemoizedDesktopServiceCard = React.memo(DesktopServiceCard)

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()
  const shouldReduceMotion = useReducedMotion()

  // Scroll-based animations - only for desktop
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Parallax background effect - only for desktop
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])

  // Mouse follower effect - only for desktop
  const springConfig = { damping: 25, stiffness: 150 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  // Throttled mouse move handler - only for desktop
  useEffect(() => {
    if (isMobile || shouldReduceMotion) return

    const handleMouseMove = throttle((e: MouseEvent) => {
      const { clientX, clientY } = e
      if (containerRef.current) {
        const { left, top } = containerRef.current.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
      }
    }, 50)

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isMobile, mouseX, mouseY, shouldReduceMotion])

  // Generate optimized particles - fewer for better performance
  const particles = useMemo(
    () => generateParticles(isMobile ? 0 : 10), // No particles on mobile
    [isMobile],
  )

  const handleMouseEnter = useCallback(
    (index: number) => {
      if (!isMobile) setActiveIndex(index)
    },
    [isMobile],
  )

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) setActiveIndex(null)
  }, [isMobile])

  // Memoize the grid layout class
  const gridLayoutClass = useMemo(
    () => cn("grid gap-6", isMobile ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"),
    [isMobile],
  )

  // Simplified header animations
  const headerVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: isMobile ? 0.3 : 0.5 },
    },
  }

  return (
    <motion.section
      ref={containerRef}
      className="relative py-20 md:py-32 overflow-hidden bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background gradient - desktop only */}
      {!isMobile && !shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"
          style={{ y: backgroundY }}
        />
      )}

      {/* Floating particles - desktop only */}
      {!isMobile &&
        !shouldReduceMotion &&
        particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/10 dark:bg-primary/5"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* Mouse follower - desktop only */}
      {!isMobile && !shouldReduceMotion && (
        <motion.div
          className="absolute pointer-events-none w-60 h-60 rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 blur-3xl"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}

      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          className="flex flex-col items-start mb-12 md:mb-16 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
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
            variants={headerVariants}
            className="inline-flex items-center px-3 py-1 space-x-2 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-primary"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-primary"></span>
            </span>
            <span>Our Expertise</span>
          </motion.div>

          <motion.h2 variants={headerVariants} className="text-4xl md:text-5xl font-bold tracking-tight lg:text-6xl">
            <span className="block">Our</span>
            <span className="relative">
              <span className="relative z-10 inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                Services
              </span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-2 md:h-3 bg-primary/20"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: isMobile ? 0.5 : 1, delay: 0.3, ease: "easeInOut" }}
              />
            </span>
          </motion.h2>

          <motion.p variants={headerVariants} className="max-w-2xl text-lg md:text-xl text-muted-foreground">
            Innovative solutions tailored to transform your digital presence and business operations.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Conditional rendering based on device */}
          <div className={gridLayoutClass}>
            {services.map((service, index) =>
              isMobile ? (
                <MemoizedMobileServiceCard key={index} service={service} index={index} />
              ) : (
                <MemoizedDesktopServiceCard
                  key={index}
                  service={service}
                  index={index}
                  isActive={activeIndex === index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
              ),
            )}
          </div>
        </div>

        {/* Simplified CTA for mobile, animated for desktop */}
        <motion.div
          className="flex justify-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.3 : 0.5 }}
        >
          <Button
            size={isMobile ? "default" : "lg"}
            className={cn(
              "relative overflow-hidden group bg-gradient-to-r from-primary to-primary/80",
              "hover:from-primary/90 hover:to-primary",
            )}
          >
            <span className="relative z-10">Explore All Services</span>
            {!isMobile && !shouldReduceMotion && (
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            )}
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}

