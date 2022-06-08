var mouseEvent = "empty";

var last_position_of_mouse_x, last_position_of_mouse_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
thickness = 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {

    color = document.getElementById("color").value;
    width_of_line = document.getElementById("thickness").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_mouse_x, last_position_of_mouse_y)
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_mouse_x = current_position_of_mouse_x;
    last_position_of_mouse_y = current_position_of_mouse_y;

}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart() {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("thickness").value;

    last_position_of_touch_x = e.touches[0].clientX - offsetLeft;
    last_position_of_touch_y = e.touches[0].clienty - offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove() {
    current_position_of_touch_x = e.touches[0].clientX - offsetLeft;
    current_position_of_touch_y = e.touches[0].clienty - offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y)
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;
}

function clear() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}