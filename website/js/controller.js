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
		category : {
			identifier : 'category',
			rules : [ {
				type : 'minCount[1]',
				prompt : 'Bitte wählen Sie mindestens eine Kategorie für Ihr Anliegen.'
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
	transition: 'fade down',
	onSuccess : submitForm
};

// save our reportForm to address it later on
var $form = $('#reportForm');
console.log($form);

//-------------------------------METHODS-------------------------------------

// default methods for semantic-ui animations
$('select.dropdown').dropdown();

// Initialize the form using rules & settings
$form.form(rulesAndSettings);

// This method will be called in order to post our form to the nodejs webservice
// to save the data in our DB
function submitForm() {

var values = $("#reportForm :input[name!='terms']").serialize();

	// We use jQuery.ajax to post our data to the webservice via http
	$.ajax({
		url : 'http://localhost:8000/report/',
		data : values,
		cache : false,
		contentType : 'application/x-www-form-urlencoded',
		processData : false,
		type : 'POST',
		success : onFormSubmitted,
		async: false
	});
};

// If something went wrong, dummy behaviour
function failure() {
	alert("failure");
};

// Handle the response of the http request
function onFormSubmitted(response) {
	alert("yaay it twerked");
};

function autoComplete() {
	$form.form('set values', {
	    title     : 'Test Titel',
	    category   : 'Schaden',
	    description   : 'Dies ist eine Dummy Beschreibung. Sie dient lediglich Testzwecken.',
	    terms    : true
	  })
};
