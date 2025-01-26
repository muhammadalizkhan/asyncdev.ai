"use client";

import { useState } from "react";
import { Box, Container, Typography, Paper, Grid, IconButton, Button, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { ChevronLeft, ChevronRight, Clock, Video, Globe } from "lucide-react";

const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function BookConsultation() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleYearChange = (event: any) => {
    setSelectedYear(event.target.value);
  };

  const handleMonthChange = (event: any) => {
    setSelectedMonth(event.target.value);
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(selectedYear, selectedMonth);

  const isBookingReady = selectedDate && selectedTime;

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper
        elevation={0}
        sx={{
          borderRadius: 4,
          border: "1px solid #e0e0e0",
          overflow: "hidden",
        }}
      >
        <Grid container>
          {/* Left Section */}
          <Grid item xs={12} md={5} sx={{ p: 4, borderRight: "1px solid #e0e0e0" }}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 0.5,
                  background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AsyncDev
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Let's discuss your project
              </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Technical Consultation Call
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Box
                  sx={{
                    p: 1,
                    borderRadius: "8px",
                    bgcolor: "#F3F4F6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Clock size={20} color="#09122C" />
                </Box>
                <Typography variant="body2">30 minutes</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Box
                  sx={{
                    p: 1,
                    borderRadius: "8px",
                    bgcolor: "#F3F4F6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Video size={20} color="#09122C" />
                </Box>
                <Typography variant="body2">Web conferencing details provided upon confirmation</Typography>
              </Box>
            </Box>

            <Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                What to expect:
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                • Discussion of your project requirements
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                • Technical feasibility assessment
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                • Timeline and budget estimation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Recommended technology stack
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            sx={{
              p: 4,
              bgcolor: "#3E5879",
              borderLeft: "2px solid #131010",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Select a Date & Time
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <FormControl variant="outlined" size="small" sx={{ minWidth: 100 }}>
                  <InputLabel>Year</InputLabel>
                  <Select
                    value={selectedYear}
                    onChange={handleYearChange}
                    label="Year"
                  >
                    {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
                  <InputLabel>Month</InputLabel>
                  <Select
                    value={selectedMonth}
                    onChange={handleMonthChange}
                    label="Month"
                  >
                    {months.map((month, index) => (
                      <MenuItem key={month} value={index}>
                        {month}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Grid container spacing={1} sx={{ mb: 2 }}>
                {daysOfWeek.map((day) => (
                  <Grid item xs={12 / 7} key={day}>
                    <Typography
                      align="center"
                      variant="caption"
                      sx={{
                        fontWeight: 600,
                        color: "text.secondary",
                      }}
                    >
                      {day}
                    </Typography>
                  </Grid>
                ))}
              </Grid>

              <Grid container spacing={1}>
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((date) => (
                  <Grid item xs={12 / 7} key={date}>
                    <Button
                      fullWidth
                      variant={selectedDate === date ? "contained" : "text"}
                      onClick={() => setSelectedDate(date)}
                      sx={{
                        minWidth: 0,
                        p: 1,
                        borderRadius: 2,
                        color: selectedDate === date ? "white" : "text.primary",
                        "&.Mui-disabled": {
                          color: "text.disabled",
                        },
                      }}
                      disabled={new Date(selectedYear, selectedMonth, date) < new Date()}
                    >
                      {date}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 4 }}>
              <Box
                sx={{
                  p: 1,
                  borderRadius: "8px",
                  bgcolor: "#F3F4F6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Globe size={20} color="#09122C" />
              </Box>
              <Typography variant="body2" color="text.secondary">
                Time zone: Pakistan, Maldives Time (3:12am)
              </Typography>
            </Box>

            {selectedDate && (
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                  Available Times
                </Typography>
                <Grid container spacing={1}>
                  {["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"].map((time) => (
                    <Grid item xs={12} sm={6} md={4} key={time}>
                      <Button
                        fullWidth
                        variant={selectedTime === time ? "contained" : "outlined"}
                        onClick={() => setSelectedTime(time)}
                        sx={{
                          borderColor: "#e0e0e0",
                          color: selectedTime === time ? "white" : "text.primary",
                          "&:hover": {
                            borderColor: "primary.main",
                            bgcolor: "transparent",
                          },
                        }}
                      >
                        {time}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {isBookingReady && (
              <Box sx={{ mt: 4, textAlign: "center" }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "#000",
                    color: "white",
                    borderRadius: "20px",
                    px: 6,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor: "#DCFF50",
                      color: "#000",
                    },
                  }}
                >
                  Book Now
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}