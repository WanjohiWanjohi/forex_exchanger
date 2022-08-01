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

function MyLineChart({ currencyFrom, currencyTo }) {
  const [changedCurrency, setChangedCurrency] = useState(currencyTo);
  const [chartData, setChartData] = useState([]) 
  useEffect(() => {
    const url = `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${currencyFrom}&to_symbol=${currencyTo}&apikey=4VSOMEM1WE8AZBAW`
    fetch(url)
      .then(response => response.json())
      .then((res) => {
        let data = res["Time Series FX (Daily)"]
        var dataPoints = Object.keys(data).map(function(k) { return data[k] });
        var keys = Object.keys(data)
        const newARR = dataPoints.map((element, index)=>({...element, date:keys[index]})) 
        setChartData(newARR)      
      })
  }, [changedCurrency])
  chartData.sort(function(a, b) {
    var c = new Date(a.date);
    var d = new Date(b.date);
    return c-d;
});
 
return (
  <>
      <h1 className="text-heading">
          Historical Exchanges from {currencyFrom} to {currencyTo}: 
      </h1>
      <ResponsiveContainer width="100%" aspect={3}>
          <LineChart layout="horizontal" data={chartData} margin={{ right: 200 }}>
              <CartesianGrid horizontal={false} vertical={false}/>
              <XAxis dataKey="date" 
                  interval={'preserveStartEnd'} />
              <YAxis></YAxis>
              <Legend />
              <Tooltip />
         
              <Line dataKey="1. open"
                  stroke="black" isAnimationActive={false} />
             
                  <Line dataKey="4. close"
                  stroke="red"  />
          </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" aspect={3}>
          <LineChart data={chartData} margin={{ right: 200 }}>
              <CartesianGrid />
              <XAxis dataKey="date" 
                  interval={'preserveStartEnd'} />
              <YAxis></YAxis>
              <Legend />
              <Tooltip />
         
              <Line dataKey="2. high"
                  stroke="black" isAnimationActive={false}/>
             
                  <Line dataKey="3. low"
                  stroke="red"  />
          </LineChart>
      </ResponsiveContainer>
  </>
);}
export default MyLineChart;