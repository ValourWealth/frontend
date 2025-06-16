import React from 'react';

function CryptoData() {
    return(
        <div className="data_visualization">
            <div className="container">
            <div className="heatmap-container">
        <iframe
          title="Finviz Heatmap"
          src="https://finviz.com/map.ashx?t=sec"
          className="heatmap-iframe"
          width="100%"
          height="600"
          frameBorder="0"
        ></iframe>
      </div>
            </div>
        </div>
    )
}

export default CryptoData;