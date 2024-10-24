import React from "react"
import Header from "../ui/Header"
import Footer from "../ui/Footer"

interface ContactType {
  children: React.ReactNode
}
function ContactLayout({ children }: ContactType) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default ContactLayout
