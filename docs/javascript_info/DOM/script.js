document.body.style.backgroundColor = 'grey';

setTimeout(() => {
    document.body.style.backgroundColor = "darkgrey";
}, 3000);

// Access <div> & <ul> & <li>
let div = document.getElementsByTagName("div");
let ul = document.getElementsByTagName("ul");
let li = document.getElementsByTagName("li");
console.log(div, ul, li);

// Method 2
let div2 = document.body.firstElementChild;
let ul2 = div2.nextElementSibling;
let li2 = ul2.childNodes[3];
let li3 = ul2.children[0];
console.log(div2, ul2, li2, li3);

console.log(document.getElementById("tst").lastChild.nextSibling); // Always returns null
console.log(document.body.children[0].previousSibling); 