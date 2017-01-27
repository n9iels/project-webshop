var OrderViewHelper = function()
{
    // Change the view of the page
    function setView(order)
    {
        document.title ="Bestelgeschiedenis - AZ Games";

        $("#component").load('/views/order/order.html', function() {
            // Date
            var date = new Date(order.order_date);

            // Format shipping method
            switch(order.shipping_method)
            {
                case "deliver":
                    order.shipping_method = "Bezorgen (via PostNL)";
                    break;
                case "pickup":
                    order.shipping_method = "Ophalen";
                    break;
            }

            // Fill order info
            $(".order__date").html(date.getDate() + " " + date.toLocaleString("nl-NL", {month: "long"}) + " " + date.getFullYear())
            $(".order__paymentmethod").html(order.payment_method);
            $(".order__shippping").html(order.shipping_method);

            // Add products
            $.each(order.products, function(key, value) {
                var product = $("#product").clone();

                $(product).find(".product__title").html(value.title);
                $(product).find(".product__image img").attr("src", value.image);
                $(product).find(".product__amount").html("<b>Aantal:</b> " + value.amount)
                $(product).find(".product__price").append(("€ ") + value.price.toFixed(2));

                $("#product__list").append(product);
                $("#product__list").append("<hr />");
            });

            // Remove the first list item, because this item is always empty
            $("#product").first().remove();

            // Set and move total price to end of list
            $("#total").appendTo("#product__list");
            $(".total__price").html("€ " + order.total_order_price)
        });
    }

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