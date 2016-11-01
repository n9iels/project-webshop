var RegisterModel = function()
{
    function register(email, password, callback)
    {
        $.ajax({
            url: "http://84.84.245.29:243/user/login", //? http://84.84.245.29:243 = API-locatie?
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                email : email,
                password : password
            }),
            success: function (data) {
                // let controller resume with stuff
                callback(data);
                console.log(data); //test

            },
            error: function (xhr, status, error) {
                // show 'not good email or password to user'
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