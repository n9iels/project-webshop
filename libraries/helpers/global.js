var Router       = new Router();
var CookieHelper = new CookieHelper();
var UserHelper   = new UserHelper();

var WishlistHelper = new WishlistHelper();

function showLoadScreen()
{
    $("#component").html('<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div> </div>');
}

function onLoadPage()
{
    if (UserHelper.isCustomer())
    {
        $("#inloggen_text").hide();
        $("#uitloggen_text").show();
    }

    if (UserHelper.isAdmin())
    {
        $(".visible-admin").css("display", "inline-block");
    }
    else
    {
        $(".visible-admin").hide();
    }
}