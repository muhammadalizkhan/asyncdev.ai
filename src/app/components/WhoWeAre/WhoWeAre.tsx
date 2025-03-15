"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Compass, HeartHandshake, Lightbulb, Rocket, Trophy, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const companyValues = [
  {
    id: "innovation",
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Innovation",
    description: "We constantly push boundaries to create solutions that are ahead of the curve.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    id: "excellence",
    icon: <Trophy className="h-5 w-5" />,
    title: "Excellence",
    description: "We're committed to delivering exceptional quality in everything we do.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: "collaboration",
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Collaboration",
    description: "We believe the best solutions come from working together with our clients.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: "integrity",
    icon: <Compass className="h-5 w-5" />,
    title: "Integrity",
    description: "We maintain the highest standards of honesty and transparency in all our dealings.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
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
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center max-w-6xl mx-auto">
          <div>
            <Badge className="mb-3" variant="outline">
              Who We Are
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Crafting Digital Excellence Since 2015
            </h2>
            <p className="text-muted-foreground mb-6">
              We're a team of passionate technologists, designers, and problem solvers dedicated to transforming ideas
              into powerful software solutions. With expertise across multiple domains and technologies, we partner with
              businesses to create digital experiences that drive growth and innovation.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">8+</div>
                <div className="text-sm text-center text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-center text-muted-foreground">Successful Projects</div>
              </div>
              <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-center text-muted-foreground">Team Members</div>
              </div>
              <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-1">12</div>
                <div className="text-sm text-center text-muted-foreground">Industry Awards</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -z-10 rounded-full bg-primary/5 blur-3xl w-full h-full transform -translate-y-1/4 translate-x-1/4" />
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

        <div className="max-w-6xl mx-auto mt-16 md:mt-24">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from how we develop software to how we interact with our clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value) => (
              <Card key={value.id} className="border bg-white">
                <CardContent className="p-6">
                  <div className={cn("rounded-lg p-3 w-fit mb-4", value.bgColor, value.color)}>{value.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-16 md:mt-24">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="story" className="px-6">
                  Our Story
                </TabsTrigger>
                <TabsTrigger value="team" className="px-6">
                  Leadership
                </TabsTrigger>
                <TabsTrigger value="approach" className="px-6">
                  Our Approach
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="story" className="mt-0">
              <div className="relative">
                <div className="absolute left-0 top-0 w-px h-full bg-border ml-4 sm:ml-6 z-0" />
                <div className="space-y-8 relative z-10">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4 sm:gap-6"
                    >
                      <div className="flex flex-col items-center">
                        <div className="rounded-full bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center text-sm font-medium">
                          <Rocket className="h-4 w-4" />
                        </div>
                        <div className="text-sm font-semibold mt-2">{milestone.year}</div>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-4 sm:p-6 flex-1">
                        <h4 className="font-semibold mb-2">{milestone.title}</h4>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="team" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden border bg-white h-full">
                      <div className="aspect-square relative">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-semibold">{member.name}</h4>
                        <p className="text-primary text-sm mb-2">{member.role}</p>
                        <p className="text-muted-foreground text-sm">{member.bio}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="approach" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Our Development Philosophy</h4>
                  <p className="text-muted-foreground mb-6">
                    We believe in a collaborative, iterative approach that puts your business goals at the center of
                    everything we do. Our development process is designed to be transparent, efficient, and focused on
                    delivering real value.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-1">
                        <Code className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium">Agile Methodology</h5>
                        <p className="text-sm text-muted-foreground">
                          We work in short, focused sprints to deliver value quickly and adapt to changing requirements.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-1">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium">User-Centered Design</h5>
                        <p className="text-sm text-muted-foreground">
                          We put users at the heart of our design process to create intuitive, engaging experiences.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-1">
                        <Rocket className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium">Continuous Improvement</h5>
                        <p className="text-sm text-muted-foreground">
                          We're always learning, refining our processes, and staying ahead of industry trends.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Our approach"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h4 className="font-semibold text-lg mb-2">Collaborative Workshops</h4>
                      <p className="text-sm text-white/80">
                        We begin every project with in-depth discovery sessions to understand your vision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

