var OrderViewHelper = function()
{
    // Change the view of the page
    function setView(cart)
    {
        document.title = "Bestellen - AZ Games";

        $("#component").load('/views/order/order.html', function() {
            // Add cart content
            $.each(cart, function(key, value) {
                var product = $("#product").clone();

                $(product).find(".product__title").html(value.title);
                $(product).find(".product__image img").attr("src", value.image);
                $(product).find(".product__price").append(("€ ") + value.price.toFixed(2));

                $("#product__list").append(product);
                $("#product__list").append("<hr />");
            });

            // Remove the first list item, because this item is always empty
            $("#product").first().remove();

            // Set and move total price to end of list
            $("#total").appendTo("#product__list");
            $(".total__price").html($(".cart__total .price").html());

            // Set delivery date (we always deliver in one day)
            var today  = new Date();

            $(".delivery_date").html(today.getDate() + " " + today.toLocaleString("nl-NL", {month: "long"}));
            $(".delivery__calendar__month").html(today.toLocaleString("nl-NL", {month: "short"}).toUpperCase());
            $(".delivery__calendar__day").html(today.getDate());

            // Set user address
            UserHelper.getUserInfo(function(user) {
                $(".adres__name").html(user.first_name + " " + user.insertion + " " + user.surname);
                $(".adres__street").html(user.address.street + " " + user.address.house_number);
                $(".adres__postalcode").html(user.address.postal_code + " " + user.address.city.toUpperCase());
            });
        });
    }

    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        $(document).ready(action);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};