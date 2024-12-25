import React from 'react';
import './Services.scss';
import ServiceComponent from '../components/ServiceComponent/ServiceComponent';
import ExploreOurTech from '../components/ExploreOurTech/ExploreOurTech'
import TrustedPartner from '../components/TrustedPartner/TrustedPartner';

export default function Services() {
  return (
    <div className="services-container">
      <div className="header-section">
        <h1>Custom Software Development Services</h1>
        <p>
          Power your business with robust, secure, and scalable software solutions. AsynDev is a leading custom
          software development company with a proven track record of delivering exceptional value.
          AsynDev is a leading custom
          software development company with a proven track record of delivering exceptional value.
          AsynDev is a leading custom
          software development company with a proven track record of delivering exceptional value.
        </p>
        <button className="build-btn">Let's Build Something</button>
      </div>
      <ServiceComponent />
      <TrustedPartner />
    </div>
  );
}