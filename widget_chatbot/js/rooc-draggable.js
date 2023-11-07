const draggableImage = document.getElementById("draggable-image");
let offsetX, offsetY;
let isDragging = false;

draggableImage.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - draggableImage.getBoundingClientRect().left;
    offsetY = e.clientY - draggableImage.getBoundingClientRect().top;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        const left = e.clientX - offsetX;
        const top = e.clientY - offsetY;
        draggableImage.style.transform = `translate(${left}px, ${top}px)`;
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    draggableImage.style.transform = "translate(0, 0)";
});

// Event untuk perangkat sentuh (touch) seperti smartphone dan tablet
draggableImage.addEventListener("touchstart", (e) => {
    isDragging = true;
    const touch = e.touches[0];
    offsetX = touch.clientX - draggableImage.getBoundingClientRect().left;
    offsetY = touch.clientY - draggableImage.getBoundingClientRect().top;
});

document.addEventListener("touchmove", (e) => {
    if (isDragging) {
        const touch = e.touches[0];
        const left = touch.clientX - offsetX;
        const top = touch.clientY - offsetY;
        draggableImage.style.transform = `translate(${left}px, ${top}px)`;
    }
});

document.addEventListener("touchend", () => {
    isDragging = false;
    draggableImage.style.transform = "translate(0, 0)";
});
