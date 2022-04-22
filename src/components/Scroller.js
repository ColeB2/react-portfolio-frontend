import React from "react";

export default function Scroller(props) {
    // console.log(props)
    // function handleClick() {
    //     console.log("clicked")
    // }
    return (
        <div className="scroller" onClick={props.handleClick}>
            <h2>{props.title}</h2>
            <img src={props.image} className="scroller--image"/>
        </div>
    )
}