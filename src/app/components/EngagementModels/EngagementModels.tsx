import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import './EngagementModels.css';

export default function EngagementModels() {
    return (
        <section className="engagement-section">
            <div className="header">
                <Typography variant="h4" align="center" gutterBottom>
                    Our Engagement Models
                </Typography>
            </div>
            <div className="engagement-container">
                <div className="engagement-item">
                    <video className="engagement-video" autoPlay loop muted>
                        <source
                            src="Videos/ProjectBasedDevelopment/ProjectBasedDevelopment.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="text-content">
                        <Typography variant="h6">Project-Based Development</Typography>
                        <Typography variant="body2">
                            Assign dedicated PMs & developers for your software development project.
                        </Typography>
                    </div>
                </div>
                <div className="engagement-item">
                    <video className="engagement-video" autoPlay loop muted>
                        <source
                            src="Videos/TeamBasedDevelopment/TeamBasedDevelopment.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="text-content">
                        <Typography variant="h6">Team-Based Development</Typography>
                        <Typography variant="body2">
                            Deploy a cohesive team to deliver end-to-end, custom software solutions.
                        </Typography>
                    </div>
                </div>
                <div className="engagement-item">
                    <video className="engagement-video" autoPlay loop muted>
                        <source
                            src="Videos/StaffAugmentation/StaffAugmentation.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="text-content">
                        <Typography variant="h6">Staff Augmentation</Typography>
                        <Typography variant="body2">
                            Integrate top-tier app developers into your team for enhanced project success.
                        </Typography>
                    </div>
                </div>
            </div>
            <Box display="flex" justifyContent="center" mt={3}>
                <Button
                    variant="contained"
                    color="primary"
                    className="consultation-btn"
                    size="large"
                >
                    Book a Free Consultation
                </Button>
            </Box>
        </section>
    );
}
