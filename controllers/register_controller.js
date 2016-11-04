var RegisterController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed()
    {
        // Prevent sending the form
        event.preventDefault();

        // put form fields in javascript Object
        var formData = {};

        $.each($(this).serializeArray(), function (i, field) {
            formData[field.name] = field.value;
        });

        // fix date of birth (API expects certain format)
        formData["birth_date"] = formData.jaar + "-" + formData.maand + "-" + formData.dag;

        // check whether any mandatory field is left empty by user and
        // if so, abort function
        var abortFunction = false;
        var mandatoryFields = ["voornaam", "achternaam", "postcode", "huisnummer", "e_mailadres", "wachtwoord", "wachtwoord2", "security_answer"]; //dropdowns (like gender) are always filled in, so don't put in this list

        // (reset all fields to 'valid' because user may have filled in fields since
        // the previous time this function was called)
        $.each(mandatoryFields, function (i, manField) {
            $("#" + manField).removeClass("invalid");
        })

        $.each(mandatoryFields, function (i, manField) {
            console.log(manField);
            if (formData[manField] == "")
            {
                console.log("in if");
                $("#" + manField).addClass("invalid");

                abortFunction = true;
            }
        })

        
        // if a mandatory field is empty, show error message to user and abort function
        if (abortFunction)
        { 
            // scroll to top of page so that users see message "something is not filled in"
            window.scrollTo(0, 0);
            // show message "something is not filled in"
            $("#register_error_message").show();

            return false; 
        };

        console.log("function not aborted"); //test

        /*
        // let model send user info to API
        Model.register(formData, function (data) {
            

            // Weergeef een andere pagina als registratie proces correct uitgevoerd
            ViewHelper.setView('views/register/after_register.html');

            // gelijk inloggen als nieuwe user zich geregistreerd heeft?
            //$("#inloggen_text").hide();
            //$("#uitloggen_text").show();

        });
        */

        $("#inloggen_text").hide();
        $("#uitloggen_text").show();
        ViewHelper.setView('views/register/after_register.html');

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