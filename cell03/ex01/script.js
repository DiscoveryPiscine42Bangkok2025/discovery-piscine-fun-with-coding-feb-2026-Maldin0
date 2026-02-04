const balloon = document.getElementById('balloon');


let currentSize = 200;
let currentColorIndex = 0;

const colors = ['red', 'green', 'blue'];

balloon.addEventListener('click', function() {

    currentSize += 10;
    
    if (currentSize > 420) {
        currentSize = 200;
        currentColorIndex = 0;
        balloon.style.width = currentSize + 'px';
        balloon.style.height = currentSize + 'px';
        balloon.style.backgroundColor = colors[currentColorIndex];
        return;
    }
    
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';

    currentColorIndex = (currentColorIndex + 1) % 3;
    balloon.style.backgroundColor = colors[currentColorIndex];
});
balloon.addEventListener('mouseleave', function() {
    currentSize -= 5;
    if (currentSize < 200) {
        currentSize = 200;
    }
    
    balloon.style.width = currentSize + 'px';
    balloon.style.height = currentSize + 'px';
    
    currentColorIndex = (currentColorIndex - 1 + 3) % 3;
    balloon.style.backgroundColor = colors[currentColorIndex];
});