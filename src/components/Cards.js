import React from "react";



export default function Cards(props) {
    return (
        <div className="cards" onClick={props.handleClick}>
            <h2>{props.title}</h2>
            <img src={props.image} className="cards--image"/>
        </div>
    )
}