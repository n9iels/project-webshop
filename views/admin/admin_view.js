var AdminViewHelper = function ()
{
    function showUserIds(data)
    {
        console.log('data: ' + data);

        document.title ="Admin - AZ Games";

        $("#component").load('/views/admin/admin.html', function () {
            var table = $("<table id='users_table'></table>");
            $.each(data, function(numberr, user) 
            {
                var row = $('<tr></tr>');
                $.each(user, function(key, value)
                {
                    if (value != undefined)
                    {
                        row.append( $("<td></td>").html(String(value)) );
                    } else {
                        row.append( $("<td></td>"));
                    }
                })
                table.append(row);
            });
            $('#users').append(table);
        });
    }

    return {
        showUserIds: showUserIds
    }
}