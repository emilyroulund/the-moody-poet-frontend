import React from 'react';
import { Link } from 'react-router-dom';



class SetMoodBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],

    }
  }


  render(){

    return(
      <div className="dropdown">
        <button onClick={this.myFunction} className="dropbtn">Set a Mood</button>
        <div id="myDropdown" className="dropdown-content">
        <li><Link to = "/profile"> Joy </Link></li>
        <li><Link to = "/profile"> Humor </Link></li>
        <li><Link to = "/profile"> Pessimism </Link></li>
        <li><Link to = "/profile"> Frustration </Link></li>
        </div>
      </div>
    )
  }
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
export default SetMoodBar
