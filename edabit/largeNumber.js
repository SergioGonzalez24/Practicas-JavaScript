/*
Author: Sergio Gonzalez
Date: 280323
Description: Your function will be passed two functions, f and g, that don't take any parameters. 
Your function has to call them, and return a string which indicates which function returned the larger number.
*/

function whichIsLarger(f, g) {
    if (f() > g()) {
        return "f";
    } else if (f() < g()) {
        return "g";
    } else {
        return "neither";
    }
}

console.log(whichIsLarger(() => 5, () => 10));