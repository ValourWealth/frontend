// import React from "react";

// function TradingTools() {
//   return (
//     <div>
//         <div className="heatmap-container">
//         <iframe
//           title="Finviz Heatmap"
//           src="https://finviz.com/map.ashx?t=sec"
//           className="heatmap-iframe"
//           width="100%"
//           height="600"
//           frameBorder="0"
//         ></iframe>
//       </div>
//     </div>
//   );
// }

// export default TradingTools;

import React from "react";

function TradingTools() {
  return (
    <div>
      <div className="heatmap-container">
        <img
          src="https://finviz.com/export.ashx?id=map_sec.png"
          alt="Finviz Heatmap"
          className="heatmap-iframe"
          width="100%"
          height="600"
        />
      </div>
    </div>
  );
}

export default TradingTools;
