'use strict'

function sum(db, key) {
    return db.map(item => item[key]).reduce((a,b) => a+b,)
}

let database = {
    "people" : [
        {"name":"Peter", "age": 19, "address" : "Logafold 44", "countrycode":"IS"},
        {"name":"Jake", "age": 35, "address" : "Logafold 43", "countrycode":"GER"},
        {"name":"Paul", "age": 42, "address" : "Logafold 42", "countrycode":"FRE"},
        {"name":"Jackass", "age": 15, "address" : "Logafold 41", "countrycode":"ITA"},
        {"name":"Licker", "age": 50, "address" : "Logafold 40", "countrycode":"NT"}
    ],
    "statistics" : {
        "average_age" : ""
        
    }
}

// Update average age
database["statistics"]["average_age"] = Math.floor(sum(database["people"], "age")/database["people"].length);
console.log(database["statistics"]["average_age"]);

let regx = /peter/i;

console.log(database["people"][0]["name"].match(regx));