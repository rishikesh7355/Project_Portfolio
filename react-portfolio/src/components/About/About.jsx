import {getImageUrl} from "../../utils"
export const About = () => {
    return(
       <section>
            <h2>About</h2>
            <div><img src={getImageUrl("about/aboutImage.png")} alt="sitting with laptop"/>
                <ul>
                    <li>
                        <img src={getImageUrl("about/uiIcon.png")} alt="cursor icon" />
                        <div>
                            <h3>Frontend Developer</h3>
                            <p>I'm a Frontend Developer with 2.5 years
                                experience in building responsive sites, optimization,
                                and debugging using ReactJS, HTML5, CSS3, Bootstrap, TypeScript
                            </p>
                        </div>
                    </li>
                    <li>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="server icon" />
                        <div>
                            <h3>FullStack Developer</h3>
                            <p>I have also knowledge of MERN stack and practiced 
                                experience in building responsive sites, optimization,
                                and debugging suing MongoDB, ExpressJS, ReactJS and NodeJS
                            </p>
                        </div>
                    </li>
                    <li>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
                        <div>
                            <h3>Backend Developemt</h3>
                            <p>Beginner in Java + spring Boot  and 
                                worked on beginner level tasks.Familiar with Eclipse ,SoapUI 
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
       </section>
    )
}