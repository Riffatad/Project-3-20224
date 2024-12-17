// Initialize the dashboard
function init() {
    const url = "https://raw.githubusercontent.com/Riffatad/ev-dashboard/refs/heads/main/filtered_battery_vehicles_2023.json";

    d3.json(url)
        .then((data) => {
            console.log("Loaded data:", data);

            if (!data || data.length === 0) {
                console.error("No data available");
                return;
            }

            // Populate dropdowns with unique VINs
            const dropdowns = [
                d3.select("#vin1"),
                d3.select("#vin2"),
                d3.select("#vin3"),
                d3.select("#vin4"),
                d3.select("#vin5"),
            ];
            const uniqueVins = Array.from(new Set(data.map((ev) => ev["VIN"])));

            dropdowns.forEach((dropdown) => {
                uniqueVins.forEach((vin) => {
                    dropdown.append("option").text(vin).property("value", vin);
                });
            });

            console.log("Dropdowns populated successfully!");

            // Initialize the bar chart and metadata with the first VINs
            const initialVins = uniqueVins.slice(0, 5);
            updateBarChart(initialVins, data);
            updateMetadata(initialVins, data);
        })
        .catch((error) => console.error("Error initializing dashboard:", error));
}

// Update the bar chart for the selected VINs
function updateBarChart(selectedVins, data) {
    const filteredEVs = selectedVins
        .filter((vin) => vin !== null)
        .map((vin) => data.find((ev) => ev["VIN"] === vin));

    if (filteredEVs.length === 0) {
        console.error("No data available for selected VINs.");
        d3.select("#bar").html("<p>No data available for bar chart.</p>");
        return;
    }

    const xLabels = filteredEVs.map((ev) => ev["VIN"]);
    const yValues = filteredEVs.map((ev) => ev["Electric Range"] || 0);
    const textLabels = filteredEVs.map((ev) => `${ev.Make} ${ev.Model}`);

    const barData = [
        {
            x: xLabels,
            y: yValues,
            text: textLabels,
            type: "bar",
            marker: {
                color: ["#1abc9c", "#3498db", "#9b59b6", "#e74c3c", "#f1c40f"],
            },
        },
    ];

    const barLayout = {
        title: {
            text: "Comparison of Electric Range by VIN",
            font: {
                size: 18,
                color: "#2c3e50",
            },
        },
        xaxis: { title: "VIN", tickangle: -45 },
        yaxis: { title: "Electric Range (miles)" },
        plot_bgcolor: "#ecf0f1",
        paper_bgcolor: "#f4f4f9",
    };

    Plotly.newPlot("bar", barData, barLayout);
}


// Update metadata for the selected VINs
function updateMetadata(selectedVins, data) {
    selectedVins.forEach((vin, index) => {
        const metadataDiv = d3.select(`#metadata${index + 1}`);
        metadataDiv.html(""); // Clear previous metadata

        const ev = data.find((ev) => ev["VIN"] === vin);
        if (!ev) {
            metadataDiv.html("<p>No information available for this VIN.</p>");
            return;
        }

        metadataDiv.append("h4").text(`VIN: ${vin}`);
        Object.entries(ev).forEach(([key, value]) => {
            metadataDiv.append("p").text(`${key}: ${value}`);
        });
    });
}

// Handle VIN selection change
function handleVinChange() {
    const selectedVin1 = d3.select("#vin1").property("value");
    const selectedVin2 = d3.select("#vin2").property("value");
    const selectedVin3 = d3.select("#vin3").property("value");
    const selectedVin4 = d3.select("#vin4").property("value");
    const selectedVin5 = d3.select("#vin5").property("value");

    const selectedVins = [selectedVin1, selectedVin2, selectedVin3, selectedVin4, selectedVin5];

    const url = "https://raw.githubusercontent.com/Riffatad/ev-dashboard/refs/heads/main/filtered_battery_vehicles_2023.json";

    d3.json(url)
        .then((data) => {
            updateBarChart(selectedVins, data);
            updateMetadata(selectedVins, data);
        })
        .catch((error) => console.error("Error handling VIN change:", error));
}

// Initialize the dashboard
init();
