var OrdersViewHelper = function()
{
    // Change the view of the page
    function setView(orders)
    {
        document.title ="Bestelgeschiedenis - AZ Games";

        $("#component").load('/views/orders/orders.html', function() {
            $.each(orders, function(key, value) {
                // Clone product
                var order = $('#single_order').clone();

                // Date
                var date = new Date(value.order_date);

                // Format shipping method
                switch(value.shipping_method)
                {
                    case "deliver":
                        value.shipping_method = "Bezorgen (via PostNL)";
                        break;
                    case "pickup":
                        value.shipping_method = "Ophalen";
                        break;
                }
                
                // Add product info
                $(order).find(".order__number").html(value.order_number);
                $(order).find(".order__date").html(date.getDate() + " " + date.toLocaleString("nl-NL", {month: "long"}) + " " + date.getFullYear())
                $(order).find(".order__price").html("€ " + value.total_order_price);
                $(order).find(".order__paymentmethod").html(value.payment_method);
                $(order).find(".order__shippping").html(value.shipping_method);
                $(order).find(".order__link a").attr("href", "/order/" + value.order_number);

                $("#orders_body").append(order);
            });

            // Remove the first list item, because this item is always empty
            $("#single_order").first().remove();
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