let items=[
    {name:"candy", category:"food", price: 200},
    {name:"Bread", category:"food", price: 900},
    {name:"Mouse", category:"tech", price: 2550},
    {name:"shirt", category:"clothes", price:1990}
]

function sum(item) {
    let listi = item.map(item => item["price"]);
    return listi.reduce(function(a,b){
        return a+b;
    });
}

function karfa(items, sum, afslattarkodi) {
    let nykarfa = items.map(items => {
        if (items["category"] === "food") {
            items["price"] = items["price"]*afslattarkodi;
        }
        return items;
    });
    nykarfa.push({"sum" : sum(items)});
    return nykarfa
}

let nykarfa = karfa(items, sum, 0.9)
console.log(nykarfa);
