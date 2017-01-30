var OrdersModel = function()
{
    /**
     * Get all orders
     */
    function getOrders(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/orders",
            type: "GET",
            dataType: 'json',
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
        getOrders: getOrders,
    }
};