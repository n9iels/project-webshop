var ProductsViewHelper = function()
{
    // Change the view of the page
    function setView(viewData)
    {
        $("#component").html('<div class="col-12"><div class="col-3" id="filters"></div><div class="col-9" id="products"></div></div>');
        // load filters
        $("#filters").load('/views/products/filters.html');

        // load products
        loadProducts(viewData);
    }

    function loadProducts(viewData)
    {
        $("#products").load('views/products/products.html', function () { // waar id = 'component' doe .load......
            $.each(viewData, function(key, value) {
                // Clone product
                var product = $('<div>').append($('#product__list__item').clone());
                
                // Add product info
                $(product).find(".product__title").html(value.title);
                $(product).find(".product__subtitle").append(value.genre +(" | PEGI ") + value.pegi_age +(" | ")+ PlatformLogo(value.platform));
                $(product).find(".product__description").html(CutString(value.description));
                $(product).find(".product__price").append(("€ ")+value.price);
                $(product).find("#buttons__info").attr("href", "product/" + value.ean_number)
                $(product).find(".product__image img").attr("src", value.image);

                $("#product__list").append(product);
            });

            // Remove the first list item, because this item is always empty
            $("#product__list__item").first().remove();
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

    //Platform Logo's
    function PlatformLogo(platformnaam)
    {
        platformnaam = platformnaam.toUpperCase();
        switch (platformnaam)
        {
            case "PS4":
                return "<img src='https://maxcdn.icons8.com/Android_L/PNG/48/Logos/play_station_copyrighted-48.png' />";
            case "PC":
                return "<img src='https://maxcdn.icons8.com/Color/PNG/48/Operating_Systems/windows_logo_copyrighted-48.png' />";
            case "XBOX":
                return "<img src='https://maxcdn.icons8.com/Color/PNG/48/Logos/xbox-48.png' />";
            case "NINTENDO":
                return "<img src='https://maxcdn.icons8.com/Color/PNG/48/Gaming/nintendo-48.png' />";
            default:
                return platformnaam;
        }
    }

    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"
    }

    function setFilterListener(action)
    {
         // Hier het formulier versturen als we op een checkbox drukken
        $("#component").on("change", "input[type=checkbox]", function(event) {
            $("#product_filter").submit();
        });

        ////// Reageer op veranderingen in prijs inputs
        // Update de productenlijst als een waarde in de slider veranderd(alle manieren)
        $("#component").on("change", "input[type=number]", function(event) {
            
            console.log($("#pricemaxbox1").value);


            if ($("#pricemaxbox1").value == null)
            {
                console.log("empty")
                //$("#pricemaxbox1").value = "200";
                $("#pricemaxbox1").hide();
                $("#pricemaxbox2").show();
                console.log($("#pricemaxbox1").value);
            }

            $("#product_filter").submit();
        });
        // Update de productenlijst als een waarde in de slider veranderd(alleen handmatig invoeren)
        $("#component").on("keyup", "input[type=number]", function(event) {
            
            console.log($("#pricemaxbox1").value);


            if ($("#pricemaxbox1").value == null)
            {
                console.log("empty")
                //$("#pricemaxbox1").value = "200";
                $("#pricemaxbox1").hide();
                $("#pricemaxbox2").show();
                console.log($("#pricemaxbox1").value);
            }

            $("#product_filter").submit();
        });

        $("#component").on("submit", "#product_filter", action);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        loadProducts: loadProducts,
        setActionListener: setActionListener,
        setFilterListener: setFilterListener
    }
};