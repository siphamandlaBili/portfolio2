import { useData } from "./FetchProjects"


const Projects = ()=>{
    const {isloading,data} = useData();
    console.log(data)
    if(isloading){
        return <section className="projects">
            <h2>loading ...</h2>
            <div className="title-underline"></div>
            <div className="projects-center">
                {data.map((project)=>{
                    const {id,title,url,images} = project
                    
                    return <a href={url} key={id} target="_blank">open</a>
                })}
            </div>
        </section>
    }
    return <section className="projects">
        <div className="title">
            <h2>projects</h2>
            <div className="title-underline"></div>
        </div>
            
            <div className="projects-center">
                {data.map((project)=>{
                    const {id,title,url,images} = project
                    
                    return <a href={url} key={id} target="_blank" rel="no-referrer" className="project">
                        <img src={images?.fields?.file.url} alt="yes" className="img"/>
                        <h5>{title}</h5>
                    </a>
                })}
            </div>
        </section>
}

export default Projects