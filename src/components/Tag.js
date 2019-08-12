import React from 'react';
import { Link } from 'react-router-dom';



class Tag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],
    }
  }

  createTag = (e) => {
    e.preventDefault()
    console.log('hi')
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
      <div>
        <form onSubmit = {(e) => this.createTag(e)}>
          <input type="text" name="tag"/>
          <input id = "create-tag-btn" type="submit" value="Add Tag"/>
        </form>
      </div>
    )
  }
}

export default Tag
