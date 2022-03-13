let cnv, ctx, loop;

window.onload = function() {
    cnv = document.getElementById("canvas");
    ctx = cnv.getContext("2d");
    init();
    loop = setInterval(() => {
        update();
        render();
    },1000/60);
}

function init() {
}

function update() {
}

function render() {
}
