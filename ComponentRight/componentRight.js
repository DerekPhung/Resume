

function bodyText(topic, description){
    console.log("Running bodyText")
    //print body text method
    document.getElementById("columnRight").innerHTML += 
    `<div class="headerRight"> ${topic}</div>
    <p1> ${description} <br/>
    <br/> <br/> </p1>
    `;

}
//main
function main(){
    console.log("Running Main of componentRight.js")
    document.getElementById("bigBox").innerHTML += `
    <div id="columnRight">
      
    </div>
  `;


  //array of information
  let topics = ["Name" ,"Address" ,"Contact" ,"Mobile"]
  let descriptions = ["Derek Phung", "477 Autumn Park Trace, \nLawrenceville GA, 30044"
                        , "dphung@ggc.edu", "678-492-1294"];

  //print out information in body text format
  for(let i = 0; i < topics.length; i++){
    bodyText(topics[i], descriptions[i]);
  }


}
//Running
console.log("Component Right is running")
main();
console.log("Component Right has ran correctly")