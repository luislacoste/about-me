import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home_screen";



export default function AboutMe() {

  return (
    <div className="App">
      <Home />
    </div>
  );
}