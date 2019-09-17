import React from "react"

class NavBar extends React.Component{
  render(){
    return(
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Navbar</a>
      </nav>
    );
  }
}

export default NavBar;