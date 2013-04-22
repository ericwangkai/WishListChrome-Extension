WEB_ROOT_URL = "http://meteor.ericwangkai.c9.io";

function actionClicked(tab) {
  document.getElementById("productDesc").value = tab.title;
};

function showLoginForm(){
	$("#div_addto").hide();
    $("#div_login").show();
};

function showAddToForm(){
	$("#div_login").hide();
	$("#div_addto").show();
	$("#p_welcome").append(localStorage.WISH_LIST_USEREMAIL);
	chrome.windows.getCurrent(function(win) {
			chrome.tabs.getSelected(win.id, actionClicked);
	});
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
	if(localStorage.isLogin == "true"){
		showAddToForm();
	}else{
		showLoginForm();
	}
	
	$("#LoginForm").submit(function(event) {
	
		event.preventDefault();
		
		var email = $("#inputEmail").val();
		var password = $("#inputPassword").val();
		var url = WEB_ROOT_URL + "/login";
		var request = $.ajax({
			type: "POST",
			dataType: "json",
			url: url,
			data: { email: email, password: password }
		}).done(function( data ) {
			  onLoginSuccessfully(email, data);
		}).fail(function( jqxhr, textStatus, error ) {
			  onLoginFail();
		});
	});
	
	$("#addToForm").submit(function(event){
		
		event.preventDefault();
		
		var productDesc = $("#productDesc").val();
		var productPrice = $("#productPrice").val();
		var userId = localStorage.WISH_LIST_USERID;
		var url = WEB_ROOT_URL + "/addToWishlist"
		
		
		var request = $.ajax({
			type: "POST",
			dataType: "json",
			url: url,
			data: { productDesc: productDesc, productPrice: productPrice, userId: userId }
		}).done(function( data ) {
			  onAddToSuccess();
		}).fail(function( jqxhr, textStatus, error ) {
			  onAddToFail();
		});
		
	});
	
	$("#aClearToken").click(function(){
		clearToken();
	});
});

function onAddToSuccess(){
	alert(success);
	//window.close();
};

function onAddToFail(){
	alert(Fail);
};


