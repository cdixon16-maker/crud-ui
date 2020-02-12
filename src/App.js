import React, { Component } from "react";
import axios from "axios";
import BookList from "./Components/BookList"
export default class UserMsg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMsg: null
    }
  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/books").then((res) => {
      console.log()
      //on success
      this.setState({
        userMsg: res.data
      });
      console.log(this.state.userMsg[0].Title)
    }).catch((error) => {
      //on error
      alert("There is an error in API call.");
    });
  }
  render() {
    return(
      <div><BookList userMsg={this.state.userMsg}/></div>
      
    )
    
}
}