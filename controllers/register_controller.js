var RegisterController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed()
    {
        // Prevent sending the form
        event.preventDefault();

        // Loop trough the form data and get all fields
        var formData = {};
        $.each($(this).serializeArray(), function (i, field) {
            formData[field.name] = field.value;
        });

        console.log(formData.e_mailadres);
        console.log(formData.gender);
        console.log(formData.birth_date);


        // let model send user info to API
        Model.register(formData, function (data) {
            

            // Weergeef een andere pagina als registratie proces correct uitgevoerd
            //ViewHelper.setView('views/register/after_register.html');

            // gelijk inloggen als nieuwe user zich geregistreerd heeft?
            //$("#inloggen_text").hide();
            //$("#uitloggen_text").show();

        });

        //Model.getPage(function (data) { ViewHelper.setView(data); });
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        // set view to register form
        ViewHelper.setView();

        // user fills in register info; clicks 'register': view notices this and reacts
        ViewHelper.setActionListener(actionPerformed);

        // email and password are send to API; API checks if email already exists (and whether password is correct?) 


    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};