const name = "Sakshi";
const repoCount = 50;
//console.log(name + repoCount + " Value"); //not recomonded to write
//console.log('"Hellow my name is ${name} and may repio count is ${repoCount}"');

// string is working as object like key value paire
const gameName = new String("Hi miss POOJA");
// console.log(gameName);   //op => [String: 'Hi'] [Prototype: primitiveValue ]

console.log(gameName[0]); // acess key value paire
console.log(gameName.__proto__); // op => {} ..Prototype acces

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf("t"));
console.log(gameName.indexOf("p"));
console.log(gameName.indexOf("O"));

const newString = gameName.substring(0, 5); // last vale is not including
console.log(newString);

const anotherString = "hitesh-hc";
const abc = anotherString.slice(-8, 4);
console.log(abc);

const newStringOne = "     POOJA   ";
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%2choudhary";
console.log(url.replace("%2", "-"));
console.log(url.includes("hitesh"));

console.log(anotherString.split("-"));
