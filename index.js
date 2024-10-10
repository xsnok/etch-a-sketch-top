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

function createBox(size) {
    const div = document.createElement("div");
    div.classList.add("box")
    div.setAttribute("style", `
        display: flex;
        box-sizing: border-box;
        width: ${(1/size)*100}%;
        height: ${(1/size)*100}%;
        flex-wrap: wrap;`
    );
    return div;
}

function createGrid(size) {
    const grid = document.querySelector(".grid");
    grid.style.maxWidth = `calc(20px * ${size})`;
    for (let i = 0; i < size*size; i++) {
        const box = createBox(size);
        grid.appendChild(box);
    }
}

createGrid(16);
boxEventListener();


const button = document.querySelector(".change-size-button");
const input = document.querySelector(".change-size-input")
const grid = document.querySelector(".grid");
button.addEventListener("click", function() {
    console.log("button pressed");
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

