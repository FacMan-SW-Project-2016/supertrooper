// These are the rules for the report <form> - they need to be fulfilled in order to send the form
var rulesAndSettings = {
	fields : {
		title : {
			identifier : 'title',
			rules : [ {
				type : 'empty',
				prompt : 'Bitte geben Sie ihrem Anliegen einen Titel.'
			} ]
		},
		building : {
			identifier : 'building',
			rules : [ {
				type : 'minCount[1]',
				prompt : 'Bitte wählen Sie das Gebäude aus, in dem das Problem aufgetreten ist.'
			} ]
		},
		room : {
			identifier : 'room',
			rules : [ {
				type : 'minCount[1]',
				prompt : 'Bitte wählen Sie den Raum aus, in dem das Problem aufgetreten ist.'
			} ]
		},
		category : {
			identifier : 'category',
			rules : [ {
				type : 'minCount[1]',
				prompt : 'Bitte wählen Sie eine Kategorie für Ihr Anliegen.'
			} ]
		},
		description : {
			identifier : 'description',
			rules : [
					{
						type : 'empty',
						prompt : 'Bitte geben Sie eine kurze Beschreibung an.'
					},
					{
						type : 'minLength[20]',
						prompt : 'Bitte formulieren Sie die Beschreibung noch etwas aus.',
					// prompt : 'Your password must be at least
					// {ruleValue} characters'
					} ]
		},
		terms : {
			identifier : 'terms',
			rules : [ {
				type : 'checked',
				prompt : 'Bitte bestätigen Sie, dass alle angegebenen Information der Wahrheit entsprechen.'
			} ]
		}
	},

	// These are the settings for our report <form>
	inline : true,
	on : 'blur',
	transition : 'fade down',
	onSuccess : submitForm
};

// save our reportForm to address it later on
var $form = $('#reportForm');

// -------------------------------METHODS-------------------------------------

// default methods for semantic-ui animations

// The greeting message can be disabled once and will only appear again after a new login.
$('.message .close')
.on('click', function() {
	setCookie("welcome", "false", 1);
  $(this)
    .closest('.message')
    .transition('fade')
  ;
})
;


// The user may not see and access the admin page if it's role is not 'admin'
var userRole = getCookie("role");

if (userRole !== "admin")
{
	$('#adminMenuItem').remove();
}

// Initialize the form using rules & settings
$form.form(rulesAndSettings);

// This method will be called in order to post our form to the nodejs webservice
// to save the data in our DB
function submitForm() {

	var values1 = $("#reportForm :input[name != 'terms'][name != 'building']").serialize();
    var values = values1 + "&usercreate="+getCookie("username");
	var formData = new FormData($(this)[0]);


//	We use jQuery.ajax to post our data to the webservice via http
	$.ajax({
		url : 'http://localhost:8000/report/',
		data : values,
		cache : false,
		contentType : 'application/x-www-form-urlencoded',
		processData : false,
		type : 'POST',
		success : function (data) {
         uploadImage(data,formData);
     },
		async : false
	});
	
	return false;

};

// This function is used to upload the image via http to the webservice
function uploadImage (response, formData)
{
	if ($('#fileinputfield').val() != '')
	{

		var id = response.insertId;

		 $.ajax({
				 url : 'http://localhost:8000/photo/' + id,
				 type: 'POST',
				 data: formData,
				 async: false,
				 success: onFormSubmitted,
				 cache: false,
				 contentType: false,
				 processData: false
		 });

	 }else {
	 		onFormSubmitted(response);
	 }
};
// If something went wrong, we only print out, that an error happened.
function failure() {
	console.log("Es kam zu einem Fehler.");
};

// Handle the response of the http request
function onFormSubmitted(response) {
//	$('#message_container').html('<div class="header">Meldung erfolgreich versandt!</div>Vielen Dank für ihre Meldungserstellung.');
	$('#successPopup').modal({
	    onHide    : function(){
	    	$('#reportForm').form('clear');
	    }
	  }).modal('show');
};

// Auto-Complete button for testing purposes
function autoComplete() {
	$form
			.form(
					'set values',
					{
						title : 'Testtitel',
						building : 1,
						room : 1,
						category : 1,
						description : 'Dies ist eine Dummy Beschreibung. Sie dient lediglich Testzwecken.',
						terms : true
					})
};

// The following methods initialize our semantic tools with their settings.
$('#categoryDropdown').dropdown({
	  apiSettings: {
	    url: '//localhost:8000/category',
	    cache: false
	  },
	  saveRemoteData: false,
	  fields: {
//	    remoteValues: 'results',
		  value: 'ID',
		  name: 'text'
	  }
});


$('#buildingDropdown').dropdown({
	onChange : function(value)	{
		$("#roomField").attr('class', 'required Field');
		$('#roomDropdown').dropdown('clear');
		$('#roomDropdown').dropdown({
			  apiSettings: {
			    url: '//localhost:8000/room_building/' + value,
			    cache: false
			  },
			  saveRemoteData: false,
			  fields: {
//			    remoteValues: 'results',
				  value: 'ID',
				  name: 'name'
			  }
		});
	}  ,
	apiSettings: {
	    url: '//localhost:8000/building',
	    cache: false
	  },
	  saveRemoteData: false,
	  fields: {
//	    remoteValues: 'results',
		  value: 'ID',
		  name: 'name'
	  }
});

if (getCookie("welcome") == "true") {
	$('#info_container').show();
} else {
	$('#info_container').hide();
};