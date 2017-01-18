var WishlistModel = function()
{
    function getWishlist(callback)
    {
        $.ajax({
            url: "http://localhost:8081/wishlist/" + CookieHelper.getCookie("user_id"),
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

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getWishlist: getWishlist
    }
};