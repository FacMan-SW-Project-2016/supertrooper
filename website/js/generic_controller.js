// This function returns the value of the cookie named after the parameter
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	// If the cookie does not exist, it returns an empty string
	return "";
}

//This function check's whether or not the user is allowed to enter this website.
//If not, the user gets alterted and forwarded to the login site.
//If the user it authenticated, he will be welcomed with a short greeting that he/she can disable.
function checkCookie() {
	var user = getCookie("username");
	if (user != "") {
		$('#info_container').html(
				'<i class="close icon"></i>Willkommen zurück, ' + user + '.');
		// Fill the #whoami div with content
		$('#whoami').html('Sie sind angemeldet als ' + user);
	} else {
		window
				.alert('Bitte loggen Sie sich ein, bevor Sie diese Seite aufrufen.');
		window.location.href = '/login.html';
	}
}

// checks the authorization for the admin content
function checkPathAuthorization() {
	var pathname = window.location.pathname; // Returns path only
	var role = this.getCookie("role");

	//if current position is admin.html
	if (pathname === "/admin.html") {
		if (role !== "admin") {

			//send back to index.html; not authorized
			window.location.href = '/index.html';
			Console.log("User is not authorized!");

		}
	} else if (pathname === "/index.html" || pathname === "/") {
		if (role === "admin") {
			$('#adminColumn').css('display', 'block');
		}
	}
}

// This function can be used to set a cookie given its name, value und the expiration value in amount of days
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// this function is used to perform the logout. It clears/deletes all the cookies.
function deleteAllCookies() {
	document.cookie.split(";").forEach(
			function(c) {
				document.cookie = c.replace(/^ +/, "").replace(/=.*/,
						"=;expires=" + new Date().toUTCString() + ";path=/");
			});
}

//checks whether user is allowed to view page or not
checkPathAuthorization();

// selector cache
var $menu = $('#menu');

// main sidebar
$menu.sidebar({
	dimPage : true,
	transition : 'overlay',
	mobileTransition : 'uncover'
});

// launch buttons
$menu.sidebar('attach events', '.launch.button, .view-ui, .launch.item');

$('.ui.sticky').sticky({
	context : '#reportForm'
});

// Call the checkCookie method for all the sites that bind this .js
checkCookie();
