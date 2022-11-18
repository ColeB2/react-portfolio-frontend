import React from "react";


// Currently Depracated.
export default function MovieCard(props) {
    let data = props.data
    return (
        <div className="project">
            <div className="project--info">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
            </div>
            <div className="image--div">
                <img src={data.image} className="project--image"/>
            </div>
        </div>
    )
}