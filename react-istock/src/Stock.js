import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

const Stock = props => {

  const [price, setPrice] = useState(0)

  const params = useParams();
  console.log(params.symbol);
  const site = 'https://financialmodelingprep.com/api/v3/profile/'
  const apiKey = '?apikey=316ff3fb75ec7264440cd255a2cede4e'
  const URL = site + params.symbol + apiKey

// AAPL?apikey=316ff3fb75ec7264440cd255a2cede4e
  
  console.log(URL);
  
  // use useEffect to go and fetc the live prices of the stocks
  // based on stocks symbol
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        // const currencyPrice = data.bpi[currency].rate;
        setPrice(data[0].price);
        // props.setCurrency(currency);
      });
    }, []);  

  return (
    <div>
      <h3>Name: {params.symbol} </h3>
      <h3 className="price">Price: {price}</h3>
    </div>
  )
}


export default Stock