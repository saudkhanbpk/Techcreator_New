
function HeroSection() {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://s3-alpha-sig.figma.com/img/930f/4355/0bcba6ef8b56768f41a9178e764cc5ea?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q4w5Emi2brMKFJnvLACHgfmSX9DdtK35psqsEokLlmBJ0UIzgM5qfFf8jvuVrQtgXnsAx3pi7wYWH0Dm9hN1uD9X6u1zW5ZFRDcOCvyg8cmu1IvtI-GUkoKPnL0tI6YzbP16Bc7n~tQ2cCtmnn5o6opZabVHzTFeOO-WcVmojwec~nIWWtGNWgOyvTUIhv2QZ1cdzbprg24ynfRUgk~OSTIqEQqihNwVvPCTChx2BlPa1wS8935BrmlvaKiYNHVfHlwcmpNmLqwDu20RYqGJsEklaD9-6K7KqkLm~ZvQMz2lnd8xyrFUX9e6a3pGW9U3bUV2yC3yLMEBgekqEVNQbQ__"
          alt="Background"
          className="w-full h-[878px] "
        />
      </div>
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="font-semibold text-[57px] leading-[65px] text-center  mb-6">
            Revolutionizing <span className="text-purple-500">Business</span> Through
            <br className="hidden md:inline" />
            <span className="text-purple-500">Automation</span> and Scalable <span className="text-purple-500">Development</span>
          </h1>
          <p className="font-normal text- max-w-3xl mx-auto mb-8 leading-9">
            TechCreator, a U.S.-based organization, doesn't just automate business processes—
            we understand your unique needs and anticipate future challenges. Our vision is to
            empower your growth journey with cutting-edge automation and custom software
            development solutions, driving innovation and success at every stage.
          </p>
          <button style={{
            background: " rgba(255, 255, 255, 0.24)"
          }} className=" text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Automate your Business &nbsp;&nbsp; →
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
