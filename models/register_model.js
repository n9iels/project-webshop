var RegisterModel = function()
{
    function register(formData, callback)
    {
        //console.log(formData);
        console.log("MODEL: Inside register function");
        $.ajax({
            url: "http://localhost:8081/user/register",
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                e_mail : formData.e_mailadres,
                password : formData.wachtwoord,
                first_name : formData.voornaam,
                insertion : formData.tussenvoegsel,
                surname : formData.achternaam,
                gender : formData.gender,
                date_of_birth : formData.birth_date,
                phone_number : formData.mobiel_nummer,
                secret_question : formData.security_question,
                secret_question_answer : formData.security_answer,

                postal_code : formData.postcode,
                number : formData.huisnummer,
                street_name : formData.straatnaam,
                city : formData.plaats,              
            }),
            success: function (data) {
                //console.log(data);
                console.log("MODEL: Inside success function");
                // let controller resume with stuff
                callback(data);
            },
            error: function (xhr, status, error) {
                // show 'email al gebonden aan een account?
                console.log("MODEL: Inside error function");
                $("#regi_api_error_message").show();
                //$("#component").html("error function");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        register: register
    }
};