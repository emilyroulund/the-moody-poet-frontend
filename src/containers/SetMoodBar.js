import React from 'react';
import { Link } from 'react-router-dom';



class SetMoodBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],
      showDropdown: false
    }
  }


setMood = () => {
  console.log('mood')
}

renderDropdown(){
  if (this.state.showDropdown){
    return <div id="myDropdown" className="dropdown-content">
        <li onClick={this.setMood}><Link to = "/mood"> Joy </Link></li>
        <li onClick={this.setMood}><Link to = "/mood"> Humor </Link></li>
        <li onClick={this.setMood}><Link to = "/mood"> Pessimism </Link></li>
        <li onClick={this.setMood}><Link to = "/mood"> Frustration </Link></li>
      </div>
  }
}

toggleDropdown(){
  this.setState({
    showDropdown: !this.state.showDropdown
  })
}

  render(){

    return(
      <div className="dropdown">
        <button onClick={() => this.toggleDropdown()} className="dropbtn">Set a Mood</button>
        { this.renderDropdown() }
      </div>
    )
  }
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }
//
// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
export default SetMoodBar
