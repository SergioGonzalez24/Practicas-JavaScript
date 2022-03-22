//Methods

function person(name,age) {
    //Object
    this.name = name;
    this.age = age;
    //Method
    this.changeName = function(name) {
        this.name = name;
    }
}

var person1 = new person("Juan",15);
console.log(person1.name,"tiene",person1.age);
person1.changeName("Diego");
console.log(person1.name,"tiene",person1.age);


function pet(name,age) {
    //Object
    this.name = name;
    this.age = age;
    this.yearOfBirth = bornYear; //objeto se crea con una funcion externa
    //Method
    this.changeName = function(name) {
        this.name = name;
    }
    function bornYear() { //funcion para crear objeto
        var actualYear = 2022
        return actualYear-this.age;
    }
}


var pet1 = new pet("cucho",2);
console.log(pet1.name,"tiene",pet1.age);
var año = pet1.yearOfBirth();
console.log(pet1.name,"nacio en",año);

//Otro Ejemplo
function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = orderPrint;
}

function orderPrint() {
    console.log(this.name+": "+this.number);
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);

a.print();
b.print();
