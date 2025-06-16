import React from 'react'
import market1 from "../assets/images/reddit-market-img.webp"
import market2 from "../assets/images/intel-mrket-img.webp"
import PostEditor from '../components/postEditor'

function CryptoDetails() {
  return (
    // <section className='details_main'>
    // <div className="container">
    // <div className="col-lg-12">
    //     <h2 className='sec_heading mb-5'>
    //       Crypto
    //     </h2>
    //   </div>

    //   <div className="row">
    //   <div className="col-md-4">
    //       <a className='text-decoration-none' href="">
    //       <div className="details-card">
    //         {/* Card Image */}
    //        <div className="main-detail-img">
    //        <img
    //           src={market1} 
    //           alt="Wells Fargo"
    //           className="details-card-img obj_fit"
    //         />
    //        </div>

    //         {/* Card Body */}
    //         <div className="details-card-body">
    //           <span className="badge bg-light text-dark fw-bold">MARKETS</span>
    //           <h5 className="card-title mt-2">
    //             Thursday’s Biggest Analyst Calls: Nvidia, Apple, Boeing, Wells Fargo, Microsoft, Amazon & More
    //           </h5>
    //           <p className="card-text text-muted">Editorial Board</p>
    //         </div>
    //       </div>
    //       </a>
    //   </div>

    //     <div className="col-md-4">
    //       <a className='text-decoration-none' href="">
    //       <div className="details-card">
    //         {/* Card Image */}
    //         <div className='main-detail-img'>
    //          <img
    //           src={market2} 
    //           alt="Wells Fargo"
    //           className="details-card-img obj_fit"
    //         />
    //         </div>

    //         {/* Card Body */}
    //         <div className="details-card-body">
    //           <span className="badge bg-light text-dark fw-bold">MARKETS</span>
    //           <h5 className="card-title mt-2">
    //             Thursday’s Biggest Analyst Calls: Nvidia, Apple, Boeing, Wells Fargo, Microsoft, Amazon & More
    //           </h5>
    //           <p className="card-text text-muted">Eric Ng</p>
    //         </div>
    //       </div>
    //       </a>
    //     </div>
    //   </div>
    // </div>
    // </section>
    <PostEditor/>
  )
}

export default CryptoDetails