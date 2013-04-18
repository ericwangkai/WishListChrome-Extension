function isLogined(){
	if(chrome.storage.sync.get('WISH_LIST_USERID')){
		return true;
	}else{
		return false;
	}
};

function router(){
	if(isLogined){
		directToLoginPage();
	}else{
		directToAddToWishListPage();
	}
};

function directToLoginPage(){
	chrome.browserAction.setPopup({'popup':'./login.html'});
};

function directToAddToWishListPage(){
	chrome.browserAction.setPopup({'popup':'./Popup.html'});
};

chrome.browserAction.onClicked.addListener(function(tab) { 
	alert('icon clicked');
	router();
});