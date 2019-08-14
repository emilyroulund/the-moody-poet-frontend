import React from 'react';
import { Link } from 'react-router-dom';
import Api from '../services/api'


class UserPoemCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],
    }
  }

  deletePoem = () => {
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
    .then(this.props.handleDelete(this.props.userPoem))
  }


  editPoem = () =>{
    let reqObj = {
      method: 'Patch',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user_poem_id: this.props.userPoem.id,
        
      })
    };
    fetch(`http://localhost:3000/user_poems/${this.props.userPoem.id}`, reqObj)
    .then(this.props.handleEdit(this.props.userPoem))
  }

render(){
    return(
      <div className = "flex-container">
        <div className = "favorite-card">
          <button id="favorite-btn" onClick={this.deletePoem}> Remove</button>
          <button id="favorite-btn" onClick={this.editPoem}> Edit </button>
          <h2> {this.props.userPoem.title} </h2>
          <h4> {this.props.userPoem.author} </h4>
          <p> {this.props.userPoem.text} </p>
        </div>
      </div>
    )
  }
}

export default UserPoemCard
