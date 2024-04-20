import projects from '../../data/projects.json'
import { ProjectCard } from './ProjectCard'
export const Projects = () =>{
    return(
       <section>
        <h2>Projects</h2>
        <div>
            {
                projects.map((item,id)=>{
                    return <ProjectCard key={id} item={item}/>

                })
            }
        </div>
       </section>
    )
}