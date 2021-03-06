import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './containers/Profile'
import Login from './containers/Login'
import { Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './containers/NavBar'
import Signup from './containers/Signup'
import SetMoodBar from './containers/SetMoodBar'
import Create from './containers/Create'
import Mood from './containers/Mood'
import FavoriteCard from './components/FavoriteCard'
import FavoriteCardsContainer from './containers/FavoriteCardsContainer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: { user: {} },
      moodPoems: {},
      favorites: [],
      }
    }

  handleLogin(user){
    this.setState({
      auth: { user }
    })
    this.getFavorites()
    localStorage.setItem('token', user.token)
  }

  handleLogout = () => {
    this.setState({
      auth: { user: {} }
    })
    localStorage.removeItem('token')
  }

  setMoodPoems = (data) => {
    this.setState({
      moodPoems: data
    })
  }

  renderNavbar(){
    if(this.state.auth.user.id){
      return <NavBar handleLogout={this.handleLogout}/>
    }
  }


  getFavorites = () => {
    fetch(`http://localhost:3000/api/v1/users/${this.state.auth.user.id}/favorites`)
    .then(resp => resp.json())
    .then(favorites => {
      this.setState({
      favorites: favorites})
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App">
          <div id="home-page">
            {this.renderNavbar()}

            <Route exact path='/' render={(routeProps) => {
              return <Redirect to = "/login" / >
            }}
            />

            <Route exact path='/login' render={(routeProps) => {
              return <Login {...routeProps} handleLogin={(user) => {this.handleLogin(user)}} login={this.login} setUser={this.setUser} createUser={this.createUser} /> }}
              />

            <Route exact path="/profile" render={(routeProps) => {
              return (
                  <div id="home-page">
                    <SetMoodBar {...routeProps} setMoodPoems={this.setMoodPoems}/>
                    <Profile {...routeProps} favorites = {this.state.favorites} user={this.state.auth.user} handleLogin={(data) => this.handleLogin(data)} />
                  </div>
                )}}
              />

            <Route exact path="/favorites" render={(routeProps) => {
              return (
                  <div id="home-page">
                    <SetMoodBar {...routeProps} setMoodPoems={this.setMoodPoems}/>
                    <FavoriteCardsContainer {...routeProps} user={this.state.auth.user} handleLogin = {(data) => this.handleLogin(data)} />
                  </div>
                )}}
              />

            <Route exact path="/mood" render={(routeProps) => {
              return (
                  <div id="home-page">
                    <SetMoodBar {...routeProps} setMoodPoems={this.setMoodPoems}/>
                    <Mood {...routeProps} favorites={this.state.favorites} user={this.state.auth.user} moodPoems={this.state.moodPoems} handleLogin = {(data) => this.handleLogin(data)} />
                  </div>
                )}}
              />

            <Route exact path="/create" render={(routeProps) => {
              return (
                  <div id="home-page">
                    <SetMoodBar {...routeProps} setMoodPoems={this.setMoodPoems}/>
                    <Create {...routeProps} user={this.state.auth.user} handleLogin = {(data) => this.handleLogin(data)} />
                  </div>
                )}}
              />

            <Route path="/signup" render={(routeProps) => {
               return  <Signup {...routeProps} handleLogin={(user) => {this.handleLogin(user)}}/>
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
