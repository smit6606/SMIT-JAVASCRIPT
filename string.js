// collection of character => ' ', " "

let a = 'hello'
console.log(a);

let data = "Red & White"
console.log(data);
console.log(data.length);
console.log(typeof data);

// String Literal(''), Template Literal(Back tick (` `))

let hello = `Javascript is
            "Best language in the world's"`
console.log(hello);

console.log(`${a} ${data} ${hello}`);

let sent = "JavaSCript and Java are very diffrent languages  "
console.log(sent.length)
let b = sent.slice(0, 10)
console.log(b)

let c = sent.substring(15, 19)
console.log(c);

let d = sent.substr(20, 47)
console.log(d);

let e = sent.split("")
console.log(e);

let f = sent.split()
console.log(f);

let g = sent.split(" ")
console.log(g);

let h = sent.toUpperCase()
console.log(h);

let i = sent.toLowerCase()
console.log(i);

let j = sent.trim()
console.log(j);

let k = Math.floor(15.6)
console.log(k);

let l = Math.ceil(15.6)
console.log(l);

let m = Math.round(15.6)
console.log(m);

let n = Math.floor(Math.random() * 100) + 1;
console.log(n);

let o =new Date()
console.log(o);

console.log(o.getFullYear())
o.setFullYear(2030)
console.log(o);

o.setMonth(11)
console.log(o);











