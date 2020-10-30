
const btnClear = document.getElementById("btnClear");
const selectColor = document.getElementById("selectColor");
const selectSize = document.getElementById("selectSize");
const selectSizeLabel = document.getElementById("selectSizeLabel");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.lineCap = "round"

let isDrawing = false;
let currentTool = '';

btnClear.addEventListener("click", () => ctx.clearRect(0, 0,canvas.width, canvas.height));
selectSize.addEventListener("change", (event) => {ctx.lineWidth = event.target.value;
selectSizeLabel.innerHTML = `${event.target.value} px`});
selectColor.addEventListener("change", (event) => ctx.strokeStyle = event.target.value);

selectColor.setAttribute("value", "#ff0000");
selectSize.value = 10;
selectSizeLabel.innerHTML = "10 px"
ctx.lineWidth = 10;
ctx.strokeStyle = "#ff0000";

let startX = 0; let startY = 0;

const startDrawing = (event) => {
    startX = event.offsetX;
    startY = event.offsetY;
    isDrawing = true;
};

function stopDrawing(event) {
    isDrawing = false;
}

const draw = (event) => {
    if(isDrawing){
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        startX = event.offsetX;
        startY = event.offsetY;
    }
}


canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);