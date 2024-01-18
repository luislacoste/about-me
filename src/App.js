import React, { useState } from "react";
import "./App.css";
import aboutMe from "./text/aboutMe.js";

export default function AboutMe() {

  return (
    <>
      <div className="nav-bar">
        <ul>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
          <li><a class="active" href="#home">Home</a></li>
        </ul>

      </div>

      <div className="body-text">
        <h1> About me </h1>
        <p > {aboutMe} </p>
        <p > {aboutMe} </p>
        <p > {aboutMe} </p>
        <p > {aboutMe} </p>
        <p > {aboutMe} </p>

      </div>
    </>

  );
}