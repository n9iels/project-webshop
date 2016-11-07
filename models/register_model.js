var RegisterModel = function()
{
    function register(gender, first_name, prefix, surname, date_of_birth, street, number, postal_code, city, mobile_number, phone_number, email, password, repeat_password, security_question, security_question_answer, callback)
    {
        console.log(formData);
        $.ajax({
            url: "http://84.84.245.29:243/user/register", //? http://84.84.245.29:243 = API-locatie?
            // url: "http://84.84.245.29:243/user/login", //? http://84.84.245.29:243 = API-locatie?
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                gender : gender,
                first_name : first_name,
                prefix : prefix,
                surname : surname,
                date_of_birth : date_of_birth,
                street : street,
                number : number,
                postal_code : postal_code,
                city : city,
                mobile_number : mobile_number,
                phone_number : phone_number,
                email : email,
                password : password,
                repeat_password : repeat_password,
                security_question : security_question,
                security_question_answer : security_question_answer
            }),
            success: function (data) {
                // let controller resume with stuff
                callback(data);
            },
            error: function (xhr, status, error) {
                // show 'email al gebonden aan een account?'
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

