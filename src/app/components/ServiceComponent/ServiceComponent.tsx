import React from "react";
import "./ServiceComponent.scss";
import Link from "next/link";
import {
  FaCode,
  FaSync,
  FaBolt,
  FaCogs,
  FaMobileAlt,
  FaDatabase,
  FaShieldAlt,
  FaCloud,
  FaBug,
} from "react-icons/fa";

const services = [
  { 
    icon: <FaDatabase />, 
    title: "Custom Software Development", 
    description: "Get custom software perfectly built for your business to boost productivity and efficiency.",
    path: "/Services/custom-software-development" 
  },
  { 
    icon: <FaMobileAlt />, 
    title: "Mobile App Development", 
    description: "Make your mobile app stand out from the crowd with Devsnic's Android and iOS development.",
    path: "/Services/mobile-application-development" 
  },
  { 
    icon: <FaCode />, 
    title: "Web Development", 
    description: "Deliver high-quality web development, design and functionality tailored for your business.",
    path: "/Services/web-development" 
  },
  { 
    icon: <FaCogs />, 
    title: "DevOps", 
    description: "Speed up your development process and improve product quality with DevOps consulting and automation services.",
    path: "/Services/devops" 
  },
  { 
    icon: <FaShieldAlt />, 
    title: "Ecommerce Ecosystem", 
    description: "Keep your digital assets safe and protect your business from threats with our cybersecurity solutions.",
    path: "/Services/ecommerce-ecosystem" 
  },
  { 
    icon: <FaSync />, 
    title: "UI/UX Development", 
    description: "Drive efficiency and growth with tailored and custom UI/UX solutions for your business.",
    path: "/Services/ui-ux-development" 
  },
  { 
    icon: <FaCloud />, 
    title: "Cloud Migration & Management", 
    description: "Seamlessly transition your business operations to the cloud with secure and scalable solutions.",
    path: "/Services/cloud-migration-management" 
  },
  { 
    icon: <FaBug />, 
    title: "QA Testing & Automation", 
    description: "Improve your software’s reliability with our comprehensive QA testing services.",
    path: "/Services/qa-testing-automation" 
  },
];

export default function ServiceComponent() {
  return (
    <div className="services">
      <h2 className="services-title">From Idea to Completion, we bring Full-Stack Expertise</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <Link href={service.path} key={index} className="service-card">
            <div className="service-header">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
            </div>
            <p className="service-description">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
