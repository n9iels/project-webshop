var Model = function()
{
    function getPage(callback)
    {
        $.ajax({
            url: "http://84.84.245.29:243/products",
            type: "get",
            dataType: 'json',
            success: function (data) {
                callback(data);
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getPage: getPage
    }
};