
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