import React, {useEffect} from "react";

import Header from "./components/Header";
import Project from "./components/Project";
import Scroller from "./components/Scroller";

// import { getAllProjects } from "./services/ProjectServices";


export default function App() {

    const [portfolioData, setPortfolioData] = React.useState([{}])
    const [project, setProject] = React.useState({})

    

    let url = "https://cole.pythonanywhere.com/api/v1/projects/"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPortfolioData(data))
    }, [url])


    function handleClick(id) {
        // console.log(event.target)
        // console.log(event)
        console.log(id)
        // for
        portfolioData.forEach((item) => {
            if (item.id === id) {
                setProject(() => item)
            }
        })
    
    }


    const projects = portfolioData.map(item => {
        return (
            <Scroller
                key={item.id}
                handleClick={() => handleClick(item.id)}
                {...item}
                
            />
        )
    })



    return (
        
        <>
            <Header />
            <Project data={project} />
            <section className="projects-list">
                {projects}
            </section>
            
        </>
    )
}

//{/* <pre>{JSON.stringify(portfolioData, null, 2)}</pre> */}