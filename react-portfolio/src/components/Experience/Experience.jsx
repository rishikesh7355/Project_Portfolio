import skills from "../../data/skills.json"
import history from "../../data/history.json"
import { getImageUrl } from "../../utils"
import styles from "./Experience.module.css"

export const Experience = () => {
    return <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill,id)=> {
                return (
                <div key={id} className={styles.skill}>
                    <div className={styles.skillImgBox}>
                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                     </div>
                     <p>{skill.title}</p>
                </div>
                )
            })}
            </div>
            <ul className={styles.history}>
                {
                    history.map((item,id)=>{
                        return (
                            <li key={id} className={styles.historyItem}>
                               <img 
                                    src={getImageUrl(item.imageSrc)} 
                                    alt={`${item.organisation} Logo`} 
                                />
                                <div className={styles.historyItemDetails}>
                                    <h3>
                                        {`${item.role}, ${item.organisation}`}
                                    </h3>
                                    <p>{`${item.startDate}, ${item.endDate}`}</p>
                                    <ul>{item.experiences.map((exp,id) => {
                                        return <li key={id}>{exp}</li>
                                    })}</ul>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
}