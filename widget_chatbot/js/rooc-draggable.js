const draggableImage = document.getElementById('draggable-image');
let isDragging = false;
let offsetX, offsetY;

draggableImage.addEventListener('mousedown', (e) => {
    isDragging = true;
    const rect = draggableImage.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    draggableImage.style.zIndex = '1';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    const container = document.getElementById('draggable-container');
    const maxX = container.clientWidth - draggableImage.clientWidth;
    const maxY = container.clientHeight - draggableImage.clientHeight;

    // Ensure the image stays within the container
    const clampedX = Math.min(maxX, Math.max(0, x));
    const clampedY = Math.min(maxY, Math.max(0, y));

    draggableImage.style.left = clampedX + 'px';
    draggableImage.style.top = clampedY + 'px';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    draggableImage.style.zIndex = '0';
});
