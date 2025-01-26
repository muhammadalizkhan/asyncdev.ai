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
        // backgroundColor: theme.palette.background.default,
        textAlign: "center",
      }}
    >
      <Box sx={{ width: "90%", mx: "auto" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "700",
            // color: theme.palette.text.primary,
            mb: 4,
            fontSize: "2.5rem",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Mobile Application Development Process
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            mb: 6,
            fontSize: "1.1rem",
            lineHeight: "1.8",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Visualizing the stages and duration of our mobile app development process.
        </Typography>

        <Box sx={{ height: "500px", width: "100%" }}>
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
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="stage"
                tick={{ fill: theme.palette.text.primary }}
                axisLine={{ stroke: theme.palette.text.primary }}
              />
              <YAxis
                tick={{ fill: theme.palette.text.primary }}
                axisLine={{ stroke: theme.palette.text.primary }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme.palette.background.paper,
                  borderColor: theme.palette.divider,
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar
                dataKey="duration"
                name="Duration (Weeks)"
                fill={theme.palette.primary.main}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileApplicationDevelopmentProcess;