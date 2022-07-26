# Forex Echanger
- Display sidebar with drop down and  input for surrencies to exchange and form to submit exchange request
- Display main content with historical graph of exchange rates for the submitted pair for the past 2 weeks as a graph of exchange rates
- Allow user to login 
- Show main body as graph with histories of all previous exchanges
- Host on Heroku/ AWS

API Used:
Alpha Vantage
The API provides a CSV file for all available currencies on the platform. This list is stored  in the db.json file as currencies to use in our application. This file using json-server provides endpoints for fetching this list on demand
