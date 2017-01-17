var AdminModel = function()
{
    function getUserIds(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/users",
            type: "get",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getPage: getPage
    }
};