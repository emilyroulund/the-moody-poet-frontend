import React from 'react';
import { Link } from 'react-router-dom';



class SinglePoemCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],
    }
  }

  render(){

    return(
      <div class = "flex-container">
        <div className = "single-poem-card">
          <h2> Title </h2>
          <h4> Author </h4>
          <p> This is the poem </p>
        </div>
      </div>
    )
  }
}

export default SinglePoemCard
