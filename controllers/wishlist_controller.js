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

    function main()
    {
        //console.log("WL CONTROLLER: Inside main");
        ViewHelper.setActionListener(getWishlist);
    }
    return {
        main: main
    }
};