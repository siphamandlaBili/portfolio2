import { useData } from "./FetchProjects"


const Projects = ()=>{
    const {isloading,data} = useData();
    console.log(data)
    return <h1>PROJECTS</h1>
}

export default Projects