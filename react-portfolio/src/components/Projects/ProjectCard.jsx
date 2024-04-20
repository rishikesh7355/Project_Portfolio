import { getImageUrl } from "../../utils"
export const ProjectCard = ({item}) => {
    return (
        <div>
            <img src={getImageUrl(item.imageSrc)} alt={`Image of ${item.title}`} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ul>
                {
                    item.skills.map((skill, id) => {
                        <li key={id}>{skill}</li>
                    })
                }
            </ul>
            <div>
                <a href={item.demo}>Demo</a>
                <a href={item.source}>Source</a>
            </div>
        </div>
    )
}