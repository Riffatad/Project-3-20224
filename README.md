# Electric Refueling - Green Energy / Save Planet
## Introduction
This project analyzes electric vehicle (EV) registrations, trends, and geographic hotspots within Washington state to uncover local growth patterns and market insights. The goal is to highlight how the adoption of green energy vehicles has progressed over time and to compare EV trends with traditional gas-fueled vehicles.
The dataset contains 128,140 unique records spanning 1997 to 2024, providing valuable insights into EV adoption. The project uses interactive data visualization techniques and Python-based interactivity to tell a clear and compelling data story.This project utilized the Data Visualization Track for interactivity.
________________________________________
## Project Purpose
### The primary objectives of this project are:
1.	To visualize EV adoption trends over time using dynamic bar charts and geographic maps.
2.	To provide actionable insights into EV market hotspots and growth in Washington state.
3.	To encourage awareness and adoption of green energy vehicles as part of a broader sustainability effort.
________________________________________
## Features
### Data Visualizations
The project includes three unique visualizations:

1.	Interactive Bar Chart:
Compares the electric range of selected vehicles based on their VINs.

3.	Detailed Metadata Viewer:
Displays key vehicle attributes such as Make, Model, Year, and Electric Range.

5.	EV Population Map:
Visualizes EV adoption across counties using dynamic markers that scale in size and color.

User Interaction
•	Dropdown Menus:
Select up to 5 VINs dynamically to explore vehicle attributes in the EV Dashboard.

•	Interactive Map:
Clickable markers display EV population details for each county.

•	Tooltips and Popups:
Provide additional insights for selected data points.
________________________________________
## Setup Instructions
1. Environment Setup

  •	Ensured Python and PostgreSQL are installed.

  •	Install required libraries, including Pandas, Plotly, SQLAlchemy, D3.js, and Leaflet.js.
________________________________________
2. Database Setup
  •	Place the CSV files in the project directory

  •	Run that 01_etl_csv_sqlite.ipynb to create Db file in clean data
  Run the Notebooks

  •	Open the Jupyter Notebooks:
  Project3.ipynb,


   •	Follow the instructions in the notebooks to load data and interact with the database.
    Verify the Results
 
   •	Query the database to ensure the data has been loaded and processed correctly.
_______________________________________
3. Data Preparation
•	Opened the Project3.ipynb Jupyter Notebook.
•	Followed the steps to:
Cleaned and preprocess the dataset.
Analyzed trends such as EV growth over time.
Exported the cleaned data for frontend visualizations.
________________________________________
4. Running the Project
Open the index.html file in any modern browser.
Use the dashboard and map to interact with the EV data:
Dropdown menus allow VIN-based analysis.
The interactive map displays EV population trends dynamically.
________________________________________
### Project Requirements Checklist /Requirement	Status

Dataset contains at least 100 unique records 	• 128,140 unique records

Data stored in a database (SQL)	•	PostgreSQL integration

README includes project overview	•	Included

Instructions for use and interaction	•	Provided

Ethical considerations included	•	Addressed

References to data sources and external code	•	Cited

Three unique data visualizations	•	Bar chart, metadata viewer, and map

Visualizations are clear and digestible	•	Easy-to-understand charts

User interaction via dropdowns and filters	•	Dropdowns and dynamic map

Runs without errors	•	Tested and functional

Use of external libraries not shown in class	•	Seaborn & plotly.express
________________________________________
Future Enhancements
•	Add filtering options to analyze EV data by Make, Model, or Year.
•	Integrate real-time data for EV registrations.
•	Include EV charging station locations on the map.
________________________________________
## References:
### Data Sources
•	EV data sourced from publicly available Washington State records.
•	Dataset spans EV registrations from 1997 to 2023.
### Libraries and Tools
•	Frontend: D3.js, Leaflet.js, Plotly.js
•	Backend: PostgreSQL, SQLAlchemy, Pandas, Matplotlib
•	Data Visualization: Plotly.js, Seaborn, and Leaflet.js for geographic mapping.
### External Code
•	Map and visualization components utilize code structures inspired by the Leaflet and Plotly documentation, adapted for project requirements.

- https://www.epa.gov/greenvehicles/electric-vehicle-myths
- https://www.carnegiecouncil.org/media/article/ethics-geopolitics-electic-vehicle-transition
- https://libraetd.lib.virginia.edu/downloads/0z708x94w?filename=Link_John_STS_Research_Paper.pdf
- https://leafletjs.com/index.html
- https://leafletjs.com/examples/quick-start/

## Ethical Considerations
This project adheres to ethical practices by ensuring that all data used is publicly available and devoid of sensitive or proprietary information. Transparency is maintained by clearly citing 
data sources, acknowledging code references, and openly sharing project limitations. Efforts were made to uphold data accuracy and integrity by cleaning the dataset, removing duplicates, and handling missing values responsibly. The dataset is diverse, representing various manufacturers and vehicle types to minimize bias.
The project respects privacy by excluding any personal identifiable information (PII) and focuses on promoting sustainability by providing actionable insights to encourage the adoption of eco-friendly vehicles. By following the best practices in coding and documentation, this project enables responsible use and further development. As data plays a pivotal role in decision-making, this project emphasizes the importance of ethical data usage and integrity, encouraging users to uphold these standards when building upon or using this work.
# Conclusion:
This project uses data visualization to promote the adoption of green energy vehicles and contribute to a sustainable, eco-friendly future. It highlights key trends in EV adoption, identifies geographic hotspots, and provides meaningful insights for all audiences.

