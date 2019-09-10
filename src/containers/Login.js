import React from 'react';
import { Link } from 'react-router-dom';
import Api from '../services/api'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      error: false
    }
  }
  handleUsernameChange(e){
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange(e){
    this.setState({
      password: e.target.value
    })
  }

  handleLogin(e){
    e.preventDefault()
    Api.login(this.state)
      .then(data => {
        if (data.error){
          this.setState({
            error: true
          })
        } else {
          this.props.handleLogin(data)
          this.props.history.push(`/profile`)
        }
      })
  }

  render(){
    return (
      <div className="home-form-container">
        <div className='signup-form' id = "login-signup-form">
          {this.state.error ? <h4>Invalid username or Password</h4> : null}
          <form className="input-form" onSubmit={(e)=>{this.handleLogin(e)}}>
            Username
            <input className="input-form" onChange={(e) => this.handleUsernameChange(e)} value={this.state.username} />
            Password
            <input className="input-form" type="password" onChange={(e) => this.handlePasswordChange(e)} value={this.state.password} />
            <input type='submit' value='Login' className = "log-in-button"/>
          </form>
          <Link to="/signup" >
            <h2 className = "sign-up-button">Create a New Account</h2>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
