const INIT_ROWS = 8;
const INIT_COLS = 16;
const CONTAINER_SIZE = 960;


window.addEventListener('load', () => {
    initGrid(INIT_ROWS, INIT_COLS);
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


function initGrid(rows, cols){

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