console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 2);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*The reason is that an equality ckeck == and comarison > < >= 
<= work differently
comparisons convert null to a number, treating it as 0.
that's why (3)null >= 0 is true and (1) null is > false*/

//strick check ===

console.log("2" === 2); //this both are not same
