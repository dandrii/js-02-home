let n = parseFloat(prompt(`Enter Number`));

// Loop

function fibLoop(n) {
    let prePrev = 1;
    let prev = 1;
    for (let i = 3; i <= n; i++) {
        let next = prePrev + prev;
        prePrev = prev;
        prev = next;
    }
    return prev;
}

document.write(`Number: ${fibLoop(n)}`);

// Array

function fibArray(n) {
    let fibo = [1, 1];
    for (let i = 3; i <= n; i++) {
        let next1 = fibo[fibo.length - 1] + fibo[fibo.length - 2];
        fibo.push(next1);
    }
    return fibo[n-1];
}
document.write(`<br>Number: ${fibArray(n)}`);

// Recursive

function fibRecursive(n) {
    if (n <= 1)
        return n;
    else {
        return fibRecursive(n - 1) + fibRecursive(n - 2);

    }
}
document.write(`<br>Number: ${fibRecursive(n)}`);
