// import React from "react";
// import './Banner.css';

// const Announcement = () => {
//   // const navigate = useNavigate(); // Hook to navigate to a route

//   return (
//     <section className="bg-green-100 py-8 px-4 md:px-16 flex flex-col md:flex-col items-center justify-center text-center md:text-center">
      

//       {/* Content */}
//       <div >
//       <h2 className="sm-text-2xl md:text-3xl font-bold text-black mb-4">
//         Training Methodology
          
//         </h2>
//         <p className="text-black text-lg mb-6 leading-relaxed"style={{fontFamily:"sans-serif", fontSize:"18px"}}>
//         All our programs are designed for case-based <strong>practical learning</strong> to help 
//         you relate the theory with your practical work experience and practice 
//         the lessons in a simulated project settings.
//         </p>

      
//       </div>
//     </section>
//   );
// };

// export default Announcement;

import React from "react";
import './Banner.css';

const Announcement = () => {
  return (
    <section className="bg-green-100 py-8 px-4 md:px-16 flex flex-col items-center justify-center text-center">
      
      {/* ✅ PMI Logo at the top */}
      <div className="mb-4">
      <img
  src="/assets/pmi-logo.jpg"
  alt="PMI Authorized Training Partner"
  className="h-28 w-auto mx-auto"  // ⬅️ was h-20, now h-28 for larger size
/>
      </div>

      {/* Content */}
      <div>
        <h2 className="sm-text-2xl md:text-3xl font-bold text-black mb-4">
          Training Methodology
        </h2>
        <p
          className="text-black text-lg mb-6 leading-relaxed"
          style={{ fontFamily: "sans-serif", fontSize: "18px" }}
        >
          All our programs are designed for case-based <strong>practical learning</strong> to help 
          you relate the theory with your practical work experience and practice 
          the lessons in a simulated project settings.
        </p>
      </div>
    </section>
  );
};

export default Announcement;
