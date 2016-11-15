// These are the rules for the report <form> - they need to be fulfilled in order to send the form
var rulesAndSettings = {
	fields : {
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
		status : {
			identifier : 'status',
			rules : [ {
				type : 'minCount[1]',
				prompt : 'Bitte wählen Sie einen Status für Ihr Anliegen.'
			} ]
		}
	},

	// These are the settings for our report <form>
	inline : true,
	on : 'blur',
	transition : 'fade down',
	onSuccess : updateData
};


var userRole = getCookie("role");

if (userRole !== "admin")
{
	$('#adminMenuItem').remove();
}



$('#table').bootstrapTable({
	url : 'http://localhost:8000/report/',
	columns : [ {
		field : 'remove',
		title : 'Remove',
		formatter : actionFormatter,
		events : deleteReport
	}, {
		field : 'title',
		title : 'Titel'
	}, {
		field : 'room',
		title : 'Raum',
		formatter: roomFormat
	}, {
		field : 'category',
		title : 'Kategorie',
		formatter : categoryFormat
	}, {
		field : 'moment',
		title : 'Zeit',
		formatter : timestampFormat
	}, {
		field : 'status',
		title : 'Status',
		formatter : statusFormat
	} ]
});

function statusFormat(value, row, index){
	var formatted_status;
	switch (value) {
	case 1:
		formatted_status = '<i class="orange wait icon"></i>Aktiv';
		break;
		
	case 2:
		formatted_status = '<i class="yellow spinner icon"></i>In Bearbeitung';
		break;
		
	case 3:
		formatted_status = '<i class="green checkmark icon"></i>Erledigt';
		break;
		
	case null:
		formatted_status = '<i class="red help icon"></i>Nicht zugeordnet';
		break;
	}
	return formatted_status;
};

function timestampFormat (value, row, index)
{
	var timeStamp;
    var time = value.slice(11, -8);
    var year = value.slice(0, -20);
    var month = value.slice(5,-17);
    var day = value.slice(8, -14);
	timeStamp = day +"."+month+"."+year + ", " + time + " Uhr";
    return timeStamp;
};

function categoryFormat (value, row, index)
{

	var displayname;
	$.ajax({
		url : 'http://localhost:8000/category/',
		cache : false,
		processData : false,
		type : 'GET',
		success : function (data) {

			for (index = 0; index < data.results.length; ++index)
			{
				if (data.results[index].ID == value)
				{
					displayname = data.results[index].text;
					break;
				}
			}
		},
		async : false
	});

	return displayname;
};


function roomFormat (value, row, index)
{

	var displayname;
	$.ajax({
		url : 'http://localhost:8000/room/',
		cache : false,
		processData : false,
		type : 'GET',
		success : function (data) {

			for (index = 0; index < data.results.length; ++index)
			{
				if (data.results[index].ID == value)
				{
					displayname = data.results[index].name;
					break;
				}
			}
		},
		async : false
	});

	return displayname;
};


function clearRoomDropDown()
{
	$('#dropdownRoom').dropdown('clear');

  var att = "data-dinamic-opt";
  $('#dropdownRoom').find('[' + att + ']').remove();

  $('#dropdownRoom' + ' .menu').html(" ");
};


function setDynamicOptions(selector, keyword, textfield, options) {
    var att = "data-dinamic-opt";
    $(selector).find('[' + att + ']').remove();
    var html;
    for(key in options) {

    if (html != undefined)
    {


      html += '<div class="item" data-value="' + options[key][keyword] + '">' + options[key][textfield] + '</div>';
    }else {
      html = '<div class="item" data-value="' + options[key][keyword] + '">' + options[key][textfield] + '</div>';
    }
  }


    $(selector + ' .menu').html(html);
  // $(selector).dropdown({showOnFocus: false});
};

$('#table').on('click-row.bs.table', function (e, row, $element) {
        console.log('Event: click-row.bs.table ID:' + row.ID);

    var time = row.moment.substring(0,16);

    $('#popupTitle').text(row.title  + " - " + timestampFormat(row.moment));
    $('#popupPic').attr('src', '');
    if(row.data!==null){
    $('#popupPic').attr('src', 'http://localhost:8000/photo/download/' + row.ID);
    }

    $('#popupID').text(row.ID);

var roomofbuilding = -1;


$('#dropdownBuild').dropdown({
  onChange : function(value)	{

        roomofbuilding = value;
				$('#dropdownRoom').dropdown({showOnFocus: false});

        $.ajax({
            url: 'http://localhost:8000/room_building/' + roomofbuilding,
            cache: false,
            type: 'GET',
						async: false,
            success: function (data){

              clearRoomDropDown();
                setDynamicOptions('#dropdownRoom', 'ID', 'name', data.results);


								$(document).ready(function() {

						 $('#dropdownRoom').dropdown('set selected', row.room);
					 });
            }
        });


    },
    showOnFocus: false
    });

$.ajax({
    url: 'http://localhost:8000/building/',
    cache: false,
    type: 'GET',
    success: function (data){
        setDynamicOptions('#dropdownBuild', 'ID', 'name', data.results);

},
       async : false
});

        $('#popupUser').text(row.usercreate);
        $('#popupDesc').text(row.description);
        $.ajax({
          url : 'http://localhost:8000/room/'+ row.room,
          cache : false,
          type : 'GET',
          success : function (data) {

            roomofbuilding = data.results[0].building;
           },
          async : false
        });

		$('#dropdownCat').dropdown({showOnFocus: false});

    $.ajax({
  		url : 'http://localhost:8000/category/',
  		cache : false,
  		type : 'GET',
  		success : function (data) {

           setDynamicOptions('#dropdownCat', 'ID', 'text', data.results);

       },
  		async : false
  	});

    $('#dropdownStat').dropdown({showOnFocus: false});

    $.ajax({
  		url : 'http://localhost:8000/status/',
  		cache : false,
  		type : 'GET',
  		success : function (data) {

           setDynamicOptions('#dropdownStat', 'ID', 'type', data);
       },
  		async : false
  	});

    $('#dropdownFacMan').dropdown({showOnFocus: false});


    $.ajax({
  		url : 'http://localhost:8000/user/',
  		cache : false,
  		type : 'GET',
  		success : function (data) {

           setDynamicOptions('#dropdownFacMan', 'name', 'name', data.results);
       },
  		async : false
  	});




		$(document).ready(function() {

			$('#dropdownBuild').dropdown('set selected',roomofbuilding);

 $('#dropdownRoom').dropdown('set selected', row.room);
 $('#dropdownStat').dropdown('set selected', row.status);

 $('#dropdownCat').dropdown('set selected', row.category);
 $('#dropdownFacMan').dropdown('set selected', row.userfacman);


});

$('#popupForm').form(rulesAndSettings);




    $('.ui.modal').modal({
        onHide: function(){
        	$('#popupForm').form('reset');

        }
    }).modal('show');



    });



		$('.ui.slider.checkbox')
		  .checkbox({
		    onChecked: function() {

					$('#table').bootstrapTable('filterBy', null);
						$('#table').bootstrapTable('refresh');
		    },
				onUnchecked: function() {

					var userName = getCookie("username");
					var object = {usercreate: userName};

					$('#table').bootstrapTable('filterBy', object);
					$('#table').bootstrapTable('refresh');
		    }
		  });


	$(document).ready(function() {


var userName = getCookie("username");
var userRole = getCookie("role");

var object = {usercreate: userName};

$('#table').bootstrapTable('filterBy', object);


switch (userRole)
{
	case "student":
		//toggle button für filter vestecken
		$('#showAll').hide();

		//disable editor dropdown
		//disable status dropdown
		$("#fieldStatus").attr('class', 'required disabled field');
		$("#fieldAdvisor").attr('class', 'required disabled field');

		break;
	case "advisor":
	case "admin":
			//toggle button anzeigen lassen
			$('#showAll').show();
			break;
}

});



function actionFormatter(value, row, index){
    return [
        '<a class="remove ml10" href="javascript:void(0)" title="Remove">',
        '<i class="remove icon"></i>',
        '</a>'
    ].join('');
}
function deleteReport(value, row, index){
    alert('delete triggered for row ID ' + row.ID);
}


function updateData()
{

var _id = $('#popupID').text();

	var values = $("#popupForm :input[name != 'building']").serialize();

	values = "ID=" + _id + "&" + values;

	var html;

	// We use jQuery.ajax to post our data to the webservice via http
	$.ajax({
		url : 'http://localhost:8000/report/',
		data : values,
		cache : false,
		contentType : 'application/x-www-form-urlencoded',
		processData : false,
		type : 'PUT',
		success : function(data) {
			if (data.status == 0) {
				$('#popup').modal('hide');

				 $('#table').bootstrapTable('refresh');
			} else {
				html = '<div class="header">Es kam leider zu einem Fehler!</div>Bitte kontaktieren Sie den Admin dieser Seite.';
			}
		},
		async : false
	});

	if (html !== undefined) {
		$('#message_container').html(html);
		$('#message_container').show();
	}
};
