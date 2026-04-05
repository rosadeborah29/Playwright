//any datatype
let x : any = "Success 200"
x = 123
x = true
/* when we use any datatype it is similar to JS */

//unknown datatype
function logData(data:unknown) { //here string explicit inference it will accept only string value 
                                //when we use any datatype it can take any datatype
    if (typeof data === "string") {
        console.log(x.toUpperCase());
    }
}
logData(123); /* unknown is similar to any but while using the value of variable we will confirm the datatype before manipulating or making changes to it */