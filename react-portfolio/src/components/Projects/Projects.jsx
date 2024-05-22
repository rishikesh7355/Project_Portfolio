import styles from './Projects.module.css';

import projects from '../../data/projects.json'
import { ProjectCard } from './ProjectCard'
export const Projects = () =>{
    return(
       <section className={styles.container} id="projects">
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {
                projects.map((item,id)=>{
                    return <ProjectCard key={id} item={item}/>

                })
            }
        </div>
       </section>
    )
}