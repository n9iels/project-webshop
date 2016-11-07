var ResetPasswordController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed()
    {
        var new_password = $("#wachtwoord").val();
        var email = $("#e-mailadres").val();
        var security_question = $("#security_question_select option:selected").text();
        var security_question_answer = $("#questionanswer").text();

        // let model send user info to API
        Model.resetpassword(new_password, email, security_question, security_question_answer, function (data) {

        });
    }

    // Main function, also the start startpoint for a page
    function main()
    {      
        // set view to reset password form
        ViewHelper.setView();

        ViewHelper.setActionListener(actionPerformed);
        // new action wanner er op filter wordt gedrukt
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};

