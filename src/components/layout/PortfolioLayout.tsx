import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

interface PortfolioLayoutType {
  children: React.ReactNode;
}
function PortfolioLayout({ children }: PortfolioLayoutType) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default PortfolioLayout;
