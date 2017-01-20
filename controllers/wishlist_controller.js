var WishlistController = function(viewHelper, model)
{
    var Model = model;
    var ViewHelper = viewHelper;
    var viewData = {};

    function getWishlist()
    {
        //console.log("WL CONTROLLER: Inside getWishList");
        Model.getWishlist(function (data) { ViewHelper.setView(data); }); // Corrigeer shitzooi hier (heel toevallig ja :p)
    }

    function addToWishlist()
    {
        //console.log("WL CONTROLLER: Inside addToWishList");
        Model.addToWishlist(viewData, function (data) {
            ViewHelper.setView('/views/wishlist/wishlist.html');
        })
    }

    function main()
    {
        //console.log("WL CONTROLLER: Inside main");
        ViewHelper.setActionListener(getWishlist);
        ViewHelper.setActionListener(addToWishlist);
    }
    return {
        main: main
    }
};