"use client"
import { motion } from "framer-motion"
import { ArrowRight, Code, Cpu, Gem, Layers, Zap, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Layers,
    title: "Scalable Architecture",
    description:
      "Future-proof systems designed to grow seamlessly with your business needs, ensuring long-term stability and performance.",
    path: "#", // Placeholder link
  },
  {
    icon: Zap,
    title: "Rapid Delivery",
    description:
      "Efficient development processes ensuring quick time-to-market without compromising quality or innovation.",
    path: "#", // Placeholder link
  },
  {
    icon: Gem,
    title: "Quality Assurance",
    description:
      "Rigorous testing methodologies ensuring robust, reliable, and secure software solutions from inception to deployment.",
    path: "#", // Placeholder link
  },
  {
    icon: Cpu,
    title: "Advanced AI Integration",
    description:
      "Leveraging cutting-edge AI and machine learning to automate processes, provide intelligent insights, and drive innovation.",
    path: "#", // Placeholder link
  },
  {
    icon: Code,
    title: "Custom Software Solutions",
    description:
      "Tailored software built from the ground up to meet your unique operational demands and strategic objectives.",
    path: "#", // Placeholder link
  },
  {
    icon: ShoppingBag,
    title: "End-to-End E-commerce",
    description:
      "Building high-converting online stores with seamless user experiences, robust backend systems, and integrated marketing tools.",
    path: "#", // Placeholder link
  },
]

export default function ChooseUs() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  }
  const featureItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <motion.section
      className="relative py-0 overflow-hidden bg-black text-white" // Removed vertical padding
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      {/* Dynamic Background Elements */}
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-start mb-12 md:mb-16 max-w-3xl" // Adjusted bottom margin
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-white mb-6 md:mb-8 max-w-[100px]"
          />
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            <span className="block">Why</span>
            <span className="">Choose Us</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            We combine technical excellence with deep industry knowledge to deliver custom software that drives your
            business forward, offering end-to-end solutions for the modern digital landscape.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={featureItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="group relative"
              >
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-18 h-18 rounded-lg bg-white/5 flex items-center justify-center mr-6">
                      {" "}
                      {/* Larger icon container */}
                      <Icon className="w-9 h-9 text-white" /> {/* Larger icon */}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3> {/* Adjusted font size */}
                  </div>
                  <p className="text-base text-gray-400 mb-6 leading-relaxed">{feature.description}</p>{" "}
                  {/* Adjusted font size */}
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
          className="flex justify-center mt-12 md:mt-16" // Adjusted top margin
        >
          <Button className="bg-white text-black hover:bg-gray-200 rounded-none px-8 py-7 text-lg font-medium group">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
