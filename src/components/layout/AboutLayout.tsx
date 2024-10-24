import React from "react"
import Header from "../ui/Header"
import Footer from "../ui/Footer"


interface aboutLayoutProps {
  children: React.ReactNode
}

function AboutLayout({ children }: aboutLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />

    </>
  )
}

export default AboutLayout
