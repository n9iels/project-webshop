var ProductsViewHelper = function()
{
    // Change the view of the page
    function setView(viewData)
    {
        document.title = "Producten - AZ Games";

        $("#component").html('<div class="col-12"><div class="col-3" id="filters"></div><div class="col-9" id="products"></div></div>');
        // load filters
        $("#filters").load('/views/products/filters.html');

        // load products
        loadProducts(viewData);
    }

    function loadProducts(viewData)
    {
        $("#products").load('/views/products/products.html', function () { // waar id = 'component' doe .load......
            if (viewData.data != undefined && viewData.data != "")
            {
                $.each(viewData.data, function(key, value) {
                    // Clone product
                    var product = $('<div>').append($('#product__list__item').clone());
                    
                    // Add product info
                    $(product).find(".product__title").html(value.title);
                    $(product).find(".product__subtitle").append(value.genre +(" | PEGI ") + value.pegi_age +(" | ")+ PlatformLogo(value.platform));
                    $(product).find(".product__description").html(CutString(value.description));
                    $(product).find(".product__price").append(("€ ")+value.price.toFixed(2));
                    $(product).find("#buttons__info, .product__image a, .product__title").attr("href", "product/" + value.ean_number);
                    $(product).find(".product__image img").attr("src", value.image);
                    $(product).find(".addtocart").attr("data-id", value.ean_number);
                    $(product).find(".product__subtitle img").attr("data-tooltip", value.platform);
                    
                    $("#product__list").append(product);
                });

                // Build pagination
                if (viewData.pages.last == undefined)
                {
                    viewData.pages.last = viewData.pages.prev + 1;
                }

                for (i = 1; i < viewData.pages.last + 1; i++)
                {
                    var pagination = $("#pagination__item").clone();

                    $(pagination).find(".pagination__link").html(i);

                    if (i == viewData.pages.next - 1 || i == viewData.pages.prev + 1)
                    {
                        $(pagination).find(".pagination__link").addClass("pagination__link--active");
                    }

                    $("#pagination__items").append(pagination);
                }
            }
            else
            {
                $("#products").html("<div class='message message--info'><b>Helaas..</b><br />Er zijn geen games gevonden die voldoen aan de gekozen filters.</div>")
            }

            // Remove the first list item, because this item is always empty
            $("#product__list__item").first().remove();
            $("#pagination__item").first().remove();
        });
    }

    //Show more/less
    function CutString(text){
        var ShowAmount = 50;
        var WordsArray = text.split(" ");
        if(WordsArray.length>ShowAmount){
            var ShortString = "";
            for(i=0; i<ShowAmount; i++){
                ShortString += WordsArray[i] + " ";
            }
            return ShortString+"...";
        }else{
            return text;
        }
    };

    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"
    }

    function setFilterListener(action)
    {
         // Hier het formulier versturen als we op een checkbox drukken
        $("#component").on("change", "input[type=checkbox]", function(event) {
            $("#pagefilter").val(0);
            refreshProducts();
            $("#product_filter").submit();
        });

        // Update de productenlijst als een waarde in de slider veranderd(alle manieren)
        $("#component").on("change keyup", "input[name=price-max], input[name=price-min]", function(event) {
            if($("#pricemin").val() == null) {
                $("#pricemin").val(0);
            }
            else
            {
                $("#pagefilter").val(0);
                refreshProducts();
                $("#product_filter").submit();
            }
        });

        $("#component").on("click", ".pagination__link", function(event)
        {
            $("#pagefilter").val($(this).html());
            refreshProducts();
            $("#product_filter").submit();
            $("#component").on("submit", "#product_filter", action);
        });
        $("#component").on("submit", "#product_filter", action);
    }

    function refreshProducts()
    {
        window.scrollTo(0, 0);
        $("#products").html('<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div> </div>');
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        loadProducts: loadProducts,
        setActionListener: setActionListener,
        setFilterListener: setFilterListener,
    }
};