//create variable to hold number of div squares to create
const squares = 48;
//create container node
const container = document.querySelector(".container")
//loop a number of times equal to above variable-creating a square div each loop
for(let i = 0; i < squares; i++) {
    const newSquare = document.createElement("div");
    //give the square the "pixel" class
    newSquare.classList.add("pixel");
    //add event listener to square
    newSquare.addEventListener("mouseover", () => {
        newSquare.classList.add("hovered");
    })
    //append the square to container
    container.appendChild(newSquare);
}

//event listener for stylesheet color change
function changeColor(newColor) {
    const stylesheet = document.styleSheets[0]
    const rules = stylesheet.cssRules 
    for (let i = 0; i < rules.length; i++) {
        if (rules[i].selectorText === ".hovered") {
            rules[i].style.backgroundColor = newColor
        }
    }
}
//add event listener to resolution button
sizeButton = document.querySelector(".size");
sizeButton.addEventListener("click", () => {
    let input = Number(prompt("Enter a Whole number between 16 and 100(inclusive)", 16));

    while(isNaN(input) || input < 16 || input > 100) {
        input = Number(prompt("Enter a Whole number between 16 and 100(inclusive)", 16));
    }
    alert(input);
    
})

//function to change number of boxes
function changeBoxNumber(number) {
    const height = Math.floor(960 / number);
    const width = height;
}