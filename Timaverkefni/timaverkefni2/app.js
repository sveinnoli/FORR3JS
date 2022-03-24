let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");
let blinkies = [];
let speedies = [];

// Notar mjög sérstaka algorithm til að ná í liti sem líta vel út og hunsar þeim sem eru of dauðir t.d. svartir eða gráir.
function rainbowStop(h) {
    let f= (n,k=(n+h*12)%12) => .5-.5*Math.max(Math.min(k-3,9-k,1),-1);  
    let rgb2hex = (r,g,b) => "#"+[r,g,b].map(x=>Math.round(x*255).toString(16).padStart(2,0)).join('');
    return ( rgb2hex(f(0), f(8), f(4)) );
} 


function rebuildGame() {
    if (speedies.length > 0) {
        speedies = [];
        blinkies = [];
    }
    for (let i = 0; i < 10; i++) {
        blinkies.push(new Blinky({
            "x" : Math.round(Math.random() * canvas.width),
            "y" : Math.round(Math.random() * canvas.height)
        }, 
        Math.random()*1 + 2,
        Math.random()));
    }
    
    for (let i = 0; i < 2; i++) {
        speedies.push(new Speedy({
            "x" : Math.random() * canvas.width,
            "y" : Math.random() * canvas.height
        }, 
        {
            "x" : Math.random()*2 + 5,
            "y" : Math.random()*2 + 5
        }));
    }
} 


class Ghost {
    constructor(location, speed) {
        this.location = location;
        this.speed = speed;
        
    }

}


class Speedy extends Ghost {
    constructor(location, speed) {
        super(location, speed);
    }

    move() {
        this.location["x"] += this.speed["x"];
        this.location["y"] += this.speed["y"];
        if (this.location["y"] + this.speed["y"] > canvas.height || this.location["y"] + this.speed["y"] < 0) {
            this.speed["y"] = -this.speed["y"];
        }
        if (this.location["x"] + this.speed["x"] > canvas.width || this.location["x"] + this.speed["x"] < 0) {
            this.speed["x"] = -this.speed["x"];
        }
    }  
    // Checkar hvort speedy er að collidea við blinky
    collision() {
        speedies.map(itemspeedy => {
            blinkies.map(itemblink => {
                if (Math.abs(itemspeedy.location["x"] - itemblink.location["x"]) < 40 && Math.abs(itemspeedy.location["y"] - itemblink.location["y"] ) < 40) {
                    itemblink.speed = 0;
                    itemblink.alive = false;
                    itemspeedy.speed["x"] *= 1.001;
                    console.log("collision")
                }
            });
        })
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.location["x"], this.location["y"], 20, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
    }

}


class Blinky extends Ghost {
    constructor(location, speed, starting_dir) {
        super(location, speed);
        this.starting_dir = starting_dir;
        this.alive = true;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.location["x"], this.location["y"], 20, 0, Math.PI * 2);
        ctx.fillStyle = "black";
        ctx.fill();
    }
    
    changeColor() {
        ctx.beginPath();
        ctx.arc(this.location["x"], this.location["y"], 25, 0, Math.PI * 2);
        ctx.fillStyle = rainbowStop(Math.random(100));
        ctx.fill();
    }

    move() {
        // Hreyfir aðeins á x-ás eða y-ás, hefur 50% séns í að breyta um átt þegar hann teleportast
        if(this.starting_dir > 0.5) {
            this.location["y"] += this.speed;
        } else {
            this.location["x"] += this.speed;
        }
        // Checkar hvort hann fer out of bounds og snýr honum við
        if (this.location["y"] + this.speed > canvas.height || this.location["y"] + this.speed < 0) {
            this.speed = -this.speed;
            this.teleport();
        }
        if (this.location["x"] + this.speed > canvas.width || this.location["x"] + this.speed < 0) {
            this.speed = -this.speed;
            this.teleport();
        }
    }  

    teleport() {
        // Checkar
        this.starting_dir = Math.random();
        this.location["x"] = Math.random()*canvas.width;
        this.location["y"] = Math.random()*canvas.height;
        ctx.beginPath();
        ctx.arc(this.location["x"], this.location["y"], 25, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
    }

}


// Búa til speedy og blinky
rebuildGame();


// Rendering
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Renderar alla blinkies og speedies
function render() {
    clear();
    blinkies.map(item => {
        item.draw();
        item.move();
        if (item.alive === true) {
            item.changeColor();
        }
    });

    speedies.map(item => {
        item.draw();
        item.move();
        item.collision()
    });
    //Render next frame
    window.requestAnimationFrame(render);
}



render();