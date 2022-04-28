import React, {useEffect} from "react";

import Header from "./components/Header";
import Project from "./components/Project";
import Carousel from "./components/Carousel";

//https://www.youtube.com/watch?v=6c2NqDyxppU react in django
export default function App() {

    const [portfolioData, setPortfolioData] = React.useState([{}])
    const [project, setProject] = React.useState({})
    const [techData, setTechData] = React.useState([{}])

    let techUrl = "https://cole.pythonanywhere.com/api/v1/technologies/"
    useEffect(() => {
        fetch(techUrl)
            .then(res => res.json())
            .then(data => setTechData(data))
            // .then(data => console.log(data))
            // .then(data => setProject(data))
    }, [techUrl])

    

    let url = "https://cole.pythonanywhere.com/api/v1/projects/"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPortfolioData(data))
            // .then(data => console.log(data))
            // .then(data => setProject(data))
    }, [url])


    function handleClick(id) {
        portfolioData.forEach((item) => {
            if (item.id === id) {
                setProject(() => item)
            }
        })
    
    }

    console.log(portfolioData)
    console.log(techData)

    return (
        
        <>
            <Header />
            <Project data={project} />

  

            <hr></hr>
            <h5>All Projects</h5>
            <section className="cards-list">
                <Carousel data={portfolioData} handleClick={handleClick}/>  
            </section>
            
        </>
    )
}

//{/* <pre>{JSON.stringify(portfolioData, null, 2)}</pre> */}