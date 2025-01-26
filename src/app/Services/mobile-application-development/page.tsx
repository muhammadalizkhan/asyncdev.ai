"use client";

import React from "react";
import Image from "next/image";
import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", py: 8 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left Section - Text Content */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ padding: "1rem" }}
          >
            <Box sx={{ mb: 4 }}>
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ color: "#008080", fontSize: "1.25rem", fontWeight: "bold", letterSpacing: "0.1em" }}
              >
                OVERVIEW
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ fontSize: "1rem", color: "#333", lineHeight: "1.75" }}
              >
                Every app we build is engineered to drive measurable business outcomes. With
                expertise spanning cutting-edge native development, cross-platform solutions,
                and enterprise-grade systems, our engineers transform bold ideas into dynamic
                mobile experiences.
              </motion.p>
            </Box>

            <Box>
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ fontSize: "1.125rem", fontWeight: "bold", color: "#111", marginBottom: "1rem" }}
              >
                What we are good at:
              </motion.h3>
              <ul style={{ paddingLeft: "1rem", color: "#555", fontSize: "0.9rem", lineHeight: "1.8" }}>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <strong>Mobile-First Architecture:</strong> Leveraging agile methodologies
                  to build scalable, responsive solutions that align with mobile-first
                  strategies.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <strong>Enterprise Mobility:</strong> Developing robust, secure applications
                  to streamline operations and enhance productivity for businesses of all sizes.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <strong>Integration Expertise:</strong> Seamlessly connecting mobile apps with
                  third-party services, APIs, and backend systems.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <strong>Performance Optimization:</strong> Ensuring apps are fast, lightweight,
                  and responsive, even under heavy user loads.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <strong>Custom Mobile Solutions:</strong> Building tailored apps to address
                  specific business challenges and deliver measurable results.
                </motion.li>
              </ul>
            </Box>
          </motion.div>
        </Grid>

        {/* Right Section - Image */}
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative", maxWidth: "600px", width: "100%" }}
          >
            <Image
              src="https://www.addevice.io/storage/ckeditor/uploads/images/65f840d316353_mobile.app.development.1920.1080.png"
              alt="Payment Mobile App"
              layout="responsive"
              width={600}
              height={400}
              style={{ borderRadius: "8px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Page;
