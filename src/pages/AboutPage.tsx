import AboutLayout from "../components/layout/AboutLayout";
import ProjectsCount from "../components/ui/ProjectsCount";
import ServicesSection from "../components/ui/ServicesSection";
import Teams from "../components/ui/Teams";
import about1 from './../assets/aboutImages/about1.png'
import about2 from './../assets/aboutImages/about2.png'
import about3 from './../assets/aboutImages/about3.png'
import ceoProfile from './../assets/aboutImages/Rectangle 21849.png'
function AboutPage() {
  return (
    <>
      <AboutLayout>
        <AboutHeroSection />
        <div className="py-10 px-4 md:px-10">
          <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-10">
            {/* Images Section */}
            <div className="flex w-full about-page justify-center md:justify-start gap-4 mb-6 md:mb-0">
              <div>
                <img src={about1} alt="about" className="w-[100px] md:w-[216px] h-auto" />
              </div>
              <div>
                <img src={about2} alt="about" className="w-[100px] md:w-[216px] h-auto" />
              </div>
              <div>
                <img src={about3} alt="about" className="w-[100px] md:w-[216px] h-auto" />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full">
              <h1 className="text-[#9A00FF] font-inter text-[28px] md:text-[35px] leading-[40px] md:leading-[55px] font-semibold">
                Overview
              </h1>
              <p className="text-[16px] md:text-[20px] text-justify font-inter font-normal text-[#3F3F3F] leading-6 md:leading-9">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
              </p>
            </div>
          </div>
        </div>

        <ServicesSection />
        <ProjectsCount />
        <div className="px-4 md:px-20 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Text Section */}
            <div className="w-full mb-6 md:mb-0">
              <h1 className="text-[#9A00FF] font-inter text-[28px] md:text-[35px] leading-[40px] md:leading-[55px] font-semibold">
                Overview
              </h1>
              <p className="text-[16px] md:text-[20px] text-justify font-inter font-normal text-[#3F3F3F] leading-6 md:leading-9">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex w-full justify-end items-center">
              <img src={ceoProfile} alt="about" className="w-[200px] md:w-[278px] h-[200px] md:h-[350px] rounded-[15px]" />
            </div>
          </div>
          <Teams />
        </div>

      </AboutLayout>
    </>
  );
}

export default AboutPage;

function AboutHeroSection() {
  return (
    <div className="relative bg-gray-900 text-white h-[500px] md:h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://s3-alpha-sig.figma.com/img/dfdf/9fbe/8441a58290c5621ca9225a40489eb022?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YBmw9DomjAZo83XqSGg5xY1Z5LBnetf67-5RCDunE3f41h~dG-BXPFFtg8qi8LY0bqdXsql38NsKoT2UOzSGw7xeI85jVgq2VtzNKj7Zq~uDm-zJlDQBrnRA01xc7uIHJl0ZMSnRGgXTDukzmKdfakYO2c73fHdcyocbIob4z0agDt-3W6xA6KO-WVlRHX9W7YvSU8kj9wE0EaIDIoVBV0N8JQZuahzJ~NDDZLcnmajpNb~lBFsW1DxTGEBX-QU0KnOW3kbgTdq2J3-X2iZPiDO59O~t9BBjyC3FiSzpqEjTzzYaZA8bx37S0PM5bMHq9fJa1r4vdbQ3W5cyIB8cbw__"
          alt="Background"
          className="w-full opacity-25"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-8 md:pb-12">
        <div className="w-full text-center">
          <h1 className="font-semibold text-[32px] sm:text-[48px] md:text-[58px] font-poppins leading-[1.2] mb-0">
            Together, We Drive Your Success
          </h1>
        </div>
      </div>
    </div>

  );
}
