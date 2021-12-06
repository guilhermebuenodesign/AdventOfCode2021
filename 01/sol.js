const fs = require('fs')

let data = fs.readFileSync('input.txt', 'utf8');

data = data.trim().split("\n");
data = data.map(Number)

let x = 0;
let sol = 0;
let sol2 = 0;

for (let i = 0; i <= data.length; i++) {
    if (data[x + 1] > data[x]) {
        sol = sol + 1;
        x = x + 1;
    }
    else {
        x = x + 1;
    }
}

x = 0;

for (let z = 0; z <= data.length - 2; z++) {
    if (data[x + 1] + data[x + 2] + data[x + 3] > data[x] + data[x + 1] + data[x + 2]) {
        sol2 = sol2 + 1;
        x = x + 1;
    }
    else {
        x = x + 1;
    }
}

console.log(sol);
console.log(sol2);