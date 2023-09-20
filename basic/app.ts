console.log('Your code goes hello here... ');

/* string, number,boolean */
let names: string;
names = "hello";

let age: number = 30;
let isTrue: boolean = false;
let price: any = 30
price = "hello"

console.log(names,age,isTrue,price);


/* array */
// only add number
let number: number[] = [12,55,333,45343];

// add only the string
let arr2: string[] = ["hin", "afsfsadfsfd", "fjjkdd"];

/* object */
let person: {
    name: string,
    age: number
} = {
    name: "heloi",
    age: 31
}
console.log(person);

const product: {
    id: string;
    price: number;
    tags: string[];
    details: {
      title: string;
      description: string;
    }
} = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  }


/* tuples */

// this array have only 4 values with we already asign the values
let arr1: [number,string,boolean,string] = [3,"new",true,"hii"];


/* enums */

// default value start 0
// if you need to change any vlaues
enum Role  { ADMIN,USER,CUSTOMER };
enum persons { new = "he", old = "she", then = 1}

if (Role.ADMIN === 0) {
    console.log("admin login");
}