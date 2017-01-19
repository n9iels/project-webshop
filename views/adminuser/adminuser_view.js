var AdminUserViewHelper = function ()
{
    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"
    }

    function setView(data)
    {
        $("#component").load('/views/admin/adminuser.html') //, function () {} )
    }

    return {
        setActionListener: setActionListener,
        setView: setView
    }
}