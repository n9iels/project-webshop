var ProductViewHelper = function()
{
    // Change the view of the page
    function setView(viewData)
    {
        $("#component").html('<div class="col-12"><div class="col-3" id="filters"></div><div class="col-9" id="products"></div></div>');

        loadProduct(viewData);
    }

    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        // user fills in login form
        // user presses 'login'

        // if user presses 'login', perform action (make controller send email and password to API)
        $("#component").on("submit", "#loginform", action);
    }

    function loadProduct(viewData)
    {
        $("#product").load('views/single_product/single_product.html', function () { // waar id = 'component' doe .load......
            $.each(viewData, function(key, value) {
                // Clone product
                var product = $('<div>').append($('#product__list__item').clone());
                
                // Add product info
                $(product).find(".product__title").html(value.title);
                $(product).find(".product__price").html(value.price);
                $(product).find(".product__image img").attr("src", value.image);
                
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


    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};