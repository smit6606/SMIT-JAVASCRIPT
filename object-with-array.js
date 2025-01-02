// 1.Object With Array, 2.Looping, 3.Accecss In Array and Object Make Quotes.
// 1.Object With Array :-
let obj = {
    name: "Smit",
    hobby: ['reading', 'music', 'cooking'],
    address: {
        line1: "YogiChowk",
        line2: "Canal Road",
        city: "Surat",
        zipcode: "395007",
    }
}
console.log(obj);
console.log(obj.hobby[2]);
console.log(obj.address.city);
console.log(obj['hobby'][2]);
console.log(obj['address']['city']);

// 2.Looping = Two Type Of Loop :- 

let data = [11, 22, 33, 44, 55]

// (i) For in  [object/array]
for (let i in data) {
    console.log("For in Method :", i, data[i]);
}

// (ii) For of  [array]
for (let i in data) {
    console.log("For of Method :", i, data[i]);
}

// 3.Accecss In Array and Object Make Quotes.
let ele = [
    { id: 1, name: "John" },
    { id: 2, name: "Jolly" },
    { id: 3, name: "Smith" },
]
console.log(ele);
console.log(ele[1]['name']);

let teamIndia = [
    { id: 1, name: "Rohit" },
    { id: 2, name: "Virat" },
    { id: 3, name: "Pant" },
    { id: 4, name: "Surya" },
    { id: 5, name: "Rinku" },
    { id: 6, name: "Shivam" },
    { id: 7, name: "Hardik" },
    { id: 8, name: "Jadeja" },
    { id: 9, name: "Jasprit" },
    { id: 10, name: "Kuldeep" },
    { id: 11, name: "Arshdeep" },
]

function generatenumber() {
    let randomIndex = Math.floor(Math.random() * teamIndia.length);
    let randomPlayer = teamIndia[randomIndex];

    document.getElementById('name').innerHTML = randomPlayer.name;
    document.getElementById('num').innerHTML = randomPlayer.id;
    console.log(randomPlayer)
}