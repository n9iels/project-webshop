var WishlistViewHelper = function()
{
    //change view of page
    function setView(viewData)
    {
        //console.log("WL VIEW: Inside setView");
        document.title = "Wishlist - AZ Games";
        $("#component").html('<div class="col-12"><div class="col-12" id="wishlist"></div></div>');

        loadWishlist(viewData);
    }

    function loadWishlist(viewData)
    {
        //console.log("WL VIEW: Inside loadWishList");
        $("#wishlist").load('/views/wishlist/wishlist.html', function ()
            {
                var current = 0

                // USER FIRST NAME
                //$(wish__list__headtitle).find("wish__list__headtitle").append(user_id);
                //console.log(viewData.first_name);

                $.each(viewData, function(key, value) {
                    // Clone product
                    var wish__list__item = $('<div>').append($('#wish__list__item').clone());

                    // Add product info
                    current = current +1
                    $(wish__list__item).find("#delete_btn").attr("data-id", value.ean_number);
                    $(wish__list__item).find(".wish__list__id").append(current);
                    $(wish__list__item).find(".wish__list__image img").attr("src", value.image);
                    $(wish__list__item).find(".wish__list__title").html(value.title);
                    $(wish__list__item).find(".wish__list__price").append(("€ ")+value.price);
                    $(wish__list__item).find(".wish__list__platform").append(PlatformLogo(value.platform));
                    $(wish__list__item).find(".wish__list__availability").append(BeschikbaarheidKleur(value.stock));
                    $(wish__list__item).find(".wish__list__likebutton").append();

                    $("#wish__list").append(wish__list__item);
            });

            // Remove the first list item, because this item is always empty
            $("#wish__list__item").first().remove();
        });
    }
    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"       
    }

    function setDeleteListener(action)
    {
        $("#component").off().on("click", "#delete_btn", function(e)
        {
            e.preventDefault();
            var ean = $(this).data("id");
            var div_to_hide = $(this).closest(".row");
            action(ean, div_to_hide);
        } );
    }

    return {
        setView: setView,
        loadWishlist: loadWishlist,
        setActionListener: setActionListener,
        setDeleteListener: setDeleteListener
    }
}