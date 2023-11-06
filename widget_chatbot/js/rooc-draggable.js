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