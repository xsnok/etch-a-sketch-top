function boxEventListener() {
    const boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mouseover", function() {
            boxes[i].style.backgroundColor = "gray";
        });
    }
}

function changeGridSize() {

}

function createBox() {
    const div = document.createElement("div");
    div.classList.add("box")
    div.setAttribute("style", `
        width: 20px; 
        height: 20px;
        box-sizing: border-box;`
    );
    return div;
}

function createGrid(size) {
    const grid = document.querySelector(".grid");
    grid.style.maxWidth = `calc(20px * ${size})`;
    for (let i = 0; i < size*size; i++) {
        const box = createBox();
        grid.appendChild(box);
    }
}

createGrid(16);
boxEventListener();


const button = document.querySelector(".change-button");
const input = document.querySelector(".change-input")
const grid = document.querySelector(".grid");
button.addEventListener("click", function() {
    console.log("button pressed");
    // TODO: value is blank
    console.log(input.value);
    if (input.value < 100 && input.value > 0) { 
        while (grid.firstChild) {
            grid.removeChild(grid.lastChild);
        }
        console.log("if statement passed");
        createGrid(input.value);
    }
    boxEventListener();
});

