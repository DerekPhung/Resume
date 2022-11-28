
let skills = ["Microsoft Suite", "SharePoint", "HTML","CSS","JavaScript","Java","Python","SQL","Git","PHP","Waterfall","Agile"];


document.getElementById("bigBox").innerHTML += `<div id="columnMid"></div>`;

document.getElementById("columnMid").innerHTML +=`
<div id="profile">
<img src="https://media-exp1.licdn.com/dms/image/C4D03AQF14WFxYpHxfw/profile-displayphoto-shrink_800_800/0/1608858125407?e=2147483647&v=beta&t=iTlQJEWgEGop7EUnEE39OTXK6NO3aYgGn7LojWWs8lk"/>

</div>


<h1 class="title" >Skills</h1>
<ul id="skillsList">
</ul>

<h1 class="title">Education</h1>

<div id="school1">Bachelors of Science</div>
<div id="school2">Expected Graduation: 2025</div>

<h1 class="title">Work Experience</h1>
<ul>
<li></li>
<li></li>
<b>TAP internship</b>
<p>The Technology Ambassador Program is a service-learn internship dedicated to helping middle schoolers, high schoolers, and non-IT majors develop an interest in Information Technology.
 As a Technology Ambassador, I worked with a small team to build a workshop and game that the targeted demographics could explore the limitless world of IT. It was also our job to record 
 their responses using surveys to research how successful we were and present our findings to superiors and in I.T. conferences around the U.S. to further expand our workshop and research
  to other schools.</p>
</ul>

<h1 class="title">Projects</h1>
<ul>
<li>Created a Rock, Paper, Scissors game using Java</li>
<li>Candy Catching game built through <a href="https://scratch.mit.edu/projects/481519033">Scratch</a></li>
<li><a href="http://dphung.altervista.org/index.html">My website</a></li>

</ul>

<h1 class="title">Major Courses</h1>
<ul>
<li>Web Tech</li>
<li>Programming Fundamentals</li>
<li>Intermediate Programming</li>
<li>Computer Graphics and Multimedia</li>
<li>Technology Ambassador Program</li>
</ul>

<h1 class="title">Awards and Achievements</h1>
<ul>
    <li>First place chess tournament in June 2015, July 2016</li>
    <li>First place in a college powerlifting competition known as the strongest grizzly (Georgia Gwinnett College) March 2019</li>
    <li>Trophy award in billiard league (qualified to go to Las Vegas to compete) in October 2015</li>
    <li>Won a medal for completing an obstacle course</li>
    <li>Multiple first place finishes in multiple card games that require imagination and sound reasoning as well as strategic thinking skills and logical deductive reasoning to solve problems</li>
    <li>First place finish in a team rhythm dancing game known as Pump it up (requires intense leg eye coordination and stamina)</li>


</ul>

<h1 class="title">Extracurricular Activities</h1>
<ul>
    <li>Was an extra for the movie The 5th Wave</li>
    <li>Attended UGAHack 4 (Hackathon February 2019)</li>
    <li>Attended Atlanta Tech Village (IT event February 2019)</li>
    <li>Competed at UGAHack 5 (Hackathon February 2020)</li>
</ul>
`;

for(let i = 0; i < skills.length; i++){
    document.getElementById("skillsList").innerHTML += `<li>${skills[i]}</li>`;
}