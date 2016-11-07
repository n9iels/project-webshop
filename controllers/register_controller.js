var RegisterController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed()
    {
        var gender = $("#gender_select option:selected").text();
        var first_name = $("#voornaam").val(); 
        var prefix = $("#tussenvoegsel_optioneel").val(); // GIVES AN ERROR HERE
        var surname = $("#achternaam").val();

        var date_of_birth = new Date($("#jaar_select option:selected").val(),
                                     $("#maand_select option:selected").val(),
                                     $("#dag_select option:selected").val());

        var street = $("#straat").text();
        var number = $("#nummer").text();
        var postal_code = $("#postcode").text();
        var city = $("#plaats").text();

        var mobile_number = $("#mobiel_nummer_optioneel").val();
        var phone_number = $("#telefoon_optioneel").val();

        var email = $("#e-mailadres").val();
        var password = $("#wachtwoord").val();
        var repeat_password = $("#herhaalwachtwoord").val();

        var security_question = $("#security_question_select option:selected").text();
        var security_question_answer = $("#questionanswer").val();

        // let model send user info to API
        Model.register(gender, first_name, prefix, surname, date_of_birth, street, number, postal_code, city, mobile_number, phone_number, email, password, repeat_password, security_question, security_question_answer, function (data) {
            

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