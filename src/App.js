import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

const app = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/home" element={<><Home /><About /><Contact /></>} />
            <Route path="About" element={<><Home /><About /><Contact /></>} />
            <Route path="Contact" element={<><Home /><About /><Contact /></>} />
          </Route>
        </Routes >
      </BrowserRouter>


    </>
  );
};

export default app;
