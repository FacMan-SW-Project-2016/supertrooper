
$('#table').bootstrapTable({
    url: 'http://localhost:8000/report/',
    columns: [
        {
        field: 'remove',
            title: 'Remove',
        formatter: actionFormatter,
            events:deleteReport
    }, {
        field: 'title',
        title: 'Titel'
    },{
        field: 'room',
        title: 'Raum'
    },{
        field:'category',
        title:'Kategorie'
    },{
        field:'moment',
        title:'Zeit'
    }
             ]
});


function setDynamicOptions(selector, keyword, options) {
    var att = "data-dinamic-opt";
    $(selector).find('[' + att + ']').remove();
    var html;
    for(key in options) {

    if (html != undefined)
    {
      html += '<div class="item" data-value="' + options[key].ID + '">' + options[key][keyword] + '</div>';
    }else {
      html = '<div class="item" data-value="' + options[key].ID + '">' + options[key][keyword] + '</div>';
    }
  }

    $(selector + ' .menu').html(html);
    $(selector).dropdown({showOnFocus: false});
};

$('#table').on('click-row.bs.table', function (e, row, $element) {
        console.log('Event: click-row.bs.table ID:' + row.ID);
    var time = row.moment.substring(0,16);

    $('#popupTitle').text(row.title  + " - " + time);
    $('#popupPic').attr('src', '');
    if(row.data!==null){
    $('#popupPic').attr('src', 'http://localhost:8000/photo/download/' + row.ID);
    }

    $('#popupID').text(row.ID);

    $('#dropdownBuild').dropdown({   showOnFocus: false});

    $.ajax({
        url: 'http://localhost:8000/building/',
        cache: false,
        type: 'GET',
        success: function (data){
            setDynamicOptions('#dropdownBuild', 'name', data.results);
    },
           async : false
    });

    $('#dropdownRoom').dropdown({showOnFocus: false});
    $.ajax({
        url: 'http://localhost:8000/room/',
        cache: false,
        type: 'GET',
        success: function (data){
            setDynamicOptions('#dropdownRoom', 'name', data.results);
        },
        async : false
    });

    $('#dropdownCat').dropdown({showOnFocus: false});

    $.ajax({
  		url : 'http://localhost:8000/category/',
  		cache : false,
  		type : 'GET',
  		success : function (data) {

           setDynamicOptions('#dropdownCat', 'text', data.results);
       },
  		async : false
  	});

    $('#dropdownStat').dropdown({showOnFocus: false});

    $.ajax({
  		url : 'http://localhost:8000/status/',
  		cache : false,
  		type : 'GET',
  		success : function (data) {

           setDynamicOptions('#dropdownStat', 'type', data);
       },
  		async : false
  	});

    $('#dropdownFacMan').dropdown({showOnFocus: false});


    $.ajax({
  		url : 'http://localhost:8000/user/',
  		cache : false,
  		type : 'GET',
  		success : function (data) {

           setDynamicOptions('#dropdownFacMan', data.results);
       },
  		async : false
  	});

    $('#popupUser').text(row.usercreate);
    $('#popupDesc').text(row.description);
    $('#popupFacMan').text(row.userfacman);

    $.ajax({
      url : 'http://localhost:8000/room/'+ row.room,
      cache : false,
      type : 'GET',
      success : function (data) {

           $('#dropdownBuild').dropdown('set selected', data.results[0].building);
       },
      async : false
    });

    $('#dropdownRoom').dropdown('set selected', row.room);
    $('#dropdownStat').dropdown('set selected', row.status);
    $('#dropdownCat').dropdown('set selected', row.category);
    $('.ui.modal').modal('show');

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
