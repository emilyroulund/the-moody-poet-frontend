import React from 'react';
import Api from '../services/api'
import CreateForm from '../components/CreateForm'
import EditForm from '../components/EditForm'
import UserPoemCard from '../components/UserPoemCard'


class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      userPoems: [],
      editedPoem: {}
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
      fetch('http://localhost:3000/user_poems')
      .then(resp => resp.json())
      .then(userPoems => this.setState({
        userPoems: userPoems
      }))
    }
    // make a call to app.js that checks if the user is logged in, in either the state or localStorage
    //if theyre not then send them to /Login
    // otherwise do nothing
  }

  renderUserPoem = () => {
    let userPoems = this.state.userPoems
    if(userPoems){
      return userPoems.map(userPoem => {
        return <UserPoemCard key={userPoem.id} user={this.props.user} userPoem={userPoem} handleEditClick={this.handleEditClick} handleDelete={this.handleDelete}/>
      })
    }
  }

  handleEditClick = (userPoem) => {
     this.setState({
       editMode: true,
       editedPoem: userPoem,
     })
   }

  handleDelete = (userPoem) => {
    console.log(userPoem)
     let newState = this.state.userPoems.filter(function(value, index, arr){
       return value !== userPoem;
     })
     this.setState({
       userPoems: newState
     })
   }

  render(){
    return(
      <div>
        <CreateForm user={this.props.user} renderUserPoem = {this.renderUserPoem} editMode={this.state.editMode} editedPoem={this.state.editedPoem}/>
        {this.renderUserPoem()}
      </div>
    )
  }
}

export default Create
