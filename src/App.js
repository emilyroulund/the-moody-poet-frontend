import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './containers/Profile'
import Login from './containers/Login'
import { Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './containers/NavBar'
import Signup from './containers/Signup'
import SetMoodBar from './containers/SetMoodBar'
import Favorites from './containers/Favorites'
import Create from './containers/Create'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],
      auth: { user: {} }
    }
  }

  componentDidMount(){
    fetch('https://www.poemist.com/api/v1/randompoems', {'mode': 'no-cors'})
    .then (resp => resp.json)
    .then (data => console.log(data))
  }
  // .then (data => this.setState({
    //   poems: data
    // }))

  handleLogin(user){
    this.setState({
      auth: { user }
    })
    localStorage.setItem('token', user.token)
  }

  handleLogout(user){
    this.setState({
      auth: { user: {} }
    })
    localStorage.removeItem('token')
  }

  render() {
    return (
      <div className="App">
      <Route exact path='/' render={(routeProps) => {
        return <Redirect to = "/login" / >
        }}/>
        <Route exact path='/login' render={(routeProps) => {
        return <Login {...routeProps} handleLogin={(user) => {this.handleLogin(user)}} login={this.login} setUser={this.setUser} createUser={this.createUser} /> }}
        />

        <Route exact path="/profile" render={(routeProps) => {
            return (
                <div id="home-page">
                  <NavBar {...routeProps} />
                  <SetMoodBar {...routeProps} />
                  <Profile {...routeProps}  />
                </div>
              ) }}
          />

          <Route exact path="/favorites" render={(routeProps) => {
              return (
                  <div id="home-page">
                    <NavBar {...routeProps} />
                    <SetMoodBar {...routeProps} />
                    <Favorites {...routeProps}  />
                  </div>
                ) }}
            />

            <Route exact path="/create" render={(routeProps) => {
                return (
                    <div id="home-page">
                      <NavBar {...routeProps} />
                      <Create {...routeProps}  />
                    </div>
                  ) }}
              />

        <Route path="/signup" render={(routeProps) => {
           return <Signup {...routeProps}
           handleLogin={(user) => {this.handleLogin(user)}}/>
         }} />

      </div>
    );
  }
}

export default App;

//<Navbar auth={this.state.auth} handleLogout={()=> this.handleLogout()}/>
// <Route path="/signup" render={(routeProps) => {
  //   return <Signup {...routeProps}
  //   handleLogin={(user) => {this.handleLogin(user)}}/>
  // }} />
