import Header from '../ui/Header'
import Footer from '../ui/Footer'

function ServicesLayout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default ServicesLayout
