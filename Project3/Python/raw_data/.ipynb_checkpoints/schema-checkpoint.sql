-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


DROP TABLE if exists "EV_DATA";

--Creating our base table
CREATE TABLE "EV_DATA"  (
	"VIN" varchar(20)  NOT NULL,  	
	"County" varchar(20), 	
	"City" char(24), 	
	"State" char(2), 	
	"Postal Code" int, 	
	"Model Year" int, 	
	"Make" char(20), 	
	"Model" varchar(24), 	
	"Electric Vehicle Type" varchar(38), 	
	"CAFV Eligibility" char(60), 	
	"Electric Range" int, 	
	"Base MSRP" int, 	
	"Legislative District" int, 	
	"DOL Vehicle ID" float, 	
	"Vehicle Location" varchar(31), 	
	"Electric Utility" char(112), 	
	"2020 Census Tract" varchar
);


select * from "EV_DATA"

--Dropped column with incomplete data
Alter Table "EV_DATA"
Drop Column "Base MSRP";

--Dropped column not useful for data
Alter Table "EV_DATA"
Drop Column "DOL Vehicle ID";

--Dropped column not useful for data
Alter Table "EV_DATA"
Drop Column "2020 Census Tract";

--Dropped column not useful for data
Alter Table "EV_DATA"
Drop Column "Legislative District";

--Deleted incomplete data
Delete From "EV_DATA" Where "Model Year"= '2025';
Delete From "EV_DATA" Where "Model Year"= '2024';

--Deleted all null values
Select * From "EV_DATA"
Where ('VIN','County', 'City', 'State', 'Postal Code', 'Model Year',
       'Make', 'Model', 'Electric Vehicle Type',
       'Clean Alternative Fuel Vehicle (CAFV) Eligibility', 'Electric Range',
	   'Vehicle Location', 'Electric Utility')Is Not Null;

--Deleted data not pertaining to State of WA
Delete From "EV_DATA"	   
Where "State" != 'WA';

select * from "EV_DATA"