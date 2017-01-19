var AdminUserViewHelper = function ()
{
    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"
    }

    function setView(data)
    {
        //preventDefault();
        $("#component").load('/views/admin/adminuser.html', function ()
        {
            this.preventDefault();
            return;
        } )
    }

    return {
        setActionListener: setActionListener,
        setView: setView
    }
}