// import Logo from './../../assets/icons/Logo.png'
// import CommonButton from '../common/Button';
// const Footer = () => {
//   return (
//     <footer className="bg-black text-white py-8 h-[362px]" >


//       <div className=" md:p-10 mx-auto px-4" >
//         <div className="flex flex-col md:flex-row justify-between">
//           <div className="space-y-4">
//             <div className="flex">
//               <div>
//                 <img src={Logo} alt="logo" className="w-12 h-[50px]" />
//               </div>
//               <div>
//                 <span className="text-[#FFFFFF] text-xl font-semibold w-[103px] h-[42px] ">
//                   Tech <br /> Creator
//                 </span>
//               </div>
//             </div>
//             <p className=" w-[543px] font-poppins leading-[36px] h-[108px] text-[15px] text-[#FFFFFF]">
//               We have been providing quality services since 2001. We
//               provide our clients with complete end-to-end solutions. We
//               offer customized solutions according to their needs.
//             </p>
//           </div>
//           <div className='flex justify-between gap-16'>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Links</h3>
//               <ul className="space-y-2">
//                 {['Home', 'About', 'Services', 'Contact', 'Blog'].map((item) => (
//                   <li key={item}>
//                     <a href="#" className="text-sm hover:text-purple-500 transition-colors">
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Contact</h3>
//               <div className="space-y-2">
//                 <p className="text-sm">contact@techcreator.co</p>
//                 <p className="text-sm">092-3139832803</p>
//                 <p className="text-sm">+1-324-407-3272</p>
//                 <div className="flex space-x-2 mt-4">
//                   <CommonButton className='bg-[#9A00FF] text-white px-4 py-2 rounded-[36px] text-sm' title='Consultancy' handleClick={() => console.log("hello")} />
//                   <CommonButton className='bg-[#9A00FF] text-white px-4 py-2 rounded-[36px] text-sm' title='Appointment' handleClick={() => console.log("hello")} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* </div> */}

//     </footer>
//   );
// };

// export default Footer;
import Logo from './../../assets/icons/Logo.png';
import CommonButton from '../common/Button';
import Footerbg from '../../assets/footerImages/footer_bg_image.svg';

const Footer = () => {
  return (
    <footer
      className="relative bg-black text-white py-8 md:py-10 bottom-0 mt-40 w-full"
      style={{
        backgroundImage: `url(${Footerbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="md:p-10 mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left Section */}
          <div className="space-y-4 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <div>
                <img src={Logo} alt="logo" className="w-10 h-[40px] md:w-12 md:h-[50px]" />
              </div>
              <div className="ml-3">
                <span className="text-white text-lg md:text-xl font-semibold">
                  Tech <br /> Creator
                </span>
              </div>
            </div>
            <p className="max-w-sm md:max-w-md text-xs md:text-sm text-white leading-5 md:leading-[36px]">
              We have been providing quality services since 2001. We provide our clients with complete end-to-end solutions. We offer customized solutions according to their needs.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="flex flex-col">
              <h3 className="text-base md:text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Contact', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs md:text-sm hover:text-purple-500 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-base md:text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="text-xs md:text-sm">contact@techcreator.co</p>
                <p className="text-xs md:text-sm">092-3139832803</p>
                <p className="text-xs md:text-sm">+1-324-407-3272</p>
                <div className="flex space-x-2 mt-4">
                  <CommonButton className="bg-[#9A00FF] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-[36px] text-xs md:text-sm" title="Consultancy" handleClick={() => console.log('hello')} />
                  <CommonButton className="bg-[#9A00FF] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-[36px] text-xs md:text-sm" title="Appointment" handleClick={() => console.log('hello')} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
