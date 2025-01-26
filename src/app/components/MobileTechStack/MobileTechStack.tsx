"use client";

import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const techStackData = [
  { name: "Kotlin", logo: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" },
  { name: "React Native", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Java", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
  { name: "Jenkins", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Jenkins_logo_with_title.svg/1200px-Jenkins_logo_with_title.svg.png" },
  { name: "Swift", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg" },
  { name: "SwiftUI", logo: "https://developer.apple.com/assets/elements/icons/swiftui/swiftui-96x96.png" },
  { name: "Flutter", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" },
  { name: "React Native", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Xamarin", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Xamarin-logo.svg/1200px-Xamarin-logo.svg.png" },
  { name: "Ruby", logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" },
  { name: "React Native", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Spring", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg" },
  { name: "AWS Amplify", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/AmazonWebservices_Logo.svg/1200px-AmazonWebservices_Logo.svg.png" },
  { name: "Firebase", logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" },
  { name: "React Native", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "React Native", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Docker", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
  { name: "GraphQL", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" },
];

const MobileTechStack = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 10,
        px: 2,
        // backgroundColor: theme.palette.background.default,
        textAlign: "center",
      }}
    >
      <Box sx={{ width: "90%", mx: "auto" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "800",
            color: "#2c3e50",
            mb: 4,
            fontSize: { xs: "2rem", md: "2.75rem" },
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "-0.03em",
          }}
        >
          Our Tech Stack
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#546e7a",
            mb: 6,
            fontSize: "1.1rem",
            lineHeight: "1.8",
            fontFamily: "'Roboto', sans-serif",
            maxWidth: "800px",
            mx: "auto",

          }}
        >
          Equipped with the latest tools, our teams deliver impactful solutions designed to grow your business.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {techStackData.map((tech, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2,
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: "12px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={80}
                    height={80}
                    style={{
                      objectFit: "contain",
                      marginBottom: "12px",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "500",
                      color: theme.palette.text.primary,
                      fontSize: "1rem",
                      fontFamily: "'Roboto', sans-serif",
                      textAlign: "center",
                    }}
                  >
                    {tech.name}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MobileTechStack;