var StatsModel = function()
{
    function getTopTenData(begin_date, end_date, callback)
    {
        $.ajax({
            url: "http://localhost:8081/stats/topgames?b_date=" + begin_date + "&e_date=" + end_date,
            type: "GET",
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            contentType: "application/json;",
            success: function (data) {
                console.log("in model succes: " + data)
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function getRevenueData(begin_date, end_date, callback)
    {
        $.ajax({
            url: "http://localhost:8081/stats/rev?b_date=" + begin_date + "&e_date=" + end_date,
            type: "GET",
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            contentType: "application/json;",
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function getUserAmntData(begin_date, end_date, callback)
    {
        $.ajax({
            url: "http://localhost:8081/stats/useramnt?b_date=" + begin_date + "&e_date=" + end_date,
            type: "GET",
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            contentType: "application/json;",
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
        getTopTenData: getTopTenData,
        getRevenueData: getRevenueData,
        getUserAmntData: getUserAmntData
    }

};