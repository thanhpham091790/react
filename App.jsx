

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Site2025009 from "./sites/2025009/index";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Site2025009 />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;