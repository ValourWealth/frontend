// import React from 'react'
// import websiteLogowhite from "../assets/images/valour-inverted-logo.jpeg"

// function newsletter() {
//   return (
//     <div>
//     <section
//       className="newsletter-section">
//       <div className="container p-0">
//         <div className="row align-items-center">
//           {/* Left Side - Text and Form */}
//           <div className="col-md-6">
//             <div className="newsletter-content p-4">
//               <img src={websiteLogowhite} alt="ValourWealth Logo" className="mb-3" height="50" />
//               <h3 className="">Subscribe to our <span className="text-gray">newsletter!</span></h3>
//               <p className="">
//                 As a leading independent research provider, ValourWealth keeps you connected from anywhere.
//               </p>
//             </div>
//           </div>

//           {/* Right Side - Background Image (Optional) */}
//           <div className="col-md-6">
//           <form className="newsletter-form  p-3">
//                 <input
//                   type="text"
//                   className="input-group mb-2"
//                   placeholder="Your Name"
//                   required
//                 />
//                 <input
//                   type="email"
//                   className="input-group mb-2"
//                   placeholder="Your Email"
//                   required
//                 />
//                 <button type="submit" className="theme_btn m-0 ">Join!</button>
//               </form>
//           </div>
//         </div>
//       </div>
//     </section>

//     </div>
//   )
// }

// export default newsletter

import { useState } from "react";
import websiteLogowhite from "../assets/images/valour-inverted-logo.jpeg";

function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const res = await fetch(
      "https://valourwealthdjango-production.up.railway.app/api/newsletter/subscribe/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      }
    );

    const result = await res.json();
    if (res.ok) {
      setMessage("Subscribed successfully!");
      setName("");
      setEmail("");
    } else {
      setMessage(result.error || "Something went wrong.");
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container p-0">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="newsletter-content p-4">
              <img
                src={websiteLogowhite}
                alt="ValourWealth Logo"
                className="mb-3"
                height="50"
              />
              <h3>
                Subscribe to our <span className="text-gray">newsletter!</span>
              </h3>
              <p>
                As a leading independent research provider, ValourWealth keeps
                you connected from anywhere.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <form className="newsletter-form p-3" onSubmit={handleSubmit}>
              <input
                type="text"
                className="input-group mb-2"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                className="input-group mb-2"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="theme_btn m-0">
                Join!
              </button>
              {message && <p className="mt-2">{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
