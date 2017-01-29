var StatsController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Main function, also the start startpoint for a page
    function main()
    {
        ViewHelper.setActionListener(getGraphData);
    }

    function getGraphData()
    {
        Model.getGraphData(setTopTenView);
    }
    function setTopTenView(data)
    {
        ViewHelper.setTopTenView(data);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};