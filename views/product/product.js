var ViewHelper = function()
{
    // Change the view of the page
    function setView(viewData)
    {
        $("#component").load('views/product/product.html', function () { 
            $.each(viewData, function(key, value) {
                // Clone product
                var product = $('<div>').append($('#product__list__item').clone());
                
                // Add product info
                $(product).find(".product__title").html(value.ean_number);
                
                // Determin what we have to do with the rows
                if (key % 4 == 0 && key == 0)
                {
                    $("#product__list").append("<div class='row'>" + product.html());
                }
                else if (key % 4 == 0)
                {
                    $("#product__list").append("</div><div class='row'>" + product.html());
                }
                else
                {
                    $("#product__list div.row").last().append(product.html());
                }
            });

            // Close the last row
            $("</div>").appendTo("#product__list");

            // Remove the first list item, because this item is always empty
            $("#product__list__item").first().remove();
        });
    }

    // ActionListener that executes actions on specific events
    function setActionListener(eventHandler)
    {
        $(document).ready(eventHandler);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};