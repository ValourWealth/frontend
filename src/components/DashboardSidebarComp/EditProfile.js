// import React, { useState, useEffect } from "react";
// import Select from "react-select";
// import countries from "world-countries";

// const formattedCountries = countries.map((country) => ({
//   label: country.name.common,
//   value: country.cca2,
//   regions: country.subregion || "", // optional
// }));

// function EditProfile() {
//   const [username, setUsername] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [password, setPassword] = useState("");
//   const [country, setCountry] = useState(null);
//   const [state, setState] = useState("");
//   const [loading, setLoading] = useState(false);

//   const token = localStorage.getItem("accessToken");
//   const API_BASE = process.env.REACT_APP_API_URL || "https://valourwealthdjango-production.up.railway.app";

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await fetch(`${API_BASE}api/user/profile/`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (res.ok) {
//           const data = await res.json();
//           setUsername(data?.username || "");
//           setFirstName(data?.first_name || "");
//           setCountry(
//             formattedCountries.find((c) => c.value === data?.country)
//           );
//           setState(data?.state || "");
//         }
//       } catch (err) {
//         console.error("Failed to fetch profile:", err);
//       }
//     };

//     fetchProfile();
//   }, [API_BASE, token]);

//   const handleUpdate = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}api/user/profile/`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           username,
//           first_name: firstName,
//           password: password || undefined,
//           country: country?.value,
//           state,
//         }),
//       });

//       if (res.ok) {
//         alert("✅ Profile updated successfully!");
//       } else {
//         const data = await res.json();
//         alert("❌ Failed to update profile.");
//         console.error(data);
//       }
//     } catch (err) {
//       console.error("Update failed:", err);
//       alert("Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="edit-profile py-5">
//       <div className="container">
//         <div className="card shadow-sm p-4">
//           <h4 className="mb-4">Edit Profile</h4>

//           <div className="mb-3">
//             <label>Username</label>
//             <input
//               type="text"
//               className="form-input"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label>First Name</label>
//             <input
//               type="text"
//               className="form-input"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-input"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="•••••••• (leave blank to keep current)"
//             />
//           </div>

//           <div className="mb-3">
//             <label>Country</label>
//             <Select
//               options={formattedCountries}
//               value={country}
//               onChange={setCountry}
//               placeholder="Select country"
//               className="react-select-container"
//               classNamePrefix="react-select"
//             />
//           </div>

//           <div className="mb-3">
//             <label>State / Province</label>
//             <input
//               type="text"
//               className="form-input"
//               value={state}
//               onChange={(e) => setState(e.target.value)}
//               placeholder="Enter your state or region"
//             />
//           </div>

//           <button
//             className="theme_btn text-white"
//             onClick={handleUpdate}
//             disabled={loading}
//           >
//             {loading ? "Updating..." : "Update Profile"}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default EditProfile;

import React, { useEffect, useState } from "react";
import Select from "react-select";
import countries from "world-countries";
import "../../styles/dashboard.css";

const formattedCountries = countries.map((c) => ({
  label: c.name.common,
  value: c.cca2,
  regions: c.subregion || "",
}));

function EditProfile() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState(null);
  const [state, setState] = useState("");
  const [photoFile, setPhotoFile] = useState(null); // 👈 NEW
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("accessToken");
  const API_BASE =
    process.env.REACT_APP_API_URL ||
    "https://valourwealthdjango-production.up.railway.app";

  // ---------- fetch profile ----------
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}api/user/profile/`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setUsername(data?.username || "");
          setFirstName(data?.first_name || "");
          setCountry(formattedCountries.find((c) => c.value === data?.country));
          setState(data?.state || "");
        }
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    })();
  }, [API_BASE, token]);

  // ---------- update profile ----------
  const handleUpdate = async () => {
    setLoading(true);

    // decide JSON vs multipart
    let body;
    let headers = { Authorization: `Bearer ${token}` };

    if (photoFile) {
      // multipart
      body = new FormData();
      body.append("username", username);
      body.append("first_name", firstName);
      if (password) body.append("password", password);
      if (country) body.append("country", country.value);
      body.append("state", state);
      body.append("profile_photo", photoFile);
    } else {
      // plain JSON
      headers["Content-Type"] = "application/json";
      body = JSON.stringify({
        username,
        first_name: firstName,
        password: password || undefined,
        country: country?.value,
        state,
      });
    }

    try {
      const res = await fetch(`${API_BASE}api/user/profile/`, {
        method: "PUT",
        headers,
        body,
      });

      if (res.ok) {
        alert("✅ Profile updated!");
        setPassword("");
        setPhotoFile(null);
      } else {
        console.error(await res.json());
        alert("❌ Failed to update profile.");
      }
    } catch (err) {
      console.error("Update failed:", err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // ---------- UI ----------
  return (
    <section className="edit-profile py-5">
      <div className="container">
        <div className="card-editplatinum shadow-sm p-4">
          <h4 className="mb-4 edit-form ">Edit Profile</h4>

          <div className="mb-3 edit-form">
            <label>Username</label>
            <input
              type="text"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3 edit-form">
            <label>First Name</label>
            <input
              type="text"
              className="form-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="mb-3 edit-form">
            <label>Password</label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="•••••••• (leave blank to keep current)"
            />
          </div>

          {/* <div className="mb-3 edit-form">
            <label>Country</label>
            <Select styles={{backgroundColor: '#1c1c1c'}}
              options={formattedCountries}
              value={country}
              onChange={setCountry}
              placeholder="Select country"
              className="react-select-container "
              classNamePrefix="react-select"
            />
          </div>

          <div className="mb-3 edit-form">
            <label>State / Province</label>
            <input
              type="text"
              className="form-input"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="Enter your state or region"
            />
          </div> */}

          <div className="mb-3 edit-form">
            <label>Country</label>
            <Select
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: "#1c1c1c",
                  color: "#fff",
                  borderColor: "#333",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "#fff",
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: "#1c1c1c",
                }),
                option: (base, state) => ({
                  ...base,
                  backgroundColor: state.isFocused ? "#2a2a2a" : "#1c1c1c",
                  color: "#fff",
                }),
              }}
              options={formattedCountries}
              value={country}
              onChange={setCountry}
              placeholder="Select country"
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </div>

          <div className="mb-3 edit-form">
            <label>State / Province</label>
            <input
              type="text"
              className="form-input"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="Enter your state or region"
              style={{
                backgroundColor: "#1c1c1c",
                color: "#fff",
                border: "1px solid #333",
              }}
            />
          </div>

          <div className="mb-3 edit-form">
            <label>Profile Photo</label>
            <input
              type="file"
              accept="image/*"
              className="form-input"
              onChange={(e) => setPhotoFile(e.target.files[0])}
            />
          </div>

          <button
            className="theme_btn text-white"
            onClick={handleUpdate}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default EditProfile;
