import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteCard from '../components/FavoriteCard'



class FavoriteCardsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],
    }
  }

  render(){

    return(
      <div class = "flex-container">
        <FavoriteCard />
      </div>
    )
  }
}

export default FavoriteCardsContainer
