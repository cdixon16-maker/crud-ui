import React, { Component } from "react";
import axios from "axios";
import BookList from "./Components/BookList";
const web = `https://sleepy-headland-50143.herokuapp.com/`;
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
    axios.get(`localhostapi/books`).then((res) => {
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
    axios.delete(`${web}api/book/${id}`).then(res => {
      console.log(res)
      this.fetchBooks();
    })
    .catch(err =>{
      console.log(err)
    });
  }
  updateBooks(id, Title, Author) {
    axios.put(`${web}api/book/${id}`, {
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
    axios.post(`${web}api/book`, {
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