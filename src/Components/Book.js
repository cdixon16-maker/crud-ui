import React from "react";

export default function BookList(props) {
    return (
        <div>
            <ul>
                <li>{props.title}</li>
                <li>{props.Author}</li>
            </ul>
        </div>
    )
}