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
        vx: (Math.random()*6 * (Math.random() < 0.5 ? -1: 1)) + 6,
        vy: Math.random()*2 * (Math.random() < 0.5 ? -1: 1) + 0.5,
        radius: Math.round(Math.random()*10 + 15),
        color: "purple",
        draw: function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
    console.log(balls[i]);
}

function clear() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// gonna take O(n-1) where n is the amount of balls in the array, extremely computationally expensive :(
function checkCollision() {
    // balls.map(ball => {
    //     if (abs(ball.x - player.x))
    // })
}

function draw() {
    clear();
    balls.map(ball => {
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
    });
    window.requestAnimationFrame(draw);
}
draw();