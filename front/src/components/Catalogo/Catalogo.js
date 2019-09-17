import React from "react";
import Producto from "../Producto/Producto.js";

class Catalogo extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      producto: []
    }
  }

  componentDidMount(){
    fetch("/data")
      .then(res => res.json())
      .then(producto => this.setState({
        producto: producto
      }))
  }

  addProducto(){
    fetch("addData",{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({id:0 , text:"Salio", precio: 10})
    })
     .then(res => res.json())
  }

  renderProducto(){
  return this.state.producto.map(p => <Producto producto={p}></Producto>);
  }

  render(){
    return(
      <div>
        {this.renderProducto()}
        {this.addProducto()}
      </div>
    );
  }
}

export default Catalogo;