/*
Author: Sergio Gonzalez
Date: 280323
Description:
*/

const prompt = require("prompt-sync")();


function juguetesDiversion(n) {
    const valorDiversion = [];
    for (let i = 0; i < n; i++) {
        let diversion = prompt();
        valorDiversion.push(parseInt(diversion));
    }
    let sum = valorDiversion.reduce((a, b) => a + b);
    var min = Math.min(...valorDiversion);
    return sum - min;
}

let juguetes = prompt();
console.log(juguetesDiversion(juguetes));