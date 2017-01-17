var AdminController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function showUserIds(data)
    {
        viewHelper.showUserIds(data);
    }

    function getUserInfo(user_email)
    {
        model.getUserInfo(user_email, showUserInfo);
    }

    function showUserInfo(data)
    {

    }

    // Main function, also the start startpoint for a page
    function main()
    {
        // model gets user_id's from database
        // view shows user_id's on page
        model.getUserIds(showUserIds);

        // if admin clicks on user, then another model (UserModel) gets user info from database
        // view shows user info on page
        ViewHelper.setActionListener(getUserInfo);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};