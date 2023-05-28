import React from "react";
import "./App.css";

let name: string;
name = "Alex";
let a: number = 2;
let hobbies: string[]; //dfining array of string
let numbers: number[]; //defining array of numbers
numbers = [3, 4, 2];
hobbies = ["drawing", "reading"];

let role: [number, string];
/* In TypeScript, a tuple is a data structure that allows you to store a fixed number of values of different types. */

// role=['g',3];
role = [4, "Wrek"];

// let person: Object; //This is not a recommended way to define Object in typeScript as an object can have a lot of properties in it.
// // 'type' or an 'interface' keyword is used to specify the type of the properties in an object.
// person = { name: "Devika", age: 25 };

type Person = {
  name: string;
  age?: number; //made age as an optional property using '?' .
};
let person: Person;
person = { name: "Devika" };

let lotsOfPeople: Person[]; //lotsofPeople is an array of type person object.

let age: string | number | Array<number>;
let k: string | number | string[];
// age have Union Type so that it can be string , number or array of string.
age = [25];
k = ["Devika V", "Adarsh"]; 

let printName: (name: string) => void; //the function printName() returns a void means it does not return a value.
/*When a function has a return type of void, it means that the function does not return any value, and therefore 
cannot be used in an expression. For example, you cannot assign the result of a void function to a variable*/

// function printName(name:string) {
//   console.log(name);
// }
let b = null;
if (b) {
  console.log("b"); // it will not log any value as b is null type
}

// type X = {
//   name: string;
//   age: number;
// };
// type Y = X & {
//   a: string;
//   b: string;
// };

// let y: Y = {
//   name: "devika",
//   age: 21,
//   a: "she",
//   b:'57'
// };

interface Guy extends Person {
  profession: string;
}
let guy: Guy = {
  profession: "jhgj",
  name: "Adarsh",
};


// class name extends Person{

// }  //we give type to the classes using interfaces

function AppEx() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {a} {role}
        </h1>
        Hello {name} What doin!!!!!! {numbers} {hobbies[0]}
      </header>
      {/* <h1>{person}</h1> */}
    </div>
  );
}

export default AppEx;
