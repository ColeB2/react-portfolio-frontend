import React from "react";

export default function Project(props) {
    let data = props.data
    let handleClick = props.handleClick
    return (
        <div className="project--overlay">
            <div className="project--image">
                <img src={data.image} width="100%" className=""/>
            </div>
            <div className="project--image--overlay">
                <button onClick={handleClick}>X</button>
            </div>
            <div className="project--info">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
            </div>
        </div>
    )
}