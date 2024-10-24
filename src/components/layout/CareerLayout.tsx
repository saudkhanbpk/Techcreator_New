import React from 'react'
import Header from '../ui/Header'
import Footer from '../ui/Footer'

interface CareerLayoutType {
  children: React.ReactNode
}
function CareerLayout({ children }: CareerLayoutType) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default CareerLayout
