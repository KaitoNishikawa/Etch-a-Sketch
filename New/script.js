const DEFAULT_SIZE = 16

let currentSize = DEFAULT_SIZE;

const slider = document.getElementById("slider")
const selectValue = document.getElementById("selectValue")
const gridContainer = document.getElementById("grid-container")

slider.addEventListener('input', updateGrid)

window.onload = updateGrid()

function setupGrid(dimension) {
    gridContainer.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${dimension}, 1fr)`
}

function updateValue(){
    selectValue.innerHTML = slider.value + ' x ' + slider.value
    gridContainer.innerHTML = ''
    setupGrid(slider.value)
}

function createPixel(size){
    for(let i = 0; i < size * size; i++){
        pixel = document.createElement('div')
        pixel.classList.add("pixel")
        pixel.addEventListener('mousemove', changeColor)
        pixel.addEventListener('mousedown', changeColor)
        gridContainer.appendChild(pixel)
    }
}

function updateGrid(){
    currentSize = slider.value
    updateValue();
    createPixel(currentSize)
}

function changeColor(e){
    if (e.type == 'mouseover' && !mouseDown) {
        console.log('hello')
        return
    }
    //console.log(mouseDown)
    e.target.style.backgroundColor = 'black'
}

let mouseDown = false
document.body.onmousedown = () => {mouseDown = true; console.log(mouseDown)};
document.body.onmouseup = () => {mouseDown = false; console.log(mouseDown)};


