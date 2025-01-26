import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

const animationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

export default function MobileApplicationOverview() {
    return (
        <Box sx={{ width: "90%", mx: "auto" }}>
            <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={6}>
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={animationVariants}
                        transition={{ duration: 0.6 }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                                color: '#008080',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                mb: 2,
                                fontSize: { xs: '1rem', md: '1.25rem' },
                            }}
                        >
                            Overview
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 'bold',
                                color: '#2c3e50',
                                mb: 3,
                                lineHeight: '1.4',
                                fontSize: { xs: '1.75rem', md: '2rem' },
                            }}
                        >
                            Every app we build is engineered to drive measurable business outcomes.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#606c76',
                                mb: 4,
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                lineHeight: '1.8',
                            }}
                        >
                            With expertise spanning cutting-edge native development, cross-platform solutions,
                            and enterprise-grade systems, our engineers transform bold ideas into dynamic mobile
                            experiences.
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                color: '#2c3e50',
                                mb: 2,
                                fontSize: { xs: '1.25rem', md: '1.5rem' },
                            }}
                        >
                            What we are good at:
                        </Typography>
                        <Box>
                            {[
                                {
                                    title: 'Mobile-First Architecture',
                                    description:
                                        'Leveraging agile methodologies to build scalable, responsive solutions that align with mobile-first strategies.',
                                },
                                {
                                    title: 'Enterprise Mobility',
                                    description:
                                        'Developing robust, secure applications to streamline operations and enhance productivity for businesses of all sizes.',
                                },
                                {
                                    title: 'Integration Expertise',
                                    description:
                                        'Seamlessly connecting mobile apps with third-party services, APIs, and backend systems.',
                                },
                                {
                                    title: 'Performance Optimization',
                                    description:
                                        'Ensuring apps are fast, lightweight, and responsive, even under heavy user loads.',
                                },
                                {
                                    title: 'Custom Mobile Solutions',
                                    description:
                                        'Building tailored apps to address specific business challenges and deliver measurable results.',
                                },
                            ].map((item, index) => (
                                <Box key={index} sx={{ mb: 3 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: '#2c3e50',
                                            fontSize: { xs: '1rem', md: '1.25rem' },
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#606c76',
                                            fontSize: { xs: '0.9rem', md: '1rem' },
                                            lineHeight: '1.6',
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </motion.div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={animationVariants}
                        transition={{ duration: 0.6 }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Image
                                src="https://www.pptssolutions.com/wp-content/uploads/2023/04/App-Design-Development-2.jpg"
                                alt="Payment App"
                                width={500}
                                height={400}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxWidth: '500px',
                                    borderRadius: '10px',
                                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                                }}
                            />
                        </Box>
                    </motion.div>
                </Grid>
            </Grid>
        </Box>
    );
}
