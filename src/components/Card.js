import React from "react";



export default function Card(props) {
    return (
        <div className="card" onClick={props.handleClick}>
            <img src={props.image} className="card--image"/>
        </div>
    )
}