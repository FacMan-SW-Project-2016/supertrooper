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
			alert("SUCCESS");
			setCookie("username", $('#loginForm').form('get value', 'username'), 1);
			$('#loginForm').attr('action', '/index.html');
			break;

		case 1:
			alert("ERROR");
			break;
			
			
		case 2:
			alert("Wrong Password");
			break;
			
		case 3:
			alert("No such user");
			break;
		}
         
     },
		async : false
	});
	
	//setCookie("username", $('#loginForm').form('get value', 'username'), 1);
	
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