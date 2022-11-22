
let navList = ["Education","Skills and Technique", "Work Experience", "Projects", "Major Courses", "Awards and Achievements", "Extracurricular Activities", "Top"];
let navID = ["education","skills","experience","projects","courses", "awards","activities","Top"];
document.getElementById("bigBox").innerHTML = `
  <div id="columnLeft">

  </div>
`;
for(let i = 0; i < navList.length; i++){
  document.getElementById("columnLeft").innerHTML += `
  <div id="${navID[i]}" class="navBox">${navList[i]}</div>`;
}
