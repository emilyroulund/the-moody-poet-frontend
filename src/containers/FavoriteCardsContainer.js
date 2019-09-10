import React from 'react';
import FavoriteCard from '../components/FavoriteCard'
import Api from '../services/api'

class FavoriteCardsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: [],
    }
  }

  componentDidMount(){
    const token = localStorage.getItem('token')
    if (!token){
      this.props.history.push('/login')
    }
    else {
      Api.currentUser(token)
      .then(data=> {
        if(data.error){
          this.props.history.push('/login')
        } else {
          this.props.handleLogin(data)
        }
      })
    }
    this.getFavorites()
    // make a call to app.js that checks if the user is logged in, in either the state or localStorage
    //if theyre not then send them to /Login
    // otherwise do nothing
  }

  getFavorites = () => {
    fetch('http://localhost:3000/favorites')
    .then(resp => resp.json())
    .then(favorites =>this.setState({
      favorites: favorites})
    )
  }

  handleDelete = (favorite) => {
    let newState = this.state.favorites.filter(function(value, index, arr){
      return value !== favorite;
    })
    this.setState({
      favorites: newState
    })
  }

  renderFavorites = () => {
    let favorites = this.state.favorites
    if(favorites){
      return favorites.map(favorite => {
        let favoriteText= favorite.poem.text.map((item, key) => {
          return <span key={key}>{item}<br/></span>
          })
        return <FavoriteCard text={favoriteText} key={favorite.id} text={favoriteText} favorite={favorite} handleDelete={this.handleDelete}/>
      })
    }
  }

  render(){

    return(
      <div className = "flex-container">
      {this.renderFavorites()}
      </div>
    )
  }
}

export default FavoriteCardsContainer
