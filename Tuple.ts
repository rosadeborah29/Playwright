function throwError(message: string): never {
    throw new Error(message);
}

function checkNumber(num: number) { // Named function
    if (num > 0) {
        console.log("Positive number");
    } else {
        throwError("Number must be positive");
    }
}
// checkNumber(5);
checkNumber(-1);


//tuple
let data:string = "" // single primitive datatype
let user:[string,number,boolean] = ["Testleaf",123,true] // non primitive datatype

/* Note :
index0 => string => "Testleaf"
index1 => number => 20
index2 => boolean => true
*/