import React, { Component } from "react";
import './Book.css';

export default class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Title: this.props.Title,
            Author: this.props.Author
        }
    }
   
   render () {
    const handleOnClick = () => {
        this.props.deleteBooks(this.props.id)
    }
    const handleAddBook = () => {
        this.props.addBooks(this.state.Title, this.state.Author)
    }
    const handleOnChange = (event) => {
       const {name, value}= event.target;
       const clone = {...this.state};
       clone [name]=value
       this.setState(clone)
    }
    const handleUpdateBook = () => {
        this.props.updateBooks(this.props.id, this.state.Title, this.state.Author)
    }
    return (
        
        <div>
     
            <button onClick={handleOnClick}>
                X
            </button>
            <h1 className="Read">Book Read</h1> 
            <ul>
                <li>{this.props.Title}</li>
                <li>{this.props.Author}</li>
            </ul>
            
        <div className="add">
                <input name="Title" type="text" placeholder="Title" value={this.state.Title} onChange={event => handleOnChange(event)} />
                <input name="Author" type="text" placeholder="Author" value={this.state.Author} onChange={event => handleOnChange(event)}  />
                <button onClick={handleAddBook}>Add damn it</button>
        </div>
        <div className="update">
                <input name="Title" type="text" placeholder="Title" value={this.state.Title} onChange={event => handleOnChange(event)} />
                <input name="Author" type="text" placeholder="Author" value={this.state.Author} onChange={event => handleOnChange(event)}  />
                <button onClick={handleUpdateBook}>Edit</button>
        </div>  
        

        </div>
        
    )
}}