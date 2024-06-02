import {getImageUrl} from "../../utils"
import styles from "./About.module.css"
export const About = () => {
    return(
       <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/portfolio_bag.png")} 
                    alt="porfolio office bag"
                    className={styles.aboutImage}
                    />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="Ui icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                Passionate Frontend Developer with 3 years of experience in building and optimizing user-focused
                                web applications using React. Skilled in creating dynamic, responsive interfaces and enhancing
                                user experiences. Proficient in JavaScript, HTML, CSS, and modern development tools.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>FullStack Developer</h3>
                            <p>I also have beginner level knowledge of MERN and MEAN stack. Practiced 
                                building small projects using MongoDB, ExpressJS, ReactJS and NodeJS
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developemt</h3>
                            <p>Learning  Java + Spring Boot. Familiar with Eclipse, SoapUI, etc. 
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/bulbIcon.png")} alt="server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Problem Solving </h3>
                            <p>Good in Data Structures and Algorithms.Actively practicing problems on <a href="https://auth.geeksforgeeks.org/user/rishiyadav280198/practice" target="_blank">GeeksForGeeks</a>, <a href="https://leetcode.com/u/rishikesh28/" target="_blank">Leetcode</a> and <a href="https://www.hackerrank.com/profile/rishiyadav280198" target="_blank">HackerRank</a>. Participating in weekly contests.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
       </section>
    )
}