var WishlistController = function(viewHelper, model)
{
    var Model = model;
    var ViewHelper = viewHelper;
    var viewData = {};

    function getWishlist()
    {
        //console.log("WL CONTROLLER: Inside getWishList");
        Model.getWishlist( setView(data) ); // Corrigeer shitzooi hier (heel toevallig ja :p)
    }

    function setView(data)
    {
        ViewHelper.setView(data);
    }

    function main()
    {
        //console.log("WL CONTROLLER: Inside main");
        ViewHelper.setActionListener(getWishlist);
        ViewHelper.setDeleteListener(Model.deleteFromWishlist);
    }
    return {
        main: main
    }
};