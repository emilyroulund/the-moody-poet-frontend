import React from 'react';
import { Link } from 'react-router-dom';
import Api from '../services/api'
import UserPoems from '../components/UserPoems'
import CreateForm from '../components/CreateForm'


class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
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
  }

  render(){
    return(
      <div>
        <CreateForm user={this.props.user}/>
        <UserPoems/>
      </div>
    )
  }
}

export default Create
