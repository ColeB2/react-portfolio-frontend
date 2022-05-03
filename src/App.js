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
    }, [techUrl])

    

    let url = "https://cole.pythonanywhere.com/api/v1/projects/"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPortfolioData(data))
    }, [url])
    
    function handleClick(id, data) {
        data.forEach((item) => {
            if (item.id === id) {
                setProject(() => item)
            }
        })
    
    }


    return (
        
        <>
            <Header />
            <Project data={project} />

            <hr></hr>
            <section className="cards-list">
                <Carousel key={1} data={portfolioData} handleClick={handleClick}/>  
            </section>  
        </>
    )
}