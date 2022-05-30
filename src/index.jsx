import React from "react"
import  ReactDOM  from "react-dom/client" /**React v18 */
// import PrimeraApp from "./PrimeraApp"
import CounterApp from "./CounterApp";

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <CounterApp value={3}/>
    </React.StrictMode>
  );
  