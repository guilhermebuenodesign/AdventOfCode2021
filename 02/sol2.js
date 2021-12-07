const fs = require('fs');

let data = fs.readFileSync('input.txt', 'utf-8');

data = data.trim().split("\n");

data = data.map((line) => line.match(/(\w+) (\d+)/).slice(1));
data = data.map(([a, b]) => [a, Number(b)])

let depth = 0;
let forward = 0;
let aim = 0;

for (i = 0; i <= data.length - 1; i++) {
    const expr = data[i][0];
    switch (expr) {
        case 'forward':
            forward = forward + data[i][1];
            depth = depth + (data[i][1] * aim);
            break;
        case 'down':
            aim = aim + data[i][1];
            break;
        case 'up':
            aim = aim - data[i][1];
            break;
        default:
            console.log('Error in switch');
    }
}

console.log('depth =', depth);
console.log('forward =', forward);
console.log('Final horizontal position multiplied by depth =', depth * forward);