import './projects.css';
import { data } from './projectData.js';
import { Link } from 'react-router-dom';
import { FaReact } from "react-icons/fa";

export default function Projects() {

    const projectsHtml = data.map(dataObj => {
        return (
            <div id={dataObj.year} className="year" key={dataObj.year}>
                <h2>{dataObj.year}</h2>
                <ul>
                    {dataObj.projects.map(project => {
                        return (
                            <li key={project.id}>
                                <Link to={`/${project.url}`}>{project.name}</Link>
                                { project.react}
                            </li>
                        )

                    })}
                </ul>
            </div>
        )
    });

    return (
        <>
            <div className='projects'>
                {projectsHtml}
            </div>
        </>
    );
}