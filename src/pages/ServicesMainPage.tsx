import DiagonalFeatureSection from '../components/common/DiagonalFeature'
import FeaturesList from '../components/common/FeatureList'
import FeatureSection from '../components/common/FeatureSection'
import FramedFeatureSection from '../components/common/FramedFeatureSection'
import RecentWorks from '../components/common/RecentWorks'
import RelatedServices from '../components/common/RelatedServices'
import ServicesHeroSection from '../components/common/ServicesHeroSection'
import ServicesMainLayout from '../components/layout/ServicesMainLayout'

function ServicesMainPage() {
  return (
    <ServicesMainLayout>
      <ServicesHeroSection title='Full stack web development services' description='At TechCreator Software Company, we specialize in crafting bespoke software solutions that cater to your unique business needs. Our portfolio showcases a range of successful proul realities. Join us in the journey of transforming your vision into cutting-edge technology.' image='' />
      <FeatureSection />
      <FeaturesList />
      <DiagonalFeatureSection />
      <FramedFeatureSection />
      <RecentWorks />
      <RelatedServices />
    </ServicesMainLayout>
  )
}

export default ServicesMainPage
