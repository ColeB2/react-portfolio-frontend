import React from "react";

export default function Project(props) {
    let data = props.data
    return (
        <div className="project">
            <div className="project--info">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
            </div>
            <img src={data.image} className="project--image"/>
        </div>
    )
}