// Variables: Used to run different code every time.

// Declaring Variables: let, var. const.

// let firstname = "Maria";
// firstname = "Jacky";

// let,var, and const:

// let nr1 = 12;
// var nr2 = 8;
// const PI = 3.141599;

// Var is globe scope and let is block scope.
// Var can be used anywhere and let only in that specific block of code. 
// Blocks of code always start with {}

const //is used for variables that only get a valuse assigned once.

const someConstant = 3;
someConstant = 4; // This would create an error because you cant change a const variable once it is set. 

Naming Variables:

camelCase // proper way to write out a name. 
FFC // Usually how a const variable is written 

Primitive Data Types:
String // used to store text value. Double, singe quotes or backticks "Hi There!"
// let language = "JavaScript";
// let message = `Let's learn ${language}`;
// console.log(message);     best way to use a back tick (also helps you avoid escaping characters)

Number  // integers. decimals. exponentials, octal, hexadecimal, and binary numbers
// Examples:
let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10; //decimal version would be 8
let hexNr = 0x3E8; //decimal version would be 1000
let binNr = 0b101; //decimal version would be 5

BigInt // limits of the number stata type are between 2^53-1 and -(2^53-1) You recognize them due to the "n" at the end. 
// Also can't be mixed with intNr 
Boolean // true and false 
Symbol // Makes sommething unique even if they are the same syntax. 
// Example
// let str1 = "JavaScript is fun!";
// let str2 = "JavaScript is fun!";
// console.log("These two strings are the same:", str1 === str2);    They are the same and they will output true 
// let sym1 = Symbol("JavaScript is fun!");
// let sym2 = Symbol("JavaScript is fun!");
// console.log("These two Symbols are the same:", sym1 === sym2);    They are the same but symbol will make them unique and output false 
undefined // if something is not assigned or the syntax is wrong it will be undefined. We shoudn't code with undefined though.
null // let empty = null; this is a empty or unknown value 

Working out the type of a variable:

typeof // a way to return the type of value. // also an operator, not a method so brackets are not required 
// Example:
testVariable = 1;
variableTypeTest1 = typeof testVariable; // notice the syntax
variableTypeTest2 = typeof(testVariable); // notice the syntax
// Great exmaple on page 53 of book

Converting data types:
let nr1 = 2;
let nr2 = "2";
console.log(nr1 * nr2); // this would throw an error if JS can't convert the "word" into a number

let nr1 = 2;
let nr2 = "2";
console.log(nr1 + nr2); // This would log "22"

There are 3 conversions: 
String() // takes any value and put "around it"
Number() // will convert things to a number, if it can't it will display NaN (not a number)
Boolean() // will convert things to true of false, except null, undefined and the number 0, emplty strong or NaN

// Examples:
let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr); //Would log 6 string

let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr); // would log 12 number

let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);// would log true boolean

let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr); // would log: null 0 number

let strToNr = "";
strToNr = Number(strToNr);
console.log("empty string", strToNr, typeof strToNr); // would log: emploty string 0 number 

let strToNr2 = "hello";
strToNr2 = Number(strToNr2);
console.log(strToNr2, typeof strToNr2); // would log Nan Number 

let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2); // would log : true boolean 

let strToBool = "";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool); // would log : false boolean 

Practice Exercise 2.1

let str1 = 'Laurence'; 
console.log(str1, typeof str1); // Laurence string
let str2 = "Svekis"; 
console.log(str2, typeof str2); // Svekis string
let val1 = undefined;
console.log(val1, typeof val1); // undefined 'undefine'
let val2 = null;
console.log(val2, typeof val2); // null 'object'
let myNum = 1000;
console.log(myNum, typeof myNum); // 1000 'number'

Page 57 Operators 