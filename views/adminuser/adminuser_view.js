var AdminUserViewHelper = function ()
{
    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"
    }

    function setView(data)
    {
        //preventDefault();
        $("#component").load('/views/adminuser/adminuser.html', function ()
        {
            $.each(data, function(key, value)
            {
                $("#delete_btn").attr("data-id", value.user_id)   
                $("#first_name").val(value.first_name);
                $("#insertion").val(value.insertion);
                $("#surname").val(value.surname);
                $("#user_type").val(value.user_type);
                $("#email").val(value.email);
                $("#password").attr('placeholder', 'Vul hier iets in om het wachtwoord te veranderen');
                $("#gender").val(value.gender);
                $("#date_of_birth").val(value.date_of_birth);
                $("#phone_number").val(value.phone_number);
                $("#is_active").val(value.is_active);
                $("#user_id").val(value.user_id);
            })
        })
    }

    function setSaveListener(action)
    {
        $(document).on('submit', '#userform', action);
    }

    function setDeleteListener(action)
    {
        $("#component").off().on("click", '#delete_btn', function (e)
        {
            e.preventDefault();
            action($(this).data("id"));
        });
    }

    return {
        setActionListener: setActionListener,
        setView: setView,
        setSaveListener: setSaveListener,
        setDeleteListener: setDeleteListener
    }
}