let canvas = document.getElementById("petCanvas");
let ctx = canvas.getContext("2d");

let xNorm = canvas.width / 1600;
let yNorm = canvas.height / 900;

// ctx.globalCompositeOperation = 'source-over';

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
    draw(8, 4);
};

const draw = async (health, poop) => {

    await drawImg("/assets/images/test_desert.png", 0, 0, canvas.width, canvas.height);
    drawBall();
    await heartStatus(health);
    await poopStatus(poop);
};



async function heartStatus(health) {
    if (health === 1) {
        await drawImg("/assets/images/halfHeart.svg", 30 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
    } else if (health === 2) {
        await drawImg("/assets/images/fullHeart.svg", 30 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
    } else if (health === 3) {
        console.log("hittt");
        await drawImg("/assets/images/fullHeart.svg", 30 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
        await drawImg("/assets/images/halfHeart.svg", 140 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
        console.log("finisheddd")
    } else if (health === 4) {
        await drawImg("/assets/images/fullHeart.svg", 30 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
        await drawImg("/assets/images/fullHeart.svg", 140 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
    } else if (health === 5) {
        await drawImg("/assets/images/fullHeart.svg", 30 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
        await drawImg("/assets/images/fullHeart.svg", 140 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
        await drawImg("/assets/images/halfHeart.svg", 250 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
    } else if (health === 6) {
        await drawImg("/assets/images/fullHeart.svg", 30 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
        await drawImg("/assets/images/fullHeart.svg", 140 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
        await drawImg("/assets/images/fullHeart.svg", 250 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
    } else if (health === 7) {
        await drawImg("/assets/images/fullHeart.svg", 30 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
        await drawImg("/assets/images/fullHeart.svg", 140 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
        await drawImg("/assets/images/fullHeart.svg", 250 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
        await drawImg("/assets/images/halfHeart.svg", 360 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
    } else if (health === 8) {
        await drawImg("/assets/images/fullHeart.svg", 30 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
        await drawImg("/assets/images/fullHeart.svg", 140 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
        await drawImg("/assets/images/fullHeart.svg", 250 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
        await drawImg("/assets/images/fullHeart.svg", 360 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
    };
};

//add hunger words 
// thought bubble burger
// most urgent
// hunger = 51-75

async function thoughtStatus(thought) {
    if (thought > 51 && thought < 75) {
        await drawImg("/assets/images/food1.svg", 100 * xNorm, 740 * yNorm, 90 * xNorm, 80 * yNorm);
    }
}

async function poopStatus(poop) {
    if (poop === 1) {
        console.log('poop hit')
        await drawImg("/assets/images/poop.svg", 100 * xNorm, 740 * yNorm, 90 * xNorm, 80 * yNorm);
    } else if (poop === 2) {
        await drawImg("/assets/images/poop.svg", 100 * xNorm, 720 * yNorm, 90 * xNorm, 80 * yNorm);
        await drawImg("/assets/images/poop.svg", 300 * xNorm, 760 * yNorm, 90 * xNorm, 80 * yNorm);
    } else if (poop === 3) {
        await drawImg("/assets/images/poop.svg", 140 * xNorm, 720 * yNorm, 90 * xNorm, 80 * yNorm);
        await drawImg("/assets/images/poop.svg", 260 * xNorm, 760 * yNorm, 90 * xNorm, 80 * yNorm);
        await drawImg("/assets/images/poop.svg", 600 * xNorm, 760 * yNorm, 90 * xNorm, 80 * yNorm);
    } else if (poop === 4) {
        await drawImg("/assets/images/poop.svg", 140 * xNorm, 720 * yNorm, 90 * xNorm, 80 * yNorm);
        await drawImg("/assets/images/poop.svg", 260 * xNorm, 760 * yNorm, 90 * xNorm, 80 * yNorm);
        await drawImg("/assets/images/poop.svg", 500 * xNorm, 740 * yNorm, 90 * xNorm, 80 * yNorm);
        await drawImg("/assets/images/poop.svg", 1000 * xNorm, 720 * yNorm, 90 * xNorm, 80 * yNorm);
    }
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