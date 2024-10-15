import React, { useEffect } from 'react';

const MapPage = () => {
  useEffect(() => {
    // Initialize the map once the component mounts
    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 }, // Replace with your coordinates
        zoom: 8,
      });
      // Add other map-related logic here (e.g., markers, event listeners)
    };
  }, []);

  const htmlContent = `
    <h3>Select Waypoints on the Map</h3>
    <div id="map" style="height: 400px; width: 100%; margin-bottom: 20px;"></div>
    <div id="controls">
        <button id="drawPathButton">Draw Path</button>
        <button id="sendCoordinatesButton">Send Coordinates</button>
        <button id="viewWaypointsButton">View Waypoints</button>
    </div>

    <div id="waypointsModal" class="modal">
        <h2 style="color: purple;">Waypoints</h2>
        <ul id="waypoint-list" class="waypoint-list"></ul>
        <button id="closeModal">Close</button>
    </div>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default MapPage;
