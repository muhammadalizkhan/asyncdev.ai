import React from "react";
import ServiceComponent from "../components/ServiceComponent/ServiceComponent";
import ServiceHero from "./serviceHero";
import ContactUs from '../components/ContactUs/ContactUs'

import { Contact } from "lucide-react";
export default function Services() {
  return (
    <div>
      <ServiceHero />
      <ServiceComponent />
      <ContactUs />
    </div>
  );
}
