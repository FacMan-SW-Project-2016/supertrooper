$(document).ready(function() {
	$('#loginForm').form({
		fields : {
			username : {
				identifier : 'username',
				rules : [ {
					type : 'empty',
					prompt : 'Bitte geben Sie Ihren Benutzernamen an.'
				} ]
			},
			password : {
				identifier : 'password',
				rules : [ {
					type : 'empty',
					prompt : 'Bitte geben Sie Ihr Passwort an.'
				}, {
					type : 'length[6]',
					prompt : 'Ihr Passwort muss mindestens 6 Zeichen lang sein.'
				} ]
			}
		},

		// These are the settings for our login <form>
		inline : true,
		on : 'blur',
		transition : 'fade down',
		onSuccess : function() {
			setCookie("username", $('#loginForm').form('get value', 'username'), 1);
//			window.location.href='/index.html';
		}

	});
});

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function autoComplete(user, password) {
	$('#loginForm').form(
			'set values',
			{
				username : user,
				password : password
			})
}