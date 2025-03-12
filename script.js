//create variable to hold number of div squares to create

//create container node

//loop a number of times equal to above variable-creating a square div each loop
function makeSquares(number) {
    const containers = document.querySelectorAll(".gridRow");
    
        for(i = 0; i < number; i++) {
            for(j = 0; j < number; j++) {
                const newSquare = document.createElement("div");
                //give the square the "pixel" class
                newSquare.classList.add("pixel");
                //add event listener to square
                newSquare.addEventListener("mouseover", () => {
                    newSquare.classList.add("hovered");
                })
                //append the square to container
                
                containers[i].appendChild(newSquare);
            }
        }
    
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

//function to change number of and size of boxes
function changeSize(number) {
    const height = Math.floor(960 / number);
    const width = height;
    //remove existing boxes
    const oldBoxes = document.querySelectorAll(".pixel");
    oldBoxes.forEach(box => {
    box.remove();
    });
  
    // add new boxes equal to number squared
    const container = document.querySelector(".container");
    for(let i = 0; i < number * number; i++) {
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
}
//add event listener to resolution button
sizeButton = document.querySelector(".size");
sizeButton.addEventListener("click", () => {
    let input = Number(prompt("Enter a Whole number between 16 and 100(inclusive)", 16));

    while(isNaN(input) || input < 16 || input > 100) {
        input = Number(prompt("Enter a Whole number between 16 and 100(inclusive)", 16));
    }
    buildGrid(input);
    
})

function buildGrid(number) {
    //get the container node
    const container = document.querySelector(".container");
    //clear any existing boxes
    const oldGridRows = document.querySelectorAll(".gridRow");
    let oldGridRowsArray = Array.from(oldGridRows).forEach(function(row) {
        container.removeChild(row);
    });
   
    //build number of column flex boxes equal to number
    for(let i = 0; i < number; i++) {
        //create div element
        const newElement = document.createElement("div");

        //give div gridRow property
        newElement.classList.add("gridRow");

        //put the div into container
        container.appendChild(newElement);
    }
    //fill the divs with the makeSquares function
    
    makeSquares(number);
}
//Initialize the page with a 50 x 50 grid
buildGrid(50);