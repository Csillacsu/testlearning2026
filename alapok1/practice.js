//egysoros komment
/*több 
sosros komment
*/

/* alt+shift+a
val tuduunk kikommentelni
egy részletet */

/* console.log("Hello javascript");

let person = {
  firstName: "Elek",
  lastName: "Teszt",
  age: 38,
  job: "developer",
};

console.log(person);

let age;
console.log(age);

age = 25;
console.log(age);
let numberOfGalaxies = 4531533514354213213521351231231321231n;
console.log(numberOfGalaxies);

let stringToNum = "123";

console.log(stringToNum);
console.log(typeof stringToNum);
console.log(Number(stringToNum));
Number(stringToNum);
console.log(parseInt(stringToNum));
console.log(String(currentYear));
 */

/* let age = 35;
let age2 = 13;

age = age + age2;

age = age + 10;
console.log(age);

age += 15;
console.log(age);

//posztinkrementálás
let a = 0;
console.log(a++); //elsőnek kiíródik, majd hozzáadódik +1
let b = 0;
console.log(++b); //elsőnek növekszik, majd kiíródik
console.log(++a);

//template literal
const firstName = "John";
const lastName = "Conor";
const fullName = firstName + " " + lastName;
// console.log(`ide kerül be  a szöveg ${ide helyettesítődik be a JAva script kód} ide szintén szöveg kerül ${ide javascript kód kerül}`)
console.log(`${firstName} teljes neve: ${fullName}`);
console.log(`${firstName} teljes neve: ${firstName} ${lastName}`); */

/* let num1 = 10;
let num2 = 10;
let numb1str = "10"; */

// egy db egyenlőség jel az értékadást jelenti

// == összehasonlító operátor pl a num1 egynelő e num2vel? értéket néz csak
// === értéket és típust is néz, szigorúan egyenlő.

/* console.log(num1 == num2); //false
console.log(num1 == numb1str); //true
console.log(num1 === numb1str); //false

//felkiáltójel tagadást jelent
console.log(!true); //false

if (num1 !== num2) {
  console.log(true);
} else {
  console.log(false);
}

if (feltétel1 || feltétel2 || feltétel3) {
    ha igaz a feltétel1
} else if {
    ha igaz a feltétel2
} else {
    ha igaz az összes többi eshetőség jelen esetben a feltétel3
} */

let num1 = 10;
let num2 = 10;
let num3 = "15";

if (num1 + num2 === num3 || num3 - 5 === num2) {
  console.log("Az első feltétel igaz");
} else if (num1 - num2 !== num3) {
  console.log("A második feltétel igaz");
} else {
  console.log("a harmadik feltétel igaz");
}
