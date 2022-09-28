import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import './App.css'

const App = () => {
  return (
    <>
     
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="*" element={<Error></Error>} />
        </Routes>
     
    </>
  );
};

export default App;
