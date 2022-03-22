//Creacion de Objetos
var coche = {
    marca: "Honda", modelo: "CR-V",
    color: "Azul", año: "2019"
};

console.log(coche.marca);
console.log(coche.modelo);
console.log(coche.color);
console.log(coche.año);


//Funcion constructora
function person(name,age,gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var person1 = new person("Juan",15,"Male");
console.log(person1.name,"has",person1.age,"and is",person1.gender);


//Object Initialization

var Juan = {edad:15,genero:"Hombre",estatura:"1.70"};

var edadJuan = Juan.edad;

console.log(edadJuan);

