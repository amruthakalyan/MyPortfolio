import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default function App(){
return (
<div className="app-root">
<Navbar />
<main className="container">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/projects" element={<Projects/>} />
<Route path="/resume" element={<Resume/>} />
<Route path="/contact" element={<Contact/>} />
</Routes>
</main>
<Footer/>
</div>
);
}