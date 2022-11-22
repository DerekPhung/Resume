
//little components for each topic seperated by boxes.
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
  //header
  let topics = ["Name" ,"GitHub", "LinkedIn" ,"Contact"]
  //all the descriptions
  let descriptions = ["Derek Phung" //Name
                    , `<a href="https://github.com/DerekPhung">https://github.com/DerekPhung</a>` //GitHub
                    ,`<a href="https://www.linkedin.com/in/derekphung16/">LinkedIn</a>` //LinkedIn
                    , `derekphung16@gmail.com</br><a href="tel:678-492-1294">Mobile: 678-492-1294</a>`]; //Contact

  //print out information in body text format
  for(let i = 0; i < topics.length; i++){
    bodyText(topics[i], descriptions[i]);
  }

}
//Running
console.log("Component Right is running")
main();
console.log("Component Right has ran correctly")