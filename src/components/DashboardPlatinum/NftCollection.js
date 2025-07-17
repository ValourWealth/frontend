// import React from 'react';

// const NFTCollection = () => {
//   return (
//     <div className="nft-collection-container">
//       <h2 className="collection-title">Your NFT Collection</h2>

//       <div className="nft-grid">
//         {/* Legendary NFT Card */}
//         <div className="nft-card">
//           <div className="nft-badge legendary">
//             <svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <circle cx="100" cy="100" r="90" stroke="#FFC107" strokeWidth="4"/>
//               <path d="M100 140C100 140 130 120 130 90C130 73.4315 116.569 60 100 60C83.4315 60 70 73.4315 70 90C70 120 100 140 100 140Z" stroke="#FFC107" strokeWidth="4"/>
//               <circle cx="100" cy="90" r="15" stroke="#FFC107" strokeWidth="4"/>
//             </svg>
//           </div>

//           <div className="nft-rarity legendary">Legendary</div>

//           <h3 className="nft-title">Founder's Edition</h3>
//           <p className="nft-issue-date">Issued: January 15, 2023</p>

//           <ul className="nft-benefits">
//             <li>
//               <span className="check-icon">
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <circle cx="8" cy="8" r="8" fill="#4CAF50" fillOpacity="0.2"/>
//                   <path d="M12 6L7 11L4 8" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </span>
//               Lifetime platinum membership
//             </li>
//             <li>
//               <span className="check-icon">
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <circle cx="8" cy="8" r="8" fill="#4CAF50" fillOpacity="0.2"/>
//                   <path d="M12 6L7 11L4 8" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </span>
//               Quarterly strategy sessions
//             </li>
//             <li>
//               <span className="check-icon">
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <circle cx="8" cy="8" r="8" fill="#4CAF50" fillOpacity="0.2"/>
//                   <path d="M12 6L7 11L4 8" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </span>
//               Beta access to all features
//             </li>
//           </ul>

//           <button className="view-details-btn">View Details</button>
//         </div>

//         {/* Rare NFT Card */}
//         <div className="nft-card">
//           <div className="nft-badge rare">
//             <svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="4"/>
//               <path d="M100 140C100 140 130 120 130 90C130 73.4315 116.569 60 100 60C83.4315 60 70 73.4315 70 90C70 120 100 140 100 140Z" stroke="white" strokeWidth="4"/>
//               <circle cx="100" cy="90" r="15" stroke="white" strokeWidth="4"/>
//             </svg>
//           </div>

//           <div className="nft-rarity rare">Rare</div>

//           <h3 className="nft-title">Q1 2025 Challenge Winner</h3>
//           <p className="nft-issue-date">Issued: March 31, 2025</p>

//           <ul className="nft-benefits">
//             <li>
//               <span className="check-icon">
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <circle cx="8" cy="8" r="8" fill="#4CAF50" fillOpacity="0.2"/>
//                   <path d="M12 6L7 11L4 8" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </span>
//               3 months free membership
//             </li>
//             <li>
//               <span className="check-icon">
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <circle cx="8" cy="8" r="8" fill="#4CAF50" fillOpacity="0.2"/>
//                   <path d="M12 6L7 11L4 8" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </span>
//               Special badge on leaderboard
//             </li>
//           </ul>

//           <button className="view-details-btn">View Details</button>
//         </div>

//         {/* Uncommon NFT Card */}
//         <div className="nft-card">
//           <div className="nft-badge uncommon">
//             <svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <circle cx="100" cy="100" r="90" stroke="#999" strokeWidth="4"/>
//               <path d="M100 140C100 140 130 120 130 90C130 73.4315 116.569 60 100 60C83.4315 60 70 73.4315 70 90C70 120 100 140 100 140Z" stroke="#999" strokeWidth="4"/>
//               <circle cx="100" cy="90" r="15" stroke="#999" strokeWidth="4"/>
//             </svg>
//           </div>

//           <div className="nft-rarity uncommon">Uncommon</div>

//           <h3 className="nft-title">2-Year Anniversary</h3>
//           <p className="nft-issue-date">Issued: February 10, 2025</p>

//           <ul className="nft-benefits">
//             <li>
//               <span className="check-icon">
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <circle cx="8" cy="8" r="8" fill="#4CAF50" fillOpacity="0.2"/>
//                   <path d="M12 6L7 11L4 8" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </span>
//               Limited edition trading toolkit
//             </li>
//             <li>
//               <span className="check-icon">
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <circle cx="8" cy="8" r="8" fill="#4CAF50" fillOpacity="0.2"/>
//                   <path d="M12 6L7 11L4 8" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </span>
//               Exclusive webinar access
//             </li>
//           </ul>

//           <div className="not-owned-badge">Not Owned</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NFTCollection;
import axios from "axios";
import { useEffect, useState } from "react";

const NFTCollection = () => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const fetchUserBadges = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const res = await axios.get(
          "https://backend-production-1e63.up.railway.app/api/my-recent-badges/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setBadges(res.data);
      } catch (error) {
        console.error("Error fetching badges", error);
      }
    };

    fetchUserBadges();
  }, []);

  return (
    <div className="nft-collection-container">
      <h2 className="collection-title">Your NFT Collection</h2>

      <div className="nft-grid">
        {badges.length === 0 && (
          <p className="text-gray-400">You haven’t collected any NFTs yet.</p>
        )}

        {badges.map((badge) => (
          <div className="nft-card" key={badge.id}>
            <div className={`nft-badge ${badge.category}`}>
              <img
                src={badge.image_url}
                alt={badge.name}
                className="w-24 h-24 object-contain mx-auto"
              />
            </div>

            <div className={`nft-rarity ${badge.category}`}>
              {badge.category.toUpperCase()}
            </div>

            <h3 className="nft-title">{badge.name}</h3>
            <p className="nft-issue-date">
              Issued: {new Date(badge.assigned_at).toLocaleDateString()}
            </p>

            {/* Dummy benefits, or you can store them in DB and return with badge */}
            <ul className="nft-benefits">
              <li>✅ Example benefit 1</li>
              <li>✅ Example benefit 2</li>
            </ul>

            <button className="view-details-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTCollection;
