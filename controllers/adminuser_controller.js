var AdminUserController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Main function, also the start startpoint for a page
    function main()
    {
        ViewHelper.setActionListener(getPage);
    }

    function getPage()
    {
        Model.getPage(setView);
    }
    
    function setView(data) 
    {
        ViewHelper.setView(data);
        viewHelper.setSaveListener(saveUserInfo);
        viewHelper.setDeleteListener(deleteUser);
    }
    function saveUserInfo()
    {
        event.preventDefault();

        var formData = $(this).serializeObject();

        Model.saveUserInfo(formData, function(formData)
        {
            alert("Gebruiker succesvol geüpdate.");
        });
    }

    function deleteUser()
    {
        Model.deleteUser( function()
        {
            console.log('verwijderd?');
            alert("Gebruiker succesvol gedelete.");
        } );
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};