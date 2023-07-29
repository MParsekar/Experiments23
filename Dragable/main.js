const child = document.getElementById("child");
let offsetX, offsetY;
function drageStart(event) {
    // const childElement = event.getBoundingClientRect();
    offsetX = event.clientX - child.getBoundingClientRect().left;
    offsetY = event.clientY - child.getBoundingClientRect().top;

    console.log("offset", offsetX, "offsetY", offsetY, event)
    console.log(event.clientX, child.getBoundingClientRect().left)
    console.log(event.clientY, child.getBoundingClientRect().top)
    // Add event listeners to handle dragging and releasing
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", dragEnd);
    
}

// Function to stop dragging when the mouse is released
const dragEnd = () => {
    // Remove the event listeners for dragging and releasing
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", dragEnd);
};

// Function to handle dragging when the mouse moves
const drag = (event) => {
    // Calculate the new position of the element
    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;

    // Move the element to the new position

    child.style.left = `${x}px`;
    child.style.top = `${y}px`;
    console.log(child.style.top, `${x}px`, event.clientX);
};

// child.addEventListener("mouse")
child.addEventListener("mousedown", drageStart);