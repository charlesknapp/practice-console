//////////////////////////////////////////////////////////////////////////////////////// - [ PRINTING TO THE HTML PAGE ]

(function () {
    if (!console) {
        console = {};
    }
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();

//disable right-click
document.addEventListener('contextmenu', event => event.preventDefault());

console.log('All of your logged console information is placed here! Woohoo!')

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////// ADVENTURE GAME

// const adventurer = {
//     name: "Charles",
//     hitpoints: 10,
//     inventory: ['Iron Sword','Health Potion','Bronze Chestplate'],
//     companion: {
//         name: "Rouge",
//         type: "Animal",
//         petCompanion: {
//             name: "Olfo",
//             type: "Spectral",
//             petInventory: ['Gray Collar',' Dog Bowl',' Super Food']
//         }
//     }
// }

// //iterating through the adventurer object keys
// for(i = 0; i < adventurer.inventory.length; i++) {
//     console.log(adventurer.inventory[i])

// }
// //displaying the companion
// console.log('Companion: ' + adventurer.companion.name)
// console.log('Companion Type: ' + adventurer.companion.type)

// //
// console.log('Pet Companion: ' + adventurer.companion.petCompanion.name)
// console.log('Pet Companion Type: ' + adventurer.companion.petCompanion.type)

// console.log('Pets Inventory: ' + adventurer.companion.petCompanion.petInventory)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////// ANOTHER PRACTICE

// const foo = {
//     someArray: [1, 2, 3],
//     someObject: {
//         someProperty: 'Property'
//     },
//     someMethod: () => {
//         console.log('Inside the method');
//     }
// }

// console.log(foo.someObject.someProperty); //Property
// console.log(foo.someArray) //Array output
// //console.log(foo.someMethod())

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////// CREATING A PLAYER AND ENEMY

// const player = {
//     name: 'Charles',
//     health: 1000,
//     power: 1000,
//     stamina: 1000
// }

// const player2 = {
//     name: 'Dylan The Cheater',
//     health: 10000,
//     power: 100000,
//     stamina: 25000
// }

// const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newEnemy = {
//         name: nameIs,
//         health: healthIs,
//         power: powerIs,
//         stamina: staminaIs
//     }
//     return newEnemy;
// }
// const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newPlayer = {
//         name: nameIs,
//         health: healthIs,
//         power: powerIs,
//         stamina: staminaIs
//     }
//     return newPlayer;
// }

// class Character {
//     //constructor
//     constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) {
//         this.legs = 2;
//         this.arms = 2;

//         this.name = name;
//         this.age = age;
//         this.eyes = eyes;
//         this.hair = hair;
//         this.lovesDogs = lovesDogs;
//         this.lovesCats = lovesCats;
//     }
//     //setter methods
//     setName (playerName) {
//         this.name = playerName;
//     }
//     setHair (haircolor) {
//         this.hair = haircolor;
//     }
//     setAge (newPlayerAge) {
//         this.age = newPlayerAge;
//     }
//     setEyes (eyecolor) {
//         this.eyes = eyecolor;
//     }

// ////
//     greet(otherCharacter) {
//         console.log('Welcome ' + otherCharacter + '!')
//     }
//     smite() {
//         console.log('I smite thee you vile person')
//     }
// }
// class Hobbit extends Character {
//     greet(otherCharacter) {
//         console.log(`Mr. Baggins says hello, ${otherCharacter}`)
//     }
//     steal() {
//         console.log('Character vanishes and restores health')
//     }
//     smite() {
//         super.smite();
//         this.steal();
//     }
// }

// const p1 = new Character("Charles", 23, "Blue", "Brown", true, true); //charles character
// const e1 = new Character(); //enemy character

// //console.log(p1)
// const frodo = new Hobbit('Mr Baggins', 33, 'Blue', 'brown')
// console.log(frodo);
// console.log(frodo.greet("Charles"))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////// CREATING A MAKESHIFT CAR FACTORY

// class Car {
//     constructor(maker, serialNumber) {
//         this.maker = maker;
//         this.serialNumber = serialNumber;
//     }
//     drive() {
//         console.log('vroom vroom');
//     }
// }

// const newCar = new Car('Nissan', '1991990023')
// //console.log(newCar);

// class Factory {
//     constructor (company) {
//         this.company = company;
//         this.cars = [];
//     }
//     generateCar() {
//         const newCar = new Car(this.company, this.cars.length);
//         this.cars.push(newCar);
//     }
//     findCar (index) {
//         return this.cars[index];
//     }
// }

// ////

// const tesla = new Factory('Tesla');
// tesla.generateCar();
// tesla.generateCar();
// tesla.generateCar();
// console.log(tesla);
// console.log(tesla.findCar(0));

// const porche = new Factory('Porche');
// porche.generateCar();
// porche.generateCar();
// porche.generateCar();
// console.log(porche);
// console.log(porche.findCar(0));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////