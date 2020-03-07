import React from "react";

export default function Book(props) {
    const handleOnClick = () => {
        props.deleteBooks(props.id)
    }
    return (
        <div>
            <button onClick={handleOnClick}>
                X
            </button>
            <ul>
                <li>{props.Title}</li>
                <li>{props.Author}</li>
            </ul>

            
            <button onClick={props.updateBooks}>
                Edit
            </button>

        

        </div>
        
    )
}