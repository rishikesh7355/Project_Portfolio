import {getImageUrl} from "../../utils"
import styles from "./About.module.css"
export const About = () => {
    return(
       <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/aboutImage.png")} 
                    alt="sitting with laptop"
                    className={styles.aboutImage}
                    />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="Ui icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a Frontend Developer with 2.5 years
                                experience in building responsive sites, optimization,
                                and debugging using ReactJS, HTML5, CSS3, Bootstrap, TypeScript
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>FullStack Developer</h3>
                            <p>I have also knowledge of MERN stack and practiced 
                                experience in building responsive sites, optimization,
                                and debugging using MongoDB, ExpressJS, ReactJS and NodeJS
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developemt</h3>
                            <p>Beginner in Java + spring Boot  and 
                                worked on beginner level tasks.Familiar with Eclipse, SoapUI, etc. 
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
       </section>
    )
}