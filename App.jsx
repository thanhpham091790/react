

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Site2025009 from "./sites/2025009/index";

function Home() {
    return (
        <>
            <div className="year" id="2025" style={{ fontSize: "20rem" }}>
                <ul>
                    <li>
                        <Link to="/2025009">2025-009-burger-site</Link>
                    </li>
                </ul>
            </div>

        </>
    );
}

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/2025009" element={<Site2025009 />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;