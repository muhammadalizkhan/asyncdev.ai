import React from "react";
import Link from "next/link";
import { Box, Grid, Typography, Card, CardContent, IconButton } from "@mui/material";
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
      }}
    >
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        sx={{
          mb: 6,
          color: "#333",
          letterSpacing: "0.05em",
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
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.02)",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <IconButton
                  disableRipple
                  sx={{
                    fontSize: "2.5rem",
                    color: "#00796b",
                    backgroundColor: "#e0f2f1",
                    p: 2,
                    mb: 2,
                    borderRadius: "50%",
                    transition: "background-color 0.3s, color 0.3s",
                    "&:hover": {
                      backgroundColor: "#004d40",
                      color: "#ffffff",
                    },
                  }}
                >
                  {service.icon}
                </IconButton>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    mb: 1,
                    color: "#333",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "#00796b",
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
