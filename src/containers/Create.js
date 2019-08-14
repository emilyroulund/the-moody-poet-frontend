import React from 'react';
import { Link } from 'react-router-dom';
import Api from '../services/api'
import UserPoems from '../components/UserPoems'


class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],
      title: '',
      author: '',
      classification: '',
      text: ''
    }
      this.handleInputChange = this.handleInputChange.bind(this);
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

  createPoem = (e) => {
    e.preventDefault()
    console.log(e.target)
    let reqObj = {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        author: this.state.author,
        text: this.state.text,
        classification: this.state.classification,
        user_id: this.props.user.id
      })
    };
    fetch('http://localhost:3000/user_poems', reqObj)
    e.target.reset()
  }

  handleInputChange(event) {
     const target = event.target;
     const value = target.value;
     const name = target.name;

     this.setState({
       [name]: value
     });
   }
   //Note how we used the ES6 computed property name syntax to update the state key corresponding to the given input name:


  render(){
    return(
      <div>
        <form className="create-poem-form" onSubmit={(e) => this.createPoem(e)}>
          Title:
          <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange}/>
          Author:
          <input type="text" name="author" value={this.state.author} onChange={this.handleInputChange}/>
          Classification:
          <input type="text" name="classification" value={this.state.classification} onChange={this.handleInputChange}/>
          Text:
          <textarea name="text" rows="20" cols="60" value={this.state.text} onChange={this.handleInputChange}></textarea>
          <input type="submit" value="Create"></input>
        </form>
        <UserPoems/>
      </div>
    )
  }
}

export default Create
