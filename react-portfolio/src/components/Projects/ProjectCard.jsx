import styles from './ProjectCard.module.css';

import { getImageUrl } from "../../utils"
export const ProjectCard = ({item}) => {
    return (
        <div className={styles.container}>
            <img 
                src={getImageUrl(item.imageSrc)} 
                alt={`Image of ${item.title}`}
                className={styles.image} 
                />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            <ul className={styles.skills}>
                {
                    item.skills.map((skill, id) => {
                        return (
                            <li key={id} className={styles.skill}>{skill}</li>
                        )
                    })
                }
            </ul>
            <div className={styles.links}>
                <a href={item.demo} className={styles.link}>Demo</a>
                <a href={item.source} className={styles.link}>Source</a>
            </div>
        </div>
    )
}