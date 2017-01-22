var AdminUserModel = function(id)
{
    function getPage(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/admin/users/" + id, //"https://api.az-games.nl/
            type: "GET",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data[0]);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function saveUserInfo(data, callback)
    {
        // Modify data before sending (also convert to UTC)
        data.date_of_birth = new Date(Date.UTC(data.jaar, data.maand, data.dag));

        // Remove year, month and day
        delete data.jaar;
        delete data.maand;
        delete data.dag;

        $.ajax({
            url: "http://localhost:8081/admin/users/" + data.user_id, //"https://api.az-games.nl/
            type: "PATCH",
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function deleteUser(user_id, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/admin/users/" + user_id, //"https://api.az-games.nl/
            type: "DELETE",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback();
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getPage: getPage,
        saveUserInfo: saveUserInfo,
        deleteUser: deleteUser
    }
}