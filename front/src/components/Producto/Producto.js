import React from "react";

class Producto extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {this.props.producto.text}
      </div>
    )
  }
}

export default Producto;