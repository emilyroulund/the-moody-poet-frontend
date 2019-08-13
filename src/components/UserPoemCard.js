import React from 'react';
import { Link } from 'react-router-dom';



class UserPoemCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],
    }
  }

  deletePoem = () =>{
    console.log(this.props.userPoem)
    let reqObj = {
        method: 'DELETE',
        headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
        },
        body: JSON.stringify({
          user_poem_id: this.props.userPoem.id
        })
      };
    fetch(`http://localhost:3000/user_poems/${this.props.userPoem.id}`, reqObj)
  }

  render(){

    return(
      <div className = "flex-container">
        <div className = "favorite-card">
          <button id="favorite-btn" onClick={this.deletePoem}> Remove </button>
          <h2> {this.props.userPoem.title} </h2>
          <h4> {this.props.userPoem.author} </h4>
          <p> {this.props.userPoem.text} </p>
        </div>
      </div>
    )
  }
}

export default UserPoemCard