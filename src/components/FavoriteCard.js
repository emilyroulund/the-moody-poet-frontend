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
    // let reqObj = {
    //     method: 'DELETE',
    //     headers: {
    //      'Content-Type': 'application/json',
    //      'Accept': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       user_id: this.props.user.id,
    //       poem_id: this.props.favorite.id
    //     })
    //   };
    // fetch(`http://localhost:3000/favorite/{this.props.favorite.id}`, reqObj)
  }

  render(){

    return(
      <div className = "flex-container">
        <div className = "favorite-card">
          <button id="favorite-btn" onClick={this.removeFavorite}> Remove </button>
          <h2> {this.props.favorite.title} </h2>
          <h4> {this.props.favorite.author} </h4>
          <p> {this.props.favorite.text} </p>
        </div>
      </div>
    )
  }
}

export default FavoriteCard





// {
  //   period: "Romantic", region: "England", year: "1804",reference: "https://www.poetryfoundation.org/poems/45521/i-wandered-lonely-as-a-cloud",
  //   classification: "lyric", title: "I Wandered Lonely as a Cloud", author: "William Wordsworth",
  //   text: "I wandered lonely as a cloud, That floats on high o'er vales and hills, When all at once I saw a crowd, A host, of golden daffodils; Beside the lake, beneath the trees, Fluttering and dancing in the breeze."
  // }
