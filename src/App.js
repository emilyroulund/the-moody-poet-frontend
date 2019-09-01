import React from 'react';
// import hash from "./components/hash";
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
import * as $ from "jquery";
import Player from "./components/Player";
var Ajax = require('react-ajax');

const clientId = `583de567d5b748eb992b7cc3c1b48f18`
const redirectUri = `http://localhost:3001/login`
const scope = `user-library-read user-top-read playlist-modify-public user-follow-read`

const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

// window.location.hash = ""

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: { user: {} },
      moodPoems: {},
      favorites: [],
      token: null,
      item: {
      album: {
        images: [{ url: "" }]
      },
      name: "",
      artists: [{ name: "" }],
      duration_ms:0,
      },
      is_playing: "Paused",
      progress_ms: 0
    }
    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;
    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
    }
  }

  getCurrentlyPlaying(token) {
    // Make a call using the token
    $.ajax({
      url: `https://api.spotify.com/v1/me/player`,
      type: `GET`,
      beforeSend: (xhr) => {
        xhr.setRequestHeader(`Authorization`, `Bearer` + token);
      },
      success: (data) => {
        this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms,
        });
      }
    });
  }

//
// requestAuthentication = () => {
//   fetch(`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=user-library-read%20user-top-read%20playlist-modify-public%20user-follow-read`)
//     .then(data=>console.log(data))
//   }


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

            <div className="App">
              {!this.state.token && (
                <a
                  className="btn btn--loginApp-link"
                  href={`https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user-read-currently-playing%20user-read-playback-state&response_type=token&show_dialog=true`}
                >
                  Login to Spotify
                </a>
              )}
              {this.state.token && (
                <Player
                  item={this.state.item}
                  is_playing={this.state.is_playing}
                  progress_ms={this.progress_ms}
                />
              )}
            </div>



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



// <Route exact path='/' render={(routeProps) => {
//   return <Redirect to = "/login" / >
// }}
// />

// scope=user-library-read%20user-top-read%20playlist-modify-public%20user-follow-read
