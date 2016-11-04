$('.menu .item')
  .tab()
;

$.getJSON('http://localhost:8000/room/', function (data)
{
  $('#table_room').bootstrapTable({
      data: data.results,
      columns: [
      {
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

})


$.getJSON('http://localhost:8000/building/', function (data)
{
  $('#table_building').bootstrapTable({
      data: data.results,
      columns: [
      {
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

})

$('#table_status').bootstrapTable({
    url: 'http://localhost:8000/status/',
    columns: [
    {
      field: 'ID',
      title: 'ID'
    },{
        field: 'type',
        title: 'Type'
    }]
});


$.getJSON('http://localhost:8000/category/', function (data)
{
  $('#table_category').bootstrapTable({
      data: data.results,
      columns: [
      {
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

})


$.getJSON('http://localhost:8000/user/', function (data)
{
  $('#table_user').bootstrapTable({
      data: data.results,
      columns: [
      {
        field: 'name',
        title: 'Name'
      }]
  });

})


$('.ui.button').on('click', function (data) {


$parent = $(data.target.parentElement);

var location = $parent[0].attributes['data-tab'].value;

 $("#popupContent").load("/adminpopup/" + location + ".html");
  $('.ui.modal').modal('show');
});
