import React from 'react';
import { Link } from 'react-router-dom';
import SinglePoemCard from "../components/SinglePoemCard"
import Api from '../services/api'


class Profile extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    poems: [],
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
  // make a call to app.js that checks if the user is logged in, in either the state or localStorage
  //if theyre not then send them to /Login
  // otherwise do nothing
  this.getPoems()
}

getPoems=()=>{
    fetch('http://localhost:3000/poems')
    .then(resp => resp.json())
    .then(poems => {
      this.setState({
        poems:poems
      })
    })
  }


//need to do fetch
//with data i need to set variable = to one random poem
//send poem to backend


renderPoems () {
    let poems = this.state.poems
    let randPoem = poems[Math.floor(Math.random() * poems.length)];
    if (randPoem) {
      return <SinglePoemCard poem={randPoem} user={this.props.user}/>
    }
  }


  render(){
    return(
      <div>
        {this.renderPoems()}
      </div>
    )
  }
}

export default Profile;
