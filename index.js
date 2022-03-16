let cnv, ctx, loop;
let rect1, rect2, centerX, centerY;

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
    cnv = document.getElementById("canvas");
    centerX = cnv.width/2;
    centerY = cnv.height/2;
    rect1 = { x:300,y:300, width:150,height:150, color:"#fff" }
    rect2 = { x:100,y:100, width:150,height:150, color: "#fff" }
    rect2.x = centerX - rect2.width/2;
    rect2.y = centerY - rect2.height/2;
}

function update() {
    rect1.color = "#fff";
    rect2.color = "green";
    if ( collision(rect1,rect2) ) {
        rect1.color = "#ff0000";
        rect2.color = "#ff0000";
    }
}

function render() {

    fillCanvas("#000");

    // Rect B
    drawRect(rect2.x,rect2.y, rect2.width,rect2.height, rect2.color);
    printText("B", rect2.x+30,rect2.y+120, "135px","Arial","#000"); 

    // Rect A
    drawRect(rect1.x,rect1.y, rect1.width,rect1.height, rect1.color);
    printText("A", rect1.x+30,rect1.y+120, "135px","Arial","#000"); 
}

function mouseMoved(event) {
    rect1.x = event.clientX - rect1.width/2;
    rect1.y = event.clientY - rect1.height/2;
}


function collision(rect1,rect2) {

    let aLeftOfB = ( rect1.x + rect1.width ) < ( rect2.x );
    let aRightOfB = ( rect1.x ) > ( rect2.x + rect2.width );
    let aAboveB = ( rect1.y + rect1.height ) < ( rect2.y );
    let aBelowB = ( rect1.y ) > ( rect2.y + rect2.height );

    // testing purposes
    printResults(aLeftOfB,aRightOfB,aAboveB,aBelowB);

    return !( aLeftOfB || aRightOfB || aAboveB || aBelowB );
}

