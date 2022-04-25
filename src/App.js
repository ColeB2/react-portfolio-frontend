import React, {useEffect} from "react";

import Header from "./components/Header";
import Project from "./components/Project";
import Cards from "./components/Cards";


import Carousel from "./components/Carousel";

export default function App() {

    const [portfolioData, setPortfolioData] = React.useState([{}])
    const [project, setProject] = React.useState({})

    

    let url = "https://cole.pythonanywhere.com/api/v1/projects/"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPortfolioData(data))
            // .then(data => console.log(data))
            // .then(data => setProject(data))
    }, [url])


    function handleClick(id) {
        // console.log(event.target)
        // console.log(event)
        // console.log(id)
        // for
        portfolioData.forEach((item) => {
            if (item.id === id) {
                setProject(() => item)
            }
        })
    
    }


    const allProjects = portfolioData.map(item => {
        return (
            <Cards
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

            <h1>All Projects</h1>
            <section className="cards-list">
                
                {allProjects}
            </section>

            <hr></hr>
            <h1> Testing Area</h1>
            <Carousel data={portfolioData}
            />  
        </>
    )
}

//{/* <pre>{JSON.stringify(portfolioData, null, 2)}</pre> */}