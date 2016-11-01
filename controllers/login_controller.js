var LoginController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed()
    {
        var email = $("#e-mailadres").val();
        var password = $("#wachtwoord").val();

        // let model send email and password to API
        Model.login(email, password, function (data) {
            // sla token op in cookie


            // show uitloggen button
            console.log("should show uitloggenbutton now");
            $("#inloggen_text").hide();
            $("#uitloggen_text").show();


            // Weergeef een andere pagina gebasseerd op 'admin' of 'registered user'



        });

        //Model.getPage(function (data) { ViewHelper.setView(data); });
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        // set view to login form
        ViewHelper.setView();

        // user fills in email and password; clicks 'login': VIEW notices this and reacts
        ViewHelper.setActionListener(actionPerformed);

        // email and password are send to API; API validates them, sends token  


    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};