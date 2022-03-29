let btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
    console.log(event.type);
});

let link = document.querySelector("a");

// Two ways to pass in event through event listener
// 1
link.addEventListener('click', function(event) {
    console.log("Clicked");
    event.preventDefault();
}) 

// 2
btn.addEventListener('mousedown', event => {
    console.log(event.button);
})

let para = document.getElementById("para");
let innerBtn = document.getElementById("innerBtn");

para.addEventListener('mousedown', () => {
    console.log("Para handler")
});

innerBtn.addEventListener("mousedown", function(event) {
    console.log("innerBtn");
    // Rightclick prevents propogation
    if (event.button === 2) {
        event.stopPropagation();
    }
});


document.body.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
      console.log("Clicked", event.target.textContent);
    }
});


window.addEventListener('keydown', event => {
    if (event.key === 'v') {
        document.body.style.background = "violet";
    } 
})

window.addEventListener('keyup', event => {
    if (event.key === 'v') {
        document.body.style.background = '';
    }
})