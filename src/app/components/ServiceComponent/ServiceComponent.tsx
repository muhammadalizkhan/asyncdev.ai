"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Database, Smartphone, Code, Cog, ShoppingBag, Palette, Cloud, Bug } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

const services = [
  {
    icon: Database,
    title: "Custom Software",
    description: "Tailored solutions to enhance business productivity and workflow.",
    path: "/Services/custom-software-development",
    color: "from-violet-600 to-purple-600",
    lightColor: "from-violet-500/10 to-purple-500/10",
    accentColor: "violet",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Standout Android and iOS apps that elevate your mobile presence.",
    path: "/Services/mobile-application-development",
    color: "from-blue-600 to-cyan-600",
    lightColor: "from-blue-500/10 to-cyan-500/10",
    accentColor: "blue",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Responsive, modern, and high-performing web applications.",
    path: "/Services/web-development",
    color: "from-emerald-600 to-green-600",
    lightColor: "from-emerald-500/10 to-green-500/10",
    accentColor: "emerald",
  },
  {
    icon: Cog,
    title: "DevOps",
    description: "Streamlined development pipelines with expert DevOps automation.",
    path: "/Services/devops",
    color: "from-orange-600 to-amber-600",
    lightColor: "from-orange-500/10 to-amber-500/10",
    accentColor: "orange",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce",
    description: "Secure and scalable ecosystem for your e-commerce business.",
    path: "/Services/ecommerce-ecosystem",
    color: "from-pink-600 to-rose-600",
    lightColor: "from-pink-500/10 to-rose-500/10",
    accentColor: "pink",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive interfaces that drive engagement and satisfaction.",
    path: "/Services/ui-ux-development",
    color: "from-indigo-600 to-blue-600",
    lightColor: "from-indigo-500/10 to-blue-500/10",
    accentColor: "indigo",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Seamless cloud migration with reliable management services.",
    path: "/Services/cloud-migration-management",
    color: "from-sky-600 to-blue-600",
    lightColor: "from-sky-500/10 to-blue-500/10",
    accentColor: "sky",
  },
  {
    icon: Bug,
    title: "QA & Testing",
    description: "Flawless software through rigorous QA and automated testing.",
    path: "/Services/qa-testing-automation",
    color: "from-red-600 to-orange-600",
    lightColor: "from-red-500/10 to-orange-500/10",
    accentColor: "red",
  },
]

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Parallax background effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150])

  // Mouse follower effect
  const springConfig = { damping: 25, stiffness: 150 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      if (containerRef.current) {
        const { left, top } = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: clientX - left,
          y: clientY - top,
        })
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Generate random floating particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const cardInViewStates = useRef<boolean[]>([])

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, services.length)
    cardInViewStates.current = Array(services.length).fill(false)
  }, [services.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            cardInViewStates.current[index] = entry.isIntersecting
          }
        })
      },
      {
        threshold: 0.1,
        // triggerOnce: true, // Removed triggerOnce to allow re-entry
      },
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <motion.section
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"
        style={{ y: backgroundY }}
      />

      {/* Floating particles */}
      {!isMobile &&
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
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* Mouse follower */}
      {!isMobile && (
        <motion.div
          className="absolute pointer-events-none w-80 h-80 rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 blur-3xl"
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
          className="flex flex-col items-start mb-20 space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center px-3 py-1 space-x-2 text-xs font-medium tracking-wider uppercase rounded-full bg-primary/10 text-primary">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-primary"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-primary"></span>
            </span>
            <span>Our Expertise</span>
          </div>

          <h2 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            <span className="block">Our</span>
            <span className="relative">
              <span className="relative z-10 inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                Services
              </span>
              <motion.span
                className="absolute bottom-0 left-0 w-full h-3 bg-primary/20"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
              />
            </span>
          </h2>

          <motion.p
            className="max-w-2xl text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Innovative solutions tailored to transform your digital presence and business operations.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Staggered grid layout */}
          <div
            className={cn(
              "grid gap-8",
              isMobile ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
            )}
          >
            {services.map((service, index) => {
              const Icon = service.icon

              return (
                <motion.div
                  key={index}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={cardInViewStates.current[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{
                    duration: 0.6,
                    delay: isMobile ? 0.1 * index : 0.1 * (index % 4),
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                  className="group relative"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <Link href={service.path} className="block h-full">
                    <div
                      className={cn(
                        "relative h-full overflow-hidden rounded-xl border border-border/50",
                        "bg-background/50 backdrop-blur-sm transition-all duration-500",
                        "hover:border-primary/20 hover:shadow-lg",
                        "dark:bg-background/30 dark:hover:bg-background/40",
                      )}
                    >
                      {/* Background gradient */}
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-5",
                          service.color,
                        )}
                      />

                      {/* Animated corner accent */}
                      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                        <div
                          className={cn(
                            "absolute top-0 right-0 w-20 h-20 -mt-10 -mr-10 rotate-45 bg-gradient-to-r opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                            service.color,
                          )}
                        />
                      </div>

                      <div className="relative z-10 p-6">
                        {/* Animated icon */}
                        <motion.div
                          className={cn(
                            "flex items-center justify-center w-16 h-16 mb-6 rounded-xl",
                            "bg-gradient-to-br transition-all duration-300",
                            service.lightColor,
                          )}
                          whileHover={{
                            scale: 1.1,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.5 },
                          }}
                        >
                          <Icon className={cn("w-7 h-7", `text-${service.accentColor}-500`)} />
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
                            opacity: activeIndex === index ? 1 : 0,
                            x: activeIndex === index ? 0 : -10,
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
            })}
          </div>
        </div>

        {/* Animated call to action */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="relative overflow-hidden group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
          >
            <span className="relative z-10">Explore All Services</span>
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}

