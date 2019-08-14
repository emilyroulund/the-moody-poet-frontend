import React from 'react';
import { Link } from 'react-router-dom';
import UserPoemCard from './UserPoemCard'


class UserPoems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userPoems: [],
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/user_poems')
    .then(resp => resp.json())
    .then(userPoems => this.setState({
      userPoems: userPoems
    }))
    this.renderUserPoem()
  }

  handleDelete = (userPoem) => {
    let newState = this.state.userPoems.filter(function(value, index, arr){
      return value !== userPoem;
    })
    this.setState({
      userPoems: newState
    })
  }

  handleEdit = (userPoem) => {
    // let newState = this.state.userPoems.filter(function(value, index, arr){
    //   return value !== userPoem;
    // })
    // this.setState({
    //   userPoems: newState
    // })
  }

renderUserPoem = () => {
  let userPoems = this.state.userPoems
  if(userPoems){
    return userPoems.map(userPoem => {
      return <UserPoemCard key={userPoem.id} userPoem={userPoem} handleDelete={this.handleDelete}/>
    })
  }
}

  render(){

    return(
      <div className = "flex-container">
        {this.renderUserPoem()}
      </div>
    )
  }
}

export default UserPoems
