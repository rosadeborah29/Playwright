//Type alias : Union and Intersection
let username : string | number | boolean
username = "rosadeborah@gmail.com"
username = 290821
username = true

//type alias for datatypes
type inputType = string| number // inputType is a userdefined datatype that can handle both string and number
let username1 : inputType  = "ravi@testleaf.com"
username1 = 8908090

//type Alias for value
type supportedBrowser ="Chrome" | "firefox" | "edge"
function invokeBrowser(browserName:supportedBrowser){
if(browserName==="Chrome"){
    console.log("Launch Chrome Browser");
}else{
    console.log("Stop Execution");    
}
}
invokeBrowser("Chrome")

/* ******************************* */

/* Type alias using intersection */
type Admin = {
    adminName : string,
    privileges : [string]
}

type Employee = {
    name:string,
    empId:number,
    date:string
}

type QA = Admin | Employee
const QAProfile : QA ={
    adminName:"Testleaf",
    privileges:["Server"],
    empId:14123,
    name:"Ravindran",
    date:"21/03/26"
}