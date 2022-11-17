import React, {useEffect} from "react";

import Header from "./components/Header";
import Project from "./components/Project";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

export default function App() {

    const [portfolioData, setPortfolioData] = React.useState([{}])
    const [currentProject, setCurrentProject] = React.useState({})
    const [techData, setTechData] = React.useState([{}])
    const [testData, setTestData] = React.useState([{}])
    const [testData2, setTestData2] = React.useState([{}])


    const techUrl = "https://cole.pythonanywhere.com/api/v1/technologies/"
    useEffect(() => {
        fetch(techUrl)
            .then(res => res.json())
            .then(data => setTechData(data))
    }, [techUrl])

    

    const url = "https://cole.pythonanywhere.com/api/v1/projects/"
    useEffect(() => {
        console.log("called url")
        fetch(url)
            .then(res => res.json())
            .then(data => setPortfolioData(data))
    }, [url])

    //Filtered Data for all types 1-11 Python->TypeScript
    //Display them all in carousels, with titles.
    // useEffect sets basic data for projects filtered.
    useEffect(() => {
        setTestData(portfolioData.filter((project) => {
            return (
                project.technologies && 
                Object.values(project.technologies).includes(11))
        }))
    }, [portfolioData])

    useEffect(() => {
        const ret = []

        for (const tech in techData) {
            let item = {}
            item.title = techData[tech].name
            item.data = portfolioData.filter((project) => {
                return (
                    project.technologies &&
                    Object.values(project.technologies).includes(techData[tech].id)
                )
            })
            console.log('item', item)
            ret.push(item)
            console.log(tech, techData, techData[tech])
        }
        console.log('ret', ret)
        setTestData2(ret)

    }, [portfolioData])
    


    function handleClick(id, data) {
        data.forEach((item) => {
            if (item.id === id) {
                setCurrentProject(() => item)
            }
        })
    
    }

    console.log("techData", techData)
    // console.log("project", project)
    console.log("portData", portfolioData)
    console.log('test', testData)
    console.log('test2', testData2)

    // console.log('here', portfolioData[0].technologies)
    // if (portfolioData !== [{}]) {
    //     const test = portfolioData.filter(proj => proj.technologies.includes(3))

    // }
    // const test = portfolioData.filter(proj => proj.technologies.includes(3))



    return (
        
        <div>
            <Header />
            <Project data={currentProject} />

            <hr></hr>
            <section className="cards-list">
                <Carousel key={1} data={portfolioData} handleClick={handleClick}/> 
                <Carousel key={2} data={testData} handleClick={handleClick}/> 
                {testData2.map((item, idx) => {
                    return (
                    <Carousel 
                        key={idx}
                        data={item.data}
                        handleClick={handleClick}
                    />
                    )
                })
                }
                {/* <Carousel key={3} data={portfolioData} handleClick={handleClick}/>   */}
                {/* <Carousel key={4} data={portfolioData} handleClick={handleClick}/>  */}
                {/* <Carousel key={5} data={portfolioData} handleClick={handleClick}/>  */}
                {/* <Carousel key={6} data={portfolioData} handleClick={handleClick}/>  */}
            
            </section>  

            {/* <Footer /> */}
        </div>
    )
}