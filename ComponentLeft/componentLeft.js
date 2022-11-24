
//skills education 'work experience' projects 'major courses' 'award and achievement' 'Extracurricular Activities'
let navList = [
  "Skills", "Education", "Work Experience", 
  "Projects", "Major Courses", "Awards and Achievements", 
  "Extracurricular Activities", "Top"
];

let navID = [
  "skills","education","experience","projects",
"courses", "awards","activities","Top"
];


document.getElementById("bigBox").innerHTML += 
`
  <div id="columnLeft">

  </div>
`;

for(let i = 0; i < navList.length; i++){
  document.getElementById("columnLeft").innerHTML += 
  `
    <div class="navBox">
      <a href="#${navID[i]}">
        ${navList[i]}
      </a>
    </div>
  `;
}

function testerFunction(){
  console.log("you should only be able to read this if you call it");
}
