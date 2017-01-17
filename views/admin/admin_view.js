var AdminViewHelper = function ()
{
    function showUserIds(data)
    {
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
                        row.append( $("<td class='td_user'></td>").html(String(value)) );
                    } else {
                        row.append( $("<td></td>"));
                    }
                })
                table.append(row);
            });
            $('#users').append(table);
        });
    }

    function setActionListener(action)
    {
        // if admin presses a user, get email of user and pass to action() as parameter
        $("#component").on("click", ".td_user", function()
        {
            var user_email = $(this).closest('tr')[0].cells[3].innerHTML;
            console.log('user_email: ' + user_email);
            action(user_email);
        })
    }

    return {
        showUserIds: showUserIds,
        setActionListener: setActionListener
    }
}