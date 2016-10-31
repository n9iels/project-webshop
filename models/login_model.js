var LoginModel = function()
{
    function getPage(callback)
    {
        $.ajax({
            url: "http://84.84.245.29:243/login", //? http://84.84.245.29:243 = API-locatie?
            type: "post",
            dataType: 'json',
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").html("post naar API doet t niet :-(");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getPage: getPage
    }
};