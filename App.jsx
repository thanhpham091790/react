import { BrowserRouter, Routes, Route } from "react-router-dom"

import Projects from "./projects/Projects";
import Project2025009 from "./projects/2025009/Project2025009";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Projects />} />
                    <Route path="/2025009" element={<Project2025009 />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}