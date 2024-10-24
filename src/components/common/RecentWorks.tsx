import { Pencil, Heart } from 'lucide-react';
import image from './../../assets/RecentWork/unsplash_IyaNci0CyRk.png'
import image1 from './../../assets/RecentWork/unsplash_7ZWVnVSaafY.png'
import image2 from './../../assets/RecentWork/unsplash_qC2n6RQU4Vw.png'
import image3 from './../../assets/RecentWork/unsplash_m_HRfLhgABo.png'
const RecentWorks = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Recent</h2>
          <h2 className="text-3xl font-bold text-gray-900">Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl col-span-2 overflow-hidden">
            <img
              src={image}
              alt="Orange book design"
              className="w-full h-64 object-cover bg-yellow-400"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <div className="w-full h-64 bg-blue-600 flex flex-col items-center justify-center text-white">
              <h3 className="text-2xl font-bold mb-4">Logo</h3>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Pencil className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src={image1}
              alt="Laptop on table"
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="rounded-2xl overflow-hidden md:col-span-2 lg:col-span-1">
            <img
              src={image2}
              alt="Development setup"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden md:col-span-2 lg:col-span-1">
            <img
              src={image3}
              alt="Design planning"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;