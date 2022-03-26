let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let heightOffset = parseInt(getComputedStyle(document.querySelector(".header")).height);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - heightOffset;


class BallLogic {
    constructor(x, y, xv, yv, color, size) {
        this.x = x;
        this.y = y;
        this.xv = xv;
        this.yv = yv;
        this.color = color;
        this.size = size;
    }

    boundaryCheck() {
        if (this.x + this.xv > canvas.width || this.x + this.xv < 0) {
            this.xv *= -1;
        } 
        if (this.y + this.yv > canvas.height || this.y + this.yv < 0) {
            this.yv *= -1;
        }
    }

    move() {
        this.boundaryCheck();
        this.x += this.xv;
        this.y += this.yv;

    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}


class Player extends BallLogic {
    constructor(x, y, xv, yv, color, size) {
        super(x, y, xv, yv, color, size);
        this.counter = 0;
    }

    collision(collisionObj) {
        collisionObj.map(item => {
            let dx = this.x - item.x;
            let dy = this.y - item.y;
            let length = Math.sqrt(dx**2 + dy**2);
            if (length < this.size+item.size) {
                

                // Find vector of collisionObj with player and increment that until out of range
                item.xv < 0 ? this.xv *= -1 : this.xv;
                item.yv < 0 ? this.yv *= -1 : this.yv;



                while (length < this.size+item.size) {
                    this.move();
                    dx = item.x - this.x;
                    dy = item.y - this.y;
                    length = Math.sqrt(dx**2 + dy**2);
                }
            }
        });
    }
}


class AI extends BallLogic {
    constructor(x, y, xv, yv, color, size) {
        super(x, y, xv, yv, color, size);

    }
}

class GameLogic {
    constructor(numPlayers, numAI) {
        this.computer = [];
        this.players = [];
        this.numPlayers = numPlayers;
        this.numAI = numAI;       
        this.generatePlayers();
    }

    render() {        
        this.computer.map(item => {
            item.move();
            item.draw();
        })
        
        this.players.map(item => {
            item.move();
            item.draw();
            item.collision(this.computer);
        })
    }

    generatePlayers() {
        for(let i = 0; i < this.numPlayers; i++) {
            this.players.push(new Player(
                Math.random()*canvas.width,
                Math.random()*canvas.height,
                Math.random()*2 + 5,
                Math.random()*1.5 + 3,
                "blue",
                50
            ));
        }
        
        for(let i = 0; i < this.numAI; i++) {
            this.computer.push(new AI(
                Math.random()*canvas.width,
                Math.random()*canvas.height,
                Math.random()*2 + 5,
                Math.random()*1.5 + 3,
                "red",
                25
            ))       
        }
    }

    clearScreen() {
        ctx.fillStyle = 'rgba(128, 128, 128, 0.3)';
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }

}

game = new GameLogic(1, 10);


function looped() {
    game.clearScreen();
    game.render();
    window.requestAnimationFrame(looped);
}

looped();