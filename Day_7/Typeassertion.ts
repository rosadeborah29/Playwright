// 2 types of type assertion : as keyword and <> angular bracket
let response : any ="Success"
//let myResponse = <string> response  // angular bracket type assertion

let myResponse = response as string  // as keyword type assertion
console.log(myResponse.toUpperCase());
