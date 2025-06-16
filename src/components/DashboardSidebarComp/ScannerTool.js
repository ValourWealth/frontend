import React from 'react'
import toolImg from '../DashboardSidebarComp/images/scanner-tool.jpg';

function ScannerTool() {
  return (
    <section className='scanner_tool pt-0'>
    <div className='container blur'>
        <div className="col-lg-12">
          <div className="tool-img blur">
            <img className='obj_fit' src={toolImg} alt="" />
          </div>
        </div>
    </div>
    </section>
  )
}

export default ScannerTool

