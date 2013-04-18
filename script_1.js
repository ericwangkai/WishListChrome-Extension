$(function() {
  $("#btnLogin").click(function () {
	 var API_ENDPOINT  = "http://meteor.ericwangkai.c9.io/login";
		var xhr = new XMLHttpRequest();
		
		var email = $("#inputEmail").val();
		var password = $("#inputPassword").val();
		var form_data = {"email": email, "password": password};

		xhr.onload = function(e) {
		  // note: this === xhr
		  switch (this.status) {
			case 200: // CREATED
			  console.log(this.responseText);
			  break;

			default: // Something Went Wrong!
			  console.log(this.status);;
			  break;
		  }
		};

		xhr.open("POST", API_ENDPOINT, true);
		xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
		xhr.send(JSON.stringify(form_data));
	  });
});