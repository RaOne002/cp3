// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="flex items-center justify-between p-4 shadow bg-white">
//       <div>
//         <img 
//             src="main logo.jpg" 
//             alt="Logo" 
//             style={{ width: '50px', height: '50px', marginLeft: '100px' }}
//         />
//       </div>
//       <div className="flex space-x-6 text-sm font-medium text-gray-700">
//         <span className="text-blue-700 font-semibold">Basic Info</span>
//         <span>Your Business</span>
//         <span>Your Info</span>
//         <span>Offers & Final Details</span>
//       </div>
//       <a href="#" className="text-xs text-blue-700 underline">Advertiser Disclosure</a>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';

const Navbar = ({ step, total }) => {
  const sectionCount = 3;
  const questionsPerSection = Math.ceil(total / sectionCount);
  const currentSection = Math.floor(step / questionsPerSection);

  const sections = ['Basic Info', 'Your Business', 'Your Info', 'Offers & Final Details'];

  return (
    <nav className="flex flex-col md:flex-row md:items-center justify-between p-4 shadow bg-white space-y-4 md:space-y-0 md:space-x-6">
      {/* Logo */}
      <div className="flex justify-center md:justify-start">
        <img 
          src="main logo.jpg" 
          alt="Logo" 
          className="w-12 h-12 md:ml-24"
        />
      </div>

      {/* Sections */}
      <div className="flex flex-wrap justify-center md:justify-start space-x-4 text-sm font-medium text-gray-700">
        {sections.map((label, idx) => (
          <span
            key={idx}
            className={`${
              idx === currentSection ? 'text-blue-700 font-semibold' : ''
            } text-center`}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Disclosure Link */}
      <div className="flex justify-center md:justify-end">
        <a href="#" className="text-xs text-blue-700 underline z-30">Advertiser Disclosure</a>
      </div>
    </nav>
  );
};

export default Navbar;
