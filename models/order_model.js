var OrderModel = function()
{
    function getOrderInformation(callback)
    {
        console.log("order information")
        callback([]);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getOrderInformation: getOrderInformation
    }
};