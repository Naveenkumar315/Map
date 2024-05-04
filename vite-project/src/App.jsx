import React, { useEffect } from "react";
import Plotly from "plotly.js-dist";

const App = () => {
  useEffect(() => {
    // Sample data for India map
    const data = [
      {
        type: "densitymapbox",
        lat: [
          10.8505, 13.0827, 27.0238, 22.9868, 15.2993, 28.7041, 19.076, 25.0961,
          30.7333, 23.6102, 26.8467, 28.6139, 25.0961, 27.0238, 20.5937,
          11.1271, 23.9408, 15.9129, 26.2006, 31.1471, 15.3173, 30.0668,
          23.6102, 15.2993,
        ],
        lon: [
          76.2711, 80.2707, 74.2179, 87.855, 74.124, 77.1025, 72.8777, 85.3131,
          76.7794, 85.2799, 80.9462, 77.209, 85.3131, 74.2179, 78.9629, 78.6569,
          92.6586, 79.7404, 92.9376, 75.3412, 75.7139, 79.0193, 85.2799, 74.124,
        ],
        radius: 25, // Adjust the radius for heatmap intensity
        showscale: true,
        coloraxis: "coloraxis",
      },
    ];

    // Layout options
    const layout = {
      title: "India Heat Map",
      mapbox: {
        style: "carto-positron",
        zoom: 3,
        center: { lat: 20.5937, lon: 78.9629 }, // Centered on India
      },
      margin: { t: 0, b: 0, l: 0, r: 0 },
      coloraxis: {
        colorscale: "Viridis",
        colorbar: {
          title: "Intensity",
          tickvals: [0, 1, 2, 3], // Adjust tick values as needed
        },
      },
    };

    // Plot the Geo Map
    Plotly.newPlot("geo-map", data, layout);

    // Cleanup on unmount
    return () => {
      Plotly.purge("geo-map");
    };
  }, []); // Run only once on component mount

  return (
    <>
      <div>
        <h1>India Heat Map</h1>
        <div id="geo-map" style={{ width: "100%", height: "500px" }}></div>
      </div>
    </>
  );
};

export default App;
