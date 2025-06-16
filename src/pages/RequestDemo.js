// import React, { useState } from "react";
// import axios from "axios";

// function RequestDemo() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     date: "",
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null); // Clear previous errors

//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}api/request-demo/`,
//         formData
//       );

//       if (response.status === 200) {
//         setIsSubmitted(true);
//         setFormData({ firstName: "", lastName: "", email: "", phone: "", date: "" });
//       } else {
//         setError("An unexpected error occurred. Please try again.");
//       }
//     } catch (error) {
//       console.error("API Error:", error);
//       setError(error.response?.data?.error || "Failed to submit. Please check your details and try again.");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="col-lg-8 mx-auto">
//         <div className="form-card shadow-lg p-4 rounded">
//           {isSubmitted ? (
//             <div className="text-center submission-message">
//               <h2>Thank you!</h2>
//               <p>Your submission has been received.</p>
//               <p>We will be in touch with you shortly regarding your demo request.</p>
//             </div>
//           ) : (
//             <>
//               <h2 className="text-center">Interested in Learning More?</h2>
//               <p className="text-center text-white">
//                 Submit your details and our team will reach out for a personalized demonstration.
//               </p>

//               {error && <p className="text-danger text-center">{error}</p>}

//               <form onSubmit={handleSubmit} className="row g-3">
//                 <div className="col-md-6">
//                   <label className="form-label">First Name</label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     className="form-input"
//                     required
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     placeholder="Enter First Name"
//                   />
//                 </div>

//                 <div className="col-md-6">
//                   <label className="form-label">Last Name</label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     className="form-input"
//                     required
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     placeholder="Enter Last Name"
//                   />
//                 </div>

//                 <div className="col-md-12">
//                   <label className="form-label">Email Address</label>
//                   <input
//                     type="email"
//                     name="email"
//                     className="form-input"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter Email"
//                   />
//                 </div>

//                 <div className="col-md-6">
//                   <label className="form-label">Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     className="form-input"
//                     required
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="(201) 555-0123"
//                   />
//                 </div>

//                 <div className="col-md-6">
//                   <label className="form-label">Preferred Date</label>
//                   <input
//                     type="date"
//                     name="date"
//                     className="form-input"
//                     required
//                     value={formData.date}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="col-12 text-center">
//                   <button type="submit" className="theme_btn">
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RequestDemo;

import axios from "axios";
import { useState } from "react";

function RequestDemo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    allowUpdates: false, // new field
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}api/request-demo/`,
        formData
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          date: "",
          allowUpdates: false,
        });
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      console.error("API Error:", error);
      setError(
        error.response?.data?.error ||
          "Failed to submit. Please check your details and try again."
      );
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-lg-8 mx-auto">
        <div className="form-card shadow-lg p-4 rounded">
          {isSubmitted ? (
            <div className="text-center submission-message">
              <h2>Thank you!</h2>
              <p>Your submission has been received.</p>
              <p>
                We will be in touch with you shortly regarding your demo
                request.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-center">Interested in Learning More?</h2>
              <p className="text-center text-white">
                Submit your details and our team will reach out for a
                personalized demonstration.
              </p>

              {error && <p className="text-danger text-center">{error}</p>}

              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-input"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter First Name"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-input"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter Last Name"
                  />
                </div>

                <div className="col-md-12">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(201) 555-0123"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    className="form-input"
                    required
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-12 d-flex align-items-center">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id="allowUpdates"
                    name="allowUpdates"
                    checked={formData.allowUpdates}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="allowUpdates"
                    className="form-check-label text-white"
                  >
                    Allow Valour Wealth to Send You Latest Updates.
                  </label>
                </div>

                <div className="col-12 text-center">
                  <button type="submit" className="theme_btn">
                    Submit
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default RequestDemo;
