// // Coding challange #2(working with arrays)

// const juliaDogs = [5, 2, 4, 1, 15, 8, 3];
// const kateDogs = [16, 6, 10, 5, 6, 1, 4];

// const calcAge = function (yash) {
//   let insanaYashi = yash.map((yash) => (yash <= 2 ? 2 * yash : 16 + yash * 4));
//   let yash18 = insanaYashi.filter((yash) => yash >= 18);
//   let ortalama = yash18.reduce((acc, yash) => acc + yash, 0) / yash18.length;
//   return ortalama;
// };

// const ortalamaKate = calcAge([5, 2, 4, 1, 15, 8, 3]);
// const ortalamaJulia = calcAge([16, 6, 10, 5, 6, 1, 4]);

// // Coding challange #3(working with arrays)

// const calcAge1 = (yash) =>
//   yash
//     .map((yash) => (yash <= 2 ? 2 * yash : 16 + yash * 4))
//     .filter((yash) => yash >= 18)
//     .reduce((acc, yash, i, arr) => acc + yash, 0) / arr.length;

// const ortalamaKate2 = calcAge([5, 2, 4, 1, 15, 8, 3]);
// const ortalamaJulia1 = calcAge([16, 6, 10, 5, 6, 1, 4]);

// console.log(ortalamaJulia1);
// console.log(ortalamaKate2);

// // Coding challange #4(working with arrays)

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// // Task 1 recomendation weight
// dogs.forEach((it) => (it.recom = Math.trunc(it.weight ** 0.75 * 28)));
// console.log(dogs);

// // Task 2 Sarah's dog
// const sarah = dogs.find((it) => it.owners.includes("Sarah"));
// console.log(sarah);
// console.log(
//   `Sobaka Sarah kushaet  ${sarah.curFood > sarah.recom ? "mnogo" : "malo"}`
// );

// // 3 All owners of dogs who eat too much

// const coxYeyenler = dogs
//   .filter((it) => it.curFood > it.recom)
//   .flatMap((it) => it.owners);
// console.log(coxYeyenler);

// const azYeyenler = dogs
//   .filter((it) => it.curFood < it.recom)
//   .flatMap((it) => it.owners);
// console.log(azYeyenler);

// // 4 String
// console.log(`${coxYeyenler.join(" and ")} itleri daha cox yeyir`);
// console.log(`${azYeyenler.join(" and ")} itleri daha az yeyir`);

// // 5 =
// console.log(dogs.some((it) => it.curFood === it.recom));

// // 6 OKAY amount
// console.log(
//   dogs.some((it) => it.curFood > it.recom * 0.9 && it.curFood < it.recom * 1.1)
// );

// const okayOlanlar = (it) =>
//   it.curFood > it.recom * 0.9 && it.curFood < it.recom * 1.1;
// // 7 How many

// console.log(dogs.filter(okayOlanlar));

// // 8 Copy of recomended

// const dogsCopy = dogs.slice().sort((a, b) => a.recom - b.recom);
// console.log(dogsCopy);

// Coding challenge #1 OOP

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// Car.prototype.break = function () {
//   this.speed += 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// const bmw = new Car("BMW", 120);
// const merc = new Car("Merc", 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.break();
// bmw.accelerate();

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2021 - this.birthYear);
//   }
// }

// const jessica = new PersonCl("Jessica", 1997);
// console.log(jessica);
// jessica.calcAge();
// console.log();

// Coding challenge #2/ OOP

// class CarF {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed += 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   get speedUs() {
//     return this.speed / 1.6;
//   }
//   set speedUs(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarF("Ford", 120);
// console.log(ford.speedUs);
// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// ford.speedUs = 50;
// console.log(ford);

// // Coding challenge #3 OOP
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// Car.prototype.break = function () {
//   this.speed += 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };
// const tesla = new EV("Tesla", 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.break();
// tesla.accelerate();
