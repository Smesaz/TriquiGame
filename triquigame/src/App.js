import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Game from "./Game.js";
import Records from "./Records";

const App = () => {
    return(
        <BrowserRouter>
            <div>
            <Routes>
            <Route path='/' element={<Game/>} />
            <Route path='/records' element={<Records/>} />
            </Routes>
            </div>
        </BrowserRouter>

    )
}

export default App;