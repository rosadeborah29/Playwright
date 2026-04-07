let firstName = "Ravindran"
let lastName = "R"
let email = "ravi@testleaf.com"


// let infoRavindran = { // object
//     firstName: "Ravindran", //key : value structure
//     lastName: "R",
//     email: "ravi@testleaf.com",
//     mob:9890809
// }

// console.log(infoRavindran.mob);
// console.log(infoRavindran.firstName);
// console.log(infoRavindran.lastName);

// let empinfo = {
//   infoRavindran : { // object
//     firstName: "Ravindran", // key : value structure
//     lastName: "R",
//     email: "ravi@testleaf.com",
//     mob:9890809
// },

//  infoHari : { // object
//     firstName: "Hari", // key : value structure
//     lastName: "R",
//     email: "hari@testleaf.com",
//     mob:5677474
// }
// }

// console.log(empinfo.infoHari.firstName);
// console.log(empinfo.infoRavindran.firstName); // dot notation


let infoRavindran : { //object
"@first-Name":string, //key:value structure
lastName : string,
email:string,
mob:number
}={
 "@first-Name": "Ravindran", // key:value structure
    lastName: "R",
    email: "ravi@testleaf.com",
    mob:9890809
}

console.log(infoRavindran["@first-Name"]); // square bracket notation.
