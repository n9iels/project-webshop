var WishlistModel = function()
{
    function getWishlist(callback)
    {
        //console.log("WL MODEL: Inside getWishList");
        $.ajax({
            url: "https://api.az-games.nl/wishlist",
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

    function addToWishlist(viewData, callback)
    {
        //console.log("WL MODEL: Inside addToWishList");
        $.ajax({
            url: "https://api.az-games.nl/wishlist/" + CookieHelper.getCookie("user_id") /*+ "/" + viewData.ean_number*/,
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                wishlist_id : viewData.wishlist_id,
                //ean_number : viewData.ean_number
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

    function deleteFromWishlist(ean, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/wishlist/" + CookieHelper.getCookie("user_id") + "/" + String(ean), //"https://api.az-games.nl/
            type: "DELETE",
            dataType: 'json',
            // contentType: "application/json; charset=utf-8",
            // data: JSON.stringify(data),
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

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getWishlist: getWishlist,
        addToWishlist: addToWishlist,
        deleteFromWishlist: deleteFromWishlist
    }
};