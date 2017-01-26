var FavoriteListController = function(viewHelper, model)
{
    var Model = model;
    var ViewHelper = viewHelper;
    var viewData = {};

    function getFavoritelist()
    {
        Model.getFavoritelist(setView);
    }

    function setView(data)
    {
        ViewHelper.setView(data);
    }

    function main()
    {
        ViewHelper.setActionListener(getFavoritelist);
        ViewHelper.setDeleteListener(deleteFromFavoritelist);
    }

    function deleteFromFavoritelist(ean, div_to_hide)
    {
        Model.deleteFromFavoritelist(ean, function()
        {
            ViewHelper.hideItem(div_to_hide);
        });
    }

    return {
        main: main
    }
};