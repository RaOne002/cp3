// 

// import React, { useState } from 'react';
// import { questions } from './questions/questions';
// import Navbar from './Navbar';

// const BusinessStartCard = () => {
//   const [step, setStep] = useState(0);
//   const [answers, setAnswers] = useState({});

//   const handleSelect = (value) => {
//     const currentQuestion = questions[step];
//     setAnswers({ ...answers, [currentQuestion.id]: value });
//     setStep((prev) => prev + 1);
//   };

//   if (step >= questions.length) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12">
//         <h1 className="text-3xl font-bold text-center text-blue-900 mb-4">
//           Thanks for your responses!
//         </h1>
//         <p className="text-gray-700 text-lg">You're all set. We’ll process your answers shortly.</p>
//         <a href="/" className="mt-6 text-blue-700 text-lg underline">
//           Go back to Home
//         </a>
//       </div>
//     );
//   }

//   const { title, options } = questions[step];

//   return (
//     <>
//       <Navbar step={step} total={questions.length} />
//       <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50">
//         <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">{title}</h1>
//         <div className="w-full max-w-md space-y-4">
//           {options.map((label, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleSelect(label)}
//               className="w-full py-4 px-6 rounded-md border border-gray-300 text-lg font-medium text-blue-900 bg-white hover:bg-blue-50 transition"
//             >
//               {label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default BusinessStartCard;

import React, { useState } from 'react';
import { questions } from './questions/questions';
import Navbar from './Navbar';

const BusinessStartCard = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleSelect = (value) => {
    const currentQuestion = questions[step];
    setAnswers({ ...answers, [currentQuestion.id]: value });
    setStep((prev) => prev + 1);
  };

  if (step >= questions.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 text-center">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          Thanks for your responses!
        </h1>
        <p className="text-gray-700 text-lg">You're all set. We’ll process your answers shortly.</p>
        <a href="/" className="mt-6 text-blue-700 text-lg underline z-30">
          Go back to Home
        </a>
      </div>
    );
  }

  const { title, options } = questions[step];

  return (
    <>
      <Navbar step={step} total={questions.length} />
      <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 bg-gray-50">
        <div className="flashcard-container w-full max-w-md z-30">
          <div className="flashcard">
            <div className="card-number">{step + 1} of {questions.length}</div>
            <div className="card-content">{title}</div>
          </div>
          <div className="do-you-know mt-4">Select your answer:</div>
          <div className="button-container mt-2">
            {options.map((label, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(label)}
                className="flashcard-button w-full mb-2"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessStartCard;



