import React from "react";



export default function Card(props) {
    return (
        <div className="card" onClick={props.handleClick}>
            {/* <h5>{props.title}</h5> */}
            <img src={props.image} className="card--image"/>
        </div>
    )
}