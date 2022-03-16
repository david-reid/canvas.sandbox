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

function printText(text, x,y, size,font,color) {
    let ctx = document.getElementById("canvas").getContext("2d");
    ctx.fillStyle = color;
    ctx.font = `${size} ${font}`;
    ctx.fillText(text,x,y);
}

function printResults(a,b,c,d) {
    let collision = !( a || b || c || d);
    colorLabel("ALeftOfB",a);
    colorLabel("ARightOfB",b);
    colorLabel("AAboveB",c);
    colorLabel("ABelowB",d);
    colorLabel("collision",collision);
    document.getElementById("ALeftOfB").innerHTML = a;
    document.getElementById("ARightOfB").innerHTML = b;
    document.getElementById("AAboveB").innerHTML = c;
    document.getElementById("ABelowB").innerHTML = d;
    document.getElementById("collision").innerHTML = collision;
}

function colorLabel(id, toggle) {
    let tag = document.getElementById(id);
    tag.style.color = ( toggle ) ? "green" : "red";
}
