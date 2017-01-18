//Platform Logo's
function PlatformLogo(platformnaam)
{
    platformnaam = platformnaam.toUpperCase();
    switch (platformnaam)
    {
        case "PS4":
            return "<img src='/resources/images/icons/ps.png' />";
        case "PC":
            return "<img src='/resources/images/icons/windows.png' />";
        case "XBOX":
            return "<img src='/resources/images/icons/xbox.png' />";
        case "NINTENDO":
            return "<img src='/resources/images/icons/nintendo.png' />";
        default:
            return platformnaam;
    }
}

function BeschikbaarheidKleur(stockvalue){
    
        if (stockvalue<=0) {
            return "<img src='/resources/images/availability/buttonred.png' />";
        } else if (stockvalue>=1) {
            return "<img src='/resources/images/availability/buttongreen.png' />";
        } else {
            return stockvalue
        }
}

$(document).on("click", "span.like", function (event) {
    $(this).toggleClass("like--active");
});