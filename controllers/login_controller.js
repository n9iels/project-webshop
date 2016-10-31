var LoginController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed()
    {
        //hier moet login_model toch email en password die user invoert naar API versturen. ipv 
        Model.getPage(function (data) { ViewHelper.setView(data); });
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        // set view to login form
        ViewHelper.setView();

        // user fills in email and password; clicks 'login'
        // email and password are send to API; API validates them, sends one of following messages:
        // 1 email already has an account
        // 2 password invalid (e.g. empty)
        // 3 SUCCESS: new account made        
        ViewHelper.setActionListener(actionPerformed);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};