/*chrome.tabs.getCurrent(function(tab){
	//document.getElementById("productDesc").value = tab.title;
	//console.log(tab.title); 
	console.log(tab); 
});
*/

chrome.windows.getCurrent(function(win) {
    chrome.tabs.getSelected(win.id, actionClicked);
});

function actionClicked(tab) {
  document.getElementById("productDesc").value = tab.title;
}

/*
var redirect = chrome.extension.getURL('oauth2/oauth2.html');
window.location = redirect + params;
*/

