var DelGameController = function(viewHelper, model)
{
    var ViewHelper = viewHelper;
    var Model = model;

    function main()
    {
        ViewHelper.setActionListener(getGamesBySearch); //initialize html + listen for input in delete-game-search bar
    }

    function getGamesBySearch(args)
    {
        Model.getGamesBySearch(args, showSearchResults);
    }
    function showSearchResults(data)
    {
        ViewHelper.showSearchResults(data, setClickGameListener)
    }
    function setClickGameListener()
    {
        ViewHelper.setClickGameListener();
    }

    return {
        main: main
    }
}