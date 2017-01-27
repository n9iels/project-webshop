$(document).ready(function()
{
    $(".sidebar-toggle").click(function (e)
    {
        // Prevent default click action
        e.preventDefault();

        // Id of the sidebar to toggle
        var sidebar = $(this).data("sidebar");

        toggleSidebar($("#" + sidebar));
    });

    $(".sidebar__close").click(function (e) {
        toggleSidebar($(this).parent().parent());
    })

    $(".overlay").click(function (e) {
        toggleSidebar($(".sidebar"), true);
    });

    function toggleSidebar(sidebar, forceClose)
    {
        if (forceClose)
        {
            $(sidebar).removeClass("sidebar--open");   
        }
        else
        {
            $(sidebar).toggleClass("sidebar--open");
        }

        $(".overlay").toggleClass("overlay--visible");
        $("body").toggleClass("sidebar--open");
    }
});