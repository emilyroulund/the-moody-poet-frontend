import React from 'react';
import { Link } from 'react-router-dom';
import SinglePoemCard from "../components/SinglePoemCard"


class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],

    }
  }

  render(){
    return(
      <div id ="main">
          <SinglePoemCard/>
      </div>
    )
  }
}

export default Profile;
