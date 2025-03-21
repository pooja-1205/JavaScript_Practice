// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // bind aaray and convert it int string type o/p => 0,1,2,3,4,5

// console.log(myArr);
// console.log( newArr);

// slice, splice diffrence most imp

console.log("A ", myArr); //o/p => [0,1,2,3,4,5]

const myn1 = myArr.slice(1, 3); //return section of array

console.log(myn1); // o/p => [1, 2]
console.log("B ", myArr); // o/p => [0,1,2,3,4,5]

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr); // o/p => [0, 4, 5] orignal array mese splice array removed he
console.log(myn2); // o/p => [1, 2, 3]
