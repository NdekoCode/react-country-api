import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import About from "./pages/About";
import { Error } from "./pages/Error";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}
