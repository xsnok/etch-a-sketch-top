function createBox() {
    const div = document.createElement("div");
    div.setAttribute("style", `
        width: 50px; 
        height: 50px;
        border-style: solid;
        border-width: 2px;
        border-color: black;`
    );
    return div;
}