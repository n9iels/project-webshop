var PublicWishlistController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;

    function getPublicWishlist()
    {
        Model.getPublicWishlist(setView);
    }
    
    function setView(data)
    {
        ViewHelper.setView(data);
    }

    function main()
    {
        console.log("main werkt");
        ViewHelper.setActionListener(getPublicWishlist);
        //ViewHelper.getPage(getPublicWishlist);
    }

    return {
        main: main
    }
};