var weibo = new OAuth2('weibo', {
	client_id: '2527137239',
	client_secret: '12efc420a88a363c7711ceec22df3a26',
});

function authorize(providerName) {
	var provider = window[providerName];
	provider.authorize(checkAuthorized);
}

function clearAuthorized() {
	console.log('clear');
	['weibo'].forEach(function(providerName) {
	  var provider = window[providerName];
	  provider.clearAccessToken();
	});
	checkAuthorized();
}

function checkAuthorized() {
	console.log('checkAuthorized');
	['weibo'].forEach(function(providerName) {
	  var provider = window[providerName];
	  var button = document.querySelector('#' + providerName);
	  if (provider.hasAccessToken()) {
		button.classList.add('authorized');
	  } else {
		button.classList.remove('authorized');
	  }
	});
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button#weibo').addEventListener('click', function() { authorize('weibo'); });
  checkAuthorized();
});