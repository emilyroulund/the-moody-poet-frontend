import React from 'react';
import { Link } from 'react-router-dom';
// import Tag from './Tag'



class SinglePoemCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }

makeFavorite = (e) => {
  if(this.state.show && !this.props.favorites.includes(this.props.poem)){
    let reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(
        {user_id: this.props.user.id,
          poem_id: this.props.poem.id
        })
      };
      fetch('http://localhost:3000/favorites', reqObj)
      .then(this.setState({
        show: !this.state.show
      })
    )
  }
}

  render(){
    return(
      <div className = "flex-container">
        <div className = "single-poem-card">
          {this.state.show ? <button id="favorite-btn" onClick = {(e) => this.makeFavorite(e)}> Favorite </button>: null}
          <h2> {this.props.poem.title} </h2>
          <h4> {this.props.poem.author} </h4>
          <p> {this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default SinglePoemCard
