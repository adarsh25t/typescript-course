
// union type ( | ) add multiple types

let valu: string | number;

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2
  }
  else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

let combineNumber = combine(10,40);
console.log(combineNumber);

let combineString = combine("hello","man")
console.log(combineString);


//   LITERAL TYPE  ( set one vlaue, that value never change)
const type: string =  "hello"

// type aliases
type Combineable = number | string;
type resultText = "success" | "fail";
type User = { name: string; age: number };

function combines(input1: Combineable, input2: Combineable,result: resultText) {
}
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}