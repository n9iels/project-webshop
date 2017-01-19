var WishlistController = function(viewHelper, model)
{
    var Model = model;
    var ViewHelper = viewHelper;
    var viewData = {};

    function getWishlist()
    {
        Model.getWishlist(function (data) { ViewHelper.setView(data); });
    }

    function addToWishlist()
    {
        Model.addToWishlist(viewData, function (data) {
            ViewHelper.setView('/views/wishlist/wishlist.html');
        })
    }

    function main()
    {
        ViewHelper.setActionListener(getWishlist);
        ViewHelper.setActionListener(addToWishlist);
    }
    return {
        main: main
    }
};