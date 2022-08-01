# ExchangeIt

## Application Structure

## Description

## Setting up & running the application


## API(s) Used:
1. Alpha Vantage
   This application makes use of the following functions aviled by Alpha Vantage.
    - CURRENCY_EXCHANGE_RATE
    - FX_DAILY

  ### API Limitations:
    a) For currencies with low trading frequencies, the API has no returned data
    b) The free plan for the API is rate limited to 5 requests per minute and 500 requests per day
 
 2. JSON Server on db.json
    Alphavantage provides a CSV file for all available currencies on the [platform](https://www.alphavantage.co/physical_currency_list/). This list is stored  in the db.json file as the reference currencies used in the application.This file provides endpoints for fetching this list on demand
  ### API Limitations:
    a)
    
## Technologies Used


## Licenses




## TODO:
~~- Display sidebar with drop down and  input for currencies to exchange and form to submit exchange request~~
- Display main content with historical graph of exchange rates for the submitted pair for the past 2 weeks as a graph of exchange rates
- Allow user to login 
- Add contact information
- Add Homepage information
- Show main body as graph with histories of all previous values for the exchange pair
~~- Host on Heroku/ AWS (used Firebase instead)~~

