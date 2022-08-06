let canvas = document.getElementById("playpen");
let ctx = canvas.getContext("2d");

ctx.globalCompositeOperation = 'source-over';

// drawing ball
// to be replace with character
function drawBall() {
    let ballRadius = 10;
    let x = canvas.width - 100;
    let y = canvas.height - 10;
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
};

// drawing the background
window.onload = () => {
    draw();
};

const draw = async () => {

    await drawImg("./test_desert.png", 0, 0, 600, 400);
    var fullheart = drawImg("fullHeart.png", 10, 10, 30, 30);
    var halfheart = drawImg("halfHeart.png", 50, 10, 30, 30);
    drawBall();
}

const drawImg = async (filePath, x1, x2, y1, y2) => {
    let img = new Image();
    await new Promise((resolve) => {
        img.onload = function () {
            ctx.drawImage(img, x1, x2, y1, y2);
            resolve();
        };
        img.src = filePath;
    });
};

// drawing ball
// to be replace with character
function drawBall() {
    ctx.globalCompositeOperation = 'source-over';
    let ballRadius = 10;
    let x = canvas.width - 100;
    let y = canvas.height - 10;
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}







// draw character on screen
// character move a bit using translate() Remaps the (0,0) position on the canvas
// button addEventListener when pressed on, will invoke function fillText() to draw messages on top


// window.onload = function () {
//   let img = document.createElement("img");
//   img.src = "./test_desert.png";
//   // img, sx (clip), sy, swidth, sheight, x, y, width, height
//   ctx.drawImage(img, 0, 0, 500, 400);
//   console.log('hittt');
//   drawBall();
// };

// pressing on the feed button
// adding points to heart bar (behind the scene)
// points will indicate how many hearts to show on front end
// hearts will be drawn on canvas