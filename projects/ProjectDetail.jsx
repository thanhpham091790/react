import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { data } from './projectData.js';

const projectMap = {};

data.forEach(dataObj => {
    dataObj.projects.forEach(projectObj => {
        if (projectObj.react === true) {
            projectMap[projectObj.url] = React.lazy(() => import(`./${projectObj.url}/Project${projectObj.url}`));
        }
    });
});

console.log(projectMap);

// const projectMap = {
//     "2025009": React.lazy(() => import("./2025009/Project2025009")),
//     "2025010": React.lazy(() => import("./2025010/Project2025010")),
// }

function ProjectDetail() {
    const { projectUrl } = useParams();

    const Project = projectMap[projectUrl] || (() => <p>React version is actively building. Want to see <a href="https://web-thanhpham.netlify.app/" target="_blank">web version</a>!</p>);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Project />
        </Suspense>
    );
}

export default ProjectDetail;