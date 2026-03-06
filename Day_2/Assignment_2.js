let browserName = "chrome";
function launchBrowser(browserName){
    if(browserName === "chrome"){
        console.log("Launching Chrome Browser");
    }
    else{
        console.log("Launching Other Browser");
    }
}

launchBrowser(browserName);