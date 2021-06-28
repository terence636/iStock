import React from "react";
import { Link } from "react-router-dom"

function Dashboard({data}) {
  console.log("Data",data)

  const activeStocks = 'https://financialmodelingprep.com/api/v3/stock/actives?apikey=YOUR KEY'

  // Use a batch request
  


  const stockList = data.map((item,index)=>{
      const percentChange = (item.change*100/(item.lastPrice-item.change)).toFixed(2)
   return (
       <tr key={index}>
        <td> <Link to={`/stock/${item.symbol}`}> {item.name} </Link></td> 
        <td> {item.lastPrice}</td>
        <td> {`${item.change.toFixed(2)} (${percentChange}%)`}</td>
       </tr>
   ) 
  })

//  {name: "Intel Corporation", symbol: "INTL", lastPrice: 36.16, change: -0.370000000000005, high: 36.78, low: 36.125, open: 36.58}
  return (
    // Do a useEfect to go and fetch the data 
    <>
      <h1>Dashboard Page</h1>
      <table>
      <thead>
      <tr>
        <th>Company Name</th>
        <th>Price</th>
        <th>Change</th>
      </tr>
      </thead>
      <tbody>
      {stockList}
        {/* <td>Berkshire Hathaway Inc (BRK-A)</td>
        <td>318504.00</td>
        <td>964.00 (+0.30%)</td> */}
      </tbody>
    </table>
  </>
  );
}

export default Dashboard