import React from 'react';
import { Link } from 'react-router-dom';
import Tag from './Tag'



class SinglePoemCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],
      show: true
    }
  }

makeFavorite = (e) => {
  if(this.state.show && this.notAFavorite()){
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

notAFavorite = () => {
  if("this poem id is not in the favorite list, then this function returns true"){
    return true
  }
  //ORRR the show state is set as true or false based on whether the favorite exists
  //i need to determine where i want to fetch favorites
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
// <Tag user = {this.props.user}/>
