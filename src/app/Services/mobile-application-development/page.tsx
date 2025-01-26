"use client";

import React from "react";
import Image from "next/image";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import { PhoneAndroid, Apple, Devices, Engineering, Upgrade } from "@mui/icons-material";

const MobileAppDevelopment = () => {
  return (
    <Box sx={{ py: 10, px: 10, }}>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
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
                    borderRadius: "50%",
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
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="https://www.intellectsoft.net/assets/a64085ef/img/mobile-app/Group286.webp"
              alt="Mobile App Development"
              width={700}
              height={600}
              style={{
                borderRadius: "16px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MobileAppDevelopment;
