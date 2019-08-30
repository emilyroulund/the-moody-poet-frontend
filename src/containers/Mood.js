import React from 'react';
import SinglePoemCard from "../components/SinglePoemCard"
// import Tag from '../components/Tag'
import Api from '../services/api'



class Mood extends React.Component {
  constructor(props) {
    super(props)
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

  shuffle=(array)=> {
    let currentIndex = array.length
    while (0 !== currentIndex) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }


  renderPoems () {
    if(this.props.moodPoems.poems){
      let newPoemArray = this.shuffle(this.props.moodPoems.poems)
      return newPoemArray.slice(0, 10).map(poem => {
        let poemText= poem.text.map((item, key) => {
          return <span key={key}>{item}<br/></span>
          })
        return <SinglePoemCard favorites={this.props.favorites} key={poem.id} text={poemText} poem={poem} user={this.props.user}/>
      })
    }
  }

  render(){
    return(
      <div id ="main">
        {this.renderPoems()}
      </div>
    )
  }
}

export default Mood
