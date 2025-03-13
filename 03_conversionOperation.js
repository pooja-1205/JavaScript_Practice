let score = 33;
let scope = "33abd"; //its also be type number
console.log(typeof score);
console.log(typeof score);
console.log(typeof scope);
console.log(typeof scope);

let valuInNumber1 = Number(scope);
console.log(typeof valuInNumber1);
console.log(valuInNumber1); //NaN

let abc = null;
let valuInNumber2 = Number(abc);
console.log(typeof valuInNumber2);
console.log(valuInNumber2); //0

let abc1 = undefined;
let valuInNumber3 = Number(abc1);
console.log(typeof valuInNumber3);
console.log(valuInNumber3); //NaN

//for boolian valu true it give 1
// for string cant be convert int number then it gives NaN

// "33" => 33
// "33abc" => NaN (not a number)
// true => 1; false => 0
// 1 => true; 0 => false

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
// " " => true
// "" => false
// "pooja" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
// 33 => 33 string
