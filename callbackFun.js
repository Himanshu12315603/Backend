function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

// normal function
function sumeOfSquare(a, b) {
    let var1 = square(a);
    let var2 = square(b);
    return var1 + var2;
}

//call back function
function sumOfSomthing(a, b, fn) {
    let var1 = fn(a);
    let var2 = fn(b);
    return var1 + var2;
}

//let ans = sumeOfSquare(2, 4);

//callback fun
let ans1 = sumOfSomthing(2, 4, square);
let ans2 = sumOfSomthing(2, 4, cube);
console.log(ans1);
console.log(ans2);
