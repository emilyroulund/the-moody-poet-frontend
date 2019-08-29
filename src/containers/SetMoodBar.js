import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'


class SetMoodBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],
      showDropdown: false,
      tags: [],
      selectedOption: null
    }
  }

  componentDidMount(){
    this.getTags()
  }

  createTagSelect() {
    return this.state.tags.map(tag => {
      return <li key={tag.id} onClick={() => this.filterTags(tag)}>{tag.name}</li>
    })
  }

  getTags=()=>{
    fetch('http://localhost:3000/tags')
    .then(resp => resp.json())
    .then(tags => {
      this.setState({
        tags:tags
      })
    })
  }

renderDropdown(){
    if (this.state.showDropdown){
      return <div id="myDropdown" className="dropdown-content">
          {this.createTagSelect()}
        </div>
    }
  }

  toggleDropdown(){
    this.setState({
      showDropdown: !this.state.showDropdown
    })
  }

  filterTags = (clickedTag) => {
     this.setState({ selectedOption: clickedTag })
    fetch(`http://localhost:3000/tags/${clickedTag.value.id}`)
    .then(resp=>resp.json())
    .then(data => {
      this.props.setMoodPoems(data)
      this.props.history.push('/mood')
    })
  }

  render(){

    const tagOptions = []

    const tags = this.state.tags.map(tag => (
       tagOptions.push({ label: tag.name, value: tag })
     ));

    return(
        <div className="searchDropdown">
          <Select options={tagOptions}
          value = {this.state.selectedOption}
          placeholder='Set a Mood'
          openMenuOnClick={false}
          onChange={this.filterTags} />
        </div>
    )
  }
}

export default SetMoodBar
