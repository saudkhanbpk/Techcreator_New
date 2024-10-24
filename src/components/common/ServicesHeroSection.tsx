interface ServicesSectionType {
  title: string;
  image: string;
  description: string;
  image2?: string;
}
function ServicesHeroSection({
  title,
  image,
  description,
  image2,
}: ServicesSectionType) {
  return (
    <>
      <div className="bg-black min-h-screen ">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex items-center justify-around mt-10 gap-12">
            <div className="text-white">
              <div>
                <h1 className=" font-medium text-[48px] mb-6 leading-[79.23px] max-w-2xl">
                  {title}
                </h1>
              </div>
              <div>
                <p className="text-[#FFFFFF] text-[18px]  leading-relaxed max-w-2xl">
                  {description}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-20 transform translate-y-12 translate-x-4">
                <img
                  src={image}
                  alt="Portfolio preview 1"
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
              {image2 && (
                <div className="absolute top-0 right-12 z-10">
                  <img
                    src={image2}
                    alt="Portfolio preview 2"
                    className="w-full rounded-lg shadow-xl opacity-75"
                  />
                </div>
              )}
              {
                image2 && (
                  <div className="absolute top-6 right-24 z-0">
                    <img
                      src="/api/placeholder/400/600"
                      alt="Portfolio preview 3"
                      className="w-full rounded-lg shadow-xl opacity-50"
                    />
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesHeroSection;
