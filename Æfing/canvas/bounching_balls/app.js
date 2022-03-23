let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");
let balls = []
let player = {
    x: Math.round(Math.random() * canvas.width),
    y: Math.round(Math.random() * canvas.height),
    vx: (Math.random()*6 * (Math.random() < 0.5 ? -1: 1)) + 6,
    vy: Math.random()*2 * (Math.random() < 0.5 ? -1: 1) + 0.5,
    radius: 50,
    color: "blue",
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

for (let i = 0; i < 100; i++) {
    balls[i] = {
        x: Math.round(Math.random() * canvas.width),
        y: Math.round(Math.random() * canvas.height),
        vx: (Math.random()*6 * (Math.random() < 0.5 ? -1: 1)) + 5,
        vy: (Math.random()*2 * (Math.random() < 0.5 ? -1: 1)) + 1,
        radius: Math.round(Math.random()*10 + 15),
        color: "purple",
        draw: function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
}

function clear() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// gonna take O(n*(n-1)) where n is the amount of balls in the array, extremely computationally expensive :(
function checkCollision() {
    balls.map(ball => {
        if (Math.abs(ball.x - player.x) < 20 && Math.abs(ball.y - player.y) < 20) {
             balls.splice([balls.indexOf(ball)], 1);
        }
    })
}

function playerMove() {
    player.draw();
    player.x += player.vx;
    player.y += player.vy;
    player.vy *= .999;
    player.vy += 1;
  
    if (player.y + player.vy > canvas.height || player.y + player.vy < 0) {
        player.vy = -player.vy;
    }
    if (player.x + player.vx > canvas.width || player.x + player.vx < 0) {
        player.vx = -player.vx;
    }
}

function draw() {
    clear();
    balls.map(ball => {
        if (ball) {
            ball.draw();
            ball.x += ball.vx;
            ball.y += ball.vy;
            ball.vy *= .99;
            ball.vy += .25;
            if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
            ball.vy = -ball.vy;
            }
            if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
            ball.vx = -ball.vx;
            }
        }
    });

    player.draw();
    playerMove();
    checkCollision();

    window.requestAnimationFrame(draw);
}
draw();