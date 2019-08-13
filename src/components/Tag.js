import React from 'react';
import { Link } from 'react-router-dom';



class Tag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],
      showDropdown: false,
      tags:[]
    }
  }

  componentDidMount(){
    this.getTags()
  }


  createTagSelect() {
    return this.state.tags.map(tag => {
      return <option value={tag.name} key={tag.id}>{tag.name}</option>
    })
  }

  renderTags (){
    return this.state.tags.map(tag => {
      return <p>{tag.name}</p>
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

  toggleDropdown(){
    this.setState({
      showDropdown: !this.state.showDropdown
    })
  }

  renderDropdown(){
    if (this.state.showDropdown){
      return <div id="myDropdown" className="dropdown-content">
          {this.createTagSelect()}
        </div>
    }
  }

  assignPoemTag = (e) => {
    e.preventDefault()
    this.toggleDropdown()
    // let reqObj = {
    //   method: “POST”,
    //   headers: {
    //    “Content-Type”: “application/json”,
    //    “Accept”: “application/json”
    //   },
    //   body: JSON.stringify({
            //tag_id:
            //poem_id:
  // }
  //)
    // };
    // fetch('http://localhost:3000/tags', reqObj)
    //   .then(resp => resp.json())
    //   .then(data => console.log(data))

    // create a poem_tag that has the new tag_id
    //and the id of the poem we're adding the tag too

  }

   render(){
    return(
        <div className="dropdown-tag">
          <button onClick={(e) => this.assignPoemTag(e)} className="dropbtn-tag">Add Tag</button>
          <div id="myDropdownTag" className="dropdown-content-tag">
            <input type="text" placeholder="Search..." id="myInput-tag" onKeyUp="filterFunction()"/>
            {this.renderDropdown()}
          </div>
        </div>
    )
  }
}

export default Tag
// <form onSubmit = {(e) => this.assignPoemTag(e)}>
//   <select>
//       {this.getTags()}
//   </select>
//   <input id = "create-tag-btn" type="submit" value="Add Tag"/>
// </form>
