const draggableChatbox = document.getElementById("draggable-chatbox");
let offsetX, offsetY;
let isDragging = false;

draggableChatbox.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - draggableChatbox.getBoundingClientRect().left;
    offsetY = e.clientY - draggableChatbox.getBoundingClientRect().top;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        const left = e.clientX - offsetX;
        const top = e.clientY - offsetY;
        draggableChatbox.style.left = left + "px";
        draggableChatbox.style.top = top + "px";
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

// Event untuk perangkat sentuh (touch) seperti smartphone dan tablet
draggableChatbox.addEventListener("touchstart", (e) => {
    isDragging = true;
    const touch = e.touches[0];
    offsetX = touch.clientX - draggableChatbox.getBoundingClientRect().left;
    offsetY = touch.clientY - draggableChatbox.getBoundingClientRect().top;
});

document.addEventListener("touchmove", (e) => {
    if (isDragging) {
        const touch = e.touches[0];
        const left = touch.clientX - offsetX;
        const top = touch.clientY - offsetY;
        draggableChatbox.style.left = left + "px";
        draggableChatbox.style.top = top + "px";
    }
});

document.addEventListener("touchend", () => {
    isDragging = false;
});
