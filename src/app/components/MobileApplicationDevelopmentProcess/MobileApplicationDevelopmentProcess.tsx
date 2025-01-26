"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Box, Typography, useTheme } from "@mui/material";

const MobileApplicationDevelopmentProcess = () => {
  const theme = useTheme();

  const chartData = [
    { stage: "Requirement Gathering", duration: 2, color: "#FF6F61" },
    { stage: "Design & Prototyping", duration: 3, color: "#6B5B95" },
    { stage: "Development", duration: 6, color: "#88B04B" },
    { stage: "Testing & QA", duration: 4, color: "#FFA500" },
    { stage: "Deployment", duration: 2, color: "#92A8D1" },
    { stage: "Maintenance", duration: 5, color: "#955251" },
  ];

  return (
    <Box
      sx={{
        py: 8,
        px: 2,
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
          Mobile Application Development Process
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
          Visualizing the stages and duration of our mobile app development process.
        </Typography>

        <Box
          sx={{
            height: { xs: "400px", md: "500px" },
            width: "100%",
            background: "#ffffff",
            borderRadius: "6px",
            // boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
            p: 3,
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis
                dataKey="stage"
                tick={{ fill: "#2c3e50", fontSize: 14, fontFamily: "'Roboto', sans-serif" }}
                axisLine={{ stroke: "#2c3e50" }}
              />
              <YAxis
                tick={{ fill: "#2c3e50", fontSize: 14, fontFamily: "'Roboto', sans-serif" }}
                axisLine={{ stroke: "#2c3e50" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  fontSize: "14px",
                  fontFamily: "'Roboto', sans-serif",
                }}
              />
              <Legend
                wrapperStyle={{
                  paddingTop: "20px",
                  fontSize: "14px",
                  fontFamily: "'Roboto', sans-serif",
                }}
              />
              <Bar
                dataKey="duration"
                name="Duration (Weeks)"
                fill="#007BFF"
                radius={[8, 8, 0, 0]}
                animationEasing="ease-in-out"
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileApplicationDevelopmentProcess;