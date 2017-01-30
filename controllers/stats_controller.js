var StatsController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Main function, also the start startpoint for a page
    function main()
    {
        ViewHelper.setActionListener(getGraphData);
        ViewHelper.setTopTenChangeListener(getChangedTopTen);
    }

    function getGraphData()
    {
        Model.getGraphData("quarter", setTopTenView);
    }
    function setTopTenView(range, data)
    {
        ViewHelper.setTopTenView(range, data);
    }

    function getChangedTopTen(range)
    {
        Model.getGraphData(range, setTopTenView);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};