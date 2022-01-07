import React from "react";

import "./App.css";
import ListProducts from "./components/ListProducts";

function App() {
  return (
    <div className="App">
      <ListProducts type="list" />
      <ListProducts type="cart" />
    </div>
  );
}

export default App;
