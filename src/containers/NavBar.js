import React from 'react';
import { Link, withRouter } from 'react-router-dom';



class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],

    }
  }
  handleLogout() {
    this.props.handleLogout()
    this.props.history.push('/login')
  }


  render(){
    return(
      <div >
        <div id="mySidenav" className="sidenav">
          <li><Link to = "/profile"> Home</Link></li>
          <li><Link to = "/favorites"> Favorites </Link></li>
          <li><Link to = "/create"> Create </Link></li>
          <li> <a onClick={() => {this.handleLogout()}}>Logout</a></li>
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar)
// <nav id="mySidenav" class="sidenav">
//   <li> Home </li>
//   <li> Favorites </li>
//   <li> Create </li>
//   <li> Logout </li>
// </nav>
