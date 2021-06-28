import React, {useState} from "react";
import { Route, Switch} from "react-router-dom"
import Home from "./Home"
import Dashboard from "./Dashboard"
import About from "./About"
import Stock from "./Stock"
import StocksData from "./Stock-Data";

function Main() {
  const [data, setData] = useState(StocksData)

  const symbol = "AAPL"
  return (
    <div>
     
      <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/stocks">
          <Dashboard data={data} />
        </Route>
        <Route path="/stock/:symbol">
          <Stock />
        </Route>
        </Switch>
      </main>
    </div>
  )
}

export default Main


  