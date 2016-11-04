var RegisterModel = function()
{
    function register(formData, callback)
    {
        $.ajax({
            url: "http://84.84.245.29:243/user/register", //http://localhost:8080/user/register
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                e_mail : formData.e_mailadres,
                password : formData.wachtwoord,
                first_name : formData.voornaam,
                surname : formData.achternaam,
                gender : formData.gender,
                date_of_birth : formData.birth_date,
                phone_number : formData.mobiel_nummer,
                secret_question : formData.security_question,
                secret_question_answer : formData.security_answer
            }),
            success: function (data) {
                // let controller resume with stuff
                callback(data);
                console.log(data); //test
            },
            error: function (xhr, status, error) {
                // show 'email al gebonden aan een account?'
                $("#error_message").show();

                //$("#component").html("error function");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        register: register
    }
};