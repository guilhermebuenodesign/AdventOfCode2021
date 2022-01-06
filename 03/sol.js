const fs = require('fs');

let data = fs.readFileSync('input', 'utf-8');
let numOf0 = 0;
let numOf1 = 0;

data = data.trim().split("\n");

for (i = 0; i <= data.length - 1; i++) {
    data[i] = data[i].trim().split("");
}

data = data.map(([a, b, c, d, e, f, g, h, i, j, k, l]) => [Number(a), Number(b), Number(c), Number(d), Number(e), Number(f), Number(g), Number(h), Number(i), Number(j), Number(k), Number(l)]);

for (z = 0; z = data[0].length - 1; z++) {
    for (x = 0; x = data.length - 1; x++) {
        if (data[x][z] = 1) {
            numOf1 = numOf1 + 1;
        } 
        else {
            numOf0  =  numOf0 + 1;
        }
    }
}

console.log(data[0]);