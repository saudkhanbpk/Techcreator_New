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
        <div className="container py-10 px-10">
          <div className="flex w-full justify-between items-center gap-10">
            <div className="flex w-full about-page">
              <div>
                <img src={about1} alt="about" className="w-[216px] h-auto" />
              </div>&nbsp;&nbsp;
              <div>
                <img src={about2} alt="about" className="w-[216px] h-auto" />
              </div>&nbsp;&nbsp;
              <div>
                <img src={about3} alt="about" className="w-[216px] h-auto" />
              </div>
            </div>
            <div className="w-full">
              <div>
                <h1 className="text-[#9A00FF] font-inter text-[35px] leading-[55px] font-semibold">Overview</h1>
              </div>
              <div>
                <p className="text-[20px] text-justify font-inter font-normal text-[#3F3F3F] leading-9">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model tex</p>
              </div>
            </div>
          </div>
        </div>
        <ServicesSection />
        <ProjectsCount />
        <div className="container px-20 py-10">
          <div className="flex justify-between items-center">
            <div className="w-full">
              <h1 className="text-[#9A00FF] font-inter text-[35px] leading-[55px] font-semibold">Overview</h1>
              <p className="text-[20px] text-justify font-inter font-normal text-[#3F3F3F] leading-9">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model tex</p>
            </div>
            <div className="flex w-full about-page justify-end">
              <img src={ceoProfile} alt="about" className="w-[278px] h-[278px] rounded-[15px]" />
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
    <div className="relative bg-gray-900 text-white h-[700px]">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://s3-alpha-sig.figma.com/img/dfdf/9fbe/8441a58290c5621ca9225a40489eb022?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YBmw9DomjAZo83XqSGg5xY1Z5LBnetf67-5RCDunE3f41h~dG-BXPFFtg8qi8LY0bqdXsql38NsKoT2UOzSGw7xeI85jVgq2VtzNKj7Zq~uDm-zJlDQBrnRA01xc7uIHJl0ZMSnRGgXTDukzmKdfakYO2c73fHdcyocbIob4z0agDt-3W6xA6KO-WVlRHX9W7YvSU8kj9wE0EaIDIoVBV0N8JQZuahzJ~NDDZLcnmajpNb~lBFsW1DxTGEBX-QU0KnOW3kbgTdq2J3-X2iZPiDO59O~t9BBjyC3FiSzpqEjTzzYaZA8bx37S0PM5bMHq9fJa1r4vdbQ3W5cyIB8cbw__"
          alt="Background"
          className="w-full opacity-25"
        />
      </div>
      <div className="relative max-w-[1440px]  mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex justify-center items-end">
          <h1 className="font-semibold text-[58px] font-poppins leading-[65px] text-center  mb-6">
            Together, We Drive Your Success          </h1>
        </div>
      </div>
    </div>
  );
}
