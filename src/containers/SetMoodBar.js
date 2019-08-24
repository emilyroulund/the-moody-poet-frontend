import React from 'react';
import { Link } from 'react-router-dom';
import { Select } from 'react-select'



class SetMoodBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],
      showDropdown: false,
      tags: []
    }
  }

  componentDidMount(){
    this.getTags()
  }

  createTagSelect() {
    return this.state.tags.map(tag => {
      return <li key={tag.id} onClick={() => this.filterTags(tag)}>{tag.name}</li>
    })
  }

  getTags=()=>{
    fetch('http://localhost:3000/tags')
    .then(resp => resp.json())
    .then(tags => {
      this.setState({
        tags:tags
      })
    })
  }

renderDropdown(){
    if (this.state.showDropdown){
      return <div id="myDropdown" className="dropdown-content">
          {this.createTagSelect()}
        </div>
    }
  }

  toggleDropdown(){
    this.setState({
      showDropdown: !this.state.showDropdown
    })
  }

  filterTags = (clickedTag) => {
    fetch(`http://localhost:3000/tags/${clickedTag.id}`)
    .then(resp=>resp.json())
    .then(data => {
      this.props.setMoodPoems(data)
      this.props.history.push('/mood')
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
