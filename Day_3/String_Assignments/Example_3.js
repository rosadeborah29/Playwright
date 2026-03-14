//Example 3
function isAnagram(a,b) {
    if(a.length != b.length){
        return false;
    }
    for(let i = 0; i < a.length; i++){
        if(!b.includes(a[i])){
            return false;
        }
    }

    return true;
}
console.log(isAnagram("listen","silent"))
console.log(isAnagram("hello","world"))