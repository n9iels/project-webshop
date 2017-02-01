var StatsController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Main function, also the startpoint for a page
    function main()
    {
        ViewHelper.setActionListener(getTopTenData, getRevenueData, getUserAmntData); //
        ViewHelper.setRangeChangeListeners(getTopTenData, getRevenueData, getUserAmntData);
        ViewHelper.setGraphSelectListener(getTopTenData, getRevenueData, getUserAmntData);
    }

    // functions for getting data
    function getTopTenData(begin_date, end_date) //dateformat = "yyyy-mm-dd"
    {
        Model.getTopTenData(begin_date, end_date, showTopGamesGraph);
    }
    function getRevenueData(begin_date, end_date)
    {
        Model.getRevenueData(begin_date, end_date, showRevenueGraph);
    }
    function getUserAmntData(begin_date, end_date)
    {
        Model.getUserAmntData(begin_date, end_date, showUserAmntGraph);
    }

    // functions for showing graphs using the gathered data
    function showTopGamesGraph(data)
    {
        ViewHelper.showTopGamesGraph(data);
    }
    function showRevenueGraph(begin_date, end_date, data)
    {
        ViewHelper.showRevenueGraph(begin_date, end_date, data);
    }
    function showUserAmntGraph(begin_date, end_date, data)
    {
        ViewHelper.showUserAmntGraph(begin_date, end_date, data);
    }

    // function getGraphData(range)
    // {
    //     Model.getGraphData(range, showGraphs);
    // }
    // function showGraphs(range, data)
    // {
    //     ViewHelper.showGraphs(range, data);
    // }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};