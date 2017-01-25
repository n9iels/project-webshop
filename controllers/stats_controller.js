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
        Model.getGraphData(setView);
    }
    function setView(data)
    {
        ViewHelper.setView(data);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};