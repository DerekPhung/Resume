

function bodyText(){
    document.getElementById("columnRight").innerHTML += 
    `testing <br/> <br/>`;

}

function main(){
    document.getElementById("bigBox").innerHTML += `
    <div id="columnRight">
      
    </div>
  `;

  bodyText();

  for(let i = 0; i < 5; i++){
    bodyText();
  }




}

console.log("Component Right is running")

main();