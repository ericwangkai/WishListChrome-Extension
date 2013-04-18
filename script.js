/*
chrome.windows.getCurrent(function(win) {
    chrome.tabs.getSelected(win.id, actionClicked);
});

function actionClicked(tab) {
  document.getElementById("productDesc").value = tab.title;
};


var redirect = chrome.extension.getURL('oauth2/oauth2.html');
window.location = redirect + params;
*/

$(function () {
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
			  console.log(JSON.stringify(data));
			  alert(data.userId);
			  chrome.storage.sync.set({'WISH_LIST_USERID': data.userId});
		}).fail(function( jqxhr, textStatus, error ) {
			  var err = textStatus + ', ' + error;
			  alert( "Request Failed: " + err);
		});
	});
	
});


