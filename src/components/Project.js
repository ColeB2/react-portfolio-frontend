import React from "react";

import xImage from '../images/x.svg'
import Card from "./Card";

export default function Project(props) {
    let data = props.data
    let handleClick = props.handleClick
    let relatedProjects = props.relatedProjects
    return (
        <div className="project--overlay">
            <div className="project--image">
                <img src={data.image} width="100%" className=""/>
            </div>
            <div className="project--image--overlay">
                <div className="x--image--container">
                    <img
                        className="x--image"
                        onClick={handleClick}
                        src={xImage} alt="X icon to close">
                    </img>
                </div>
                
            </div>
            <div className="project--info">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
            </div>
            {/* 6 related projects below */}
            {
                relatedProjects.map(item => {
                    return (
                        <Card 
                            key={1}
                            handleClick={handleClick}
                            {...item}
                        />
                    )
                })

            }
        </div>
    )
}