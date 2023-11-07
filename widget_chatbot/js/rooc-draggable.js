var draggable = document.getElementById('rooc-widget-launcher');

var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;
var isDrag = false;

draggable.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

function mouseDown(e) {
    e.preventDefault();
    posX = e.clientX - draggable.offsetLeft;
    posY = e.clientY - draggable.offsetTop;
    window.addEventListener('mousemove', moveElement, false);
}

function mouseUp(e) {
    window.removeEventListener('mousemove', moveElement, false);
    if (isDrag) {
        isDrag = false;
    } else if (!isDrag && draggable.contains(e.target)) {
        document.getElementById('rooc-widget-appx').style.display = "block";
        draggable.style.display = 'none';
    }
}

function moveElement(e) {
    mouseX = e.clientX - posX;
    mouseY = e.clientY - posY;
    draggable.style.left = mouseX + 'px';
    draggable.style.top = mouseY + 'px';
    isDrag = true;
}

document.addEventListener("touchmove", (e) => {
    if (isDrag) {
        const touch = e.touches[0];
        const left = touch.clientX - offsetX;
        const top = touch.clientY - offsetY;
        draggable.style.left = left + "px";
        draggable.style.top = top + "px";
    }
});

draggable.addEventListener("touchstart", (e) => {
    isDrag = true;
    const touch = e.touches[0];
    posX = touch.clientX - draggableImage.getBoundingClientRect().left;
    posY = touch.clientY - draggableImage.getBoundingClientRect().top;
});

draggable.addEventListener("touchmove", (e) => {
    if (isDrag) {
        const touch = e.touches[0];
        const left = touch.clientX - posX;
        const top = touch.clientY - posY;
        draggableImage.style.left = left + "px";
        draggableImage.style.top = top + "px";
    }
});

draggable.addEventListener("touchend", () => {
    isDrag = false;
});
