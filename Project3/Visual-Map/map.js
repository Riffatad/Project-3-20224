// Initialize the Leaflet map
const map = L.map("map"); // Create a map instance without setting an initial center or zoom

// Add OpenStreetMap tiles to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors", // Attribution for the map tiles
}).addTo(map);

// Function to assign color based on EV population
function getColor(d) {
  return d > 5000
    ? "#800026" // Dark red for highest population
    : d > 2000
    ? "#BD0026" // Red
    : d > 1000
    ? "#E31A1C" // Bright red
    : d > 500
    ? "#FC4E2A" // Orange-red
    : d > 200
    ? "#FD8D3C" // Orange
    : d > 100
    ? "#FEB24C" // Light orange
    : d > 50
    ? "#FED976" // Yellow
    : "#FFEDA0"; // Light yellow for lowest population
}

// Function to calculate radius of markers based on EV population
function getRadius(population) {
  const minRadius = 7; // Ensure small populations have a visible size
  const maxRadius = 20; // Cap the radius for very large populations
  const scaleFactor = 0.1; // Adjust scaling factor to fine-tune marker sizes

  // Scale the radius using square root (to prevent excessive size variance)
  const scaledRadius = Math.sqrt(population) * scaleFactor;

  // Clamp the radius to the min and max range
  return Math.max(minRadius, Math.min(maxRadius, scaledRadius));
}

// Fetch and process the dataset
d3.json(
  "https://raw.githubusercontent.com/Riffatad/ev_poplulation/refs/heads/main/aggregate_ev_population_with_location.json"
)
  .then((data) => {
    const bounds = []; // Array to store marker coordinates for map bounds

    data.forEach((d) => {
      const lat = d.Latitude; // Latitude of the county
      const lng = d.Longitude; // Longitude of the county
      const population = d.EVPopulation; // EV population in the county
      const county = d.County; // Name of the county

      // Add coordinates to the bounds array for auto-zooming
      bounds.push([lat, lng]);

      // Create a circle marker for each data point
      L.circleMarker([lat, lng], {
        radius: getRadius(population), // Calculate the radius dynamically
        fillColor: getColor(population), // Determine marker color
        color: "#000", // Black border for markers
        weight: 0.5, // Border width
        fillOpacity: 0.8, // Marker fill transparency
      })
        .addTo(map) // Add the marker to the map
        .bindPopup(
          `<b>County:</b> ${county}<br><b>EV Population:</b> ${population}` // Display information in a popup
        );
    });

    // Auto-zoom map to fit all markers
    map.fitBounds(bounds);

    // Add a legend to the map
    addLegend();
  })
  .catch((error) => {
    console.error("Error loading data:", error); // Handle data loading errors
  });

// Function to add a legend to the map
function addLegend() {
  const legend = L.control({ position: "bottomright" }); // Position legend at the bottom right

  legend.onAdd = function () {
    const div = L.DomUtil.create("div", "legend"); // Create a div for the legend
    const grades = [0, 50, 100, 200, 500, 1000, 2000, 5000]; // Population thresholds

    div.innerHTML = "<h4>EV Population</h4>"; // Legend title
    for (let i = 0; i < grades.length; i++) {
      // Add a color box and label for each range
      div.innerHTML +=
        '<div class="legend-item">' +
        '<div class="legend-color" style="background:' +
        getColor(grades[i] + 1) +
        '"></div>' +
        grades[i] +
        (grades[i + 1] ? "&ndash;" + grades[i + 1] : "+") + // Display range (e.g., 50-100)
        "</div>";
    }
    return div;
  };

  legend.addTo(map); // Add the legend to the map
}
