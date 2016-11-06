$(document).ready(function()
{
    $(".sidebar-toggle").click(function (e)
    {
        // Prevent default click action
        e.preventDefault();

        var sidebar = $(this).data("sidebar");
        $("#" + sidebar).toggleClass("sidebar--open");
        $(".overlay").toggleClass("overlay--visible");
    });

    $(".sidebar__close").click(function (e) {
        var sidebar = $(this).parent().parent();
        $(sidebar).toggleClass("sidebar--open");
        $(".overlay").toggleClass("overlay--visible");
    })

    $(".overlay").click(function (e) {
        $(".sidebar").toggleClass("sidebar--open");
        $(".overlay").toggleClass("overlay--visible");
    })
});