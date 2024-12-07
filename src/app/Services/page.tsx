import React from 'react';
import './Services.scss';
import ServiceComponent from '../components/ServiceComponent/ServiceComponent';


export default function Services() {
  return (
    <div className="services">
      <h1 className="services-title">Our Services</h1>
      <ServiceComponent />
    </div>
  );
}
