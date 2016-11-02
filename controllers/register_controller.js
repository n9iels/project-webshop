var RegisterController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed()
    {
        // Prevent sending the form
        event.preventDefault();

        // check if any mandatory field is empty
        var completeList = $(this).serializeArray();
        var mandatoryFields = ["gender", "voornaam", "achternaam"];
        var abortFunction = false;

        $.each(mandatoryFields, function (i, manField) {
            if (completeList[manField] == "")
            {
                $("#" + manField).addClass("invalid");

                abortFunction = true;
            }
        })

        // if a mandatory field is empty, don't resume function
        if (abortFunction) { return false; };

        // save all fields in an id:value format
        // IS THIS NECESSARY? NOT UNNECESSARILY CREATE duplicate OF LIST?
        var formData = {};

        $.each(completeList, function (i, field) {
            formData[field.name] = field.value;
        });

        // fix date of birth (API expects certain format)
        formData["birth_date"] = formData.jaar + "-" + formData.maand + "-" + formData.dag;

        console.log(formData); //test

        // let model send user info to API
        Model.register(formData, function (data) {
            

            // Weergeef een andere pagina als registratie proces correct uitgevoerd
            ViewHelper.setView('views/register/after_register.html');

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
        ViewHelper.setView('views/register/register.html');

        // user fills in register info; clicks 'register': view notices this and reacts
        ViewHelper.setActionListener(actionPerformed);

        // email and password are send to API; API checks if email already exists (and whether password is correct?) 


    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};