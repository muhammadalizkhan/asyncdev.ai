"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Compass, HeartHandshake, Lightbulb, Rocket, Trophy, Users } from "lucide-react"

const companyValues = [
  {
    id: "innovation",
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries to create solutions that are ahead of the curve.",
  },
  {
    id: "excellence",
    icon: Trophy,
    title: "Excellence",
    description: "We're committed to delivering exceptional quality in everything we do.",
  },
  {
    id: "collaboration",
    icon: HeartHandshake,
    title: "Collaboration",
    description: "We believe the best solutions come from working together with our clients.",
  },
  {
    id: "integrity",
    icon: Compass,
    title: "Integrity",
    description: "We maintain the highest standards of honesty and transparency in all our dealings.",
  },
]

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    bio: "With over 15 years in software development, Alex founded the company with a vision to create impactful digital solutions.",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    bio: "Sarah brings deep technical expertise in cloud architecture and AI, leading our engineering teams to excellence.",
  },
  {
    name: "Michael Rodriguez",
    role: "Design Director",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    bio: "Michael ensures our solutions are not just functional but deliver exceptional user experiences.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Client Success",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    bio: "Priya works closely with clients to ensure their vision is realized and expectations are exceeded.",
  },
]

const milestones = [
  {
    year: "2015",
    title: "Company Founded",
    description: "Started with a small team of 5 passionate developers.",
  },
  {
    year: "2017",
    title: "First Major Client",
    description: "Partnered with a Fortune 500 company to deliver enterprise solutions.",
  },
  {
    year: "2019",
    title: "International Expansion",
    description: "Opened offices in Europe and Asia to serve global clients.",
  },
  {
    year: "2021",
    title: "Innovation Award",
    description: "Recognized for our groundbreaking work in AI-driven applications.",
  },
  {
    year: "2023",
    title: "100th Client Milestone",
    description: "Celebrated delivering successful projects to our 100th client.",
  },
]

export default function WhoWeAre() {
  const [activeTab, setActiveTab] = useState("story")

  return (
    <section className="relative py-0 overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <div className="h-full w-full opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[10%] left-[5%] w-32 h-32 bg-white/5 rounded-lg rotate-45 backdrop-blur-xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            rotate: [45, 55, 45],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[8%] w-36 h-36 bg-white/5 rounded-full backdrop-blur-xl"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{
            y: [0, -35, 0],
            x: [0, 20, 0],
            rotate: [0, 15, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-[10%] w-28 h-28 bg-white/5 rounded-full backdrop-blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mb-16 md:mb-24">
          <div>
            <Badge className="mb-3 bg-white/10 text-gray-300 border border-white/20" variant="outline">
              Who We Are
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              <span className="block">Crafting Digital</span>
              <span className="block text-5xl sm:text-6xl md:text-7xl font-extrabold mt-2">Excellence Since 2015</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              We're a team of passionate technologists, designers, and problem solvers dedicated to transforming ideas
              into powerful software solutions. With expertise across multiple domains and technologies, we partner with
              businesses to create digital experiences that drive growth and innovation.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-4 bg-white/5 border border-white/10 rounded-lg">
                <div className="text-3xl font-bold text-white mb-1">8+</div>
                <div className="text-sm text-center text-gray-300">Years of Excellence</div>
              </div>
              <div className="flex flex-col items-center p-4 bg-white/5 border border-white/10 rounded-lg">
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-sm text-center text-gray-300">Successful Projects</div>
              </div>
              <div className="flex flex-col items-center p-4 bg-white/5 border border-white/10 rounded-lg">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-center text-gray-300">Team Members</div>
              </div>
              <div className="flex flex-col items-center p-4 bg-white/5 border border-white/10 rounded-lg">
                <div className="text-3xl font-bold text-white mb-1">12</div>
                <div className="text-sm text-center text-gray-300">Industry Awards</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 rounded-full bg-white/5 blur-3xl w-full h-full transform -translate-y-1/4 translate-x-1/4" />
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg overflow-hidden h-40 md:h-56"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Team collaboration"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="rounded-lg overflow-hidden h-48 md:h-64"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                    alt="Modern office space"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="rounded-lg overflow-hidden h-48 md:h-64"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Team meeting"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="rounded-lg overflow-hidden h-40 md:h-56"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Development work"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do, from how we develop software to how we interact with our clients.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value) => {
              const IconComponent = value.icon
              return (
                <Card key={value.id} className="border bg-black/40 backdrop-blur-xl border-white/10 text-white">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                    <p className="text-gray-300 text-base">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
