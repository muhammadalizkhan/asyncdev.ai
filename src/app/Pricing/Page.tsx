import React from "react";
import "./Pricing.scss";
import { FaCheckCircle } from "react-icons/fa";

export default function Pricing() {
  return (
    <div className="pricing-section">
      <div className="pricing-left">
        <h4 className="pricing-tag">Pricing</h4>
        <h2 className="pricing-title">
          We leverage the <span className="highlight">latest advancements in AI</span> to deliver the{" "}
          <span className="highlight">highest quality technology, on time and on budget.</span>
        </h2>
        <p className="pricing-description">
          We've been helping customers since 2009 and take pride in delivering high-quality custom services designed
          to help you build, grow, and revolutionize your business.
        </p>
        <button className="reviews-button">See Our Reviews</button>
        <div className="stats">
          <div className="stat">
            <h3>236+</h3>
            <p>Active Clients</p>
          </div>
          <div className="stat">
            <h3>3,000+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat">
            <h3>23+</h3>
            <p>Countries Supported</p>
          </div>
        </div>
      </div>
      <div className="pricing-right">
        <div className="pricing-box">
          <h4 className="starting-price">Starting from</h4>
          <h2 className="price">$22/hr</h2>
          <button className="contact-button">Contact Us →</button>
          <p className="free-trial">
            Experience working with us for 2 weeks completely free of charge.
          </p>
          <p className="guarantee">
            We guarantee that we will make a positive impact on your project or continue working for free until we do.
          </p>
          <div className="services-list">
            <div className="service">
              <FaCheckCircle className="icon" />
              <p>Software Outsourcing</p>
            </div>
            <div className="service">
              <FaCheckCircle className="icon" />
              <p>Staff Augmentation</p>
            </div>
            <div className="service">
              <FaCheckCircle className="icon" />
              <p>Dedicated Teams</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
