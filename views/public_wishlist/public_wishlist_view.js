var PublicWishlistViewHelper = function()
{
    //change view of page
    function setView(viewData)
    {

        $.each(viewData, function(key, value)
        {
            if (value.is_public = 0)
            {
                $("#component").load("/error/error.html");
            }
            else if(value.is_public = 1)
            {
                loadPublicWishlist(viewData);
            }
            else
            {
                console.log("Onverwachte waarde... value.ispublic=" + value.is_public);
            }
        })

        //console.log("WL VIEW: Inside setView");
        document.title = "Wishlist - AZ Games";
        $("#component").html('<div class="col-12"><div class="col-12" id="wishlist"></div></div>');

        loadWishlist(viewData);
    }

    function loadPublicWishlist()
    {
        $("#wishlist").load('/views/wishlist/wishlist.html', function ()
            {
                // add all wishlist items to html
                var current = 0;
                var count = 0;
                $.each(viewData, function(key, value) {

                // Clone product
                var wish__list__item = $('<div>').append($('#wish__list__item').clone());

                // Add product info
                current = current +1
                $(wish__list__item).find(".wish__list__id").append(current);
                $(wish__list__item).find(".wish__list__image img").attr("src", value.image);
                $(wish__list__item).find(".wish__list__title").html(value.title);
                $(wish__list__item).find(".wish__list__price").append(("€ ")+value.price);
                $(wish__list__item).find(".wish__list__platform").append(PlatformLogo(value.platform));
                $(wish__list__item).find(".wish__list__availability").append(BeschikbaarheidKleur(value.stock));
                //$(wish__list__item).find(".wish__list__likebutton").append();
                $(wish__list__item).find("#delete_btn").attr("data-id", value.ean_number);
                $(wish__list__item).find("#cart_btn").attr("data-id", value.ean_number);

                $("#wish__list").append(wish__list__item);
                count++;
            });

            if (count == 0) {
                $("#public_wishlist_error_message").show();
            }

            // Remove the first list item, because this item is always empty
            $("#wish__list__item").first().remove();
        });
    }

    function setActionListener(action)
    {
        $(document).ready(function() { action }); // if 'document ready' perform "action"
    }

    function setPublicListener(action)
    {
        $("#component").on("change", "#publicator", action);
    }

    return {
        setView: setView,
        loadPublicWishlist: loadPublicWishlist,
        setActionListener: setActionListener,
        setPublicListener: setPublicListener
    }


}