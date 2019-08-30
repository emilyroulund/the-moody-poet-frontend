import React from 'react';
import EditForm from './EditForm'


class CreateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],
      title: '',
      author: '',
      classification: '',
      text: '',
    }
      this.handleInputChange = this.handleInputChange.bind(this);
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



  renderStaticDisplay(){
    return (
      <div>
        <form className="create-poem-form" onSubmit={(e) => this.createPoem(e)}>
          <fieldset>
            <legend>Details</legend>
            <span>Title:
              <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange}/>
            </span>
            <span>Author:
              <input type="text" name="author" value={this.state.author} onChange={this.handleInputChange}/>
            </span>
            <span>Classification:
              <input type="text" name="classification" value={this.state.classification} onChange={this.handleInputChange}/>
            </span>
          </fieldset>
          <fieldset>
            <legend>Poem</legend>
            <textarea name="text" rows="20" cols="60" value={this.state.text} onChange={this.handleInputChange}></textarea>
            <input type="submit" value="Create"></input>
          </fieldset>
        </form>
      </div>
    )
  }

  render(){
    return(
      <div>
        { this.props.editMode ? <EditForm editedPoem={this.props.editedPoem} user={this.props.user}/> : this.renderStaticDisplay()}
      </div>
    )
  }
}

export default CreateForm
