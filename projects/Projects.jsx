import './projects.css';
import { data } from './projectData.js';
import { Link } from 'react-router-dom';

import { FaReact } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

export default function Projects() {

    const projectsHtml = data.map(dataObj => {
        return (
            <div id={dataObj.year} className="year" key={dataObj.year}>
                <h2>{dataObj.year}</h2>
                <ul>
                    {dataObj.projects.map(projectObj => {
                        if (projectObj.react === true) {
                            return (
                                <li key={projectObj.id}>
                                    <Link to={`/projects/${projectObj.url}`}>
                                        {projectObj.name}
                                        <FaReact />
                                    </Link>

                                </li>
                            )
                        } else {
                            return (
                                <li key={projectObj.id}>
                                    <Link to={`/projects/${projectObj.url}`}>
                                        {projectObj.name}
                                        <FaLaptopCode />
                                    </Link>

                                </li>
                            )
                        }

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