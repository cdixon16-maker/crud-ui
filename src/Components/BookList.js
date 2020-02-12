import React from "react";
import Book from "./Book"

export default function BookList(props) {
    return (
        <div>
            {props.userMsg && props.userMsg.map(msg => {
                return (
                    <Book key={msg._id} title={msg.Title}
                    Author={msg.Author} />
                )
            })}
        </div>
    )
}