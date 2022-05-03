import React from "react";

export default function Project(props) {
    let data = props.data
    return (
        // <div className="project">
        //     <div className="image--div">
        //         <img src={data.image} className="project--image"/>
        //     </div>
        //     <div className="project--info">
        //         <h1>{data.title}</h1>
        //         <p>{data.description}</p>
        //     </div>
            
        // </div>
        
        
        //react
        <div className="row h-25">
            <div className="col-md-8">
                <img src={data.image} width="100%"/>
            </div>
            <div className="col-md-4">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
            </div>
        </div>
    )
}