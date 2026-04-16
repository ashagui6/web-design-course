const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const clear = document.getElementById("clearButton");
const body = document.querySelector("body");
const colorPicker = document.getElementById("colorPicker");


// set canvas width and height in JS
canvas.style.width = "700";
canvas.style.height = "700";

let isDrawing = false;

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;

    // start path
    ctx.beginPath();

    // get the cursor position relative to the canvas
    const x = e.offsetX;
    const y = e.offsetY;

    // move "brush" to that spot
    ctx.moveTo(x,y);
});

canvas.addEventListener("mousemove", (e) => {
    // check if isDrawing is true
    if (isDrawing == true) {
        // get the cursor position relative to the canvas
        const x = e.offsetX;
        const y = e.offsetY;

        // draw a line to the new mouse position and display with stroke()
        ctx.lineTo(x,y);
        ctx.stroke();
    }
});

canvas.addEventListener("mouseup", (e) => {
    // set isDrawing to false when user realeases the mouse button
    isDrawing = false;
});

canvas.addEventListener("mouseleave", (e) => {
    isDrawing = false;
});

clear.addEventListener("click", (e) => {
    // erase the entire canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // reset path
    ctx.beginPath();
});

// set color of brush
let clrs = document.querySelectorAll(".clr");
clrs = Array.from(clrs);
clrs.forEach(clr => {
    clr.addEventListener("click", () => {
        ctx.strokeStyle = clr.dataset.clr;
    });
});

// change the brush to the color from the color picker
colorPicker.addEventListener("input", (e) => {
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
});

// change the size of the brush
var lineW = 5;
ctx.lineWidth = lineW;

document.getElementById("brushSizeIn").oninput = function() {
    isDrawing = null;
    lineW = document.getElementById("brushSizeIn").value;
    document.getElementById("brushSizeOut").innerHTML = lineW;
    ctx.lineWidth = lineW;
}