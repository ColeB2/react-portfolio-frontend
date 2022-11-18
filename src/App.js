import React, {useEffect} from "react";

import Header from "./components/Header";
import Project from "./components/Project";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

export default function App() {

    const [portfolioData, setPortfolioData] = React.useState([{}])
    const [currentProject, setCurrentProject] = React.useState(null)
    const [techData, setTechData] = React.useState([{}])
    const [filteredProjectData, setFilteredProjectData] = React.useState([{}])
    


    const techUrl = "https://cole.pythonanywhere.com/api/v1/technologies/"
    useEffect(() => {
        fetch(techUrl)
            .then(res => res.json())
            .then(data => setTechData(data))
    }, [techUrl])

    

    const url = "https://cole.pythonanywhere.com/api/v1/projects/"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPortfolioData(data))
    }, [url])

    //Filtered Data for all types 1-11 Python->TypeScript
    //Basic useeffect to filter data for multiple caoursels.
    useEffect(() => {
        const ret = []

        for (const tech in techData) {
            const item = {}
            item.title = techData[tech].name
            item.data = portfolioData.filter((project) => {
                return (
                    project.technologies &&
                    Object.values(project.technologies).includes(
                        techData[tech].id)
                )
            })
            ret.push(item)
            console.log(tech, techData, techData[tech])
        }
        setFilteredProjectData(ret)

    }, [portfolioData, techData])
    


    function handleClick(id, data) {
        data.forEach((item) => {
            if (item.id === id) {
                setCurrentProject(() => item)
            }
        })
    
    }

    console.log("techData", techData)
    console.log("portData", portfolioData, typeof(portfolioData))
    console.log('test2', filteredProjectData)

    function handleClose() {
        setCurrentProject(() => null)

    }




    return (
        
        <div className="main">
            <Header />

            { 
                currentProject === null ? null : 
                <Project data={currentProject} handleClick={handleClose} />
            }
  
            <section className="cards-list">
                {
                    filteredProjectData.map((item, idx) => {
                        console.log('filteredProjectData.map', item.data, typeof(item.data))
                        return (
                        item.data &&
                        <Carousel 
                            key={idx}
                            title={item.title}
                            data={item.data}
                            handleClick={handleClick}
                        />
                        )
                    })
                }
            </section>  
        </div>
    )
}