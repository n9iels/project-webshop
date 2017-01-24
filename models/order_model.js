var OrderModel = function()
{
    function getOrderInformation(callback)
    {
        var cart = CookieHelper.getCookie('cart');

        if (cart !== undefined || cart !== "")
        {
            callback(JSON.parse(cart));
        }
        else
        {
            callback([]);
        }
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getOrderInformation: getOrderInformation
    }
};