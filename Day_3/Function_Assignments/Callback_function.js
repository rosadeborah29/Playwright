function getUserData(callback){
    setTimeout(function(){
        callback();
    },3000);
}

function message(){
    console.log("Call Back Function");
}

getUserData(message);