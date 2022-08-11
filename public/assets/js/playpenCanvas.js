let canvas = document.getElementById("petCanvas");
let canvasAnimate = document.getElementById("petMoveCanvas");
let ctx = canvas.getContext("2d");
let ctxAnimate = canvasAnimate.getContext("2d");

let xNorm = canvas.width / 1600;
let yNorm = canvas.height / 900;

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

let characterImg = new Image();

async function initDraw() {
    // Await query for user's activ pet.
    const userResponse = await fetch("/api/user/getUserId");
    const userId = await userResponse.json();
    // Use petResponse to get active pet from the user's ID.
    const petResponse = await fetch(`/api/pet/${userId}`);
    const petData = await petResponse.json();
    characterImg.src = `/assets/images/${petData.type}.png`;
    drawAnimate();
}

let x1 = 100 * xNorm;
let y1 = 225 * yNorm;

let dx = 2 * xNorm;

const drawAnimate = async () => {
    ctxAnimate.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    await changeDirection();
    x1 = x1 + dx;
    requestAnimationFrame(drawAnimate);
}

async function changeDirection() {
    ctxAnimate.clearRect(0, 0, canvas.width, canvas.height);
    ctxAnimate.drawImage(characterImg, x1, y1, 400 * xNorm, 650 * yNorm);
    if (x1 > 600 * xNorm || x1 < 80 * xNorm) {
        ctxAnimate.translate(canvas.width, 0);
        ctxAnimate.scale(-1, 1);
        dx = -dx;
    };
}

const draw = async (health, poop, hunger) => {
    await drawImg("/assets/images/bg-playpen.png", 0, 0, canvas.width, canvas.height);
    await heartStatus(health);
    await poopStatus(poop);
    await hungerStatus(hunger);
};

// drawing the heart status conditions
async function heartStatus(health) {
    if (health === 1) {
        await drawImg("/assets/images/halfHeart.svg", 30 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
    } else if (health === 2) {
        await drawImg("/assets/images/fullHeart.svg", 30 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
    } else if (health === 3) {
        await drawImg("/assets/images/fullHeart.svg", 30 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
        await drawImg("/assets/images/halfHeart.svg", 140 * xNorm, 30 * yNorm, 90 * xNorm, 80 * yNorm);
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

initDraw();