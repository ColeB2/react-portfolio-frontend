import React from "react";

import xImage from '../images/x.svg'
import Card from "./Card";

export default function Project(props) {
    let data = props.data
    let handleClick = props.handleClick
    let relatedProjects = props.relatedProjects
    return (
        <div className="project--overlay">
            <div className="x--image--overlay">
                <div className="x--image--container">
                    <img
                        className="x--image"
                        onClick={handleClick}
                        src={xImage} alt="X icon to close">
                    </img>
                </div>
            </div>
            <div className="project--image">
                <img src={data.image} width="100%" className=""/>
            </div>
            
            <div className="project--info">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
            </div>
            {/* 6 related projects below */}
            <div className="project--related">
            {
                relatedProjects.map((item, idx) => {
                    return (
                        <div className="project--related--item">
                            <Card 
                                key={idx}
                                handleClick={handleClick}
                                {...item}
                            />
                        </div>
                    )
                })

            }
            </div>
        </div>
    )
}