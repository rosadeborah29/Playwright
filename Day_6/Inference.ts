//Difference between JavaScript and TypeScript:
// TypeScript (TS): (Static typing)
// let username1: string = "Ravi#1234"  // string datatype
// // username1 = 123   ❌ number not allowed
// // username1 = true  ❌ boolean not allowed

// TS is statically typed.
// let username1 = "demosalesmanager"
// This feature of TS is called implicit inference.
// let username1: string = "demosalesmanager"
// This is called explicit inference.

function add(x:number,y:number):number {
    let c = x+y
    return c
}
console.log(add(10,20))


// // JavaScript (JS): (Dynamic typing)
// // let username = "demosalesmanager"  // string datatype
// // username = 123                     // number datatype
// // username = true                    // boolean
// function addition(a,b) {
//     let c = a,b
//     console.log(c);
// }
// addition(10,20)

//Note:
//To execute ts file ---- tsc .\filename
//To execute js file ---- node .\filename