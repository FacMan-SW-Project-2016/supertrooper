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
		onSuccess : authenticate

	});
});

function authenticate() {
	var password = $('#loginForm').form('get value', 'password');
	var passhash = hex_md5(password);
	
	var username = $("#loginForm").form('get value', 'username');
	
	var values = "name=" + username + "&password=" + passhash;
	
	var return_value = false;
	
	var html;
	
	$.ajax({
		url : 'http://localhost:8000/user/authenticate',
		data : values,
		cache : false,
		contentType : 'application/x-www-form-urlencoded',
		processData : false,
		type : 'POST',
		success : function (data) {
         switch (data.status) {
		case 0:
			setCookie("username", $('#loginForm').form('get value', 'username'), 1);
			$('#loginForm').attr('action', '/index.html');
			return_value = true;
			break;

		case 1:
			html = '<div class="header">Es kam leider zu einem Fehler!</div>Bitte kontaktieren Sie den Admin dieser Seite.';
			break;
			
		case 2:
			html = '<div class="header">Ups!</div>Das war leider das falsche Passwort, bitte versuchen Sie es erneut.';
			break;
			
		case 3:
			html = '<div class="header">Dieser User existiert leider nicht in unserem System!</div>Bitte registrieren Sie sich unter untenstehendem Link.';
			break;
		}
         
     },
		async : false
	});
	if (html !== undefined) {
		$('#message_container').html(html);
		$('#message_container').show();
	}	
	
	return return_value;
	
}

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