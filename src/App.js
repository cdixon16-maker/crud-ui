import React, { Component } from "react";
import axios from "axios";
import BookList from "./Components/BookList";
export default class UserMsg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMsg: ''
    }
    this.fetchBooks=this.fetchBooks.bind(this);
    this.deleteBooks= this.deleteBooks.bind(this);
    this.addBooks=this.addBooks.bind(this);
    this.updateBooks=this.updateBooks.bind(this);
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
  updateBooks(id, Title, Author) {
    axios.put(`http://localhost:5000/api/update/${id}`, {
      Title,Author
    }).then(res => { 
      if(res.status === 200) {
        this.fetchBooks();
      console.log(res)
        
      }
    })
    .catch(err => {
      console.log(err)
    });
  }
  addBooks(Title, Author) {
    axios.post(`http://localhost:5000/api/add`, {
      Title,Author
    }).then(res => {

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
        
        <BookList addBooks={this.addBooks} updateBooks={this.updateBooks} deleteBooks={this.deleteBooks}  userMsg={this.state.userMsg} />
        </div>
      
    )
    
}
}