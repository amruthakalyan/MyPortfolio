import React from 'react';


export default function Resume(){
return (
<section>
<h2>Resume</h2>
<p>You can download my resume below.</p>
<a href={`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/resume/download`} className="button">Download Resume</a>


<h3>Summary</h3>
<ul>
<li>Full Stack MERN Developer</li>
<li>Experience with React, Node, Express, MongoDB</li>
<li>Interested in building performant UIs and clean APIs</li>
</ul>
</section>
);
}