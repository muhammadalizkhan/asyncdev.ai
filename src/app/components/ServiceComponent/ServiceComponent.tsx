import React from "react";
import Link from "next/link";
import { Box, Grid, Typography, Card, IconButton } from "@mui/material";
import { FaCode, FaSync, FaBolt, FaCogs, FaMobileAlt, FaDatabase, FaShieldAlt, FaCloud, FaBug } from "react-icons/fa";

const services = [
  {
    icon: <FaDatabase />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to enhance your business productivity and workflow.",
    path: "/Services/custom-software-development",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description: "Crafting standout Android and iOS apps that elevate your mobile presence.",
    path: "/Services/mobile-application-development",
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Creating responsive, modern, and high-performing web applications.",
    path: "/Services/web-development",
  },
  {
    icon: <FaCogs />,
    title: "DevOps",
    description: "Streamlining development pipelines with expert DevOps consulting and automation.",
    path: "/Services/devops",
  },
  {
    icon: <FaShieldAlt />,
    title: "Ecommerce Ecosystem",
    description: "Ensuring a secure and scalable ecosystem for your e-commerce business.",
    path: "/Services/ecommerce-ecosystem",
  },
  {
    icon: <FaSync />,
    title: "UI/UX Development",
    description: "Designing intuitive interfaces that drive engagement and customer satisfaction.",
    path: "/Services/ui-ux-development",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Migration & Management",
    description: "Seamlessly migrating your operations to the cloud with reliable management services.",
    path: "/Services/cloud-migration-management",
  },
  {
    icon: <FaBug />,
    title: "QA Testing & Automation",
    description: "Delivering flawless software through rigorous QA and automated testing solutions.",
    path: "/Services/qa-testing-automation",
  },
];

export default function ServiceComponent() {
  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: 4 },
        backgroundColor: "#f3f3f3", // Light background for the whole container
      }}
    >
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        sx={{
          mb: 6,
          color: "#333",
          letterSpacing: "0.1em",
          fontFamily: "'Roboto', sans-serif", // Modern font for headings
        }}
      >
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Link href={service.path} passHref>
              <Card
                sx={{
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "left",
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-10px) scale(1.05)",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <IconButton
                  disableRipple
                  sx={{
                    fontSize: "3rem",
                    alignSelf: "flex-start",
                    color: "#fff",
                    background: "linear-gradient(135deg, #000000, #111)",
                    p: 3,
                    mb: 2,
                    borderRadius: "10%",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    transition: "background 0.3s, transform 0.3s",
                    "&:hover": {
                      background: "linear-gradient(135deg, #581845, #111)",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  {service.icon}
                </IconButton>
                <Typography
                  fontSize={18}
                  fontWeight="bold"
                  sx={{
                    mb: 1,
                    color: "#333",
                    alignSelf: "flex-start",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "#2575fc",
                    },
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    lineHeight: 1.8,
                  }}
                >
                  {service.description}
                </Typography>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
