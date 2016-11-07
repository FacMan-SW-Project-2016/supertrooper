$('.menu .item')
  .tab();


  $('#table_room').bootstrapTable({
    responseHandler: function (res) {
    return res.results;
},
      url: "http://localhost:8000/room/",
      columns: [
        {
          field: 'state',
          checkbox: true},{
        field: 'ID',
        title: 'ID'
      },{
          field: 'name',
          title: 'Name'
      },{
          field: 'floor',
          title: 'Stockwerk'
      },{
          field:'building',
          title:'Gebäude'
      }]
  });


  $('#table_building').bootstrapTable({
    responseHandler: function (res) {
    return res.results;
},
url: "http://localhost:8000/building/",
      columns: [
        {
          field: 'state',
          checkbox: true},{
        field: 'ID',
        title: 'ID'
      },{
          field: 'name',
          title: 'Name'
      },{
          field: 'address',
          title: 'Adresse'
      }]
  });


$('#table_status').bootstrapTable({
    url: 'http://localhost:8000/status/',
    columns: [
      {
        field: 'state',
        checkbox: true},{
      field: 'ID',
      title: 'ID'
    },{
        field: 'type',
        title: 'Type'
    }]
});


$('#table_category').bootstrapTable({
  responseHandler: function (res) {
  return res.results;
},
url: "http://localhost:8000/category/",
      columns: [
        {
          field: 'state',
          checkbox: true},{
        field: 'ID',
        title: 'ID'
      },{
          field: 'type',
          title: 'Typ'
      },{
          field: 'text',
          title: 'Text'
      }]
  });



$('#table_user').bootstrapTable({
  responseHandler: function (res) {
  return res.results;
},
url: "http://localhost:8000/user/",
      columns: [
      {
        field: 'state',
        checkbox: true},{
        field: 'name',
        title: 'Name'
      },
    {
        field: 'role',
  title: 'Rolle'}]
  });



function addItem(data) {


$parent = $(data.target.parentElement);

var location = $parent[0].attributes['data-tab'].value;

 $("#popupContent").load("/adminpopup/" + location + ".html");
  $('.ui.modal').modal('show');
};

function refreshTable(data)
{
  $parent = $(data.target.parentElement);

  var location = $parent[0].attributes['data-tab'].value;
 $('#table_' + location).bootstrapTable('refresh');

}



function deleteItem( data )
{
  $parent = $(data.target.parentElement);
  var location = $parent[0].attributes['data-tab'].value;

  $table = $('#table_' + location);
  var indexfield = $('#table_' + location).bootstrapTable('getSelections');

  if (indexfield.length > 0)
  {

    var index;

    if (location == 'user')
    {
      index = indexfield[0].name;
    }else
    {
      index = indexfield[0].ID;
    }


    $.ajax({
      url : 'http://localhost:8000/' + location +'/' + index,
      cache : false,
      processData : false,
      type : 'DELETE',
      success : function (data) {
          alert("delete successful");
          $('#table_' + location).bootstrapTable('refresh');

       },
      async : false
    });
  }

}
