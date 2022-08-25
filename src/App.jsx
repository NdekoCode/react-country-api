import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "./components/Logo";
import { Navigation } from "./components/Navigation";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Logo />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
