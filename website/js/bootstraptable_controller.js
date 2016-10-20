
$('#table').bootstrapTable({
    url: 'http://localhost:8000/room/',
    columns: [{
        field: 'ID',
        title: 'Item ID'
    }, {
        field: 'name',
        title: 'Item Name'
    }, ]
});
