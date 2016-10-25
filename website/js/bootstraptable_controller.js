
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
$('#table').on('click-row.bs.table', function (e, row, $element) {
        console.log('Event: click-row.bs.table ID:' + row.ID);
    var time = row.moment.substring(0,16);
    
    $('#popupTitle').text(row.title  + " - " + time);
    $('#popupPic').attr('src', '');
    if(row.data!==null){
    $('#popupPic').attr('src', 'http://localhost:8000/photo/download/' + row.ID);
    }
    
    $('#popupID').text(row.ID);
    $('#popupRoom').text(row.room);
    $('#popupCat').text(row.category);
    $('#popupStatus').text(row.status);
    $('#popupUser').text(row.usercreate);
    $('#popupDesc').text(row.description);
    $('#popupFacMan').text(row.userfacman);
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