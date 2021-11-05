import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => (
  <h1>Coppula App <button className="btn btn-primary">Oi</button> </h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);