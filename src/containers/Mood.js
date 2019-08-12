import React from 'react';
import { Link } from 'react-router-dom';
import SinglePoemCard from "../components/SinglePoemCard"
import Tag from '../components/Tag'
import Api from '../services/api'



class Mood extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],

    }
  }

  componentDidMount(){
    console.log(this.props)
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
    // make a call to app.js that checks if the user is logged in, in either the state or localStorage
    //if theyre not then send them to /Login
    // otherwise do nothing
  }

  render(){
    return(
      <div id ="main">
          <SinglePoemCard poem = {{title: 'hi'}}/>
      </div>
    )
  }
}

export default Mood
