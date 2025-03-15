"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layers, Smartphone, Sparkles, Terminal } from "lucide-react"
import { tabData } from "@/app/Data/TabsData"
import { toolTabdata } from "@/app/Data/TechnologyDetails"
import { cn } from "@/lib/utils"

// Map icons to categories
const getCategoryIcon = (category: string) => {
  const icons: Record<string, JSX.Element> = {
    "Backend Development": <Terminal className="h-5 w-5" />,
    "Frontend Development": <Layers className="h-5 w-5" />,
    "Mobile App Development": <Smartphone className="h-5 w-5" />,
    "Web App Development": <Globe className="h-5 w-5" />,
    DevOps: <Code className="h-5 w-5" />,
    "Database and reporting": <Database className="h-5 w-5" />,
    "Testing and Automation": <Sparkles className="h-5 w-5" />,
  }

  return icons[category] || <Code className="h-5 w-5" />
}

// Map descriptions to categories
const getCategoryDescription = (category: string) => {
  const descriptions: Record<string, string> = {
    "Backend Development": "Robust, scalable server-side solutions for complex business needs",
    "Frontend Development": "Modern, responsive user interfaces built with cutting-edge technologies",
    "Mobile App Development": "Cross-platform and native mobile applications for iOS and Android",
    "Web App Development": "Feature-rich web applications with exceptional user experiences",
    "Custom Software Development": "Tailored software solutions designed to address your unique business challenges",
    "Cloud Computing": "Scalable, secure cloud infrastructure and deployment solutions",
    DevOps: "Streamlined development operations for continuous delivery",
    "Low Code Development": "Rapid application development with minimal hand-coding",
    "Software Quality Assurance": "Comprehensive testing to ensure your software meets the highest standards",
    "Ecommerce Development": "Custom online stores and marketplaces built for growth",
    "CMS Development": "Flexible content management systems for easy content updates",
    "Testing and Automation": "Automated testing frameworks to ensure quality and reliability",
  }

  return descriptions[category] || "Innovative solutions using the latest technologies"
}

export default function Technology() {
  const [activeCategory, setActiveCategory] = useState(tabData[0].tabName)
  const [activeToolCategory, setActiveToolCategory] = useState(toolTabdata[0].tabName)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    // Set loaded state after a short delay to ensure smooth animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
      clearTimeout(timer)
    }
  }, [])

  // Get current active category data
  const activeCategoryData = tabData.find((cat) => cat.tabName === activeCategory) || tabData[0]
  const activeToolCategoryData = toolTabdata.find((cat) => cat.tabName === activeToolCategory) || toolTabdata[0]

  return (
    <div className="bg-white">
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full bg-primary/5 blur-3xl opacity-70" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full bg-primary/5 blur-3xl opacity-70" />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4">Our Technology Stack</Badge>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Cutting-Edge Technologies</h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Explore the technologies that power our solutions and witness innovation firsthand. We showcase our
              proficiency in a wide range of cutting-edge technologies across various domains.
            </p>
          </div>

          {/* Creative Tab Navigation */}
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative w-full max-w-4xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-full blur-md" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-sm border border-muted/30">
                  <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory py-1">
                    {tabData.map((category, index) => (
                      <button
                        key={category.tabName}
                        onClick={() => setActiveCategory(category.tabName)}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 snap-start",
                          "text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20",
                          activeCategory === category.tabName
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "hover:bg-muted/50 text-muted-foreground",
                        )}
                      >
                        <span
                          className={cn(
                            "flex items-center justify-center w-6 h-6 rounded-full",
                            activeCategory === category.tabName ? "bg-primary-foreground/20" : "bg-muted",
                          )}
                        >
                          {getCategoryIcon(category.tabName)}
                        </span>
                        <span>{category.tabName}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Category Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold mb-3">{activeCategory}</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">{getCategoryDescription(activeCategory)}</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                  {activeCategoryData.technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: isLoaded ? 1 : 0,
                        y: isLoaded ? 0 : 10,
                        transition: { delay: index * 0.05, duration: 0.3 },
                      }}
                    >
                      <Card
                        className={cn(
                          "overflow-hidden border bg-white h-full transition-all duration-300",
                          "hover:shadow-md hover:border-primary/20 group",
                        )}
                      >
                        <CardContent className="p-4 flex flex-col items-center justify-center">
                          <div className="relative w-14 h-14 md:w-16 md:h-16 mb-3 transition-transform duration-300 group-hover:scale-110">
                            <Image
                              src={tech.imageUrl || "/placeholder.svg"}
                              alt={tech.name}
                              width={80}
                              height={80}
                              className="object-contain"
                              loading={index < 12 ? "eager" : "lazy"}
                              onLoad={() => index === 0 && setIsLoaded(true)}
                            />
                          </div>
                          <p className="text-sm font-medium text-center line-clamp-2">{tech.name}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-muted/10">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Tools & Frameworks</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              We leverage our deep industry expertise and strategic approach to create innovative solutions that
              effectively address your business challenges – delivering true value and not just ticking off tasks.
            </p>
          </div>

          {/* Creative Tool Tabs */}
          <div className="flex justify-center mb-10 overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex space-x-2 p-1 bg-muted/20 rounded-lg">
              {toolTabdata.map((category) => (
                <button
                  key={category.tabName}
                  onClick={() => setActiveToolCategory(category.tabName)}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300",
                    activeToolCategory === category.tabName
                      ? "bg-white shadow-sm text-primary"
                      : "text-muted-foreground hover:bg-white/50",
                  )}
                >
                  {category.tabName}
                </button>
              ))}
            </div>
          </div>

          {/* Tool Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeToolCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 md:gap-6"
            >
              {activeToolCategoryData.tabContent.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: isLoaded ? 1 : 0,
                    scale: isLoaded ? 1 : 0.9,
                    transition: { delay: index * 0.03, duration: 0.3 },
                  }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 border border-muted/30"
                >
                  <div className="relative w-12 h-12 md:w-14 md:h-14">
                    <Image
                      src={tool.imageUrl || "/placeholder.svg"}
                      alt={`Tool ${index + 1}`}
                      width={60}
                      height={60}
                      className="object-contain"
                      loading={index < 12 ? "eager" : "lazy"}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-muted/10 to-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-muted-foreground mb-8 text-sm md:text-base">
              Our team of experts is ready to help you leverage these technologies to create innovative solutions for
              your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 md:px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 md:px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}