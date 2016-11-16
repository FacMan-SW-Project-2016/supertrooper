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
	return "";
}

function checkCookie() {
	var user = getCookie("username");
	if (user != "") {
		$('#info_container').html(
				'<i class="close icon"></i>Willkommen zurück, ' + user + '.');
		// Fill the #whoami div with content
		$('#whoami').html(
				'Sie sind angemeldet als ' + user);
	} else {
		window
				.alert('Bitte loggen Sie sich ein, bevor Sie diese Seite aufrufen.');
		window.location.href = '/login.html';
	}
}

function checkPathAuthorization(){
	var pathname = window.location.pathname; // Returns path only
	var role = this.getCookie("role");

	//if current position is admin.html
	if (pathname === "/admin.html")
	{
		if (role !== "admin"){

			//send back to index.html; not authorized
			window.location.href = '/index.html';
			Console.log("User is not authorized!");

		}
	} else if (pathname === "/index.html") {
		if (role !== "admin"){
			$('#adminColumn').css('display','none');
		}
	}
}


function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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
