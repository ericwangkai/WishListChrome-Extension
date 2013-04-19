function actionClicked(tab) {
  document.getElementById("productDesc").value = tab.title;
};

function showLoginForm(){
	$("#div_addto").hide();
    $("#div_login").show();
};

function showAddToForm(){
	$("#p_welcome").append(localStorage.WISH_LIST_USEREMAIL);
	$("#div_addto").show();
    $("#div_login").hide();
};

function onLoginSuccessfully(userEmail, data){
	showAddToForm();
	localStorage.WISH_LIST_USEREMAIL = userEmail;
	localStorage.WISH_LIST_USERID = data.userId;
	localStorage.isLogin = true;
	
	//chrome.storage.sync.set({'WISH_LIST_USERID': data.userId});
};

function onLoginFail(){
	$("#pLoginErrorMessage").append("µÇÂ¼Ê§°Ü,");
};

function clearToken(){
	localStorage.WISH_LIST_USEREMAIL = "";
	localStorage.WISH_LIST_USERID = "";
	localStorage.isLogin = false;
	showLoginForm();
};

$(function () {
	if(localStorage.isLogin === true){
		showAddToForm();
		chrome.windows.getCurrent(function(win) {
			chrome.tabs.getSelected(win.id, actionClicked);
		});
	}else{
		showLoginForm();
	}
	
	$("#LoginForm").submit(function(event) {
	
		event.preventDefault();
		
		var email = $("#inputEmail").val();
		var password = $("#inputPassword").val();
		
		var request = $.ajax({
			type: "POST",
			dataType: "json",
			url: "http://meteor.ericwangkai.c9.io/login",
			data: { email: email, password: password }
		}).done(function( data ) {
			  onLoginSuccessfully(email, data);
		}).fail(function( jqxhr, textStatus, error ) {
			  onLoginFail();
		});
	});
	
	$("#aClearToken").click(function(){
		clearToken();
	});
});



