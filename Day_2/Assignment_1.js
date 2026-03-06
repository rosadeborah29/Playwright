let num = 5;
function checkNumber(num){
if (num>0){
    return "Positive";
} else if (num<0){
    return "Negative";
}
else {
    return "zero";
}
}
console.log(checkNumber(num));