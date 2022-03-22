function name() {
    console.log("Holamundo");

}

name();

function name2(human_name) {
    console.log("hola",human_name);
}

name2("Juan");

function nameAge(human_name,age) {
    console.log(human_name,"tiene",age);
}

nameAge("Juan",13);

function intSum(num1,num2) {
    return num1 + num2;
}

var res = intSum(1,2);
console.log(res);