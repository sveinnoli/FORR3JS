let links = document.querySelectorAll("a");
let vorur = document.getElementById("vorur");


// Bæta við classa á ost og gefa klassanum rauðan lit
links[1].parentElement.classList.add("mikilvaegt");
let mikilvaegt = document.querySelectorAll(".mikilvaegt");

// Setja rauðan lit a oll element med klassan mikilvaegt
mikilvaegt.forEach(item => {
    item.style.background = "red";
})

// Breyta jalapeno i paprika
links[2].textContent = "paprika";

// Bæta við nachos fremst í vorulistann
let nachos = document.createElement('li');
let nachosA = document.createElement("a");
nachosA.textContent = "nachos";
nachosA.setAttribute("href", "\\item")
nachos.append(nachosA);
vorur.prepend(nachos);

vorur.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName === "A") {
       e.target.parentElement.remove();
    } else {
       e.target.remove();
    }
});

