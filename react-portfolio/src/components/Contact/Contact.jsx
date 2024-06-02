import { getImageUrl } from "../../utils"
import styles from './Contact.module.css';

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>
                    Contact
                </h2>
                <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="email img" />
                    <a href="mailto:myemail@email.com" target="_blank">rishiyadav280198@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin img" />
                    <a href="https://www.linkedin.com/in/rishikesh-yadav/" target="_blank" >linkedin.com/Rishikesh</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="github img" />
                    <a href="https://github.com/rishikesh7355" target="_blank">github.com/Rishikesh</a>
                </li>
            </ul>
        </footer>
    )
}