import React from 'react';
import { Link } from 'react-router-dom';
import Api from '../services/api'



class Create extends React.Component {
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

  createPoem = (e) => {
    e.preventDefault()
    let reqObj = {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: '',
        author: '',
        text: '',
        classification: ''
      })
    };
    fetch('http://localhost:3000/user_poems', reqObj)
      .then(resp => resp.json())
      .then(data => console.log(data))
  }


  render(){

    return(
      <div>
        <form className="create-poem-form" onSubmit={(e) => this.createPoem(e)}>
            Title:
            <input type="text" name="title"></input>
            Author:
            <input type="text" name="author"></input>
            Classification:
            <input type="text" name="author"></input>
            Text:
            <textarea rows="20" cols="60"></textarea>
            <input type="submit" value="Create"></input>
        </form>
      </div>
    )
  }
}

export default Create
