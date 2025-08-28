import React from 'react';
import { motion } from 'framer-motion';


export default function Home(){
return (
<section className="home">
<motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
<h1>Hi, I'm Your Name</h1>
<p>I'm a Full Stack Developer specializing in MERN stack. I build responsive and accessible web apps, with a focus on performance and clean UX.</p>


<div className="cta">
<a href="/projects">See my projects</a>
<a href="/resume">Download resume</a>
</div>
</motion.div>
</section>
);
}