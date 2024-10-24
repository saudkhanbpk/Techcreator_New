import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import HeroSection from '../components/ui/HeroSection'
import AboutSection from '../components/ui/AboutSection'
import ServicesSection from '../components/ui/ServicesSection'
import TeamScalingSection from '../components/ui/TeamScaling'
import ClientTestimonialsSection from '../components/ui/Testimonials '
import ProjectsCount from '../components/ui/ProjectsCount'
import Companies, { CTASection } from '../components/ui/Companies'

function Landing_page() {
  return (
    <React.Fragment>
      <MainLayout>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamScalingSection />
        <ClientTestimonialsSection />
        <ProjectsCount />
        <Companies />
        <CTASection />
      </MainLayout>
    </React.Fragment>
  )
}

export default Landing_page
