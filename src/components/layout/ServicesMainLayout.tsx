import React from 'react'
import Header from '../ui/Header'
import Footer from '../ui/Footer'

interface ServicesMainLayoutType {
  children: React.ReactNode
}
function ServicesMainLayout({ children }: ServicesMainLayoutType) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default ServicesMainLayout
