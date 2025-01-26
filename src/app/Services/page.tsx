import React from "react";
import "./Services.css";
import ServiceComponent from "../components/ServiceComponent/ServiceComponent";
import TrustedPartner from "../components/TrustedPartner/TrustedPartner";
export default function Services() {
  return (
    <div className="services-container">
      <ServiceComponent />
      <TrustedPartner />
    </div>
  );
}
