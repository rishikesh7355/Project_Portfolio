import { getImageUrl } from "../../utils"
import styles from "./Hero.module.css"

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}> Hey! I am Rishikesh Yadav</h1>
                <p className={styles.description}>Frontend Developer with 3 years of experience and having fullstack skills as well.
                Actively practicing coding at GFG and Leetcode. Reach out if you would like to know more.
                </p>
                <a className={styles.contactBtn}href="mailTo:rishiyadav280198@gmail.com">Contact Me</a>
            </div>
            <img src={getImageUrl("hero/AboutImg.png")} alt="Hero avatar" className={styles.heroImg}></img>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>

    )
}