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
}

  render(){

    return(
      <div className = "flex-container">
        <div className = "single-poem-card">
          <button id="favorite-btn" onClick = {this.makeFavorite}> Love </button>
          <h2> {this.props.poem.title} </h2>
          <h4> {this.props.poem.author} </h4>
          <p> {this.props.poem.text}</p>
          <Tag/>
        </div>
      </div>
    )
  }
}

export default SinglePoemCard
