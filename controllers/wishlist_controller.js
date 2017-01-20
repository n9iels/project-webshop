var WishlistController = function(viewHelper, model)
{
    var Model = model;
    var ViewHelper = viewHelper;
    var viewData = {};

    function getWishlist()
    {
        //console.log("WL CONTROLLER: Inside getWishList");
        Model.getWishlist(setView); // Corrigeer shitzooi hier (heel toevallig ja :p)
    }

    function setView(data)
    {
        ViewHelper.setView(data);
    }

    function main()
    {
        //console.log("WL CONTROLLER: Inside main");
        ViewHelper.setActionListener(getWishlist);
        ViewHelper.setDeleteListener(deleteFromWishlist);
    }

    function deleteFromWishlist(ean)
    {
        Model.deleteFromWishlist(ean, function()
        {
            alert("Item succesvol verwijderd");
            Router.route("/wishlist");
        });
    }

    return {
        main: main
    }
};