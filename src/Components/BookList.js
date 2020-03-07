import React from "react";
import Book from "./Book"

export default function BookList(props) {
    return (
        <div>
            {props.userMsg && props.userMsg.map(msg => {
                return (
                    <Book key={msg._id} id={msg._id} Title={msg.Title}
                    Author={msg.Author} deleteBooks={props.deleteBooks} updateBooks={props.updateBooks} />
                )
            })}
        </div>
    )
}