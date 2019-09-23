function createGrid(noOfRows = 16){
    function createDivs(noOfRows,parent){ // Div Creation Function
        for (let i =0;i <noOfRows**2;i++){
            let divElement = document.createElement('div');
            divElement.className = 'sqaure'
            divElement.style.width = "" + 500/noOfRows + ""; // 160px window width
            divElement.style.height = ""+ 500/noOfRows + ""; // 160px heigh width
            divElement.style.background = "blue";
            divElement.id = 'div' + (i+1)
            divElement.textContent = ''
            parent.append(divElement)
        }   
    }
h1Element = document.getElementsByTagName('h1');
h1Element[0].style.marginLeft = "25%"
h1Element[0].style.marginRight = "25%"

let bodyTag = document.getElementsByTagName('body');
bodyTag[0].style.width = "500px"
bodyTag[0].style.height = "500px"
bodyTag[0].style.marginLeft = "auto"
bodyTag[0].style.marginRight = "auto"
let containerDiv = document.createElement('div');
// Syles :)
containerDiv.style.display = "grid";
containerDiv.style.background = "white";
containerDiv.style.width = "100%"; // my laptop screen's small :)
containerDiv.style.height = "100%"; //my laptop screen's small :)
containerDiv.style.gridTemplateColumns = "repeat(" + noOfRows + ",1fr)";
containerDiv.style.gridTemplateRows = "repeat(" + noOfRows + ",1fr)";
containerDiv.style.border = 'groove'
containerDiv.id = "container";
createDivs(noOfRows,containerDiv);
bodyTag[0].appendChild(containerDiv);

//--------------
let fColor = Math.floor(Math.random()*256);
let sColor = Math.floor(Math.random()*256);
let tColor = Math.floor(Math.random()*256);
let trans = [...Array(noOfRows**2).keys()].map(a =>a>0? a=0:0); // Divs Array of Trans.

for (let i=0;i<noOfRows**2;i++){
    document.getElementsByClassName("sqaure")[i].addEventListener("mousemove",mouseIN);
    function mouseIN(){
        document.getElementsByClassName("sqaure")[i].style ="background-color:rgba(" + fColor + ","  + sColor +","+ tColor + "," + trans[i] + ");"
        trans[i] += 0.10; 
    }
}
//---------------
let buttonElement = document.createElement('button');
buttonElement.id = 'myButton'
buttonElement.textContent = "Clear All"
buttonElement.style.fontSize = "100%"
buttonElement.style.fontWeight = "bold"
buttonElement.style.margin = "0 auto 20px auto"
buttonElement.style.width = "50%"
buttonElement.style.height = "30px"
buttonElement.style.position = 'relative'
buttonElement.style.left = "25%"
buttonElement.style.border = "round"
bodyTag[0].insertBefore(buttonElement,containerDiv)
document.getElementById('myButton').addEventListener("click",clearData);
}
//
//Styles :)
// I Think styles be by code :)

    function clearData(noOfRows=16){
    for (let i=0;i<noOfRows;i++){
        document.getElementsByClassName('sqaure')[i].style.background = 'blue';
    }

    //Delete Container Div
    let parent = document.getElementById('bodyTag');
    let child = document.getElementById("container");
    noOfRows = prompt("how many new grid :");
    parent.removeChild(child);

    //Delete Button 
    parent.removeChild(document.getElementById("myButton"))
    createGrid(noOfRows)
}




