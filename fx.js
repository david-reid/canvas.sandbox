function prepareCanvas() {
    document.body.style.margin = 0;
    document.body.style.padding = 0;
}

function resizeCanvas() {
    let cnv = document.getElementById("canvas");
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;
}

function fillCanvas(fill) {
    let cnv = document.getElementById("canvas");
    let ctx = cnv.getContext("2d");
    ctx.save();
    ctx.fillStyle = fill;
    ctx.fillRect(0,0, cnv.width,cnv.height);
    ctx.restore();
}

function drawRect(x,y, width,height, fill) {
    let ctx = document.getElementById("canvas").getContext("2d");
    ctx.save();
    ctx.fillStyle = fill;
    ctx.fillRect(x,y, width,height);
    ctx.fill();
    ctx.restore();
}

function drawCircle(x,y, radius, fill) {
    let ctx = document.getElementById("canvas").getContext("2d");
    ctx.save();
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.arc(x,y, radius, 0, Math.PI*2);
    ctx.fill();
    ctx.restore();
}
