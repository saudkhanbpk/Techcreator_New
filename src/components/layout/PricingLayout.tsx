import React from "react"
import Header from "../ui/Header"
import Footer from "../ui/Footer"

interface pricingLayoutType {
  children: React.ReactNode
}
function PricingLayout({ children }: pricingLayoutType) {
  return (
    <>
      <Header />
      {children}
      <Footer />

    </>
  )
}

export default PricingLayout


