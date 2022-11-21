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
                <div className="x--image--container">
                    <img
                        className="x--image"
                        onClick={handleClick}
                        src={xImage} alt="X icon to close">
                    </img>
                </div>
                <img src={data.image} alt="Project" width="100%" className=""/>
            </div>

            <div className="project--info">
                <div className="project--title--container">
                    <div className="project--title--bg">-</div>
                    <h1 className="project--title">{data.title}</h1>   
                </div> 
                <p className="project--data">{data.description}</p>
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