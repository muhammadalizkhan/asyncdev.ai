import React from "react";
import { Box, Grid, Typography, List, ListItem, Link, Divider } from "@mui/material";

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "Custom Software Development", path: "/services/custom-software-development" },
      { name: "Mobile App Development", path: "/services/mobile-app-development" },
      { name: "Web Development", path: "/services/web-development" },
      { name: "UI/UX Design", path: "/services/ui-ux-design" },
    ],
  },
  {
    title: "Hire Developers",
    links: [
      { name: "React Native Developers", path: "/hire/react-native-developers" },
      { name: "Flutter Developers", path: "/hire/flutter-developers" },
      { name: "Android Developers", path: "/hire/android-developers" },
      { name: "iOS Developers", path: "/hire/ios-developers" },
      { name: "Dedicated Teams", path: "/hire/dedicated-teams" },
      { name: "Staff Augmentation", path: "/hire/staff-augmentation" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Careers", path: "/careers" },
      { name: "Pricing", path: "/pricing" },
      { name: "Contact Us", path: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", path: "/legal/privacy-policy" },
      { name: "Terms of Service", path: "/legal/terms-of-service" },
      { name: "Cookie Policy", path: "/legal/cookie-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        py: 6,
        px: { xs: 2, md: 6 },
        margin: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >

      <Grid container spacing={4}>
        {footerSections.map((section, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#20c997",
                mb: 2,
                fontSize: "1.1rem",
                textTransform: "uppercase",
              }}
            >
              {section.title}
            </Typography>
            <List>
              {section.links.map((link, idx) => (
                <ListItem
                  key={idx}
                  disableGutters
                  sx={{
                    py: 0.5,
                  }}
                >
                  <Link
                    href={link.path}
                    underline="hover"
                    sx={{
                      color: "#fff",
                      fontSize: "0.95rem",
                      "&:hover": { color: "#20c997" },
                    }}
                  >
                    {link.name}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>

      <Divider
        sx={{
          borderColor: "rgba(255, 255, 255, 0.2)",
          my: 4,
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
          © {new Date().getFullYear()} Your Company. All Rights Reserved.
        </Typography>
        <Box
          sx={{
            mt: { xs: 2, md: 0 },
            display: "flex",
            gap: 2,
          }}
        >
          <Link
            href="https://facebook.com"
            target="_blank"
            sx={{
              color: "#fff",
              fontSize: "1.2rem",
              "&:hover": { color: "#20c997" },
            }}
          >
            Facebook
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            sx={{
              color: "#fff",
              fontSize: "1.2rem",
              "&:hover": { color: "#20c997" },
            }}
          >
            Twitter
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            sx={{
              color: "#fff",
              fontSize: "1.2rem",
              "&:hover": { color: "#20c997" },
            }}
          >
            LinkedIn
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
