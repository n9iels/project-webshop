var ResetPasswordModel = function()
{
    function resetpassword(formData, callback)
    {
        console.log(formData);
        $.ajax({
            url: "http://localhost:8080/user/resetpassword", //? http://84.84.245.29:243 = API-locatie?
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                email : formData.e_mailadres,
                secret_question_answer : formData.security_question_answer,
                secret_question : formData.security_question,
                new_password : formData.wachtwoord,
                repeat_password : formData.wachtwoord2
            }),
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                //$("#component").load("views/error/error.html");
                $("#reset_password_api_error_message").show();
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        resetpassword: resetpassword
    }
};

/*
var ResetPasswordModel = function()
{
    function resetpassword(formData, callback)
    {
        console.log(formData);
        $.ajax({
            url: "http://84.84.245.29:243/resetpassword", //? http://84.84.245.29:243 = API-locatie?
            type: "get",
            dataType: 'json',
            data: JSON.stringify({
                new_password : formData["wachtwoord"],
                repeat_password : formData["wachtwoord2"],
                email : formData["e-mailadres"],
                security_question : formData["security_question"],
                security_question_answer : formData["security_question_answer"]
            }),
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                //$("#component").load("views/error/error.html");
                $("#reset_password_api_error_message").show();
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        resetpassword: resetpassword
    }
};
*/