function createBox() {
    const div = document.createElement("div");
    div.classList.add("box")
    div.setAttribute("style", `
        width: 20px; 
        height: 20px;
        box-sizing: border-box;
\        border-style: solid;
        border-width: 2px;
        border-color: black;`
    );
    return div;
}

function createGrid() {
    const grid = document.querySelector("#grid");
    for (let i = 0; i < 16*16; i++) {
        const box = createBox();
        grid.appendChild(box);
    }
}

createGrid();

const boxes = document.querySelectorAll(".box");
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", function() {
        boxes[i].style.backgroundColor = "gray";
    });
}

