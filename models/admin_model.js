var AdminModel = function()
{
    // function getUsers(callback)
    // {
    //     console.log("in getUserIds");
    //     $.ajax({
    //         url: "http://localhost:8081/admin", //"https://api.az-games.nl/users",
    //         type: "GET",
    //         dataType: 'json',
    //         headers: {
    //             "Authorization": "Bearer " + getCookie("access_token")
    //         },
    //         success: function (data) {
    //             callback(data);
    //         },
    //         error: function (xhr, status, error) {
    //             $("#component").load("/views/error/error.html");
    //         }
    //     });
    // }


    // function getUserInfo(clicked, callback)
    // {
    //     console.log("in getUserInfo");

    //     var email = $(clicked).closest('tr')[0].cells[3].innerHTML;
    //     email = String(email);

    //     // get userinfo
    //     $.ajax({
    //         url: "http://localhost:8081/admin/" + email, //"https://api.az-games.nl/
    //         type: "GET",
    //         //data: "email=" + email,
    //         dataType: 'json',
    //         headers: {
    //             "Authorization": "Bearer " + getCookie("access_token")
    //         },
    //         success: function (data) {
    //             callback(clicked, data);
    //         },
    //         error: function (xhr, status, error) {
    //             $("#component").load("/error.html");
    //         }
    //     });
    // }

    // // Return the methods that can be used by other programs (the controller in this case)
    // return {
    //     getUserIds: getUserIds,
    //     getUserInfo: getUserInfo
    // }


    function getPage(callback)
    {
        $.ajax({
            url: "http://localhost:8081/admin", //"https://api.az-games.nl/
            type: "GET",
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

            if (cookie[0].trim() == name)
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