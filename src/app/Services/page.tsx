import React from "react";
import "./Services.css";
import ServiceComponent from "../components/ServiceComponent/ServiceComponent";
import TrustedPartner from "../components/TrustedPartner/TrustedPartner";
import Footer from "../components/Footer/Footer";
export default function Services() {
  return (
    <div className="services-container">
      <ServiceComponent />
      <TrustedPartner />
      <Footer />
    </div>
  );
}
