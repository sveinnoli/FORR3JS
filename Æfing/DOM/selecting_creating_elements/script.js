document.querySelectorAll("a").forEach(item => {
    item.setAttribute("href", "newhref");
    console.log(item.attributes.href);
});

document.body.style.backgroundColor = "grey";

//create elements and modify them
let somelist = document.getElementById("somelist");

let listItem1 = document.createElement("li");
listItem1.textContent = "stuff3";
somelist.appendChild(listItem1);

let listItem2 = document.createElement("li");
listItem2.textContent = "stuff4";
listItem2.setAttribute("class", "this");
somelist.append(listItem2);

let somediv = document.querySelector("div");
somediv.style.backgroundColor = "lightblue";

let button = document.querySelector(".button");

button.addEventListener("click", () => {
    alert("some stuff happened");
});

let container = document.querySelector(".somediv")


// Document fragment
let fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    let p = document.createElement('p');
    p.textContent = `Paragraph ${i}`;
    fragment.appendChild(p);
}

container.appendChild(fragment);
