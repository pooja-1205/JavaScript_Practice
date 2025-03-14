// Primitive datatype or refrence type datatype
// call by value changes on copy
// 7 type : String, Number, Boolean, null, Undefoned, Symbol, BigInt(syntific value)

const scrore = 100;
const scoreVale = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);
const bigNumber = 24512665258455445n;

//Non Prmitive datatype or Refrence type
// type : Array, object, function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "Pooja",
  age: 22,
};

myFunction = function () {
  console.log("Hello world");
};
console.log(typeof bigNumber);
console.log(typeof outsideTemp);

// master objects , bowsore events
//javascript is statically type or dynaically type "search"
//TypeScript searching
