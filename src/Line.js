import React, { useState, useEffect } from 'react';
import {
  LineChart,
  ResponsiveContainer,
  Legend, Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';

function MyLineChart({ chartData, currencyFrom, currencyTo , firstDataKey, secondDataKey}) {

 
return (
  <>
      <h1 className="text-heading">
          Historical Exchanges for the Pair : 
      </h1>
      <ResponsiveContainer width="100%" aspect={3}>
          <LineChart data={chartData} margin={{ right: 300 }}>
              <CartesianGrid />
              <XAxis dataKey="date" 
                  interval={'preserveStartEnd'} />
              <YAxis></YAxis>
              <Legend />
              <Tooltip />
         
              <Line dataKey="1. open"
                  stroke="black" />
             
                  <Line dataKey="4. close"
                  stroke="red"  />
          </LineChart>
      </ResponsiveContainer>
  </>
);}
export default MyLineChart;