import React from 'react';
import { Link } from 'react-router-dom';



class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],
    }
  }

  render(){

    return(
      <div>
        <form>
            Title:
            <input type="text" name="title"></input>
            Author:
            <input type="text" name="author"></input>
            Text:
            <input type="text" name="text"></input>
            <input type="submit" value="Create"></input>
        </form>
      </div>
    )
  }
}

export default Create
