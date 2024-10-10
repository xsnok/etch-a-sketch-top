function boxEventListener(color) {
    const boxes = document.querySelectorAll(".box");
    console.log(color)
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mouseover", function() {
            boxes[i].style.backgroundColor = color;
        });
    }
}

function boxColor() {
    const button = document.querySelector(".change-color-button");
    button.addEventListener("click", function() {
        const input = document.querySelector(".change-color-input");
        boxEventListener(input.value)
    });
    return "#000000";
}

function changeGridSize() {
    const button = document.querySelector(".change-size-button");
    button.addEventListener("click", function() {
        const input = document.querySelector(".change-size-input");
        const grid = document.querySelector(".grid");
        if (input.value < 100 && input.value > 0) { 
            while (grid.firstChild) {
                grid.removeChild(grid.lastChild);
            }
            createGrid(input.value);
        }
        boxEventListener();
    });
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
boxEventListener(boxColor());
changeGridSize();



