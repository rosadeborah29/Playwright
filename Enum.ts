//string enum
enum urlConstants { // hotel menu card in layman terms were it stays constant and can be used while choosing the environment url
qa="www.qa.com",
prod="www.prod.com"
}
function loadUrl(url:urlConstants){
    console.log(url);    
}
loadUrl(urlConstants.qa)

/*************************************************************************************************** */

//numeric enum is the default enum
enum TestResults {
   Pass,
   Fail,
   Skip
}
function logTestResult(status:TestResults){
    console.log(`Current status of browser ${status}`);
}
logTestResult(TestResults.Pass) // O/P: 0
logTestResult(TestResults.Fail) // O/P: 1
logTestResult(TestResults.Skip) // O/P: 2

/*************************************************************************************************** */

//heterogenous enum is by default (Combination of both string and numeric)
enum BrowserStatus {
    Open,
    Close,
    Incognito="Incognito Mode",
    crash=10,
    loading
}
function reportBrowserStatus(status:BrowserStatus){
    console.log(`Current status of browser ${status}`);
}
reportBrowserStatus(BrowserStatus.Incognito)
reportBrowserStatus(BrowserStatus.crash)
reportBrowserStatus(BrowserStatus.loading)