// import React from 'react'
import Header from '../ui/Header'
import Footer from '../ui/Footer'

function BlogLayout({ children }: any) {
  return (
    <>

      <Header />
      {children}
      <Footer />

    </>
  )
}

export default BlogLayout
