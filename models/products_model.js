var ProductsModel = function()
{
    function getPage(callback)
    {
        $.ajax({
            url: "http://84.84.245.29:243/products", //? http://84.84.245.29:243 = API-locatie?
            type: "get",
            dataType: 'json',
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").html("Producten konden niet opgehaald worden :-(");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getPage: getPage
    }
};