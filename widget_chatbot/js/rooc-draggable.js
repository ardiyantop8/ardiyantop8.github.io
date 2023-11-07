var draggable = document.getElementById('rooc-widget-launcher');
var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;
var isDrag = false;

draggable.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);
draggable.addEventListener("touchstart", touchStart, true);
draggable.addEventListener("touchend", touchEnd, true);
window.addEventListener("touchmove", touchMove, true);
draggable.addEventListener("touchmove", touchMove, true);

function mouseDown(e) {
    e.preventDefault();
    posX = e.clientX - draggable.offsetLeft;
    posY = e.clientY - draggable.offsetTop;
    window.addEventListener('mousemove', moveElement, false);
}

function touchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    posX = touch.clientX - draggable.offsetLeft;
    posY = touch.clientY - draggable.offsetTop;
}

function touchEnd() {
    isDrag = false;
}

function touchMove(e) {
    if (isDrag) {
        const touch = e.touches[0];
        const left = touch.clientX - posX;
        const top = touch.clientY - posY;
        draggable.style.left = left + "px";
        draggable.style.top = top + "px";
    }
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
