// import React from 'react'
import Header from '../ui/Header'
import Footer from '../ui/Footer'

function MainLayout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
