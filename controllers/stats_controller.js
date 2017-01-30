var StatsController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Main function, also the start startpoint for a page
    function main()
    {
        ViewHelper.setActionListener(getGraphData);
        ViewHelper.setRangeChangeListener(getGraphData);
    }

    function getGraphData(range)
    {
        Model.getGraphData(range, showGraphs);
    }
    function showGraphs(range, data)
    {
        ViewHelper.showGraphs(range, data);
    }
    
    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};