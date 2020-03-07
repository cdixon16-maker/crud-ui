import React, { Component } from "react";
import axios from "axios";
import BookList from "./Components/BookList";
import NameForm from "./Components/addForm";
export default class UserMsg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMsg: ''
    }
    this.fetchBooks=this.fetchBooks.bind(this);
    this.deleteBooks= this.deleteBooks.bind(this);
  }

  fetchBooks() {
    axios.get("http://localhost:5000/api/books").then((res) => {
      console.log(res)
      //on success
      this.setState({
        userMsg: res.data
      });
      console.log(this.state.userMsg[0].Title)
    }).catch((error) => {
      //on error
      console.log("There is an error in API call.");
    });
  }
  deleteBooks(id) {
    axios.delete(`http://localhost:5000/api/delete/${id}`).then(res => {
      console.log(res)
      this.fetchBooks();
    })
    .catch(err =>{
      console.log(err)
    });
    
  }
  updateBooks(id) {
    axios.put(`http://localhost:5000/api/update/${id}`).then(res => {
      console.log(res)
      this.fetchBooks();
    })
    .catch(err => {
      console.log(err)
    });
  }
  addBooks(id) {
    axios.post(`http://localhost:5000/api/add`).then(res => {
      console.log(res)
      this.fetchBooks();
    })
    .catch(err => {
      console.log(err)
    });
  }
  componentDidMount() {
    this.fetchBooks();
  }
  render() {
    return(
      <div>
        <NameForm NameForm={this.NameForm} />
        <BookList addBooks={this.addBooks} updateBooks={this.updateBooks} deleteBooks={this.deleteBooks}  userMsg={this.state.userMsg} />
        </div>
      
    )
    
}
}