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

$('#accordion').accordion();

	var gFilters = {};


var userRole = getCookie("role");
var columnStruct =  [{
		field: 'state',
		checkbox: true},{
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
}] ;

if (userRole !== "admin")
{
	$('#adminMenuItem').remove();

	$('#delBtn').hide();

	columnStruct =  [{
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
	} ];

}


$('#table').bootstrapTable({
	url : 'http://localhost:8000/report/',
	columns :  columnStruct
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


 //if status = done, disable all controls
if (row.status === 3)
{
	$('.required.field').addClass('disabled');
}else {
	 $('.required.field.disabled').removeClass('disabled');
}

		var userRole = getCookie("role");

		if (userRole ==="student")
		{
		//for student
		//disable editor dropdown
		//disable status dropdown
		$("#fieldStatus").attr('class', 'required disabled field');
		$("#fieldAdvisor").attr('class', 'required disabled field');
	}

});

$('#popupForm').form(rulesAndSettings);




    $('.ui.modal').modal({
        onHide: function(){
        	$('#popupForm').form('reset');

        }
    }).modal('show');



    });

	var userName = getCookie("username");


		$('#showAll')
		  .checkbox({
		    onChecked: function() {

					delete gFilters.usercreate;
					$('#table').bootstrapTable('filterBy', gFilters);
					$( window ).resize();
		    },
				onUnchecked: function() {

					gFilters.usercreate =  userName;
					$('#table').bootstrapTable('filterBy', gFilters);
		    }
		  });



			$('#showOwnedReports')
				.checkbox({
					onChecked: function() {
						gFilters.userfacman =  userName;
						$('#table').bootstrapTable('filterBy', gFilters);
					},
					onUnchecked: function() {

						delete gFilters.userfacman;
						$('#table').bootstrapTable('filterBy', gFilters);
						$( window ).resize();
					}
				});


	$(document).ready(function() {


var userName = getCookie("username");
var userRole = getCookie("role");


switch (userRole)
{
	case "student":
		//toggle button für filter vestecken
		$('#accordion').hide();
		gFilters.usercreate = userName;

		break;
	case "advisor":
			//toggle button anzeigen lassen
			$('#showOwnedReports').checkbox('set checked');
			$('#showAll').checkbox('set checked');
			$('#showAllDiv').show();
			$('#showOwnedReports').attr('style', 'display: inline;')

			delete gFilters.usercreate;
			gFilters.userfacman = userName;
			break;
	case "admin":
			//toggle button anzeigen lassen
			$('#showAllDiv').show();
			$('#showOwnedReports').checkbox('set unchecked');
			$('#showOwnedReports').attr('style', 'display: none;')

			gFilters.usercreate = userName;
			delete gFilters.userfacman;
			break;
}

	$('#table').bootstrapTable('filterBy', gFilters);

});




function deleteItem(event)
{
	var indexfield =  $('#table').bootstrapTable('getSelections');

	if (indexfield.length > 0)
	{
		var index;

		index = indexfield[0].ID;

		$.ajax({
			url : 'http://localhost:8000/report/' + index,
			cache : false,
			processData : false,
			type : 'DELETE',
			success : function (data) {
					alert("delete successful");
					$('#table').bootstrapTable('refresh');
			 },
			async : false
		});
	}
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
