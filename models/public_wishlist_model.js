var PublicWishlistModel = function(user_id)
{
    function getPublicWishlist(callback)
    {
        $.ajax({
            url: "https://localhost:8081/public_wishlist" + "/" + user_id,
            type: "get",
            dataType: 'json',
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }
    
    return 
    {
        getPublicWishlist: getPublicWishlist
    }
};