import React, {useEffect} from "react";

import Header from "./components/Header";
import Project from "./components/Project";
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
        portfolioData.forEach((item) => {
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
                <Carousel data={portfolioData} handleClick={handleClick}/>  
            </section>
            
        </>
    )
}

//{/* <pre>{JSON.stringify(portfolioData, null, 2)}</pre> */}