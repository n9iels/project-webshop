var FavoritelistModel = function()
{
    function getFavoritelist(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/favoritelist",
            type: "get",
            dataType: 'json',
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

    function addToFavoritelist(viewData, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/favoritelist/" + CookieHelper.getCookie("user_id") /*+ "/" + viewData.ean_number*/,
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                //user_id : viewData.user_id, DOUBT IF NECESSARY :p 
                ean_number : viewData.ean_number
            }),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function(xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function deleteFromFavoritelist(ean, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/favoritelist/" + CookieHelper.getCookie("user_id") + "/" + String(ean), //"https://api.az-games.nl/
            type: "DELETE",
            dataType: 'json',
            // contentType: "application/json; charset=utf-8",
            // data: JSON.stringify(data),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data); //moet data per se meegeven aan callback?
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getFavoritelist: getFavoritelist,
        addToFavoritelist: addToFavoritelist,
        deleteFromFavoritelist: deleteFromFavoritelist
    }
};