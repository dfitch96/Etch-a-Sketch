let ROWS = 50;
let COLS = 50;
const CONTAINER_SIZE = 960;


window.addEventListener('load', () => {
    initGrid(ROWS, COLS);
});


function createBox(boxSize){
    
    
    let box = document.createElement("div");
    box.classList.add("box")
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = "black";
    });


    return box;
}

function resetGrid(){
    console.log("resetGrid");
    let grid = document.querySelector(".grid");
    grid.innerHTML = "";
    initGrid(ROWS, COLS);

}


function resizeGrid(){
    
    promptText = "Enter a new grid size between 16 to 100: ";

    let newSize = 0;
    while(true){
        newSize = prompt(promptText);
        if (newSize >= 16 && newSize <= 100){
            break;
        }

    }

    ROWS = newSize;
    COLS = newSize;
    resetGrid();
    
}


function initGrid(rows, cols){

    console.log("initGrid");
    let container = document.querySelector(".container");
    let grid = document.querySelector(".grid");
 
    let boxSize = Math.min(Math.floor(CONTAINER_SIZE / rows), Math.floor(CONTAINER_SIZE / cols));
    for(let r = 0; r < rows; r++){

        let row = document.createElement("div");
        row.classList.add("row")

        for(let c = 0; c < cols; c++){
            
            newBox = createBox(boxSize);
            row.appendChild(newBox);
        }

        grid.appendChild(row);
    }

    container.appendChild(grid);


}