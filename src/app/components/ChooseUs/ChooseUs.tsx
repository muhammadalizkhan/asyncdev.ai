"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Code, Cpu, Gem, Globe, Layers, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: <Code className="h-10 w-10" />,
    title: "Custom Development",
    description: "Tailored solutions built specifically for your unique business requirements and challenges.",
  },
  {
    icon: <Layers className="h-10 w-10" />,
    title: "Scalable Architecture",
    description: "Future-proof systems designed to grow seamlessly with your business needs.",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Rapid Delivery",
    description: "Efficient development processes ensuring quick time-to-market without compromising quality.",
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Global Expertise",
    description: "Access to world-class talent with experience across diverse industries and technologies.",
  },
  {
    icon: <Cpu className="h-10 w-10" />,
    title: "Cutting-Edge Tech",
    description: "Implementation of the latest technologies to give your business a competitive advantage.",
  },
  {
    icon: <Gem className="h-10 w-10" />,
    title: "Quality Assurance",
    description: "Rigorous testing methodologies ensuring robust, reliable, and secure software solutions.",
  },
]

export default function ChooseUs() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)

  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Transforming Ideas into Powerful Software Solutions
          </h2>
          <p className="text-muted-foreground max-w-[700px] mb-8">
            We combine technical excellence with deep industry knowledge to deliver custom software that drives your
            business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={cn(
                "border border-border/40 bg-background transition-all duration-300 hover:shadow-md hover:border-primary/20",
                activeFeature === index ? "border-primary/50 shadow-md" : "",
              )}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <CardHeader>
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
                <div
                  className={cn(
                    "flex items-center gap-1 text-primary font-medium mt-4 transition-opacity duration-300",
                    activeFeature === index ? "opacity-100" : "opacity-0",
                  )}
                >
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/5 px-6 py-3">
              <span className="text-sm font-medium text-primary">Ready to start your project?</span>
              <ArrowRight className="ml-2 h-4 w-4 text-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

