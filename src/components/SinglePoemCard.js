import React from 'react';
import { Link } from 'react-router-dom';
import Tag from './Tag'



class SinglePoemCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],
    }
  }

makeFavorite = () => {
  console.log('fav')
  // let reqObj = {
  //     method: 'POST',
  //     headers: {
  //      'Content-Type': 'application/json',
  //      'Accept': 'application/json'
  //     },
  //     body: JSON.stringify(
  //       {user_id: this.props.user.id,
  //       poem_id: 'this.props.poem.id'
  //     })
  //   };
  // fetch('http://localhost:3000/favorites', reqObj)
}

  render(){

    return(
      <div className = "flex-container">
        <div className = "single-poem-card">
          <button id="favorite-btn" onClick = {this.makeFavorite}> Love </button>
          <h2> {this.props.poem.title} </h2>
          <h4> {this.props.poem.author} </h4>
          <p> {this.props.poem.lines}</p>
          <Tag user = {this.props.user}/>
        </div>
      </div>
    )
  }
}

export default SinglePoemCard
