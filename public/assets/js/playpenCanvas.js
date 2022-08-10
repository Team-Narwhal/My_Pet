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
// function drawBall() {
//     let ballRadius = 10;
//     let x = canvas.width - 100;
//     let y = canvas.height - 10;
//     ctx.beginPath();
//     ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();
// };

// drawing the heart, poop, food bubble
// window.onload = () => {
//     draw(8, 4, 800);
// };

const draw = async (health, poop, hunger) => {
    await drawImg("/assets/images/bg-playpen.png", 0, 0, canvas.width, canvas.height);
    // drawBall();
    await heartStatus(health);
    await poopStatus(poop);
    await hungerStatus (hunger);
};


// drawing the heart status conditions
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

// drawing the hunger status conditions
async function hungerStatus(hunger) {
    if (hunger > 75 && hunger < 100) {
        await drawImg("/assets/images/food1.svg", 800 * xNorm, 100 * yNorm, 306 * xNorm, 240 * yNorm);
    } else if (hunger > 51 && hunger < 75) {
        await drawImg("/assets/images/food2.svg", 800 * xNorm, 100 * yNorm, 306 * xNorm, 240 * yNorm);
    } else if (hunger > 25 && hunger < 51) {
        await drawImg("/assets/images/food3.svg", 800 * xNorm, 100 * yNorm, 306 * xNorm, 240 * yNorm);
    } else if (hunger > 0 && hunger < 25) {
        await drawImg("/assets/images/food4.svg", 800 * xNorm, 100 * yNorm, 306 * xNorm, 240 * yNorm);
    }
}

// drawing the poop status conditions
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