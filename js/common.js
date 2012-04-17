window.onload = function(){
    var element = document.createElement('script');
    element.src = document.location.protocol + '//connect.facebook.net/ja_JP/all.js';
    document.getElementById('fb-root').appendChild(element);
}
window.fbAsyncInit = function(){
    alert('aaa');
	    FB.init({
		appId  : '369631213078675',
		status : true, // check login status
		cookie : true, // enable cookies to allow the server to access the session
		xfbml  : true  // parse XFBML
	    });
}
