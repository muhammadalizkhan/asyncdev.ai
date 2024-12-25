import React from 'react';
import Image from 'next/image';
import './About.css';
import aboutusImage from '../assets/images/aboutus.jpeg'; // Adjust the relative path

export default function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>About us</h1>
        <h2>We’re a human-centered business</h2>
        <p>
        At Asyn Dev AI, we understand that every business has unique requirements.
        That's why we offer flexible options to access our wide range of services.
        Whether you need Proof of Concept development, Time & Materials projects,
        Fixed Cost Projects, Managed Services, or Staff Augmentation,
        we tailor our solutions to fit your specific needs.
        {/* Our services are managed via Jira or Jira Service Desk,
        ensuring transparency and efficient project tracking.
        We also offer flexible billing cycles, including weekly,
        bi-weekly, and monthly options, to provide you with the
        convenience and flexibility you need to manage your budget
        effectively. */}
        </p>
      </div>
      <div className="about-image">
        <Image
          src={aboutusImage}
          alt="About Us"
          width={500}
          height={500}
          className="image-styling"
        />
      </div>
    </div>
  );
}
