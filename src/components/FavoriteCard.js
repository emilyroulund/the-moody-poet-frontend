import React from 'react';
import { Link } from 'react-router-dom';



class FavoriteCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],
    }
  }

  removeFavorite = () =>{
    console.log(this.props.favorite)
    let reqObj = {
        method: 'DELETE',
        headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
        },
        body: JSON.stringify({
          poem_id: this.props.favorite.id
        })
      };
    fetch(`http://localhost:3000/favorites/${this.props.favorite.id}`, reqObj)
    .then((favorite) => this.props.handleDelete(this.props.favorite))
  }



  render(){

    return(
      <div className = "flex-container">
        <div className = "favorite-card">
          <button id="favorite-btn" onClick={this.removeFavorite}> Remove </button>
          <h2> {this.props.favorite.poem.title} </h2>
          <h4> {this.props.favorite.poem.author} </h4>
          <p> {this.props.text} </p>
        </div>
      </div>
    )
  }
}

export default FavoriteCard
