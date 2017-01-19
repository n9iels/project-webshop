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
                $("#title").append(value.first_name + " " + value.insertion + " " + value.surname);
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
            })
        })
    }

    function setSaveListener(action)
    {
        $("#component").on("submit", "#userform", action);
    }

    function setDeleteListener(action)
    {
        $("#component").on("click", '#delete_btn', action);
    }

    return {
        setActionListener: setActionListener,
        setView: setView,
        setSaveListener: setSaveListener,
        setDeleteListener: setDeleteListener
    }
}