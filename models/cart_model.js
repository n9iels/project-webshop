var CartModel = function()
{
    /**
     * Get all cart items
     */
    function getCart(callback)
    {
        console.log("get all cart items from cookies");
    }

    /**
     * Add a product to the cart cookie and database if the user is registered
     */
    function addProduct(id, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/products/" + id,
            type: "get",
            contentType: "json",
            success: function (data) {
                callback(data);

                // Change amount of items
                var amount = $(".cart_button .count").html();
                $(".cart_button .count").html(parseInt(amount) + 1);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    /**
     * Action to perform when remove a product from the cart
     */
    function removeProduct(id, callback)
    {
        console.log(id + ": removed");

        // Change amount of items
        var amount = $(".cart_button .count").html();
        $(".cart_button .count").html(parseInt(amount) - 1);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getCart: getCart,
        addProduct: addProduct,
        removeProduct: removeProduct
    }
};