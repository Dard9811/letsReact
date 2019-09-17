import React from "react";
import Navbar from "./components/Navbar/Navbar.js"
import Catalogo from "./components/Catalogo/Catalogo.js";
import "./App.css";

function App() {
  return(
    <div>
      <Navbar></Navbar>
      <div className="container">
        <h1>Hola Mundo!!</h1>
        <Catalogo></Catalogo>
      </div>
    </div>
  );
}

export default App;
