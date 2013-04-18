$(document).ready(function(){
	if(localStorage.isLogin){
		chrome.windows.getCurrent(function(win) {
			chrome.tabs.getSelected(win.id, actionClicked);
		});
	}else{
		showLoginForm();
	}
});

function actionClicked(tab) {
  document.getElementById("productDesc").value = tab.title;
};

function showLoginForm(){
	$("#div_addto").hide();
    $("#div_login").show();
};