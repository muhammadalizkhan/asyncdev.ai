import React from 'react';
import './EngagementModels.css';

export default function EngagementModels() {
    return (
        <section className="engagement-section">
            <div className="header">
                <h1>Our Engagement Models</h1>
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
                        <h2>Project-Based Development</h2>
                        <p>Assign dedicated PMs & developers for your software development project.</p>
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
                        <h2>Team-Based Development</h2>
                        <p>Deploy a cohesive team to deliver end-to-end, custom software solutions.</p>
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
                        <h2>Staff Augmentation</h2>
                        <p>Integrate top-tier app developers into your team for enhanced project success.</p>
                    </div>
                </div>
            </div>
            <button className="consultation-btn">Book a Free Consultation</button>
        </section>
    );
}
