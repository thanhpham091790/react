import { BrowserRouter, Routes, Route } from "react-router-dom"

import Projects from "./projects/Projects";
import ProjectDetail from "./projects/ProjectDetail";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Projects />} />
                    <Route path="/projects/:projectUrl" element={<ProjectDetail />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}