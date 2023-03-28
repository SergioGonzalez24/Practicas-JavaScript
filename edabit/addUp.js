/*
Author: Sergio Gonzalez
Date: 280323
Description: Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function
*/

function addUp(num) {
    let res = 0;
    for (var i = 0; i <= num; i++) {
      var res = i + res;
      
    }
    return res;
  }
  
  
console.log(addUp(4));