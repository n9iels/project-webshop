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
    if (UserHelper.isAdmin())
    {
        $(".visible-admin").css("display", "inline-block");
        $(".visible-customer").css("display", "inline-block");
        $("#inloggen_text").hide();
    }
    else if (UserHelper.isCustomer())
    {
        $(".visible-customer").css("display", "inline-block");
        $("#inloggen_text").hide();
    }
    else
    {
        $(".visible-admin").hide();
        $(".visible-customer").hide();
        $("#inloggen_text").css("display", "inline-block");
    }
}