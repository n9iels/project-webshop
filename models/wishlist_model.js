var WishlistModel = function()
{
    function getWishlist(callback) // Corrigeer url!!!
    {
        //console.log("WL MODEL: Inside getWishList");
        $.ajax({
            url: "http://localhost:8081/wishlist",
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
            url: "http://localhost:8081/wishlist/" + CookieHelper.getCookie("user_id") /*+ "/" + viewData.ean_number*/,
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

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getWishlist: getWishlist,
        addToWishlist: addToWishlist
    }
};