// there is two type of memory
// Stack and Heap
// in all primitive type use Stack
// in all Non - Primitive type use Heap
// stack me variable declation kiya he uski har bar ek copy milti he
// heap me jo bhi value define(variable/obj) hoti he vo orignal
// value me change hoke refrence milta he na ki copy

let myname = "pooja"; // primitive
let anothername = myname;
anothername = "janvi";
console.log(myname);
console.log(anothername);

let userOne = {
  email: "user1@co.com",
  upi: "user1@ybl",
};

let userTwo = userOne;
userTwo.email = "pooja@google.com";

console.log(userOne.email);
console.log(userTwo.email);
