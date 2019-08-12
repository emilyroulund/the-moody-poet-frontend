import React from 'react';
import { Link } from 'react-router-dom';
import SinglePoemCard from "../components/SinglePoemCard"
import Api from '../services/api'


class Profile extends React.Component {

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



//need to do fetch
//with data i need to set variable = to one random poem
//send poem to backend




renderPoems = () => {
  const poems = [
    {
      author: "Emily Bronte", classification: "Rhymed Stanza", period: "Victorian",
      text: "Cold in the earth—and the deep snow piled above thee, Far, far removed, cold in the dreary grave! Have I forgot, my only Love, to love thee, Severed at last by Time's all-severing wave?Cold in the earth—and the deep snow piled above thee, Far, far removed, cold in the dreary grave! Have I forgot, my only Love, to love thee, Severed at last by Time's all-severing wave?Cold in the earth—and the deep snow piled above thee, Far, far removed, cold in the dreary grave! Have I forgot, my only Love, to love thee, Severed at last by Time's all-severing wave?Cold in the earth—and the deep snow piled above thee, Far, far removed, cold in the dreary grave! Have I forgot, my only Love, to love thee, Severed at last by Time's all-severing wave?",
      reference: "http://www.poetryfoundation.org/poem/172970",
      region:"England", title: "Remebrance", year: "1846"
    },
    {
      period: "Romantic", region: "England", year: "1804",reference: "https://www.poetryfoundation.org/poems/45521/i-wandered-lonely-as-a-cloud",
      classification: "lyric", title: "I Wandered Lonely as a Cloud", author: "William Wordsworth",
      text: "I wandered lonely as a cloud That floats on high o'er vales and hills, When all at once I saw a crowd, A host, of golden daffodils; Beside the lake, beneath the trees, Fluttering and dancing in the breeze."},

      {author: "Emily Bronte", classification: "Rhymed Stanza", period: "Victorian",
      text: "Cold in the earth—and the deep snow piled above thee, Far, far removed, cold in the dreary grave! Have I forgot, my only Love, to love thee, Severed at last by Time's all-severing wave?}",
      reference: "http://www.poetryfoundation.org/poem/172970",
      region:"England", title: "Remebrance", year: "1846"
    },
    {
      period: "Romantic", region: "England", year: "1804",reference: "https://www.poetryfoundation.org/poems/45521/i-wandered-lonely-as-a-cloud",
      classification: "lyric", title: "I Wandered Lonely as a Cloud", author: "William Wordsworth",
      text: "I wandered lonely as a cloud That floats on high o'er vales and hills, When all at once I saw a crowd, A host, of golden daffodils; Beside the lake, beneath the trees, Fluttering and dancing in the breeze."}

    ]

  let randPoem = poems[Math.floor(Math.random() * poems.length)];
    return <SinglePoemCard poem={randPoem}/>
}

// let myPoems = 'fetch poems from backend'


  //
  // sendPoem = (poem) => {
  //   return <SinglePoemCard poem={poem}/>
  // }


  render(){

    return(
      <div>
        {this.renderPoems()}
      </div>
    )
  }
}

export default Profile;
