var AdminController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed(event)
    {

    }

    // Main function, also the start startpoint for a page
    function main()
    {
        // model gets user_id's from database
        // view shows user_id's on page

        // if admin clicks a user_id, then another model (UserModel) gets user info from database
        // view shows user info on page


        // model gets user_id's from database
        // view shows user_id's on page
        model.getUserIds(viewHelper.showUserIds);



        // set view to admin page. model gets user info from database
        ViewHelper.setActionListener(actionPerformed);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};