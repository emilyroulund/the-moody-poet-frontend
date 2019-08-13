import React from 'react';
import { Link } from 'react-router-dom';



class Tag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],
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


  assignPoemTag = (e) => {
    e.preventDefault()
    // let reqObj = {
    //   method: “POST”,
    //   headers: {
    //    “Content-Type”: “application/json”,
    //    “Accept”: “application/json”
    //   },
    //   body: JSON.stringify()
    // };
    // fetch('http://localhost:3000/tags', reqObj)
    //   .then(resp => resp.json())
    //   .then(data => console.log(data))

    // fetch('http://localhost:3000/tags', reqObj)
    // i need to post the tag name to the tag table
    // then i need to create a poem_tag that has
    //the new tag_id
    //and the id of the poem we're adding the tag too
    //question: should i let users create unique tags,
    //or let them choose from a list of pre-made tags
    //perks of this is that I just make one post request
    //and it's easier to filter
  }

   render(){
    return(
        <div className="dropdown-tag">
          <button onClick={(e) => this.assignPoemTag(e)} className="dropbtn-tag">Add Tag</button>
          <div id="myDropdownTag" className="dropdown-content-tag">
            <input type="text" placeholder="Search..." id="myInput-tag" onKeyUp="filterFunction()"/>
            {this.createTagSelect()}
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
