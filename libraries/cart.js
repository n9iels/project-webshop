$(document).ready(function()
{
    $(".cart__item__remove").click(function(e) {
        var cartitem = $(this).parent();

        $(cartitem).addClass("cart__item--removed");
        $(cartitem).on("transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd", function() {
            $(this).remove();
        })
    });
});