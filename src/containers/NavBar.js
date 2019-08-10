import React from 'react';
import { Link } from 'react-router-dom';



class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],

    }
  }

  render(){
    return(
      <div >
        <div id="mySidenav" className="sidenav">
          <li><Link to = "/profile"> Home</Link></li>
          <li><Link to = "/favorites"> Favorites </Link></li>
          <li><Link to = "/create"> Create </Link></li>
          <li><Link to = "/logout"> Logout </Link></li>
        </div>
      </div>
    )
  }
}

export default NavBar
// <nav id="mySidenav" class="sidenav">
//   <li> Home </li>
//   <li> Favorites </li>
//   <li> Create </li>
//   <li> Logout </li>
// </nav>
