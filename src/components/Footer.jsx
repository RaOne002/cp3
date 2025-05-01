// import {
//   FaInstagram,
//   FaFacebookF,
//   FaYoutube,
// } from 'react-icons/fa';
// import { FaXTwitter } from 'react-icons/fa6';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-50 border-t border-gray-200 py-10 text-sm text-gray-600">
//       <div className="flex flex-col items-center gap-6">
//         {/* Logo */}
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-blue-900">
//           ignite<span className="text-sky-500">business</span>
//           </h2>
//           <p className="text-xl font-semibold text-blue-500 -mt-2">loans<span className="text-gray-600 text-sm align-top">.com</span></p>
//         </div>

//         {/* Navigation links */}
//         <div className="flex flex-wrap justify-center gap-6 text-gray-700 font-medium">
//           <a href="#">About Us</a>
//           <a href="#">Guides</a>
//           <a href="#">FAQs</a>
//           <a href="#">Privacy Policy</a>
//           <a href="#">Terms and Conditions</a>
//           <a href="#">Partner with Us</a>
//         </div>

//         {/* Copyright */}
//         <p className="text-center text-gray-500 mt-2">
//           © 2025 SSBV LLC dba BusinessLoans.com. All rights reserved.
//         </p>

//         {/* Social Icons */}
//         <div className="flex items-center gap-5 mt-2 text-2xl text-gray-700">
//           <a href="#"><FaXTwitter /></a>
//           <a href="#"><FaInstagram /></a>
//           <a href="#"><FaFacebookF /></a>
//           <a href="#"><FaYoutube /></a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10 px-4 text-sm text-gray-600">
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-900">
            ignite<span className="text-sky-500">business</span>
          </h2>
          <p className="text-xl font-semibold text-blue-500 -mt-2">
            loans<span className="text-gray-600 text-sm align-top">.com</span>
          </p>
        </div>

        {/* Navigation links */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-gray-700 font-medium text-center max-w-md">
          <a href="#">About Us</a>
          <a href="#">Guides</a>
          <a href="#">FAQs</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Partner with Us</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4 text-2xl text-gray-700">
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaYoutube /></a>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 mt-4 px-4 text-xs sm:text-sm">
          © 2025 SSBV LLC dba BusinessLoans.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
