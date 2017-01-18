var WishlistController = function(viewHelper, model)
{
    var Model = model;
    var ViewHelper = viewHelper;

    function getWishlist()
    {
        Model.getWishlist(function (data) { ViewHelper.setView(data); });
    }



    function main()
    {
        ViewHelper.setActionListener(getWishlist);
    }
    return {
        main: main
    }
};