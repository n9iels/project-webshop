var PageModel = function()
{
    function getPage(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/user",
            type: "get",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function getCookie(name)
    {
        var cookies = document.cookie.split(';');

        for (var i = 0; i < cookies.length; i++)
        {
            var cookie = cookies[i].split("=");

            if (cookie[0] == name)
            {
                return cookie[1];
            }
        }
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getPage: getPage
    }
};