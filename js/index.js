let n1 = parseFloat(prompt(`Enter Number first version`));
let n2 = parseFloat(prompt(`Enter Number second version`));
let n3 = parseFloat(prompt(`Enter Number third version`));

// Cycle

let prePrev = 1;
let prev = 1;

for (let i = 3; i <= n1; i++) {
    let next = prePrev + prev;
    prePrev = prev;
    prev = next;
}

document.write(`Number: ${prev}`);

// Array

let fibo = [1, 1];
let next1;

for (let i = 3; i <= n2; i++) {
    let next1 = fibo[fibo.length - 1] + fibo[fibo.length - 2];
    fibo.push(next1);
}
document.write(`<br>Number: ${fibo[n2-1]}`);


// Recursive

function fibo1(n3) {
    if (n3 <= 1)
        return n3;
    else {
        return fibo1(n3 - 1) + fibo1(n3 - 2);
    }
}
document.write(`<br>Number: ${fibo1(n3)}`);
