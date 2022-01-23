import React from "react";
import Header from "./Component/Header/Header";
import TodoApp from "./Component/TodoApp/TodoApp";
import About from "./Component/About/About";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
             <Header />
            <Routes>

               
                <Route path="/" element={<TodoApp />} />
                <Route path="/about" element={<About />} />


            </Routes>
        </div>

    );

}

export default App;

