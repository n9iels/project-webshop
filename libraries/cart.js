$(document).ready(function()
{
    $(".cart__item__remove").click(function(e) {
        var cartitem = $(this).parent();

        $(cartitem).addClass("cart__item--removed");
        $(cartitem).on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
            console.log("remove")
            $(this).remove();
        })
    });
});