import React from 'react'
import HeroSection from './heroSection'
import ServicesOffers from './servicesSection'
import FaqSection from './fqaSection'
import DevelopmentSection from './developmentProcessApproach'
import ContactUs from '@/app/components/ContactUs/ContactUs'
export default function page() {
  return (
    <>
      <HeroSection />
            <DevelopmentSection />
      <ServicesOffers />
      <FaqSection />
      <ContactUs />
    </>
  )
}
