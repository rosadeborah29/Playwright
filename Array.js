/* arrays is in js while tuple is for ts */
/* array in js
    1. Dynamic in size 
        - Arrays in js grows and shinks in size as elements are added
    2. Heterogenous in nature 
        - Arrays in js can store different kind of datatypes like numbers, strings, boolean...*/

//1. push - add elements to the end of the array
let letters = ["a","b","c","e",true]
letters.push("f","g","h")
console.log(letters);
/* ['a','b','c',
    'd','e','f',
    'g','h'
   ]*/

//2. pop() - remove from the first element of the array
letters.pop();
console.log(letters);
/* ['a','b','c',
    'd','e','f',
    'g'
   ]*/

//3. shift() - remove the first element
letters.shift();
console.log(letters);
/* ['b','c',
    'd','e','f',
    'g'
   ]*/

//4. unshift()
letters.unshift("x","y","z")
console.log(letters);   
/*['x',  'y', 'z',
  'b',  'c', 'e',
   true, 'f', 'g'
  ]*/

//5. slice() - extracts a section of an array without modifying the original
let letters1 = ["a","b","c","d","e"];
              //[0,1,2,3,4]
let result = letters1.slice(1,4);
console.log(result);

//6. splice() - add and remove elements inside an existing array
letters1.splice(1,3,"x","y","z"); 
console.log(letters1); // ["a","b","c","d","e"] = [ 'a', 'x', 'y', 'z', 'e' ] => spliced array

let num = [1,2,3,4,5]; //[0,1,2,3,4]
num.splice(1,3,"a","b","c")
console.log(num); // [ 1, 'a', 'b', 'c', 5 ]

//7. concat() - join arrays // old method
let number1 = [1,2,3,4];
let number2 = [5,6,7,8];
let concatArray = number1.concat(number2);
console.log(concatArray);
// /* [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ] */

//8. spreadoperator - join arrays // modern JS
let spreadSyntaxArray = [...number1,...number2];
console.log(spreadSyntaxArray);
/* [
  1, 2, 3, 4,
  5, 6, 7, 8
] */

//9. sort()
let numberArray = [10, 8, 9, 7];
numberArray.sort();
console.log(numberArray); //[ 10, 7, 8, 9 ]

numberArray.sort((a,b)=>a-b);
console.log(numberArray); // [ 7, 8, 9, 10 ] => ascending order

numberArray.sort((a,b)=>b-a)
console.log(numberArray); // descending order


//filter method :
let even = numberArray.filter((num)=>num%2===0 );
console.log(even);
(num)=>num%2===0 
//Step1  Internally => num=10%2=0 ; even=10
//Step2  Internally => num=7%2=1 ; 
//Step3  Internally => num=8%2=0 ; even=8
//Step4  Internally => num=9%2=1 ; 
//even =[10,8]

//map method :
let squared = numberArray.map((num)=>num*num);
console.log(squared);