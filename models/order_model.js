var OrderModel = function()
{
    function getOrderInformation(callback)
    {
        var cart = CookieHelper.getCookie('cart');

        if (cart != undefined && cart != "")
        {
            callback(JSON.parse(cart));
        }
        else
        {
            callback([]);
        }
    }

    function saveOrder(orderData, callback)
    {
        // Append data form other sources
        orderData.status         = "paid";
        orderData.btw_percentage = 21;
        orderData.order_date     = new Date();
        orderData.delivery_costs = 3.95;
        orderData.cart           = JSON.parse(CookieHelper.getCookie("cart"));

        $.ajax({
            url: "https://api.az-games.nl/orders",
            type: "post",
            dataType: 'json',
            data: JSON.stringify(orderData),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data)
            {
                CookieHelper.deleteCookie("cart");
                callback();
            },
            error: function (xhr, status, error) {
                console.log("someting went wrong");
            }
        });

    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getOrderInformation: getOrderInformation,
        saveOrder: saveOrder
    }
};