import { getImageUrl } from "../../utils"
import styles from "./Hero.module.css"

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}> Hola! I am Rishikesh Yadav</h1>
                <p className={styles.description}>I'm Frontend Developer with 2.5 years of experience and having fullstack skills as well.
                    Reach out if you would like to know more.
                </p>
                <a className={styles.contactBtn}href="mailTo:rishiyadav280198@gmail.com">Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero avatar" className={styles.heroImg}></img>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>

    )
}