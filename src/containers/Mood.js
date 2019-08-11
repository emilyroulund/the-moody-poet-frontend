import React from 'react';
import { Link } from 'react-router-dom';
import SinglePoemCard from "../components/SinglePoemCard"



class Mood extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],
    }
  }

  render(){

    return(
      <div>
        <SinglePoemCard/>
      </div>
    )
  }
}

export default Mood
