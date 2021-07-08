function add(a, b){
    return `${a + b}`
}

function subtract(a, b){
    return `${a - b}`
}

function multiply(a, b){
    return `${a * b}`
}

function divide(a, b){
    return `${a / b}`
}

function increment(n){
    return `${++n}`
}
function decrement(n){
    return `${--n}`
}
function makeInt(n){
    return parseInt(n,10);
}
function preserveDecimal(n){
    return parseFloat(n)
}
console.log(add(1,1),subtract(3,1),multiply(2,4),divide(4,2),increment(6),decrement(9),makeInt('2'),preserveDecimal("80.123999"))