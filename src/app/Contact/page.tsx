"use client"
import { motion } from "framer-motion"
import { ArrowRight, Send, MessageSquare, Calendar, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// Generate grid background lines
const generateGridLines = (count: number) => {
  return Array.from({ length: count }).map((_, i) => i)
}

export default function ContactPage() {
  // Grid lines
  const horizontalLines = generateGridLines(12)
  const verticalLines = generateGridLines(12)

  return (
    <div className="relative min-h-screen bg-black text-white pt-32 pb-20 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-full w-full grid grid-cols-12 opacity-15">
          {verticalLines.map((i) => (
            <div key={`v-${i}`} className="border-r border-white/10 h-full"></div>
          ))}
        </div>
        <div className="absolute top-0 left-0 h-full w-full grid grid-rows-12 opacity-15">
          {horizontalLines.map((i) => (
            <div key={`h-${i}`} className="border-b border-white/10 w-full"></div>
          ))}
        </div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-white mb-6 mx-auto"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind or want to schedule a strategy call? We're here to help you transform your digital
            vision into reality.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Information - 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-10"
            >
              <div>
                <h2 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 border border-white/20 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-gray-400">info@asyndev.ai</p>
                      <p className="text-gray-400">support@asyndev.ai</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 border border-white/20 flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                      <p className="text-gray-400">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 border border-white/20 flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Location</h3>
                      <p className="text-gray-400">123 Innovation Drive</p>
                      <p className="text-gray-400">San Francisco, CA 94103</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
                <div className="flex space-x-4">
                  {["Twitter", "LinkedIn", "GitHub", "Dribbble"].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="border border-white/20 hover:border-white/60 w-12 h-12 flex items-center justify-center transition-colors duration-300"
                    >
                      <span className="sr-only">{platform}</span>
                      <div className="w-5 h-5 bg-white/80"></div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form - 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3 border border-white/10 p-8"
            >
              <div className="flex items-center space-x-6 mb-8 border-b border-white/10 pb-6">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-6 w-6" />
                  <h2 className="text-2xl font-bold">Contact Form</h2>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <a href="#strategy-call" className="flex items-center space-x-3 text-gray-400 hover:text-white">
                  <Calendar className="h-6 w-6" />
                  <span className="font-medium">Schedule a Call</span>
                </a>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-300">
                      First Name*
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      required
                      className="bg-transparent border-white/20 focus:border-white text-white placeholder:text-gray-500 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-300">
                      Last Name*
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      required
                      className="bg-transparent border-white/20 focus:border-white text-white placeholder:text-gray-500 h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email Address*
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-transparent border-white/20 focus:border-white text-white placeholder:text-gray-500 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-300">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="bg-transparent border-white/20 focus:border-white text-white placeholder:text-gray-500 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium text-gray-300">
                    Subject*
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    required
                    className="bg-transparent border-white/20 focus:border-white text-white placeholder:text-gray-500 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message*
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project or inquiry..."
                    required
                    className="min-h-[150px] bg-transparent border-white/20 focus:border-white text-white placeholder:text-gray-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-200 rounded-none py-6 text-base font-medium group"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Strategy Call Section */}
        <div id="strategy-call" className="max-w-6xl mx-auto mt-24 pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Schedule a <span className="block text-4xl md:text-5xl font-extrabold mt-2">Strategy Call</span>
              </h2>
              <p className="text-lg text-gray-300">
                Book a dedicated session with our experts to discuss your project in detail. We'll help you define the
                scope, explore technical solutions, and create a roadmap for success.
              </p>
              <ul className="space-y-4">
                {[
                  "In-depth project analysis",
                  "Technical feasibility assessment",
                  "Budget and timeline planning",
                  "Custom solution recommendations",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-white mr-3"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-none px-8 py-7 text-lg font-medium group mt-4">
                Book Your Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
                <div className="relative bg-white overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/3 h-1/3 bg-black"></div>
                  </div>
                </div>
                <div className="relative bg-black border border-white overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/3 h-1/3 bg-white"></div>
                  </div>
                </div>
                <div className="relative bg-black border border-white overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/3 h-1/3 bg-white"></div>
                  </div>
                </div>
                <div className="relative bg-white overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/3 h-1/3 bg-black"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
