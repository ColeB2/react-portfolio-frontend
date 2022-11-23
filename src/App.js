import React, {useEffect} from "react";

import Header from "./components/Header";
import Project from "./components/Project";
import Carousel from "./components/Carousel";

import useOutsideClick from './hooks/hooks'

export default function App() {
    const [loading, setLoading] = React.useState(true)

    const [portfolioData, setPortfolioData] = React.useState([{}])
    const [currentProject, setCurrentProject] = React.useState(null)
    const [techData, setTechData] = React.useState([{}])
    const [pinnedProjectData, setPinnedProjectData] = React.useState([{}])
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
            .then((data) => {
                setPortfolioData(data)
                setLoading(false)
            })

            //Used for testing loading spinner
            // .then((x) => {
            //     console.log(x)
            //     new Promise(resolve => setTimeout(() => {
            //         setPortfolioData(x)
            //         setLoading(false)
            //     }, 3000))
            //     // setLoading(false)
            //     console.log('end')
            //     })

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
        }
        setFilteredProjectData(ret)

    }, [portfolioData, techData])

    //pinned data
    useEffect(() => {
        setPinnedProjectData(portfolioData.filter((project) => {
            return (project.pinned === true)
        }))
    }, [portfolioData])

    


    function handleClick(id, data) {
        data.forEach((item) => {
            if (item.id === id) {
                setCurrentProject(() => item)
            }
        })
    }

    function handleClickOverlay(id, data) {
        data.forEach((item) => {
            if (item.id === id) {
                setCurrentProject(() => item)
            }
        })
        const topOfOverlay = document.getElementById("top-of-overlay")
        topOfOverlay.scrollIntoView({behavior: "smooth"})
    }


    function handleClose() {
        setCurrentProject(() => null)
    }

    const ref = useOutsideClick(handleClose)




    return (
        
        // loading !== true &&
        loading === false ? 
        <div className="main">
            
            {/* Main Page, sans overlay*/}
            <div className={currentProject === null ? "" : "mask disabled"}>
                <Header />

                
                <section className="cards-list">
                {/* <section className={"cards-list " + (currentProject === null ? "" : "mask" )}> */}
                    {/* Pinned//Featured Projects//Top list of projects */}
                    <Carousel
                        key={99}
                        title="Featured Projects"
                        data={pinnedProjectData}
                        handleClick={handleClick}
                    />
                    {/* Rest of projects based on tech. */}
                    {
                        filteredProjectData.map((item, idx) => {
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

            <section className="project--overlay--section" ref={ref}>
                { 
                    currentProject === null ? null : 
                    <Project 
                        data={currentProject}
                        handleClose={handleClose}
                        handleClick={handleClickOverlay}
                        relatedProjects={pinnedProjectData}
                    />
                }
            </section> 
        </div>
        :
        <div className="loader-container">
            <div className="loader">
            </div>
            <h5 className="loader-text">
                Thank you for visiting.
                If content takes too long to load, please refresh.
            </h5>
        </div>
        
    )
}