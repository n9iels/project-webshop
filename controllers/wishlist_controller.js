var WishlistController = function(viewHelper, model)
{
    var Model = model;
    var ViewHelper = viewHelper;
    var viewData = {};

    function getWishlist()
    {
        Model.getWishlist(setView);
    }

    function setView(data)
    {
        ViewHelper.setView(data);
    }

    function main()
    {
        ViewHelper.setActionListener(getWishlist);
        ViewHelper.setDeleteListener(deleteFromWishlist);
        ViewHelper.setPublicListener();
    }

    function deleteFromWishlist(ean, div_to_hide)
    {
        Model.deleteFromWishlist(ean, function()
        {
            ViewHelper.hideItem(div_to_hide);
        });
    }

    return {
        main: main
    }
};