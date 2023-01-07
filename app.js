var slider = document.getElementById("slider");
var SelectValue = document.getElementById("SelectValue");
var pixel;
var allPixels;
var factor = 100/16;
var click = false;
var something = document.getElementById("grid-container")
var something2 = document.getElementById("input")
something.onmousedown = (e) => {
    click = true; 
    e.preventDefault();
};

// something2.onmousedown = (e) => {

//     e.default();
// };
// something.onmousedown = (e) => {
//     click = true; 
//     e.default();
// };

//slider.onmousedown = (e) => updateSizeValue(e.target.value)
slider.onmousemove = (e) => updateSizeValue(e.target.value)
slider.onchange = (e) => slider2(e.target.value)



document.body.addEventListener('mouseup', function(){
    click = false;
})

// document.body.addEventListener('mousedown', function(){
//     click = true;
// })

// document.body.addEventListener('mousedown', function(){
//     click = true;
//     console.log(click)
// })

function updateSizeValue(value){
    SelectValue.innerHTML = value + ' x ' + value;
}



for(let i = 0; i < 256; i++){
    pixel = document.createElement('div');
    pixel.setAttribute("class", "pixel");
    // pixel.addEventListener('mousedown', function() {
    //     click = true;       
    //     this.style.backgroundColor = 'black';
    // })
    // pixel.addEventListener('mouseup', function() {
    //     click = false;
    // })
    pixel.addEventListener('mousemove', function() {
        if(click){
            // const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            // this.style.backgroundColor = `rgb(${randomBetween(0, 255)},${randomBetween(0, 255)},${randomBetween(0, 255)})`;
            this.style.backgroundColor = 'black';
        }
    })    
    pixel.style.width = factor + '%';
    document.getElementById("grid-container").appendChild(pixel);
}



function slider2(value){ 

    allPixels = document.querySelectorAll('.pixel');
    allPixels.forEach(pixel => {
        pixel.remove();
    })

    click = false;

    factor = 100/value;

    for(let i = 0; i < (value * value); i++){
        pixel = document.createElement('div');
        pixel.setAttribute("class", "pixel");
        // pixel.addEventListener('mousedown', function() {
        //     click = true;
        //     this.style.backgroundColor = 'black';
        // })
        // pixel.addEventListener('mouseup', function() {
        //     click = false;
            
        // })
        pixel.addEventListener('mousemove', function() {
            if(click){
                const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            this.style.backgroundColor = `rgb(${randomBetween(0, 255)},${randomBetween(0, 255)},${randomBetween(0, 255)})`;
            }
        })    
        pixel.style.width = factor + '%';
        document.getElementById("grid-container").appendChild(pixel);
    }
}