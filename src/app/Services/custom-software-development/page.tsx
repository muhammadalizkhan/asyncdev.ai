import React from 'react'
import HeroSection from './heroSection'
import ServicesOffers from './servicesSection'
import FaqSection from './fqaSection'
import DevelopmentSection from './developmentProcessApproach'
import ContactUs from '@/app/components/ContactUs/ContactUs'
import Technology from './technology'
export default function page() {
  return (
    <>
      <HeroSection />
      <DevelopmentSection />
      <Technology />
      <ServicesOffers />
      <FaqSection />
      <ContactUs />
    </>
  )
}
