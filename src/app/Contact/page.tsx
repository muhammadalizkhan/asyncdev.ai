import { Box, Grid, Typography, TextField, Checkbox, Button, Container, FormControlLabel, Stack } from "@mui/material"
import { MessageCircle, MapPin, Phone, Facebook, Twitter, Linkedin, Youtube, Dribbble } from "lucide-react"
import ScheduleStrategyCall from "../components/ScheduleStrategyCall/ScheduleStrategyCall"

export default function Contact() {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box
                sx={{
                    border: "1px solid #E5E7EB",
                    borderRadius: "16px",
                    overflow: "hidden",
                }}
            >
                <Grid container>
                    <Grid item xs={12} md={4} sx={{ p: { xs: 4, md: 6 }, bgcolor: "#FFFFFF" }}>
                        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                            <Box sx={{ mb: 6 }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                        color: "#09122C",
                                        fontSize: { xs: "1.5rem", md: "2rem" },
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    ASYNC DEV CO
                                </Typography>
                            </Box>

                            <Stack spacing={5} sx={{ flex: 1 }}>
                                <ContactInfo
                                    icon={<MessageCircle size={20} />}
                                    title="Chat to us"
                                    description="Our friendly team is here to help."
                                    contact="contact@asyncdevco.com"
                                />
                                <ContactInfo
                                    icon={<MapPin size={20} />}
                                    title="Visit us"
                                    description="Come say hello at our office HQ."
                                    contact={
                                        <>
                                            100 Johar Town J2
                                            <br />
                                            Lahore Punjab 50000
                                        </>
                                    }
                                />
                                <ContactInfo
                                    icon={<Phone size={20} />}
                                    title="Call us"
                                    description="Mon-Fri from 8am to 5pm."
                                    contact="+92 (308) 1454 784 "
                                />
                            </Stack>

                            <Stack direction="row" spacing={3} justifyContent="center" sx={{ mt: 6 }}>
                                {[Facebook, Twitter, Linkedin, Youtube, Dribbble].map((Icon, index) => (
                                    <Icon key={index} size={20} color="#09122C" />
                                ))}
                            </Stack>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={8} sx={{ bgcolor: "#DCFF50", p: { xs: 4, md: 6 } }}>
                        <Box sx={{ maxWidth: 600, mx: "auto" }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    mb: 2,
                                    fontWeight: 800,
                                    color: "#09122C",
                                    fontSize: { xs: "2rem", md: "3rem" },
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Got ideas? We've got the skills. Let's team up.
                            </Typography>
                            <Typography variant="subtitle1" sx={{ mb: 6, color: "#09122C" }}>
                                Tell us more about yourself and what you've got in mind.
                            </Typography>

                            <Stack spacing={4}>
                                <CustomTextField placeholder="Your name" />
                                <CustomTextField placeholder="you@company.com" />
                                <CustomTextField placeholder="Tell us a little about the project..." multiline rows={3} />

                                <Box>
                                    <Typography variant="subtitle1" sx={{ mb: 3, color: "#09122C", fontWeight: 600 }}>
                                        How can we help?
                                    </Typography>
                                    <Grid container spacing={2}>
                                        {[
                                            "Website design",
                                            "Content creation",
                                            "UX design",
                                            "Strategy & consulting",
                                            "User research",
                                            "Other",
                                        ].map((label) => (
                                            <Grid item xs={12} sm={6} key={label}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            sx={{
                                                                color: "#09122C",
                                                                "&.Mui-checked": {
                                                                    color: "#09122C",
                                                                },
                                                            }}
                                                        />
                                                    }
                                                    label={<Typography sx={{ color: "#09122C" }}>{label}</Typography>}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>

                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        mt: 2,
                                        bgcolor: "#09122C",
                                        color: "white",
                                        py: 2,
                                        borderRadius: "8px",
                                        textTransform: "none",
                                        fontSize: "1rem",
                                        fontWeight: 600,
                                        "&:hover": {
                                            bgcolor: "#1A2142",
                                        },
                                    }}
                                >
                                    Let's get started!
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <ScheduleStrategyCall />

        </Container>
    )
}

interface ContactInfoProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    contact: React.ReactNode;
}

const ContactInfo = ({ icon, title, description, contact }: ContactInfoProps) => (
    <Stack direction="row" spacing={3} alignItems="flex-start">
        <Box
            sx={{
                p: 1,
                borderRadius: "8px",
                bgcolor: "#F3F4F6",
                color: "#09122C",
                display: "flex",
            }}
        >
            {icon}
        </Box>
        <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: "#09122C" }}>
                {title}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: "#09122C" }}>
                {description}
            </Typography>
            <Typography variant="body2" sx={{ color: "#09122C", fontWeight: 500 }}>
                {contact}
            </Typography>
        </Box>
    </Stack>
)

const CustomTextField = ({ multiline = false, rows = 1, ...props }) => (
    <TextField
        fullWidth
        variant="standard"
        multiline={multiline}
        rows={rows}
        InputProps={{
            disableUnderline: true,
            sx: {
                fontSize: "1rem",
                "&::placeholder": {
                    color: "#09122C",
                    opacity: 0.7,
                },
            },
        }}
        sx={{
            "& .MuiInputBase-input": {
                borderBottom: "1px solid #09122C",
                pb: 1,
                color: "#09122C",
                "&:focus": {
                    borderBottom: "2px solid #09122C",
                },
            },
        }}
        {...props}
    />
)

