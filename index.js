let cnv, ctx, loop;

window.onload = function() {
    prepareCanvas();
    resizeCanvas();
    addEventListener('mousemove',mouseMoved);
    init();
    loop = setInterval(() => {
        update();
        render();
    },1000/60);
}

window.onresize = function() {
    resizeCanvas();
}

function init() {
}

function update() {
}

function render() {
}

function mouseMoved(event) {
}
