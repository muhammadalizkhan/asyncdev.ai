import React from 'react'
import HeroSection from './heroSection'
import ServicesOffers from './servicesSection'
import FaqSection from './fqaSection'
import DevelopmentSection from './developmentProcessApproach'
export default function page() {
  return (
    <>
      <HeroSection />
      <ServicesOffers />
      <DevelopmentSection />
      <FaqSection />
    </>
  )
}
