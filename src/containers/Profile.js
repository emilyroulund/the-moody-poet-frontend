import React from 'react';
import { Link } from 'react-router-dom';
import SinglePoemCard from "../components/SinglePoemCard"
import Api from '../services/api'
import Tag from "../components/Tag"

class Profile extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    poems: []
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


renderPoems () {
    const { poems } = this.state
    let randPoem = poems[Math.floor(Math.random() * poems.length)];
    if (randPoem) {
      let randPoemText= randPoem.text.map((item, key) => {
        return <span key={key}>{item}<br/></span>
        })
      return <SinglePoemCard favorites={this.props.favorites} poem={randPoem} text={randPoemText} user={this.props.user}/>
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
