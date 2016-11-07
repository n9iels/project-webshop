var ProductModel = function(ean)
{
    function GetProductInfo(callback)
    {
        $.ajax({
            url: "http://84.84.245.29:243/products/" + ean, //http://localhost:8080/user/register
            type: "get",
            dataType: 'json',
            success: function (data) {
                // let controller resume with stuff
                callback(data[0]);
                console.log(data); //test
            },
            error: function (xhr, status, error) {
                console.log("something wrong with API, BITCH");



                //$("#regi_api_error_message").show();

                //$("#component").html("error function");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        GetProductInfo: GetProductInfo
    }
};