

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Site2025009 from "./sites/2025009/index.jsx";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/2025009" element={<Site2025009 />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;