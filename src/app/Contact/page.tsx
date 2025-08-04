"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Send, MessageSquare, Calendar, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const generateGridLines = (count: number) => Array.from({ length: count })

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [responseMessage, setResponseMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResponseMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()
      if (res.ok) {
        setResponseMessage("✅ Message sent successfully!")
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        setResponseMessage("❌ Failed to send message.")
      }
    } catch (err) {
      console.error(err)
      setResponseMessage("❌ Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  const horizontalLines = generateGridLines(12)
  const verticalLines = generateGridLines(12)

  return (
    <div className="relative min-h-screen bg-black text-white pt-32 pb-20 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-full w-full grid grid-cols-12 opacity-15">
          {verticalLines.map((_, i) => (
            <div key={`v-${i}`} className="border-r border-white/10 h-full"></div>
          ))}
        </div>
        <div className="absolute top-0 left-0 h-full w-full grid grid-rows-12 opacity-15">
          {horizontalLines.map((_, i) => (
            <div key={`h-${i}`} className="border-b border-white/10 w-full"></div>
          ))}
        </div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ width: 0 }} animate={{ width: "100px" }} transition={{ duration: 0.8, delay: 0.2 }} className="h-[2px] bg-white mb-6 mx-auto" />
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Get in Touch
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to schedule a strategy call? We're here to help you transform your digital vision into reality.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left info */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">Contact Information</h2>
                <div className="space-y-8">
                  <ContactInfo icon={<Mail className="h-5 w-5" />} title="Email" lines={["info@asyndev.ai", "support@asyndev.ai"]} />
                  <ContactInfo icon={<Phone className="h-5 w-5" />} title="Phone" lines={["+1 (555) 123-4567", "Mon-Fri, 9AM-6PM EST"]} />
                  <ContactInfo icon={<MapPin className="h-5 w-5" />} title="Location" lines={["123 Innovation Drive", "San Francisco, CA 94103"]} />
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="lg:col-span-3 border border-white/10 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field id="firstName" label="First Name*" value={form.firstName} onChange={handleChange} required />
                  <Field id="lastName" label="Last Name*" value={form.lastName} onChange={handleChange} required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field id="email" label="Email Address*" value={form.email} onChange={handleChange} type="email" required />
                  <Field id="phone" label="Phone Number" value={form.phone} onChange={handleChange} type="tel" />
                </div>
                <Field id="subject" label="Subject*" value={form.subject} onChange={handleChange} required />
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-300">Message*</Label>
                  <Textarea id="message" value={form.message} onChange={handleChange} required placeholder="Tell us about your project..." className="min-h-[150px] bg-transparent border-white/20 focus:border-white text-white placeholder:text-gray-500" />
                </div>
                <Button type="submit" disabled={loading} className="w-full bg-white text-black hover:bg-gray-200 rounded-none py-6 text-base font-medium group">
                  {loading ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                {responseMessage && <p className="text-sm mt-2">{responseMessage}</p>}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Field = ({ id, label, value, onChange, required = false, type = "text" }: any) => (
  <div className="space-y-2">
    <Label htmlFor={id} className="text-sm font-medium text-gray-300">{label}</Label>
    <Input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="bg-transparent border-white/20 focus:border-white text-white placeholder:text-gray-500 h-12"
    />
  </div>
)

const ContactInfo = ({ icon, title, lines }: { icon: JSX.Element; title: string; lines: string[] }) => (
  <div className="flex items-start">
    <div className="w-12 h-12 border border-white/20 flex items-center justify-center mr-4">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      {lines.map((line, i) => <p key={i} className="text-gray-400">{line}</p>)}
    </div>
  </div>
)
