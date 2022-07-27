# Forex Echanger
~~- Display sidebar with drop down and  input for currencies to exchange and form to submit exchange request~~
- Display main content with historical graph of exchange rates for the submitted pair for the past 2 weeks as a graph of exchange rates
- Allow user to login 
- Add contact information
- Add Homepage information
- Show main body as graph with histories of all previous values for the exchange pair
- Host on Heroku/ AWS

API Used:
Alpha Vantage
The API provides a CSV file for all available currencies on the [platform](https://www.alphavantage.co/physical_currency_list/). This list is stored  in the db.json file as the reference currencies used in the application.
 This file using json-server provides endpoints for fetching this list on demand
