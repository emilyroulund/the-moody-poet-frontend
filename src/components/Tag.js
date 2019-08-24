import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'


class Tag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poems: [],
      showDropdown: false,
      tags:[],
    }
  }



// const tags = [
// {label: "tag.name", value: tag.id}
// ]


// const App = () => {
  //
  // }


  componentDidMount(){
    this.getTags()
  }

  createTagSelect() {

    // const tags = [
    // {label: "tag.name", value: tag.id}
    // ]
    return this.state.tags.map(tag => {
      return <option value={tag.name} key={tag.id}>{tag.name}</option>
    })
  }



  renderTags (){
    return this.state.tags.map(tag => {
      return <p>{tag.name}</p>
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

  toggleDropdown(){
    this.setState({
      showDropdown: !this.state.showDropdown
    })
  }

  renderDropdown(){
    if (this.state.showDropdown){
      return <div id="myDropdownTag" className="dropdown-content-tag">
          {this.createTagSelect()}
        </div>
    }
  }

  assignPoemTag = (e) => {
    e.preventDefault()
    this.toggleDropdown()
    // let reqObj = {
    //   method: “POST”,
    //   headers: {
    //    “Content-Type”: “application/json”,
    //    “Accept”: “application/json”
    //   },
    //   body: JSON.stringify({
            //tag_id:
            //poem_id:
  // }
  //)
    // };
    // fetch('http://localhost:3000/tags', reqObj)
    //   .then(resp => resp.json())
    //   .then(data => console.log(data))

    // create a poem_tag that has the new tag_id
    //and the id of the poem we're adding the tag too

  }

filterSearchFunction = () => {
  console.log('filterfunction')
    // let input = document.getElementById("myInputTag");
    // let filter = input.value.toUpperCase();
    // let div = document.getElementById("myDropdown");
    // let a = div.getElementsByTagName("a");
    // for (let i = 0; i < a.length; i++) {
    //   let txtValue = a[i].textContent || a[i].innerText;
    //   if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //     a[i].style.display = "";
    //   } else {
    //     a[i].style.display = "none";
    //   }
    // }
  }



   render(){

    const tagOptions = []

    const tags = this.state.tags.map(tag => (
       tagOptions.push({ label: tag.name, value: tag.id })
     ));

    return(
      <div className="app">
        <div className="container">
          <Select options={tagOptions}
          placeholder={'Set a Mood'}
          onChange={tag => console.log(tag.label, tag.value)} />
        </div>
      </div>
      )
    }
}

export default Tag
// <form onSubmit = {(e) => this.assignPoemTag(e)}>
//   <select>
//       {this.getTags()}
//   </select>
//   <input id = "create-tag-btn" type="submit" value="Add Tag"/>
// </form>

// <div className="dropdown-tag">
//   <button onClick={(e) => this.assignPoemTag(e)} className="dropbtn-tag">Add Tag</button>
//   <div id="myDropdownTag" className="dropdown-content-tag">
//     <input type="text" placeholder="Search..." id="myInputTag" onKeyUp={this.filterSearchFunction()}/>
//     {this.renderDropdown()}
//   </div>
// </div>
