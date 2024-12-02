const INIT_ROWS = 16;
const INIT_COLS = 16;


window.addEventListener('load', () => {
    initGrid(INIT_ROWS, INIT_COLS);
});


function initGrid(rows, cols){

    let container = document.querySelector(".container");

    for(let r = 0; r < rows; r++){

        let row = document.createElement("div");
        row.classList.add("row")
        for(let c = 0; c < cols; c++){
            let box = document.createElement("div");
            
            box.classList.add("box")
            box.addEventListener("mouseenter", () => {
                box.style.backgroundColor = "grey";
            });
            
            row.appendChild(box);
        }

        container.appendChild(row);

    }


}