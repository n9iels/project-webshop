var StatsModel = function()
{
    function getGraphData(range, callback)
    {
        $.ajax({
            url: "http://localhost:8081/stats/topgames",
            type: "GET",
            dataType: 'json',
            data: JSON.stringify({range: range}),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getGraphData: getGraphData
    }

};