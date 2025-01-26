"use client";

import React from "react";
import Image from "next/image";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { PhoneAndroid, Apple, Devices, Engineering, Upgrade } from "@mui/icons-material";

const animationVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const MobileAppDevelopment = () => {
  return (
    <Box sx={{ py: 10, px: 2 }}>
      <Box sx={{ width: "90%", mx: "auto" }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={animationVariants}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "#2c3e50",
                  mb: 3,
                }}
              >
                Our Mobile App Development Solutions
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#606c76",
                  mb: 4,
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                }}
              >
                Unlock Your Business Potential with Our Holistic Software Development Services.
              </Typography>
              <Box>
                {[
                  {
                    icon: <PhoneAndroid sx={{ fontSize: "28px", color: "#fff" }} />,
                    title: "Android App Development",
                    description:
                      "Unlock your Android's potential with Kotlin, Java, and Jetpack Compose for high-performance apps.",
                    bgColor: "#3DDC84",
                  },
                  {
                    icon: <Apple sx={{ fontSize: "28px", color: "#fff" }} />,
                    title: "iOS App Development",
                    description:
                      "Develop reliable iOS apps using Swift, SwiftUI, and Objective-C for seamless Apple experiences.",
                    bgColor: "#A3AAAE",
                  },
                  {
                    icon: <Devices sx={{ fontSize: "28px", color: "#fff" }} />,
                    title: "Cross-Platform Development",
                    description:
                      "Build apps with Flutter and React Native for both Android and iOS platforms.",
                    bgColor: "#007BFF",
                  },
                  {
                    icon: <Engineering sx={{ fontSize: "28px", color: "#fff" }} />,
                    title: "Custom App Development",
                    description:
                      "Turn your ideas into reality with tailored apps built specifically for your business.",
                    bgColor: "#FFC107",
                  },
                  {
                    icon: <Upgrade sx={{ fontSize: "28px", color: "#fff" }} />,
                    title: "App Modernisation & Migration",
                    description:
                      "Upgrade legacy apps to modern frameworks like Flutter and React Native.",
                    bgColor: "#4CAF50",
                  },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 4,
                    }}
                  >
                    <IconButton
                      sx={{
                        backgroundColor: item.bgColor,
                        width: 56,
                        height: 56,
                        borderRadius: "25%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mr: 3,
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      {item.icon}
                    </IconButton>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: "#2c3e50",
                          mb: 1,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#606c76",
                          lineHeight: "1.6",
                          fontSize: "1rem",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={animationVariants}
              transition={{ duration: 0.6 }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src="https://echoinnovateit.com/wp-content/uploads/2023/08/mobile-app-development.png.webp"
                  alt="Mobile App Development"
                  width={700}
                  height={600}
                  style={{
                    borderRadius: "16px",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Box sx={{ mt: 10 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={animationVariants}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#008080",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    mb: 2,
                  }}
                >
                  Overview
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#2c3e50",
                    mb: 3,
                    lineHeight: "1.4",
                  }}
                >
                  Every app we build is engineered to drive measurable business outcomes.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#606c76",
                    mb: 4,
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                  }}
                >
                  With expertise spanning cutting-edge native development, cross-platform
                  solutions, and enterprise-grade systems, our engineers transform bold ideas into
                  dynamic mobile experiences.
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "#2c3e50",
                    mb: 2,
                  }}
                >
                  What we are good at:
                </Typography>
                <Box>
                  {[
                    {
                      title: "Mobile-First Architecture",
                      description:
                        "Leveraging agile methodologies to build scalable, responsive solutions that align with mobile-first strategies.",
                    },
                    {
                      title: "Enterprise Mobility",
                      description:
                        "Developing robust, secure applications to streamline operations and enhance productivity for businesses of all sizes.",
                    },
                    {
                      title: "Integration Expertise",
                      description:
                        "Seamlessly connecting mobile apps with third-party services, APIs, and backend systems.",
                    },
                    {
                      title: "Performance Optimization",
                      description:
                        "Ensuring apps are fast, lightweight, and responsive, even under heavy user loads.",
                    },
                    {
                      title: "Custom Mobile Solutions",
                      description:
                        "Building tailored apps to address specific business challenges and deliver measurable results.",
                    },
                  ].map((item, index) => (
                    <Box key={index} sx={{ mb: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: "#2c3e50",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#606c76",
                          fontSize: "1rem",
                          lineHeight: "1.6",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={animationVariants}
                transition={{ duration: 0.6 }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Image
                    src="https://www.pptssolutions.com/wp-content/uploads/2023/04/App-Design-Development-2.jpg"
                    alt="Payment App"
                    width={700}
                    height={600}
                    style={{
                      borderRadius: "10px",
                      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileAppDevelopment;
