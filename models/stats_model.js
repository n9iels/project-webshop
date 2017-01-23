var StatsModel = function()
{
    function getGraphs(callback)
    {
        $.ajax({
            url: "http://localhost:8081/stats",
            type: "GET",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                console.log("data from ajax:");
                console.log(data);
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getGraphs: getGraphs
    }

};