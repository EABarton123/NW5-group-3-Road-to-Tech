import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./App.css";
import CustomHeader from "./components/customHeader"; //Include Heder
import Home from "./pages/Home";
import "./assets/css/content.css";
import AdminJobs from "./pages/AdminJobs";
import GradJobs from "./pages/GradJobs/GradJobs";
import VerifyCertificateNum from "../components/users/VerifyCertificateNum";
import { Signup } from "./components/Pages/signup/Signup";




const App = () => (
<>
<Signup />

</>
);

export default App;
