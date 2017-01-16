var CartViewHelper = function()
{
    // Change the view of the page
    function setView(viewData)
    {
        console.log(viewData);
    }

    /**
     * Make new cart item visiable in the DOM
     * 
     * @param  {array}  item  Product
     */
    function addItem(item)
    {
        var cartItem = $('<div>').html($('.sidebar__content__tmp').html());

        cartItem.find(".cart__item__title").html(item[0].title);
        cartItem.find(".cart__item__price").html(item[0].price);
        cartItem.find(".cart__item__image img").attr("src", item[0].image);
        cartItem.find(".cart__item").attr("data-id", item[0].ean_number)

        $(".cart").append(cartItem);
    }

    /**
     * Load the cart when the page is  rease
     */
    function setActionListener(action)
    {
        $(document).ready(action);
    }

    /**
     * Listener for the Add to cart button
     * 
     * @param  {function} addtoCart  Model callback
     */
    function setAddProductListener(addToCart)
    {
        $("body").on("click", ".addtocart", function (event) {
            event.preventDefault();

            var product_id = $(this).data("id");
            addToCart(product_id);
        })
    }

    /**
     * Listener for remove a product from your cart
     */
    function setRemoveListener(removeProduct) {
        $("body").on("click", ".cart__item__remove", function (event) {
            var cartitem = $(this).parent();
            var product_id = $(this).parent().data("id");

            $(cartitem).addClass("cart__item--removed");
            $(cartitem).on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
                $(this).remove();
            });

            removeProduct(product_id)
        });
    }
    
    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        addItem: addItem,
        setActionListener: setActionListener,
        setAddProductListener: setAddProductListener,
        setRemoveListener: setRemoveListener
    }
};