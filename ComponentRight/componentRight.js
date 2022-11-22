

function bodyText(topic, description){
    document.getElementById("columnRight").innerHTML += 
    `${topic} <br/>
    ${description} <br/> <br/> <br/>`;

}

function main(){
    document.getElementById("bigBox").innerHTML += `
    <div id="columnRight">
      
    </div>
  `;

  bodyText("test", "testing" );

  for(let i = 0; i < 5; i++){
    bodyText("test" + i, "testing");
  }




}

console.log("Component Right is running")

main();