import PortfolioLayout from "../components/layout/PortfolioLayout"
import ServicesSection from "../components/ui/ServicesSection"
// import image from './../assets/portfolioImages/Img.png'
// import image1 from './../assets/portfolioImages/Img (1).png'
// import image2 from './../assets/portfolioImages/Img (2).png'
import staticImage from './../assets/portfolioImages/Frame 5073.png'
// import image11 from './../assets/portfolioImages/64f9d3eae737e7b37d469972_kitchen-prep-p-1080.jpg.png'
// import image12 from './../assets/portfolioImages/64feddd5c7b5f153044e7591_phone-in-hand.png.png'
import Companies from "../components/ui/Companies"
import ClientTestimonialsSection from "../components/ui/Testimonials "
import OurProjectsGrid from "../components/ui/Projects"
function Portfolio() {
  return (
    <>
      <PortfolioLayout>
        <div className="relative bg-[black] text-white h-[580px] overflow-hidden">
          <div className="relative max-w-[1440px] mx-auto  py-24 md:py-32">
            <div className="">
              <h1 className="text-3xl md:text-5xl px-10 font-bold mb-6">OUR PORTFOLIO</h1>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 px-10 mb-8 md:mb-0 md:pr-8">
                  <p className="text-sm md:text-base mb-4">
                    At TechCreator Software Company, we specialize in crafting bespoke
                    software solutions that cater to your unique business needs. Our portfolio
                    showcases a range of successful projects, from intuitive mobile apps to
                    complex web platforms. With a talented team dedicated to quality and
                    innovation, we're your partner in turning ideas into impactful realities. Join
                    us in the journey of transforming your vision into cutting-edge technology.
                  </p>
                </div>
                <div className="md:w-1/3 relative">
                  {/* <div className="absolute -top-10 left-[160.24px] right-0 w-[857px] h-[684px] md:w-80 md:h-80 bg-[#9A00FF] rounded-3xl transform -rotate-45 "></div> */}
                  {/* <div>

                  </div> */}
                  {/* <div className="flex absolute">
                    <div>
                      <img
                        src={image1}
                        alt="Our Team"
                        className="relative  rounded-2xl left-[190px] w-[200.03px] h-[322.49px]"
                      />
                    </div>
                    <div>
                      <img
                        src={image}
                        alt="Our Team"
                        className="relative z-10 rounded-2xl left-[130px] w-[200.03px] h-[322.49px]" />
                    </div>
                    <div>
                      <img
                        src={image2}
                        alt="Our Team"
                        className="relative rounded-2xl left-[60px] w-[200.03px] h-[322.49px]" />
                    </div>
                  </div> */}
                  <div className="absolute -top-32 right-0">
                    <img src={staticImage} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ServicesSection />
        </div>
        <div>

          <div className="bg-[#F1EEE4]">
            <div className="max-w-4xl mx-auto grid grid-cols-12 grid-rows-6 gap-2 aspect-[4/3]">
              {/* Laptop Image */}
              <div className="col-span-7 row-span-4 bg-gray-200 rounded-3xl overflow-hidden">
                <img src="/api/placeholder/500/300" alt="Laptop" className="w-full h-full object-cover" />
              </div>

              {/* Phone Image */}
              <div className="col-span-3 row-span-3 bg-gray-200 rounded-3xl overflow-hidden">
                <img src="/api/placeholder/200/300" alt="Phone" className="w-full h-full object-cover object-left" />
              </div>

              {/* Client Satisfaction */}
              <div className="col-span-5 row-span-3 bg-[#006A60] text-white p-4 rounded-3xl flex flex-col justify-center items-start">
                <div className="text-5xl font-bold leading-none">98%</div>
                <div className="text-sm mt-1">Client Satisfaction</div>
              </div>

              {/* Training Completion */}
              <div className="col-span-5 row-span-2 bg-[#A7B8FF] text-white p-4 rounded-3xl flex flex-col justify-center items-start">
                <div className="text-4xl font-bold leading-none">98%</div>
                <div className="text-sm mt-1">Training completion</div>
              </div>

              {/* Desktop Setup Image */}
              <div className="col-span-7 row-span-3 bg-gray-200 rounded-3xl overflow-hidden">
                <img src="/api/placeholder/500/200" alt="Desktop Setup" className="w-full h-full object-cover" />
              </div>

              {/* Employee Satisfaction */}
              <div className="col-span-5 row-span-2 bg-[#5E2E53] text-white p-4 rounded-3xl flex flex-col justify-center items-start">
                <div className="text-4xl font-bold leading-none">4.7<span className="text-yellow-300 text-2xl ml-1">★</span></div>
                <div className="text-sm mt-1">Employee satisfaction</div>
              </div>

              {/* Success Rate */}
              <div className="col-span-5 row-span-2 bg-[#FFD572] p-4 rounded-3xl flex flex-col justify-center items-start">
                <div className="text-4xl font-bold leading-none text-[#006A60]">100%</div>
                <div className="text-sm mt-1 text-[#006A60]">Success rate</div>
              </div>
            </div>
            {/* <div className="container mx-auto p-6">
              <div className="grid grid-cols-3 md:grid-cols-3 gap-4 h-full">
                <div className="md:col-span-2 md:row-span-2 bg-gray-200 rounded-lg overflow-hidden">
                  <img src={image11} alt="Laptop image" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200 rounded-lg flex items-center justify-center">
                  <img src={image12} alt="Phone image" className="w-2/3" />
                </div>
                <div className="bg-green-700 text-white rounded-lg flex items-center justify-center p-6">
                  <div className="text-center">
                    <p className="text-6xl font-bold">98%</p>
                    <p className="text-lg mt-2">Client Satisfaction</p>
                  </div>
                </div>
                <div className="bg-blue-300 text-white rounded-lg flex items-center justify-center p-6">
                  <div className="text-center">
                    <p className="text-6xl font-bold">98%</p>
                    <p className="text-lg mt-2">Training Completion</p>
                  </div>
                </div>
                <div className="bg-purple-700 text-white rounded-lg flex items-center justify-center p-6">
                  <div className="text-center">
                    <p className="text-6xl font-bold">4.7 <span className="text-yellow-400">★</span></p>
                    <p className="text-lg mt-2">Employee Satisfaction</p>
                  </div>
                </div>
                <div className="bg-yellow-400 text-gray-800 rounded-lg flex items-center justify-center p-6">
                  <div className="text-center">
                    <p className="text-6xl font-bold">100%</p>
                    <p className="text-lg mt-2">Success Rate</p>
                  </div>
                </div>
                <div className="md:col-span-2 bg-gray-200 rounded-lg overflow-hidden">
                  <img src="https://via.placeholder.com/600x400" alt="Work setup image" className="w-full h-full object-cover" />
                </div>
              </div>
            </div> */}

          </div>
        </div>
        <Companies />
        <OurProjectsGrid />
        <ClientTestimonialsSection />

      </PortfolioLayout>

    </>
  )
}

export default Portfolio
