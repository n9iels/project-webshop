//Platform Logo's
function PlatformLogo(platformnaam)
{
    platformnaam = platformnaam.toUpperCase();
    switch (platformnaam)
    {
        //platforms
        case "PS1":
            return "<img src='/resources/images/icons/ps1.png' />";
        case "PS3":
            return "<img src='/resources/images/icons/ps3.png' />";
        case "PS2":
            return "<img src='/resources/images/icons/ps2.png' />";
        case "PS4":
            return "<img src='/resources/images/icons/ps4.png' />";
        case "PC":
            return "<img src='/resources/images/icons/windows.png' />";
        case "XBOX":
            return "<img src='/resources/images/icons/xbox.png' />";
        case "NES":
            return "<img src='/resources/images/icons/nes.png' />";
        case "N64":
            return "<img src='/resources/images/icons/n64.png' />";
        case "NINTENDO SWITCH":
            return "<img src='/resources/images/icons/switch.png' />";
        case "NGC":
            return "<img src='/resources/images/icons/ngc.png' />";
        default:
            return platformnaam;

        //publishers
        case "NINTENDO":
            return "<img src='/resources/images/publishers/nintendo.png' />";
        case "UBISOFT":
            return "<img src='/resources/images/publishers/ubisoft.png' />";
        case "ELECTRONIC ARTS":
            return "<img src='/resources/images/publishers/ea.png' />";
        case "SONY":
            return "<img src='/resources/images/publishers/sony.png' />";
        case "ROCKSTAR":
            return "<img src='/resources/images/publishers/rockstar.png' />";
        case "SEGA":
            return "<img src='/resources/images/publishers/sega.png' />";
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

// Van Wishlist pagina
$(document).on("click", "span.like", function (event) {
    $(this).toggleClass("like--active");
});

// Van Single Product pagina
$(document).on("click", "span.single_like", function (event) {
    $(this).toggleClass("single_like--active");
});
var Router = function ()
{
    baseUrl = "project-webshop/";

    function route(url, history)
    {
        if (isInternal(url) == false)
        {
            return;
        }

        var particles = getParticles(url);

        switch(particles[0])
        {
            case "":
            case "index.html":
            case "products":
                new ProductsController(new ProductsViewHelper(), new ProductsModel()).main();
                break;
            case "product":
                new ProductController(new ProductViewHelper(), new ProductModel(particles[1])).main();
                break;
            case "register":
                new RegisterController(new RegisterViewHelper(), new RegisterModel()).main();
                break;
            case "login":
                new LoginController(new LoginViewHelper(), new LoginModel()).main();
                break;
            case "logout":
                new LogoutController(new LogoutViewHelper(), new LogoutModel()).main();
                break;
            case "register":
                new RegisterController(new RegisterViewHelper(), new RegisterModel()).main();
                break;
            case "resetpassword":
                new ResetPasswordController(new ResetPasswordViewHelper(), new ResetPasswordModel()).main();
                break;
            case "wishlist":
                new WishlistController(new WishlistViewHelper(), new WishlistModel()).main();
                break;
            case "admin":
                new AdminController(new AdminViewHelper(), new AdminModel()).main();
                break;
            case "admin_user":
                new AdminUserController(new AdminUserViewHelper(), new AdminUserModel(particles[1])).main();
                break;
            case "public_wishlist":
                new PublicWishlistController(new PublicWishlistViewHelper(), new PublicWishlistModel(particles[1])).main();
                break;
            default:
                new ErrorController(new ErrorViewHelper()).main();
                break;
        }

        if (history != false)
        {
            if (url != "" && typeof url === 'string')
            {
                writeHistory({}, "A-Z Games", url);

                 // Load screen
                showLoadScreen();
                
                // Scroll to top of page
                window.scrollTo(0, 0);
            }
        }
    }

    function isInternal(url)
    {
        if (url.indexOf("http") != -1 || url.indexOf("https") != -1 || url.indexOf("www") != -1)
        {
            window.location = url;
            
            return false;
        }

        return true;
    }

    function getParticles(url)
    {
        // Remove the first /
        if (url.indexOf("/") == 0)
        {
            url = url.substring(1);
        }

        // If there is a base url set, remove the base url
        if (this.baseUrl != null && url.indexOf(this.baseUrl) != -1)
        {
            url = url.substring(url.indexOf(this.baseUrl) + this.baseUrl.length);
        }

        return url.split(/\/(.+)?/)
    }

    function writeHistory(object, title, url)
    {
        window.history.pushState(object, title, url);
    }

    return {
        route: route
    }
}
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
        toggleSidebar($(".sidebar"));
    });

    function toggleSidebar(sidebar)
    {
        $(sidebar).toggleClass("sidebar--open");
        $(".overlay").toggleClass("overlay--visible");
        $("body").toggleClass("sidebar--open");
    }
});
$(document).on("mouseenter", ".hasTooltip", function(event)
{
    // Get content and position
    var content  = $(this).data("tooltip");
    var position = getOffset(this);

    // Create tooltip
    var tooltip = $("<div class='tooltip'>" + content + "</div>");
    $("body").append(tooltip);

    // Calculate new positions
    position.top  = position.top + $(this).outerHeight();
    position.left = position.left + ($(this).outerWidth() / 2) - ($(".tooltip").outerWidth() / 2);

    // Change position of tooltip
    tooltip.css("left", position.left);
    tooltip.css("top", position.top);
});

$(document).on("mouseleave", ".hasTooltip", function(event) {
    $("body").find(".tooltip").remove();
});

function getOffset(el)
{
    el = el.getBoundingClientRect();
    
    return {
        left: el.left + window.scrollX,
        top: el.top + window.scrollY
  }
}
/**
 * Helper for finding, creating and deleting cookies
 */
function CookieHelper()
{
    /**
     * Get the value of a cookie
     * 
     * @param {string} name  Name of the cookie
     * 
     * @return {string}
     */
    this.getCookie = function(name)
    {
        var cookies = document.cookie.split(';');

        for (var i = 0; i < cookies.length; i++)
        {
            var cookie = cookies[i].split("=");

            if (cookie[0].trim() == name)
            {
                return cookie[1];
            }
        }
    }

    /**
     * Create a cookie
     * 
     * @param {string} name   Name of the cookie
     * @param {string} value  Value of the cookie
     * 
     * @return {void}
     */
    this.createCookie = function(name, value)
    {
        document.cookie = name + '=' + value + ';';
    }

    /**
     * Delete a cookie and it's value
     * 
     * @param {string} name  Name of the cookie
     * 
     * @return {void}
     */
    this.deleteCookie = function(name)
    {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}

var Router       = new Router();
var CookieHelper = new CookieHelper();
var UserHelper     = new UserHelper();
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
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            if (this.value != "")
            {
                o[this.name].push(this.value);
            }
        } else {
            if (this.value != "")
            {
                o[this.name] = this.value || '';
            }
        }
    });
    return o;
};
/**
 * Helper for user related stuff
 */
function UserHelper()
{
    /**
     * Check if the user is a guest (not logged in)
     */
    this.isLogedIn = function()
    {
        var accessToken = CookieHelper.getCookie("access_token");
        
        if (accessToken != undefined && accessToken != "")
        {
            return true;
        }

        return false;
    }

    /**
     * Check if the current user is a customer
     */
    this.isCustomer = function()
    {
        if (UserHelper.isLogedIn())
        {
            var usertype = this.decodeToken().usertype;

            if (usertype == "customer" || usertype == "admin")
            {
                return true;
            }
        }

        return false;
    }

    /**
     * Check if the current user is admin
     */
    this.isAdmin = function()
    {
        if (UserHelper.isLogedIn())
        {
            var usertype = this.decodeToken().usertype;

            if (usertype == "admin")
            {
                return true;
            }
        }

        return false;
    }

    /**
     * Decode the JWT token
     */
    this.decodeToken = function()
    {
        var accessToken = CookieHelper.getCookie("access_token");

        if (accessToken != undefined && accessToken  != "")
        {
            var payload = accessToken.split(".")[1];

            return JSON.parse(atob(payload));
        }
    }
}
/**
 * Helper for cart actions
 */
function WishlistHelper()
{
    /**
     * Get the value of a cookie
     * 
     * @param {string} id  Prodcut ID to remove fom the car
     * 
     * @return {string}
     */
    this.addItem = function(ean_number)
    {
        $.ajax({
            url: "https://api.az-games.nl/wishlist/" + CookieHelper.getCookie("user_id") + "/" + ean_number,
            type: "post",
            dataType: 'json',
            data: JSON.stringify({}),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                $(this).toggleClass("like--active");
                alert("Product succesvol toegevoegd aan Wishlist.");
            },
            error: function(xhr, status, error) {
                alert("Product is al in Wishlist.");
            }
        });
    }
}
var AdminUserModel = function(id)
{
    function getPage(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/admin/users/" + id, //"https://api.az-games.nl/
            type: "GET",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data[0]);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function saveUserInfo(data, callback)
    {
        // Modify data before sending (also convert to UTC)
        data.date_of_birth = new Date(Date.UTC(data.jaar, data.maand, data.dag));

        // Remove year, month and day
        delete data.jaar;
        delete data.maand;
        delete data.dag;

        $.ajax({
            url: "https://api.az-games.nl/admin/users/" + data.user_id, //"https://api.az-games.nl/
            type: "PATCH",
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function deleteUser(user_id, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/admin/users/" + user_id, //"https://api.az-games.nl/
            type: "DELETE",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback();
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getPage: getPage,
        saveUserInfo: saveUserInfo,
        deleteUser: deleteUser
    }
}
var AdminModel = function()
{
    function getPage(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/admin/users", //"https://api.az-games.nl/
            type: "GET",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getPage: getPage
    }

};
var CartModel = function()
{
    /**
     * Get all cart items
     */
    function getCart(callback)
    {
        var cart = CookieHelper.getCookie("cart");

        if (cart != undefined)
        {
            callback(JSON.parse(cart));
        }
    }

    /**
     * Add a product to the cart cookie and database if the user is registered
     */
    function addProduct(id, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/products/" + id,
            type: "get",
            contentType: "json",
            success: function (data) {
                cart = {ean_number:data[0].ean_number, title:data[0].title, price:data[0].price, image:data[0].image};
                callback(cart);

                // Save cart in cookies
                var currentCart = CookieHelper.getCookie("cart");

                if (currentCart == undefined)
                {
                    CookieHelper.createCookie("cart", JSON.stringify([cart]));
                }
                else
                {
                    currentCart = JSON.parse(currentCart);
                    currentCart.push(cart);

                    CookieHelper.createCookie("cart", JSON.stringify(currentCart))
                }
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    /**
     * Remove a item from the cart
     * 
     * @param {int} id Product id
     */
    function removeProduct(id)
    {
        cart = JSON.parse(CookieHelper.getCookie("cart"));

        for(i = 0; i < cart.length; i++)
        {
            if (cart[i].ean_number == id)
            {
                cart.splice(i, 1);
                break;
            }
        }
        
        CookieHelper.createCookie("cart", JSON.stringify(cart));
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getCart: getCart,
        addProduct: addProduct,
        removeProduct: removeProduct
    }
};

var LoginModel = function()
{
    function login(email, password, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/user/login",
            type: "GET",
            dataType: 'json',
            headers: {
                "Authorization": "Basic " + btoa(email + ":" + password)
            },
            success: function (data) {
                // put token in cookie
                CookieHelper.createCookie("access_token", data.access_token);
                CookieHelper.createCookie("user_id", data.user_id);

                // 'reload' page
                onLoadPage();

                // let controller resume with stuff
                callback(data);
            },
            error: function (xhr, status, error) {
                // show 'not good email or password to user'
                $("#error_message").show();

                //$("#component").html("error function");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        login: login
    }
};
var LogoutModel = function()
{
    function logout(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/user/logout", //? http://84.84.245.29:243 = API-locatie?
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                user_id: getCookie("user_id")
            }),
            success: function (data) {
                // let controller resume with stuff
                CookieHelper.deleteCookie("access_token");
                CookieHelper.deleteCookie("user_id");

                // 'reload' page
                onLoadPage();

                callback(data);
            },
            error: function (xhr, status, error) {
                // show 'not good email or password to user'
                $("#error_message").show();

                //$("#component").html("error function");
            }
        });

        function getCookie(name)
        {
            var cookies = document.cookie.split(';');

            for (var i = 0; i < cookies.length; i++)
            {
                var cookie = cookies[i].split("=");

                if (cookie[0].trim() == name)
                {
                    return cookie[1];
                }
            }
        }
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        logout: logout
    }
};
var ProductsModel = function()
{
    function getPage(filter, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/products?" + filter, //? http://84.84.245.29:243 = API-locatie?
            type: "get",
            dataType: 'json',
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getPage: getPage
    }
};
var PublicWishlistModel = function(user_id)
{
    this.getPublicWishlist = function(callback)
    {
        $.ajax({
            url: "http://localhost:8081/public_wishlist/" + user_id,
            type: "get",
            dataType: 'json',
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }
};
var RegisterModel = function()
{
    function register(formData, callback)
    {
        // Modify data before sending (also convert to UTC)
        formData.date_of_birth = new Date(Date.UTC(formData.jaar, formData.maand, formData.dag));

        // Remove year, month and day
        delete formData.jaar;
        delete formData.maand;
        delete formData.dag;

        $.ajax({
            url: "https://api.az-games.nl/user/register",
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                e_mail : formData.e_mailadres,
                password : formData.wachtwoord,
                first_name : formData.voornaam,
                insertion : formData.tussenvoegsel,
                surname : formData.achternaam,
                gender : formData.gender,
                date_of_birth : formData.birth_date,
                phone_number : formData.mobiel_nummer,
                secret_question : formData.security_question,
                secret_question_answer : formData.security_answer,
                postal_code : formData.postcode,
                number : formData.huisnummer,
                street_name : formData.straatnaam,
                city : formData.plaats
            }),
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#regi_api_error_message").show();
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        register: register
    }
};
var ResetPasswordModel = function()
{
    function resetpassword(formData, callback)
    {
        console.log(formData);
        $.ajax({
            url: "https://api.az-games.nl/user/resetpassword",
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                email : formData.e_mailadres,
                secret_question_answer : formData.security_answer,
                secret_question : formData.security_question,
                new_password : formData.wachtwoord,
                repeat_password : formData.wachtwoord2
            }),
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                //$("#component").load("views/error/error.html");
                $("#reset_password_api_error_message").show();
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        resetpassword: resetpassword
    }
};
var ProductModel = function(ean)
{
    function GetProductInfo(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/products/" + ean,
            type: "get",
            dataType: 'json',
            success: function (data) {
                // let controller resume with stuff
                callback(data[0]);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        GetProductInfo: GetProductInfo
    }
};
var UserModel = function(userid)
{
    function GetUserInfo(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/users/" + userid,
            type: "get",
            dataType: 'json',
            success: function (data) {
                // let controller resume with stuff
                callback(data[0]);
            },
            error: function (xhr, status, error) {
                $("#component").load("/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        GetUserInfo: GetUserInfo
    }
};
var WishlistModel = function()
{
    function getWishlist(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/wishlist",
            type: "get",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function addToWishlist(viewData, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/wishlist/" + CookieHelper.getCookie("user_id") /*+ "/" + viewData.ean_number*/,
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                wishlist_id : viewData.wishlist_id,
                //ean_number : viewData.ean_number
            }),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function(xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function deleteFromWishlist(ean, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/wishlist/" + CookieHelper.getCookie("user_id") + "/" + String(ean),
            type: "DELETE",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function switchPublicState(newStatus, callback)
    {
        var go = false;

        var newDBStatus = "0";
        if (newStatus == "public"){
            newDBStatus = "1";
            go = true;
        } else if (newStatus == "private"){
            go = true;
        } else {
            console.log("newStatus has unexpected value. newStatus = " + newStatus);
        }

        if (go)
        {
            $.ajax({
                url: "http://localhost:8081/wishlist/switch_public",
                type: "patch",
                dataType: 'json',
                data: JSON.stringify({"newDBStatus":newDBStatus}),
                headers: {
                    "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
                },
                success: function (data) {
                    callback(data);
                },
                error: function (xhr, status, error) {
                    $("#component").load("/views/error/error.html");
                }
            });
        }
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getWishlist: getWishlist,
        addToWishlist: addToWishlist,
        deleteFromWishlist: deleteFromWishlist,
        switchPublicState: switchPublicState
    }
};
var AdminUserController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Main function, also the start startpoint for a page
    function main()
    {
        ViewHelper.setActionListener(getPage);
        viewHelper.setSaveListener(saveUserInfo);
        viewHelper.setDeleteListener(deleteUser);
    }

    function getPage()
    {
        Model.getPage(setView);
    }
    
    function setView(data) 
    {
        ViewHelper.setView(data);
    }

    function saveUserInfo(event)
    {
        event.preventDefault();
        event.stopImmediatePropagation();

        var formData = $(this).serializeObject();

        Model.saveUserInfo(formData, function(formData)
        {
            alert("Gebruiker succesvol geüpdate.");
        });
    }

    function deleteUser(user_id)
    {
        Model.deleteUser(user_id, function()
        {
            alert("Gebruiker succesvol gedelete.");
            Router.route("/admin");
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var AdminController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Main function, also the start startpoint for a page
    function main()
    {
        ViewHelper.setActionListener(getPage);
    }

    function getPage()
    {
        Model.getPage(setView); //"", function (data) { ViewHelper.setView(data); });
    }
    function setView(data) 
    {
        ViewHelper.setView(data);
    }


    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var CartController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    /**
     * Get all cart items and pass the items to the ViewHelper
     */
    function getCart()
    {
        Model.getCart(function (data) { ViewHelper.setView(data); });
    }

    /**
     * Add a item to the cart and pass it to the viewHelper
     * 
     * @param {int} id  Item id
     */
    function addProduct(id)
    {
        Model.addProduct(id, function (data) { ViewHelper.addItem(data); });
    }

    /**
     * Remove a product and call the viewHelper
     */
    function removeProduct(id)
    {
        Model.removeProduct(id, function (data) { });
    }

    // Main function, also the start startpoint for a page
    function main()
    {                        
        ViewHelper.setActionListener(getCart);
        ViewHelper.setAddProductListener(addProduct);
        ViewHelper.setRemoveListener(removeProduct);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var DeleteController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;

    function main()
    {
        
    }
}
var ErrorController = function(viewHelper)
{
    var ViewHelper = viewHelper;

    // Main function, also the start startpoint for a page
    function main()
    {
        // set view to login form
        ViewHelper.setView();
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var LoginController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed(event)
    {
        // Prevent sending the form
        event.preventDefault();
        event.stopImmediatePropagation();

        // Loop trough the form data and get all fields
        var formData = {};
        $.each($(this).serializeArray(), function (i, field) {
            formData[field.name] = field.value;
        });

        // let model send email and password to API
        Model.login(formData.email, formData.password, function onSuccess(data) {
            // show uitloggen button
            $("#inloggen_text").hide();
            $("#uitloggen_text").show();

            Router.route("products");
        });
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        // set view to login form
        ViewHelper.setView();

        // user fills in email and password; clicks 'login': VIEW notices this and reacts
        ViewHelper.setActionListener(actionPerformed);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var LogoutController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed(event)
    {
        Model.logout(function (data) {
            // show uitloggen button
            $("#inloggen_text").show();
            $("#uitloggen_text").hide();

            // set view to login form
            ViewHelper.setView();
        });
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        // user fills in email and password; clicks 'login': VIEW notices this and reacts
        ViewHelper.setActionListener(actionPerformed);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var ProductsController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function getPage()
    {
        Model.getPage("", function (data) { ViewHelper.setView(data); });
    }

    function filterProducts(event)
    {
        // Prevent sending the form (page reload)
        event.preventDefault();

        var filters = $(this).serialize();
        Model.getPage(filters, function (data) { ViewHelper.loadProducts(data); });
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        ViewHelper.setActionListener(getPage);
        ViewHelper.setFilterListener(filterProducts);
        // new action wanner er op filter wordt gedrukt
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var PublicWishlistController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;

    function main()
    {
        console.log("in main");
        ViewHelper.setActionListener(getPublicWishlist);
        //ViewHelper.getPage(getPublicWishlist);
    }

    function getPublicWishlist()
    {
        Model.getPublicWishlist(setView);
    }
    function setView(data)
    {
        ViewHelper.setView(data);
    }

    return {
        main: main
    }
};
var RegisterController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed()
    {
        // Prevent sending the form
        event.preventDefault();

        // reset error messages
        $("#regi_api_error_message").hide();
        $("#ww2_error_message").hide();

        // put form fields in javascript Object
        var formData = {};

        $.each($(this).serializeArray(), function (i, field) {
            formData[field.name] = field.value;
        });

        // fix date of birth (API expects certain format)
        formData["birth_date"] = formData.jaar + "-" + formData.maand + "-" + formData.dag;

        // check whether any mandatory field is left empty by user and
        // if so, abort function
        var mandatoryFieldMisses = false;
        var mandatoryFields = ["voornaam", "achternaam", "postcode", "huisnummer", "e_mailadres", "wachtwoord", "wachtwoord2", "security_answer"]; //dropdowns (like gender) are always filled in, so don't put in this list

        // (reset all fields to 'valid' because user may have filled in fields since
        // the previous time this function was called)
        $.each(mandatoryFields, function (i, manField) {
            $("#" + manField).removeClass("invalid");
        })

        $.each(mandatoryFields, function (i, manField) {
            if (formData[manField] == "")
            {
                $("#" + manField).addClass("invalid");

                mandatoryFieldMisses = true;
            }
        })

        
        // if a mandatory field is empty, show error message to user and abort function
        if (mandatoryFieldMisses)
        { 
            // scroll to top of page so that users see message "something is not filled in"
            window.scrollTo(0, 0);
            // show message "something is not filled in"
            $("#register_error_message").show();
        };

        var passwordsNotIdentical = false;

        if (formData.wachtwoord != formData.wachtwoord2) 
        {
            passwordsNotIdentical = true;
            $("#ww2_error_message").show();
            $("#wachtwoord").addClass("invalid");
            $("#wachtwoord2").addClass("invalid");
        }

        // abort function if mandatory field misses or passwords not identical
        if (mandatoryFieldMisses || passwordsNotIdentical)
        {
            return false;
        }

        // let model send user info to API
        Model.register(formData, function (data) {
            ViewHelper.setView('/views/register/after_register.html');
        });
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        // set view to register form
        ViewHelper.setView('/views/register/register.html');

        // user fills in register info; clicks 'register': view notices this and reacts
        ViewHelper.setActionListener(actionPerformed);

        // email and password are send to API; API checks if email already exists (and whether password is correct?) 
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var ResetPasswordController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
     // Function that is executed on a action listener
    function actionPerformed()
    {
        console.log("in actionPerformed"); //test

        // Prevent sending the form
        event.preventDefault();

        // reset error messages
        $("#reset_password_api_error_message").hide();
        $("#ww2_error_message").hide();

        // put form fields in javascript Object
        var formData = {};

        $.each($(this).serializeArray(), function (i, field) {
            formData[field.name] = field.value;
        });

        // check whether any mandatory field is left empty by user and
        // if so, abort function
        var mandatoryFieldMisses = false;
        var mandatoryFields = ["wachtwoord", "wachtwoord2", "e_mailadres","security_answer"]; //dropdowns (like security_question_answer) are always filled in, so don't put in this list

        // (reset all fields to 'valid' because user may have filled in fields since
        // the previous time this function was called)
        $.each(mandatoryFields, function (i, manField) {
            $("#" + manField).removeClass("invalid");
        })

        $.each(mandatoryFields, function (i, manField) {
            if (formData[manField] == "")
            {
                $("#" + manField).addClass("invalid");

                mandatoryFieldMisses = true;
            }
        })

        
        // if a mandatory field is empty, show error message to user and abort function
        if (mandatoryFieldMisses)
        { 
            // scroll to top of page so that users see message "something is not filled in"
            window.scrollTo(0, 0);
            // show message "something is not filled in"
            $("#reset_error_message").show();
        };

        var passwordsNotIdentical = false;

        if (formData.wachtwoord != formData.wachtwoord2) 
        {
            passwordsNotIdentical = true;
            $("#ww2_error_message").show();
            $("#wachtwoord").addClass("invalid");
            $("#wachtwoord2").addClass("invalid");
        }

        // abort function if mandatory field misses or passwords not identical
        if (mandatoryFieldMisses || passwordsNotIdentical)
        {
            return false;
        }
        console.log("continued")
        // let model send user info to API
        Model.resetpassword(formData, function (data) {
            ViewHelper.setView('views/resetpassword/after_reset.html');
        });
    }

    // Main function, also the start startpoint for a page
    function main()
    {      
        // set view to reset password form
        ViewHelper.setView('views/resetpassword/resetpassword.html');

        ViewHelper.setActionListener(actionPerformed);
        // new action wanner er op filter wordt gedrukt
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};





var ProductController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed(event)
    {
        // Prevent sending the form
        event.preventDefault();






        // Loop trough the form data and get all fields
        var formData = {};
        $.each($(this).serializeArray(), function (i, field) {
            formData[field.name] = field.value;
        });

        // let model send email and password to API
        Model.login(formData.email, formData.password, function (data) {
            // show uitloggen button
            $("#inloggen_text").hide();
            $("#uitloggen_text").show();

            // Weergeef een andere pagina gebasseerd op 'admin' of 'registered user'
            new PageController(new PageViewHelper(), new PageModel()).main();
        });
    }

    // let view show view with data from database
    function showView(data)
    {
        viewHelper.setView(data);
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        // what happens:
        // 1) user clicks on a product 
        // 2) model gets info of the product
        // 3) system puts info in html
        // 4) view shows info

        // 2) model gets info of the product
        // 3) system puts info in html
        model.GetProductInfo(showView);



        // set view to login form
        //ViewHelper.setView();

        // user fills in email and password; clicks 'login': VIEW notices this and reacts
        //ViewHelper.setActionListener(actionPerformed);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main,
        showView : showView
    }
};

var WishlistController = function(viewHelper, model)
{
    var Model = model;
    var ViewHelper = viewHelper;

    function main()
    {
        ViewHelper.setActionListener(getWishlist);
        ViewHelper.setDeleteListener(deleteFromWishlist);
        ViewHelper.setPublicListener(switchPublicState);
    }

    function getWishlist()
    {
        Model.getWishlist(setView);
    }
    function setView(data)
    {
        ViewHelper.setView(data);
    }

    function deleteFromWishlist(ean, div_to_hide)
    {
        Model.deleteFromWishlist(ean, function()
        {
            ViewHelper.hideItem(div_to_hide);
        });
    }

    function switchPublicState(newStatus)
    {
        Model.switchPublicState(newStatus, function()
        {
            
        });
    }

    return {
        main: main
    }
};
var AdminViewHelper = function ()
{
    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"
    }

    // Change the view of the page
     function setView(data)
    {
        document.title ="Admin - AZ Games";

        $("#component").load('/views/admin/admin.html', function () { // waar id = 'component' doe .load......
            $.each(data, function(key, value) {
                // Clone product
                var user = $('#single_user').clone();
                
                // Add product info
                $(user).find(".user__firstname").html(value.first_name);
                $(user).find(".user__firstname").attr('href', '/admin_user/' + value.user_id);
                $(user).find(".user__insertion").html(value.insertion);
                $(user).find(".user__lastname").html(value.surname);
                $(user).find(".user__email").html(value.email);
                $(user).find(".user__phonenumber").html(value.phone_number);

                $("#users_body").append(user);
            });

            // Remove the first list item, because this item is always empty
            $("#single_user").first().remove();
        });
    }

    return {
        setActionListener: setActionListener,
        setView: setView,
    }
}

    //dat hieronder zat aardig wat werk in... Donald wil nog ff houden

    // function showUsers(data)
    // {
    //     document.title ="Admin - AZ Games";

    //     $("#component").load('/views/admin/admin.html', function () {
    //         var table = $("<table id='users_table'></table>");

    //         // table header
    //         var row = $('<tr></tr>');
    //         row.append('<td>Voornaam</td><td>Tussenv</td><td>Achternaam</td><td>Gebruikersnaam</td><td>email</td><td>type</td>');

    //         $.each(data, function(numberr, user) 
    //         {
    //             var row = $('<tr></tr>');
    //             $.each(user, function(key, value)
    //             {
    //                 if (value != undefined)
    //                 {
    //                     row.append( $("<td class='td_user'></td>").html(String(value)) );
    //                 } else {
    //                     row.append( $("<td class='td_user'></td>") );
    //                 }
    //             })
    //             table.append(row);
    //             // //for additional user info if clicked
    //             // row = $('<div class="tobetable"></div>');
    //             // table.append(row);
    //         });
    //         $('#users').append(table);
    //     });
    // }

    // function putInfoInHtml(clicked, data)
    // {
    //     console.log('in putInfoInHtml()');
    //     // show info of the right user (if not already showing it)
    //     // insert row as table header
    //     var headerrow = $('<tr></tr>').append('<td>ww</td><td>geblokkeerd</td><td>id</td><td>gender</td><td>geboortedatum</td><td>vraag</td><td>antwoord</td>');

    //     // insert row with te userinfo
    //     var inforow = $('<tr></tr>');

    //     var count = 0;
    //     $.each(data[0], function(key, value)
    //     {
    //         if (count == 1) { // geblokkeerd
    //             if (value == 1) {
    //                 value = 'nee';
    //             } else if (value == 0) {
    //                 value = 'ja'
    //             } else {
    //                 value = 'db fout?'
    //             }
    //         }

    //         console.log(count);
    //         var td = $('<td></td>').append(value);

    //         console.log('key, value: ' + key, value);

    //         inforow.append(td);

    //         count += 1;
    //     })

    //     inforow.insertAfter( $(clicked).closest('tr') );
    //     headerrow.insertAfter($(clicked).closest('tr'));
    // }


var AdminUserViewHelper = function ()
{
    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"
    }

    function setView(value)
    {
        //preventDefault();
        $("#component").load('/views/adminuser/adminuser.html', function ()
        {
            $("#delete_btn").attr("data-id", value.user_id)   
            $("#first_name").val(value.first_name);
            $("#insertion").val(value.insertion);
            $("#surname").val(value.surname);
            $("#user_type").val(value.user_type);
            $("#email").val(value.email);
            $("#password").attr('placeholder', 'Vul hier iets in om het wachtwoord te veranderen');
            $("#gender").val(value.gender);
            $("#date_of_birth").val(value.date_of_birth);
            $("#phone_number").val(value.phone_number);
            $("#is_active").val(value.is_active);
            $("#user_id").val(value.user_id);

            var today       = new Date();
            var dateOfBirth = new Date(value.date_of_birth);

            for(i = 1; i < 32; i++)
            {
                if (i == dateOfBirth.getDate())
                {
                    $("#dag").append("<option value='" + i + "' selected='selected'>" + i + "</option>");
                } else
                {
                    $("#dag").append("<option value='" + i + "'>" + i + "</option>");
                }
            }

            for (i = 1900; i < today.getFullYear() + 1; i++)
            {
                if (i == dateOfBirth.getFullYear())
                {
                    $("#jaar").append("<option value='" + i + "' selected='selected'>" + i + "</option>");
                }
                else
                {
                    $("#jaar").append("<option value='" + i + "'>" + i + "</option>");
                }
            }
            
            $("#maand").val(dateOfBirth.getMonth());
        })
    }

    function setSaveListener(action)
    {
        $(document).on('submit', '#userform', action);
    }

    function setDeleteListener(action)
    {
        $("#component").off().on("click", '#delete_btn', function (e)
        {
            e.preventDefault();
            action($(this).data("id"));
        });
    }

    return {
        setActionListener: setActionListener,
        setView: setView,
        setSaveListener: setSaveListener,
        setDeleteListener: setDeleteListener
    }
}
var ErrorViewHelper = function()
{
    // Change the view of the page
    function setView()
    {
        document.title = "Oeps - AZ Games";

        $("#component").load('/views/error/error.html');
    }

    // ActionListener that executes actions on specific events
    function setActionListener(eventHandler)
    {
        $(document).ready(eventHandler);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};
var CartViewHelper = function()
{
    // Change the view of the page
    function setView(viewData)
    {
        if (viewData != "")
        {
            viewData.forEach(function (item, index) {
                addItem(item);
            });
        }
    }

    /**
     * Update the total price  of the cart
     * 
     * @param {int} totalPrice  Total price of the cart
     */
    function updateTotalPrice(newPrice)
    {
        newPrice = parseFloat(newPrice) + parseFloat($(".cart__total .price").html().substr(1));
        $(".cart__total .price").html("€" + parseFloat(newPrice).toFixed(2));
    }

    /**
     * Make new cart item visiable in the DOM
     * 
     * @param  {array}  item  Product
     */
    function addItem(item)
    {
        var cartItem = $('<div>').html($('.sidebar__content__tmp').html());

        cartItem.find(".cart__item__title").html(item.title);
        cartItem.find(".cart__item__price").html("€" + item.price.toFixed(2));
        cartItem.find(".cart__item__image img").attr("src", item.image);
        cartItem.find(".cart__item").attr("data-id", item.ean_number)

        $(".cart").append(cartItem);

        // Change amount of items
        var amount = $(".cart_button .count").html();
        $(".cart_button .count").html(parseInt(amount) + 1);

        // Update the total price
        updateTotalPrice(item.price);
    }

    /**
     * Load the cart when the page is  rease
     */
    function setActionListener(action)
    {
        $(document).ready(action);
    }

    /**
     * Listener for the Add to cart button
     * 
     * @param  {function} addtoCart  Model callback
     */
    function setAddProductListener(addToCart)
    {
        $("body").on("click", ".addtocart", function (event) {
            event.preventDefault();

            var product_id = $(this).data("id");
            addToCart(product_id);
            $(this).closest("#to_shop_cart").find("#shop_cart").fadeTo(0, 100).delay(1000).fadeTo(600, 0);
        })
    }

    /**
     * Listener for remove a product from the DOM cart
     * 
     * @param {function} removeProduct Callback function to remove the prodcut from the memory
     */
    function setRemoveListener(removeProduct) {
        $("body").on("click", ".cart__item__remove", function (event){
            var cartitem   = $(this).parent();
            var product_id = $(this).parent().data("id");

            // Remove product from DOM cart
            $(cartitem).addClass("cart__item--removed");
            $(cartitem).on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
                $(this).remove();
            });

            // Decrese count
            var amount = $(".cart_button .count").html();
            $(".cart_button .count").html(parseInt(amount) - 1);

            removeProduct(product_id)
            updateTotalPrice(-$(cartitem).find(".cart__item__price").html().substr(1))
        });
    }
    
    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        addItem: addItem,
        updateTotalPrice: updateTotalPrice,
        setActionListener: setActionListener,
        setAddProductListener: setAddProductListener,
        setRemoveListener: setRemoveListener
    }
};
var LoginViewHelper = function()
{
    // Change the view of the page
    function setView()
    {
        document.title ="Inloggen - AZ Games";

        $("#component").load('/views/login/login.html');
    }

    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        // user fills in login form
        // user presses 'login'

        // if user presses 'login', perform action (make controller send email and password to API)
        $("#component").on("submit", "#loginform", action);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};
var LogoutViewHelper = function()
{
    // Change the view of the page
    function setView()
    {
        document.title = "Uitloggen - AZ Games";

        $("#component").load('/views/logout/logout.html');
    }

    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        $(document).ready(action);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};
var ProductsViewHelper = function()
{
    // Change the view of the page
    function setView(viewData)
    {
        document.title = "Producten - AZ Games";

        $("#component").html('<div class="col-12"><div class="col-3" id="filters"></div><div class="col-9" id="products"></div></div>');
        // load filters
        $("#filters").load('/views/products/filters.html');

        // load products
        loadProducts(viewData);
    }

    function loadProducts(viewData)
    {
        $("#products").load('/views/products/products.html', function () { // waar id = 'component' doe .load......
            $.each(viewData, function(key, value) {
                // Clone product
                var product = $('<div>').append($('#product__list__item').clone());
                
                // Add product info
                $(product).find(".product__title").html(value.title);
                $(product).find(".product__subtitle").append(value.genre +(" | PEGI ") + value.pegi_age +(" | ")+ PlatformLogo(value.platform));
                $(product).find(".product__description").html(CutString(value.description));
                $(product).find(".product__price").append(("€ ")+value.price.toFixed(2));
                $(product).find("#buttons__info, .product__image a, .product__title").attr("href", "product/" + value.ean_number);
                $(product).find(".product__image img").attr("src", value.image);
                $(product).find(".addtocart").attr("data-id", value.ean_number);

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

    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"
    }

    function setFilterListener(action)
    {
         // Hier het formulier versturen als we op een checkbox drukken
        $("#component").off().on("change", "input[type=checkbox]", function(event) {
            $("#product_filter").submit();
        });

        // Update de productenlijst als een waarde in de slider veranderd(alle manieren)
        $("#component").on("change keyup", "input[name=price-max], input[name=price-min]", function(event) {
            if($("#pricemin").val() == null) {
                $("#pricemin").val(0);
            }
            else
            {
                $("#product_filter").submit();
            }
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
var PublicWishlistViewHelper = function()
{
    function setActionListener(action) // heb de $ erbij gezet. internet had het daarover (zie onderstaande comment ook)
    {
        $(document).ready(action);
    }

    //change view of page
    function setView(viewData)
    {
        if (viewData[0].is_public == 0)
        {
            document.title = "Error - AZ Games"
            $("#component").load("/views/error/error.html");
        }
        else if (viewData[0].is_public == 1)
        {
            loadPublicWishlist(viewData);
        }
        else
        {
            console.log("viewData[0].is_public heeft onverwachte waarde. viewData[0].is_public = " + viewData[0].is_public);
        }
    }

    function loadPublicWishlist(data)
    {
        document.title = "Verlanglijst " + data[0].first_name + " - AZ Games";

        $("#component").html('<div class="col-12" id="public_wishlist"></div>');

        $("#public_wishlist").load('/views/public_wishlist/public_wishlist.html', function ()
        {
            $("#public__wishlist__header").html("Verlanglijst van " + data[0].first_name);


            var current = 0;
            $.each(data, function(key, value)
            {                
                var wishlist_item = $('<div>').append( $('#wish__list__item').clone() );

                current++;
                $(wishlist_item).find(".wish__list__id").append(current);
                $(wishlist_item).find(".wish__list__image img").attr("src", value.image);
                $(wishlist_item).find(".wish__list__title").html(value.title);
                $(wishlist_item).find(".wish__list__price").append(("€ ")+value.price);
                $(wishlist_item).find(".wish__list__platform").append(PlatformLogo(value.platform));
                $(wishlist_item).find(".wish__list__availability").append(BeschikbaarheidKleur(value.stock));
                $(wishlist_item).find(".wish__list__likebutton").append();
                $(wishlist_item).find("#delete_btn").attr("data-id", value.ean_number);
                $(wishlist_item).find("#cart_btn").attr("data-id", value.ean_number);

                wishlist_item.appendTo($("#wish__list"));
            })

            $("#wish__list__item").first().remove();
        });
    }

    return {
        setView: setView,
        loadPublicWishlist: loadPublicWishlist,
        setActionListener: setActionListener
    }


}
var ResetPasswordViewHelper = function()
{
    // Change the view of the page
    function setView(viewToShow)
    {
        document.title = "Inloggen - AZ Games";

        $("#component").load(viewToShow);
    }

    // ActionListener that executes actions on specific events
    function setActionListener(eventHandler)
    {
        //$(document).ready(eventHandler);
        $("#component").on("submit", "#resetform", eventHandler);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};

/*
var ResetPasswordViewHelper = function()
{
    // Change the view of the page
    function setView(viewData)
    {
        $("#component").load('views/resetpassword/resetpassword.html');
    }

    // ActionListener that executes actions on specific events
    function setActionListener(eventHandler)
    {
        //$(document).ready(eventHandler);
        $("#component").on("submit", "#resetform", eventHandler);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};
*/
var RegisterViewHelper = function()
{
    // Change the view of the page
    function setView(viewToShow)
    {
        document.title = "Registreren - AZ Games";
        
        $("#component").load(viewToShow, function()
        {
            var date = new Date();

            for(i = 1; i < 32; i++)
            {
                $("#dag").append("<option value='" + i + "'>" + i + "</option>");
            }

            for (i = 1900; i < date.getFullYear() + 1; i++)
            {
                if (i == 2000)
                {
                    $("#jaar").append("<option value='" + i + "' selected='selected'>" + i + "</option>");
                    continue;
                }

                $("#jaar").append("<option value='" + i + "'>" + i + "</option>");
            }
        });
    }

    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        // user fills in register form
        // user presses 'register'

        // if user presses 'register', perform action
        $("#component").on("submit", "#registerform", action);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};
var ProductViewHelper = function()
{
    // Change the view of the page
    function setView(product)
    {
        document.title = product.title + " - AZ Games";

         $("#component").load('/views/single_product/single_product.html', function () {
                $(".singleproduct__image img").attr("src", product.image);
                $(".singleproduct__title").html(product.title);
                $(".singleproduct__price").html("€ " + product.price.toFixed(2));

                $(".singleproduct__ean").append(product.ean_number);
                $(".singleproduct__platform").append(PlatformLogo(product.platform)); // functie voor logo
                $(".singleproduct__publisher").append(PlatformLogo(product.publisher)); // functie voor logo
                $(".singleproduct__pegi").append(product.pegi_age);
                $(".singleproduct__genre").append(product.genre);
                $(".singleproduct__descr").html(product.description)
                $(".addtocart").attr("data-id", product.ean_number);

                if (UserHelper.isLogedIn())
                {
                    $(".addToWishlistButton").attr("onclick", "WishlistHelper.addItem(" + product.ean_number + ");");
                }
                else
                {
                    $(".addToWishlistButton").hide();
                }

                var d = new Date(product.release_date);

                var months = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];

                $(".singleproduct__releasedate").append(d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear());
        });
    }

    function setActionListener(action)
    {
        // user fills in register form
        // user presses 'register'

        // if user presses 'register', perform action
        $(document).ready(action);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};

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
                $(wish__list__item).find(".wish__list__likebutton").append();
                $(wish__list__item).find("#delete_btn").attr("data-id", value.ean_number);
                $(wish__list__item).find("#cart_btn").attr("data-id", value.ean_number);

                $("#wish__list").append(wish__list__item);

                if (count == 0) {
                    if (value.is_public == 0) {
                        $("#publicator").val("private");
                    } else if (value.is_public == 1) {
                        $("#publicator").val("public");
                    } else {
                        console.log("value has unexpected value. value = " + value);
                    }
                }

                count++;
            });

            if (count == 0) {
                $("#wishlist_error_message").show();
            }

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

    function setPublicListener(action)
    {
        $("#component").on("change", "#publicator", function()
        {
            console.log(this.value);
            action(this.value);
        });
    }

    function hideItem(div_to_hide)
    {
        div_to_hide.fadeTo(200, 0).slideUp(200);
    }

    return {
        setView: setView,
        loadWishlist: loadWishlist,
        setActionListener: setActionListener,
        setDeleteListener: setDeleteListener,
        setPublicListener: setPublicListener,
        hideItem: hideItem
    }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbm9ydG9vbHMuanMiLCJyb3V0ZXIuanMiLCJzaWRlYmFyLmpzIiwidG9vbHRpcC5qcyIsImhlbHBlcnMvY29va2llLmpzIiwiaGVscGVycy9nbG9iYWwuanMiLCJoZWxwZXJzL3NlcmlhbGl6ZW9iamVjdC5qcyIsImhlbHBlcnMvdXNlci5qcyIsImhlbHBlcnMvd2lzaGxpc3QuanMiLCJhZG1pbnVzZXJfbW9kZWwuanMiLCJhZG1pbl9tb2RlbC5qcyIsImNhcnRfbW9kZWwuanMiLCJkZWxldGVfbW9kZWwuanMiLCJsb2dpbl9tb2RlbC5qcyIsImxvZ291dF9tb2RlbC5qcyIsInByb2R1Y3RzX21vZGVsLmpzIiwicHVibGljX3dpc2hsaXN0X21vZGVsLmpzIiwicmVnaXN0ZXJfbW9kZWwuanMiLCJyZXNldHBhc3N3b3JkX21vZGVsLmpzIiwic2luZ2xlX3Byb2R1Y3RfbW9kZWwuanMiLCJ1c2VyX21vZGVsLmpzIiwid2lzaGxpc3RfbW9kZWwuanMiLCJhZG1pbnVzZXJfY29udHJvbGxlci5qcyIsImFkbWluX2NvbnRyb2xsZXIuanMiLCJjYXJ0X2NvbnRyb2xsZXIuanMiLCJkZWxldGVfY29udHJvbGxlci5qcyIsImVycm9yX2NvbnRyb2xsZXIuanMiLCJsb2dpbl9jb250cm9sbGVyLmpzIiwibG9nb3V0X2NvbnRyb2xsZXIuanMiLCJwcm9kdWN0c19jb250cm9sbGVyLmpzIiwicHVibGljX3dpc2hsaXN0X2NvbnRyb2xsZXIuanMiLCJyZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwicmVzZXRwYXNzd29yZF9jb250cm9sbGVyLmpzIiwic2luZ2xlX3Byb2R1Y3RfY29udHJvbGxlci5qcyIsInVzZXJfY29udHJvbGxlci5qcyIsIndpc2hsaXN0X2NvbnRyb2xsZXIuanMiLCJhZG1pbi9hZG1pbl92aWV3LmpzIiwiYWRtaW51c2VyL2FkbWludXNlcl92aWV3LmpzIiwiZXJyb3IvZXJyb3Jfdmlldy5qcyIsImNhcnQvY2FydF92aWV3LmpzIiwibG9naW4vbG9naW5fdmlldy5qcyIsImxvZ291dC9sb2dvdXRfdmlldy5qcyIsInByb2R1Y3RzL3Byb2R1Y3RzX3ZpZXcuanMiLCJwdWJsaWNfd2lzaGxpc3QvcHVibGljX3dpc2hsaXN0X3ZpZXcuanMiLCJyZXNldHBhc3N3b3JkL3Jlc2V0cGFzc3dvcmRfdmlldy5qcyIsInJlZ2lzdGVyL3JlZ2lzdGVyX3ZpZXcuanMiLCJzaW5nbGVfcHJvZHVjdC9zaW5nbGVfcHJvZHVjdF92aWV3LmpzIiwidXNlci91c2VyX3ZpZXcuanMiLCJ3aXNobGlzdC93aXNobGlzdF92aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUVBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xFQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9QbGF0Zm9ybSBMb2dvJ3NcclxuZnVuY3Rpb24gUGxhdGZvcm1Mb2dvKHBsYXRmb3JtbmFhbSlcclxue1xyXG4gICAgcGxhdGZvcm1uYWFtID0gcGxhdGZvcm1uYWFtLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBzd2l0Y2ggKHBsYXRmb3JtbmFhbSlcclxuICAgIHtcclxuICAgICAgICAvL3BsYXRmb3Jtc1xyXG4gICAgICAgIGNhc2UgXCJQUzFcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3BzMS5wbmcnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlBTM1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvcHMzLnBuZycgLz5cIjtcclxuICAgICAgICBjYXNlIFwiUFMyXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9wczIucG5nJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJQUzRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3BzNC5wbmcnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlBDXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy93aW5kb3dzLnBuZycgLz5cIjtcclxuICAgICAgICBjYXNlIFwiWEJPWFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMveGJveC5wbmcnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIk5FU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvbmVzLnBuZycgLz5cIjtcclxuICAgICAgICBjYXNlIFwiTjY0XCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9uNjQucG5nJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJOSU5URU5ETyBTV0lUQ0hcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3N3aXRjaC5wbmcnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIk5HQ1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvbmdjLnBuZycgLz5cIjtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gcGxhdGZvcm1uYWFtO1xyXG5cclxuICAgICAgICAvL3B1Ymxpc2hlcnNcclxuICAgICAgICBjYXNlIFwiTklOVEVORE9cIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL3B1Ymxpc2hlcnMvbmludGVuZG8ucG5nJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJVQklTT0ZUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9wdWJsaXNoZXJzL3ViaXNvZnQucG5nJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJFTEVDVFJPTklDIEFSVFNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL3B1Ymxpc2hlcnMvZWEucG5nJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJTT05ZXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9wdWJsaXNoZXJzL3NvbnkucG5nJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJST0NLU1RBUlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvcHVibGlzaGVycy9yb2Nrc3Rhci5wbmcnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlNFR0FcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL3B1Ymxpc2hlcnMvc2VnYS5wbmcnIC8+XCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJlc2NoaWtiYWFyaGVpZEtsZXVyKHN0b2NrdmFsdWUpe1xyXG4gICAgXHJcbiAgICAgICAgaWYgKHN0b2NrdmFsdWU8PTApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2F2YWlsYWJpbGl0eS9idXR0b25yZWQucG5nJyAvPlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RvY2t2YWx1ZT49MSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvYXZhaWxhYmlsaXR5L2J1dHRvbmdyZWVuLnBuZycgLz5cIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvY2t2YWx1ZVxyXG4gICAgICAgIH1cclxufVxyXG5cclxuLy8gVmFuIFdpc2hsaXN0IHBhZ2luYVxyXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwic3Bhbi5saWtlXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImxpa2UtLWFjdGl2ZVwiKTtcclxufSk7XHJcblxyXG4vLyBWYW4gU2luZ2xlIFByb2R1Y3QgcGFnaW5hXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJzcGFuLnNpbmdsZV9saWtlXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcInNpbmdsZV9saWtlLS1hY3RpdmVcIik7XHJcbn0pOyIsInZhciBSb3V0ZXIgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgICBiYXNlVXJsID0gXCJwcm9qZWN0LXdlYnNob3AvXCI7XHJcblxyXG4gICAgZnVuY3Rpb24gcm91dGUodXJsLCBoaXN0b3J5KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChpc0ludGVybmFsKHVybCkgPT0gZmFsc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcGFydGljbGVzID0gZ2V0UGFydGljbGVzKHVybCk7XHJcblxyXG4gICAgICAgIHN3aXRjaChwYXJ0aWNsZXNbMF0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIFwiXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJpbmRleC5odG1sXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJwcm9kdWN0c1wiOlxyXG4gICAgICAgICAgICAgICAgbmV3IFByb2R1Y3RzQ29udHJvbGxlcihuZXcgUHJvZHVjdHNWaWV3SGVscGVyKCksIG5ldyBQcm9kdWN0c01vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicHJvZHVjdFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IFByb2R1Y3RDb250cm9sbGVyKG5ldyBQcm9kdWN0Vmlld0hlbHBlcigpLCBuZXcgUHJvZHVjdE1vZGVsKHBhcnRpY2xlc1sxXSkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmVnaXN0ZXJcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBSZWdpc3RlckNvbnRyb2xsZXIobmV3IFJlZ2lzdGVyVmlld0hlbHBlcigpLCBuZXcgUmVnaXN0ZXJNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImxvZ2luXCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgTG9naW5Db250cm9sbGVyKG5ldyBMb2dpblZpZXdIZWxwZXIoKSwgbmV3IExvZ2luTW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsb2dvdXRcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBMb2dvdXRDb250cm9sbGVyKG5ldyBMb2dvdXRWaWV3SGVscGVyKCksIG5ldyBMb2dvdXRNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJlZ2lzdGVyXCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgUmVnaXN0ZXJDb250cm9sbGVyKG5ldyBSZWdpc3RlclZpZXdIZWxwZXIoKSwgbmV3IFJlZ2lzdGVyTW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZXNldHBhc3N3b3JkXCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgUmVzZXRQYXNzd29yZENvbnRyb2xsZXIobmV3IFJlc2V0UGFzc3dvcmRWaWV3SGVscGVyKCksIG5ldyBSZXNldFBhc3N3b3JkTW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ3aXNobGlzdFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IFdpc2hsaXN0Q29udHJvbGxlcihuZXcgV2lzaGxpc3RWaWV3SGVscGVyKCksIG5ldyBXaXNobGlzdE1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRtaW5cIjpcclxuICAgICAgICAgICAgICAgIG5ldyBBZG1pbkNvbnRyb2xsZXIobmV3IEFkbWluVmlld0hlbHBlcigpLCBuZXcgQWRtaW5Nb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkbWluX3VzZXJcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBBZG1pblVzZXJDb250cm9sbGVyKG5ldyBBZG1pblVzZXJWaWV3SGVscGVyKCksIG5ldyBBZG1pblVzZXJNb2RlbChwYXJ0aWNsZXNbMV0pKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInB1YmxpY193aXNobGlzdFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IFB1YmxpY1dpc2hsaXN0Q29udHJvbGxlcihuZXcgUHVibGljV2lzaGxpc3RWaWV3SGVscGVyKCksIG5ldyBQdWJsaWNXaXNobGlzdE1vZGVsKHBhcnRpY2xlc1sxXSkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yQ29udHJvbGxlcihuZXcgRXJyb3JWaWV3SGVscGVyKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhpc3RvcnkgIT0gZmFsc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodXJsICE9IFwiXCIgJiYgdHlwZW9mIHVybCA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdyaXRlSGlzdG9yeSh7fSwgXCJBLVogR2FtZXNcIiwgdXJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgLy8gTG9hZCBzY3JlZW5cclxuICAgICAgICAgICAgICAgIHNob3dMb2FkU2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFNjcm9sbCB0byB0b3Agb2YgcGFnZVxyXG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzSW50ZXJuYWwodXJsKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh1cmwuaW5kZXhPZihcImh0dHBcIikgIT0gLTEgfHwgdXJsLmluZGV4T2YoXCJodHRwc1wiKSAhPSAtMSB8fCB1cmwuaW5kZXhPZihcInd3d1wiKSAhPSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFBhcnRpY2xlcyh1cmwpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCAvXHJcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKFwiL1wiKSA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZygxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgYmFzZSB1cmwgc2V0LCByZW1vdmUgdGhlIGJhc2UgdXJsXHJcbiAgICAgICAgaWYgKHRoaXMuYmFzZVVybCAhPSBudWxsICYmIHVybC5pbmRleE9mKHRoaXMuYmFzZVVybCkgIT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKHRoaXMuYmFzZVVybCkgKyB0aGlzLmJhc2VVcmwubGVuZ3RoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1cmwuc3BsaXQoL1xcLyguKyk/LylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3cml0ZUhpc3Rvcnkob2JqZWN0LCB0aXRsZSwgdXJsKVxyXG4gICAge1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShvYmplY3QsIHRpdGxlLCB1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcm91dGU6IHJvdXRlXHJcbiAgICB9XHJcbn0iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXHJcbntcclxuICAgICQoXCIuc2lkZWJhci10b2dnbGVcIikuY2xpY2soZnVuY3Rpb24gKGUpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IGNsaWNrIGFjdGlvblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gSWQgb2YgdGhlIHNpZGViYXIgdG8gdG9nZ2xlXHJcbiAgICAgICAgdmFyIHNpZGViYXIgPSAkKHRoaXMpLmRhdGEoXCJzaWRlYmFyXCIpO1xyXG5cclxuICAgICAgICB0b2dnbGVTaWRlYmFyKCQoXCIjXCIgKyBzaWRlYmFyKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLnNpZGViYXJfX2Nsb3NlXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpKTtcclxuICAgIH0pXHJcblxyXG4gICAgJChcIi5vdmVybGF5XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigkKFwiLnNpZGViYXJcIikpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlU2lkZWJhcihzaWRlYmFyKVxyXG4gICAge1xyXG4gICAgICAgICQoc2lkZWJhcikudG9nZ2xlQ2xhc3MoXCJzaWRlYmFyLS1vcGVuXCIpO1xyXG4gICAgICAgICQoXCIub3ZlcmxheVwiKS50b2dnbGVDbGFzcyhcIm92ZXJsYXktLXZpc2libGVcIik7XHJcbiAgICAgICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJzaWRlYmFyLS1vcGVuXCIpO1xyXG4gICAgfVxyXG59KTsiLCIkKGRvY3VtZW50KS5vbihcIm1vdXNlZW50ZXJcIiwgXCIuaGFzVG9vbHRpcFwiLCBmdW5jdGlvbihldmVudClcclxue1xyXG4gICAgLy8gR2V0IGNvbnRlbnQgYW5kIHBvc2l0aW9uXHJcbiAgICB2YXIgY29udGVudCAgPSAkKHRoaXMpLmRhdGEoXCJ0b29sdGlwXCIpO1xyXG4gICAgdmFyIHBvc2l0aW9uID0gZ2V0T2Zmc2V0KHRoaXMpO1xyXG5cclxuICAgIC8vIENyZWF0ZSB0b29sdGlwXHJcbiAgICB2YXIgdG9vbHRpcCA9ICQoXCI8ZGl2IGNsYXNzPSd0b29sdGlwJz5cIiArIGNvbnRlbnQgKyBcIjwvZGl2PlwiKTtcclxuICAgICQoXCJib2R5XCIpLmFwcGVuZCh0b29sdGlwKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgbmV3IHBvc2l0aW9uc1xyXG4gICAgcG9zaXRpb24udG9wICA9IHBvc2l0aW9uLnRvcCArICQodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuICAgIHBvc2l0aW9uLmxlZnQgPSBwb3NpdGlvbi5sZWZ0ICsgKCQodGhpcykub3V0ZXJXaWR0aCgpIC8gMikgLSAoJChcIi50b29sdGlwXCIpLm91dGVyV2lkdGgoKSAvIDIpO1xyXG5cclxuICAgIC8vIENoYW5nZSBwb3NpdGlvbiBvZiB0b29sdGlwXHJcbiAgICB0b29sdGlwLmNzcyhcImxlZnRcIiwgcG9zaXRpb24ubGVmdCk7XHJcbiAgICB0b29sdGlwLmNzcyhcInRvcFwiLCBwb3NpdGlvbi50b3ApO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm9uKFwibW91c2VsZWF2ZVwiLCBcIi5oYXNUb29sdGlwXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAkKFwiYm9keVwiKS5maW5kKFwiLnRvb2x0aXBcIikucmVtb3ZlKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsKVxyXG57XHJcbiAgICBlbCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxlZnQ6IGVsLmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCxcclxuICAgICAgICB0b3A6IGVsLnRvcCArIHdpbmRvdy5zY3JvbGxZXHJcbiAgfVxyXG59IiwiLyoqXHJcbiAqIEhlbHBlciBmb3IgZmluZGluZywgY3JlYXRpbmcgYW5kIGRlbGV0aW5nIGNvb2tpZXNcclxuICovXHJcbmZ1bmN0aW9uIENvb2tpZUhlbHBlcigpXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZSBvZiBhIGNvb2tpZVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgTmFtZSBvZiB0aGUgY29va2llXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXRDb29raWUgPSBmdW5jdGlvbihuYW1lKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldLnNwbGl0KFwiPVwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb29raWVbMF0udHJpbSgpID09IG5hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb29raWVbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBjb29raWVcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgICBOYW1lIG9mIHRoZSBjb29raWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAgVmFsdWUgb2YgdGhlIGNvb2tpZVxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmNyZWF0ZUNvb2tpZSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPScgKyB2YWx1ZSArICc7JztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlbGV0ZSBhIGNvb2tpZSBhbmQgaXQncyB2YWx1ZVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgTmFtZSBvZiB0aGUgY29va2llXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZGVsZXRlQ29va2llID0gZnVuY3Rpb24obmFtZSlcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz07IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQ7JztcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgUm91dGVyICAgICAgID0gbmV3IFJvdXRlcigpO1xyXG52YXIgQ29va2llSGVscGVyID0gbmV3IENvb2tpZUhlbHBlcigpO1xyXG52YXIgVXNlckhlbHBlciAgICAgPSBuZXcgVXNlckhlbHBlcigpO1xyXG52YXIgV2lzaGxpc3RIZWxwZXIgPSBuZXcgV2lzaGxpc3RIZWxwZXIoKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dMb2FkU2NyZWVuKClcclxue1xyXG4gICAgJChcIiNjb21wb25lbnRcIikuaHRtbCgnPGRpdiBjbGFzcz1cInNwaW5uZXJcIj48ZGl2IGNsYXNzPVwiYm91bmNlMVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJib3VuY2UyXCI+PC9kaXY+PGRpdiBjbGFzcz1cImJvdW5jZTNcIj48L2Rpdj4gPC9kaXY+Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uTG9hZFBhZ2UoKVxyXG57XHJcbiAgICBpZiAoVXNlckhlbHBlci5pc0FkbWluKCkpXHJcbiAgICB7XHJcbiAgICAgICAgJChcIi52aXNpYmxlLWFkbWluXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJpbmxpbmUtYmxvY2tcIik7XHJcbiAgICAgICAgJChcIi52aXNpYmxlLWN1c3RvbWVyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJpbmxpbmUtYmxvY2tcIik7XHJcbiAgICAgICAgJChcIiNpbmxvZ2dlbl90ZXh0XCIpLmhpZGUoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKFVzZXJIZWxwZXIuaXNDdXN0b21lcigpKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIudmlzaWJsZS1jdXN0b21lclwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiaW5saW5lLWJsb2NrXCIpO1xyXG4gICAgICAgICQoXCIjaW5sb2dnZW5fdGV4dFwiKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgJChcIi52aXNpYmxlLWFkbWluXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLnZpc2libGUtY3VzdG9tZXJcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjaW5sb2dnZW5fdGV4dFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiaW5saW5lLWJsb2NrXCIpO1xyXG4gICAgfVxyXG59IiwiJC5mbi5zZXJpYWxpemVPYmplY3QgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIHZhciBvID0ge307XHJcbiAgICB2YXIgYSA9IHRoaXMuc2VyaWFsaXplQXJyYXkoKTtcclxuICAgICQuZWFjaChhLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAob1t0aGlzLm5hbWVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKCFvW3RoaXMubmFtZV0ucHVzaCkge1xyXG4gICAgICAgICAgICAgICAgb1t0aGlzLm5hbWVdID0gW29bdGhpcy5uYW1lXV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgIT0gXCJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb1t0aGlzLm5hbWVdLnB1c2godGhpcy52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSAhPSBcIlwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvW3RoaXMubmFtZV0gPSB0aGlzLnZhbHVlIHx8ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbztcclxufTsiLCIvKipcclxuICogSGVscGVyIGZvciB1c2VyIHJlbGF0ZWQgc3R1ZmZcclxuICovXHJcbmZ1bmN0aW9uIFVzZXJIZWxwZXIoKVxyXG57XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSB1c2VyIGlzIGEgZ3Vlc3QgKG5vdCBsb2dnZWQgaW4pXHJcbiAgICAgKi9cclxuICAgIHRoaXMuaXNMb2dlZEluID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBhY2Nlc3NUb2tlbiA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGFjY2Vzc1Rva2VuICE9IHVuZGVmaW5lZCAmJiBhY2Nlc3NUb2tlbiAhPSBcIlwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgY3VycmVudCB1c2VyIGlzIGEgY3VzdG9tZXJcclxuICAgICAqL1xyXG4gICAgdGhpcy5pc0N1c3RvbWVyID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChVc2VySGVscGVyLmlzTG9nZWRJbigpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHVzZXJ0eXBlID0gdGhpcy5kZWNvZGVUb2tlbigpLnVzZXJ0eXBlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVzZXJ0eXBlID09IFwiY3VzdG9tZXJcIiB8fCB1c2VydHlwZSA9PSBcImFkbWluXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgY3VycmVudCB1c2VyIGlzIGFkbWluXHJcbiAgICAgKi9cclxuICAgIHRoaXMuaXNBZG1pbiA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBpZiAoVXNlckhlbHBlci5pc0xvZ2VkSW4oKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB1c2VydHlwZSA9IHRoaXMuZGVjb2RlVG9rZW4oKS51c2VydHlwZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1c2VydHlwZSA9PSBcImFkbWluXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWNvZGUgdGhlIEpXVCB0b2tlblxyXG4gICAgICovXHJcbiAgICB0aGlzLmRlY29kZVRva2VuID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBhY2Nlc3NUb2tlbiA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIik7XHJcblxyXG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbiAhPSB1bmRlZmluZWQgJiYgYWNjZXNzVG9rZW4gICE9IFwiXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgcGF5bG9hZCA9IGFjY2Vzc1Rva2VuLnNwbGl0KFwiLlwiKVsxXTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGF0b2IocGF5bG9hZCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBIZWxwZXIgZm9yIGNhcnQgYWN0aW9uc1xyXG4gKi9cclxuZnVuY3Rpb24gV2lzaGxpc3RIZWxwZXIoKVxyXG57XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgYSBjb29raWVcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkICBQcm9kY3V0IElEIHRvIHJlbW92ZSBmb20gdGhlIGNhclxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuYWRkSXRlbSA9IGZ1bmN0aW9uKGVhbl9udW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3dpc2hsaXN0L1wiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcInVzZXJfaWRcIikgKyBcIi9cIiArIGVhbl9udW1iZXIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7fSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJsaWtlLS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlByb2R1Y3Qgc3VjY2Vzdm9sIHRvZWdldm9lZ2QgYWFuIFdpc2hsaXN0LlwiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQcm9kdWN0IGlzIGFsIGluIFdpc2hsaXN0LlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwidmFyIEFkbWluVXNlck1vZGVsID0gZnVuY3Rpb24oaWQpXHJcbntcclxuICAgIGZ1bmN0aW9uIGdldFBhZ2UoY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2FkbWluL3VzZXJzL1wiICsgaWQsIC8vXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9cclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVswXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzYXZlVXNlckluZm8oZGF0YSwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgLy8gTW9kaWZ5IGRhdGEgYmVmb3JlIHNlbmRpbmcgKGFsc28gY29udmVydCB0byBVVEMpXHJcbiAgICAgICAgZGF0YS5kYXRlX29mX2JpcnRoID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0YS5qYWFyLCBkYXRhLm1hYW5kLCBkYXRhLmRhZykpO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgeWVhciwgbW9udGggYW5kIGRheVxyXG4gICAgICAgIGRlbGV0ZSBkYXRhLmphYXI7XHJcbiAgICAgICAgZGVsZXRlIGRhdGEubWFhbmQ7XHJcbiAgICAgICAgZGVsZXRlIGRhdGEuZGFnO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvYWRtaW4vdXNlcnMvXCIgKyBkYXRhLnVzZXJfaWQsIC8vXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9cclxuICAgICAgICAgICAgdHlwZTogXCJQQVRDSFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVVzZXIodXNlcl9pZCwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2FkbWluL3VzZXJzL1wiICsgdXNlcl9pZCwgLy9cImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL1xyXG4gICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0UGFnZTogZ2V0UGFnZSxcclxuICAgICAgICBzYXZlVXNlckluZm86IHNhdmVVc2VySW5mbyxcclxuICAgICAgICBkZWxldGVVc2VyOiBkZWxldGVVc2VyXHJcbiAgICB9XHJcbn0iLCJ2YXIgQWRtaW5Nb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZShjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvYWRtaW4vdXNlcnNcIiwgLy9cImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFBhZ2U6IGdldFBhZ2VcclxuICAgIH1cclxuXHJcbn07IiwidmFyIENhcnRNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIGNhcnQgaXRlbXNcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0Q2FydChjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICB2YXIgY2FydCA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJjYXJ0XCIpO1xyXG5cclxuICAgICAgICBpZiAoY2FydCAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhKU09OLnBhcnNlKGNhcnQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBwcm9kdWN0IHRvIHRoZSBjYXJ0IGNvb2tpZSBhbmQgZGF0YWJhc2UgaWYgdGhlIHVzZXIgaXMgcmVnaXN0ZXJlZFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBhZGRQcm9kdWN0KGlkLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvcHJvZHVjdHMvXCIgKyBpZCxcclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FydCA9IHtlYW5fbnVtYmVyOmRhdGFbMF0uZWFuX251bWJlciwgdGl0bGU6ZGF0YVswXS50aXRsZSwgcHJpY2U6ZGF0YVswXS5wcmljZSwgaW1hZ2U6ZGF0YVswXS5pbWFnZX07XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjYXJ0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTYXZlIGNhcnQgaW4gY29va2llc1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRDYXJ0ID0gQ29va2llSGVscGVyLmdldENvb2tpZShcImNhcnRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDYXJ0ID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBDb29raWVIZWxwZXIuY3JlYXRlQ29va2llKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShbY2FydF0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FydCA9IEpTT04ucGFyc2UoY3VycmVudENhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDYXJ0LnB1c2goY2FydCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIENvb2tpZUhlbHBlci5jcmVhdGVDb29raWUoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRDYXJ0KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGEgaXRlbSBmcm9tIHRoZSBjYXJ0XHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7aW50fSBpZCBQcm9kdWN0IGlkXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2R1Y3QoaWQpXHJcbiAgICB7XHJcbiAgICAgICAgY2FydCA9IEpTT04ucGFyc2UoQ29va2llSGVscGVyLmdldENvb2tpZShcImNhcnRcIikpO1xyXG5cclxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBjYXJ0Lmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGNhcnRbaV0uZWFuX251bWJlciA9PSBpZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FydC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb29raWVIZWxwZXIuY3JlYXRlQ29va2llKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0Q2FydDogZ2V0Q2FydCxcclxuICAgICAgICBhZGRQcm9kdWN0OiBhZGRQcm9kdWN0LFxyXG4gICAgICAgIHJlbW92ZVByb2R1Y3Q6IHJlbW92ZVByb2R1Y3RcclxuICAgIH1cclxufTsiLCIiLCJ2YXIgTG9naW5Nb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gbG9naW4oZW1haWwsIHBhc3N3b3JkLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlci9sb2dpblwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCYXNpYyBcIiArIGJ0b2EoZW1haWwgKyBcIjpcIiArIHBhc3N3b3JkKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gcHV0IHRva2VuIGluIGNvb2tpZVxyXG4gICAgICAgICAgICAgICAgQ29va2llSGVscGVyLmNyZWF0ZUNvb2tpZShcImFjY2Vzc190b2tlblwiLCBkYXRhLmFjY2Vzc190b2tlbik7XHJcbiAgICAgICAgICAgICAgICBDb29raWVIZWxwZXIuY3JlYXRlQ29va2llKFwidXNlcl9pZFwiLCBkYXRhLnVzZXJfaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICdyZWxvYWQnIHBhZ2VcclxuICAgICAgICAgICAgICAgIG9uTG9hZFBhZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzaG93ICdub3QgZ29vZCBlbWFpbCBvciBwYXNzd29yZCB0byB1c2VyJ1xyXG4gICAgICAgICAgICAgICAgJChcIiNlcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyQoXCIjY29tcG9uZW50XCIpLmh0bWwoXCJlcnJvciBmdW5jdGlvblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxvZ2luOiBsb2dpblxyXG4gICAgfVxyXG59OyIsInZhciBMb2dvdXRNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gbG9nb3V0KGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC91c2VyL2xvZ291dFwiLCAvLz8gaHR0cDovLzg0Ljg0LjI0NS4yOToyNDMgPSBBUEktbG9jYXRpZT9cclxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IGdldENvb2tpZShcInVzZXJfaWRcIilcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxyXG4gICAgICAgICAgICAgICAgQ29va2llSGVscGVyLmRlbGV0ZUNvb2tpZShcImFjY2Vzc190b2tlblwiKTtcclxuICAgICAgICAgICAgICAgIENvb2tpZUhlbHBlci5kZWxldGVDb29raWUoXCJ1c2VyX2lkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICdyZWxvYWQnIHBhZ2VcclxuICAgICAgICAgICAgICAgIG9uTG9hZFBhZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNob3cgJ25vdCBnb29kIGVtYWlsIG9yIHBhc3N3b3JkIHRvIHVzZXInXHJcbiAgICAgICAgICAgICAgICAkKFwiI2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vJChcIiNjb21wb25lbnRcIikuaHRtbChcImVycm9yIGZ1bmN0aW9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldENvb2tpZShuYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvb2tpZSA9IGNvb2tpZXNbaV0uc3BsaXQoXCI9XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb29raWVbMF0udHJpbSgpID09IG5hbWUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvb2tpZVsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsb2dvdXQ6IGxvZ291dFxyXG4gICAgfVxyXG59OyIsInZhciBQcm9kdWN0c01vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiBnZXRQYWdlKGZpbHRlciwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3Byb2R1Y3RzP1wiICsgZmlsdGVyLCAvLz8gaHR0cDovLzg0Ljg0LjI0NS4yOToyNDMgPSBBUEktbG9jYXRpZT9cclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0UGFnZTogZ2V0UGFnZVxyXG4gICAgfVxyXG59OyIsInZhciBQdWJsaWNXaXNobGlzdE1vZGVsID0gZnVuY3Rpb24odXNlcl9pZClcclxue1xyXG4gICAgdGhpcy5nZXRQdWJsaWNXaXNobGlzdCA9IGZ1bmN0aW9uKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwODEvcHVibGljX3dpc2hsaXN0L1wiICsgdXNlcl9pZCxcclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07IiwidmFyIFJlZ2lzdGVyTW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyKGZvcm1EYXRhLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAvLyBNb2RpZnkgZGF0YSBiZWZvcmUgc2VuZGluZyAoYWxzbyBjb252ZXJ0IHRvIFVUQylcclxuICAgICAgICBmb3JtRGF0YS5kYXRlX29mX2JpcnRoID0gbmV3IERhdGUoRGF0ZS5VVEMoZm9ybURhdGEuamFhciwgZm9ybURhdGEubWFhbmQsIGZvcm1EYXRhLmRhZykpO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgeWVhciwgbW9udGggYW5kIGRheVxyXG4gICAgICAgIGRlbGV0ZSBmb3JtRGF0YS5qYWFyO1xyXG4gICAgICAgIGRlbGV0ZSBmb3JtRGF0YS5tYWFuZDtcclxuICAgICAgICBkZWxldGUgZm9ybURhdGEuZGFnO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlci9yZWdpc3RlclwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgZV9tYWlsIDogZm9ybURhdGEuZV9tYWlsYWRyZXMsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA6IGZvcm1EYXRhLndhY2h0d29vcmQsXHJcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lIDogZm9ybURhdGEudm9vcm5hYW0sXHJcbiAgICAgICAgICAgICAgICBpbnNlcnRpb24gOiBmb3JtRGF0YS50dXNzZW52b2Vnc2VsLFxyXG4gICAgICAgICAgICAgICAgc3VybmFtZSA6IGZvcm1EYXRhLmFjaHRlcm5hYW0sXHJcbiAgICAgICAgICAgICAgICBnZW5kZXIgOiBmb3JtRGF0YS5nZW5kZXIsXHJcbiAgICAgICAgICAgICAgICBkYXRlX29mX2JpcnRoIDogZm9ybURhdGEuYmlydGhfZGF0ZSxcclxuICAgICAgICAgICAgICAgIHBob25lX251bWJlciA6IGZvcm1EYXRhLm1vYmllbF9udW1tZXIsXHJcbiAgICAgICAgICAgICAgICBzZWNyZXRfcXVlc3Rpb24gOiBmb3JtRGF0YS5zZWN1cml0eV9xdWVzdGlvbixcclxuICAgICAgICAgICAgICAgIHNlY3JldF9xdWVzdGlvbl9hbnN3ZXIgOiBmb3JtRGF0YS5zZWN1cml0eV9hbnN3ZXIsXHJcbiAgICAgICAgICAgICAgICBwb3N0YWxfY29kZSA6IGZvcm1EYXRhLnBvc3Rjb2RlLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyIDogZm9ybURhdGEuaHVpc251bW1lcixcclxuICAgICAgICAgICAgICAgIHN0cmVldF9uYW1lIDogZm9ybURhdGEuc3RyYWF0bmFhbSxcclxuICAgICAgICAgICAgICAgIGNpdHkgOiBmb3JtRGF0YS5wbGFhdHNcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjcmVnaV9hcGlfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZWdpc3RlcjogcmVnaXN0ZXJcclxuICAgIH1cclxufTsiLCJ2YXIgUmVzZXRQYXNzd29yZE1vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiByZXNldHBhc3N3b3JkKGZvcm1EYXRhLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXIvcmVzZXRwYXNzd29yZFwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgZW1haWwgOiBmb3JtRGF0YS5lX21haWxhZHJlcyxcclxuICAgICAgICAgICAgICAgIHNlY3JldF9xdWVzdGlvbl9hbnN3ZXIgOiBmb3JtRGF0YS5zZWN1cml0eV9hbnN3ZXIsXHJcbiAgICAgICAgICAgICAgICBzZWNyZXRfcXVlc3Rpb24gOiBmb3JtRGF0YS5zZWN1cml0eV9xdWVzdGlvbixcclxuICAgICAgICAgICAgICAgIG5ld19wYXNzd29yZCA6IGZvcm1EYXRhLndhY2h0d29vcmQsXHJcbiAgICAgICAgICAgICAgICByZXBlYXRfcGFzc3dvcmQgOiBmb3JtRGF0YS53YWNodHdvb3JkMlxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8kKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwidmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgICAgICQoXCIjcmVzZXRfcGFzc3dvcmRfYXBpX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzZXRwYXNzd29yZDogcmVzZXRwYXNzd29yZFxyXG4gICAgfVxyXG59OyIsInZhciBQcm9kdWN0TW9kZWwgPSBmdW5jdGlvbihlYW4pXHJcbntcclxuICAgIGZ1bmN0aW9uIEdldFByb2R1Y3RJbmZvKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9wcm9kdWN0cy9cIiArIGVhbixcclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhWzBdKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIEdldFByb2R1Y3RJbmZvOiBHZXRQcm9kdWN0SW5mb1xyXG4gICAgfVxyXG59OyIsInZhciBVc2VyTW9kZWwgPSBmdW5jdGlvbih1c2VyaWQpXHJcbntcclxuICAgIGZ1bmN0aW9uIEdldFVzZXJJbmZvKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC91c2Vycy9cIiArIHVzZXJpZCxcclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhWzBdKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIEdldFVzZXJJbmZvOiBHZXRVc2VySW5mb1xyXG4gICAgfVxyXG59OyIsInZhciBXaXNobGlzdE1vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiBnZXRXaXNobGlzdChjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvd2lzaGxpc3RcIixcclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUb1dpc2hsaXN0KHZpZXdEYXRhLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvd2lzaGxpc3QvXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwidXNlcl9pZFwiKSAvKisgXCIvXCIgKyB2aWV3RGF0YS5lYW5fbnVtYmVyKi8sXHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICB3aXNobGlzdF9pZCA6IHZpZXdEYXRhLndpc2hsaXN0X2lkLFxyXG4gICAgICAgICAgICAgICAgLy9lYW5fbnVtYmVyIDogdmlld0RhdGEuZWFuX251bWJlclxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUZyb21XaXNobGlzdChlYW4sIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC93aXNobGlzdC9cIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJ1c2VyX2lkXCIpICsgXCIvXCIgKyBTdHJpbmcoZWFuKSxcclxuICAgICAgICAgICAgdHlwZTogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzd2l0Y2hQdWJsaWNTdGF0ZShuZXdTdGF0dXMsIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBnbyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgbmV3REJTdGF0dXMgPSBcIjBcIjtcclxuICAgICAgICBpZiAobmV3U3RhdHVzID09IFwicHVibGljXCIpe1xyXG4gICAgICAgICAgICBuZXdEQlN0YXR1cyA9IFwiMVwiO1xyXG4gICAgICAgICAgICBnbyA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXdTdGF0dXMgPT0gXCJwcml2YXRlXCIpe1xyXG4gICAgICAgICAgICBnbyA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXdTdGF0dXMgaGFzIHVuZXhwZWN0ZWQgdmFsdWUuIG5ld1N0YXR1cyA9IFwiICsgbmV3U3RhdHVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChnbylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgxL3dpc2hsaXN0L3N3aXRjaF9wdWJsaWNcIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwicGF0Y2hcIixcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XCJuZXdEQlN0YXR1c1wiOm5ld0RCU3RhdHVzfSksXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRXaXNobGlzdDogZ2V0V2lzaGxpc3QsXHJcbiAgICAgICAgYWRkVG9XaXNobGlzdDogYWRkVG9XaXNobGlzdCxcclxuICAgICAgICBkZWxldGVGcm9tV2lzaGxpc3Q6IGRlbGV0ZUZyb21XaXNobGlzdCxcclxuICAgICAgICBzd2l0Y2hQdWJsaWNTdGF0ZTogc3dpdGNoUHVibGljU3RhdGVcclxuICAgIH1cclxufTsiLCJ2YXIgQWRtaW5Vc2VyQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0UGFnZSk7XHJcbiAgICAgICAgdmlld0hlbHBlci5zZXRTYXZlTGlzdGVuZXIoc2F2ZVVzZXJJbmZvKTtcclxuICAgICAgICB2aWV3SGVscGVyLnNldERlbGV0ZUxpc3RlbmVyKGRlbGV0ZVVzZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFBhZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmdldFBhZ2Uoc2V0Vmlldyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoZGF0YSkgXHJcbiAgICB7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVVc2VySW5mbyhldmVudClcclxuICAgIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICB2YXIgZm9ybURhdGEgPSAkKHRoaXMpLnNlcmlhbGl6ZU9iamVjdCgpO1xyXG5cclxuICAgICAgICBNb2RlbC5zYXZlVXNlckluZm8oZm9ybURhdGEsIGZ1bmN0aW9uKGZvcm1EYXRhKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJHZWJydWlrZXIgc3VjY2Vzdm9sIGdlw7xwZGF0ZS5cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlVXNlcih1c2VyX2lkKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmRlbGV0ZVVzZXIodXNlcl9pZCwgZnVuY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJHZWJydWlrZXIgc3VjY2Vzdm9sIGdlZGVsZXRlLlwiKTtcclxuICAgICAgICAgICAgUm91dGVyLnJvdXRlKFwiL2FkbWluXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgQWRtaW5Db250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihnZXRQYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQYWdlKClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5nZXRQYWdlKHNldFZpZXcpOyAvL1wiXCIsIGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTsgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KGRhdGEpIFxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBDYXJ0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIEdldCBhbGwgY2FydCBpdGVtcyBhbmQgcGFzcyB0aGUgaXRlbXMgdG8gdGhlIFZpZXdIZWxwZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0Q2FydCgpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0Q2FydChmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgaXRlbSB0byB0aGUgY2FydCBhbmQgcGFzcyBpdCB0byB0aGUgdmlld0hlbHBlclxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge2ludH0gaWQgIEl0ZW0gaWRcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gYWRkUHJvZHVjdChpZClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5hZGRQcm9kdWN0KGlkLCBmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLmFkZEl0ZW0oZGF0YSk7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGEgcHJvZHVjdCBhbmQgY2FsbCB0aGUgdmlld0hlbHBlclxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiByZW1vdmVQcm9kdWN0KGlkKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLnJlbW92ZVByb2R1Y3QoaWQsIGZ1bmN0aW9uIChkYXRhKSB7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihnZXRDYXJ0KTtcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFkZFByb2R1Y3RMaXN0ZW5lcihhZGRQcm9kdWN0KTtcclxuICAgICAgICBWaWV3SGVscGVyLnNldFJlbW92ZUxpc3RlbmVyKHJlbW92ZVByb2R1Y3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgRGVsZXRlQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwidmFyIEVycm9yQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIpXHJcbntcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIExvZ2luQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgLy8gTG9vcCB0cm91Z2ggdGhlIGZvcm0gZGF0YSBhbmQgZ2V0IGFsbCBmaWVsZHNcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcclxuICAgICAgICAkLmVhY2goJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbiAoaSwgZmllbGQpIHtcclxuICAgICAgICAgICAgZm9ybURhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgZW1haWwgYW5kIHBhc3N3b3JkIHRvIEFQSVxyXG4gICAgICAgIE1vZGVsLmxvZ2luKGZvcm1EYXRhLmVtYWlsLCBmb3JtRGF0YS5wYXNzd29yZCwgZnVuY3Rpb24gb25TdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gc2hvdyB1aXRsb2dnZW4gYnV0dG9uXHJcbiAgICAgICAgICAgICQoXCIjaW5sb2dnZW5fdGV4dFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIjdWl0bG9nZ2VuX3RleHRcIikuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgUm91dGVyLnJvdXRlKFwicHJvZHVjdHNcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICAvLyBzZXQgdmlldyB0byBsb2dpbiBmb3JtXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCk7XHJcblxyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gZW1haWwgYW5kIHBhc3N3b3JkOyBjbGlja3MgJ2xvZ2luJzogVklFVyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIExvZ291dENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmxvZ291dChmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBzaG93IHVpdGxvZ2dlbiBidXR0b25cclxuICAgICAgICAgICAgJChcIiNpbmxvZ2dlbl90ZXh0XCIpLnNob3coKTtcclxuICAgICAgICAgICAgJChcIiN1aXRsb2dnZW5fdGV4dFwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzZXQgdmlldyB0byBsb2dpbiBmb3JtXHJcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBlbWFpbCBhbmQgcGFzc3dvcmQ7IGNsaWNrcyAnbG9naW4nOiBWSUVXIG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgUHJvZHVjdHNDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGdldFBhZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmdldFBhZ2UoXCJcIiwgZnVuY3Rpb24gKGRhdGEpIHsgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaWx0ZXJQcm9kdWN0cyhldmVudClcclxuICAgIHtcclxuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm0gKHBhZ2UgcmVsb2FkKVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciBmaWx0ZXJzID0gJCh0aGlzKS5zZXJpYWxpemUoKTtcclxuICAgICAgICBNb2RlbC5nZXRQYWdlKGZpbHRlcnMsIGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIubG9hZFByb2R1Y3RzKGRhdGEpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0UGFnZSk7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRGaWx0ZXJMaXN0ZW5lcihmaWx0ZXJQcm9kdWN0cyk7XHJcbiAgICAgICAgLy8gbmV3IGFjdGlvbiB3YW5uZXIgZXIgb3AgZmlsdGVyIHdvcmR0IGdlZHJ1a3RcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIFB1YmxpY1dpc2hsaXN0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gbWFpblwiKTtcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldFB1YmxpY1dpc2hsaXN0KTtcclxuICAgICAgICAvL1ZpZXdIZWxwZXIuZ2V0UGFnZShnZXRQdWJsaWNXaXNobGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UHVibGljV2lzaGxpc3QoKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmdldFB1YmxpY1dpc2hsaXN0KHNldFZpZXcpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgUmVnaXN0ZXJDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZCgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZXNcclxuICAgICAgICAkKFwiI3JlZ2lfYXBpX2Vycm9yX21lc3NhZ2VcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAvLyBwdXQgZm9ybSBmaWVsZHMgaW4gamF2YXNjcmlwdCBPYmplY3RcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgJC5lYWNoKCQodGhpcykuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGZpeCBkYXRlIG9mIGJpcnRoIChBUEkgZXhwZWN0cyBjZXJ0YWluIGZvcm1hdClcclxuICAgICAgICBmb3JtRGF0YVtcImJpcnRoX2RhdGVcIl0gPSBmb3JtRGF0YS5qYWFyICsgXCItXCIgKyBmb3JtRGF0YS5tYWFuZCArIFwiLVwiICsgZm9ybURhdGEuZGFnO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIGFueSBtYW5kYXRvcnkgZmllbGQgaXMgbGVmdCBlbXB0eSBieSB1c2VyIGFuZFxyXG4gICAgICAgIC8vIGlmIHNvLCBhYm9ydCBmdW5jdGlvblxyXG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZHMgPSBbXCJ2b29ybmFhbVwiLCBcImFjaHRlcm5hYW1cIiwgXCJwb3N0Y29kZVwiLCBcImh1aXNudW1tZXJcIiwgXCJlX21haWxhZHJlc1wiLCBcIndhY2h0d29vcmRcIiwgXCJ3YWNodHdvb3JkMlwiLCBcInNlY3VyaXR5X2Fuc3dlclwiXTsgLy9kcm9wZG93bnMgKGxpa2UgZ2VuZGVyKSBhcmUgYWx3YXlzIGZpbGxlZCBpbiwgc28gZG9uJ3QgcHV0IGluIHRoaXMgbGlzdFxyXG5cclxuICAgICAgICAvLyAocmVzZXQgYWxsIGZpZWxkcyB0byAndmFsaWQnIGJlY2F1c2UgdXNlciBtYXkgaGF2ZSBmaWxsZWQgaW4gZmllbGRzIHNpbmNlXHJcbiAgICAgICAgLy8gdGhlIHByZXZpb3VzIHRpbWUgdGhpcyBmdW5jdGlvbiB3YXMgY2FsbGVkKVxyXG4gICAgICAgICQuZWFjaChtYW5kYXRvcnlGaWVsZHMsIGZ1bmN0aW9uIChpLCBtYW5GaWVsZCkge1xyXG4gICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcclxuICAgICAgICAgICAgaWYgKGZvcm1EYXRhW21hbkZpZWxkXSA9PSBcIlwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyBpZiBhIG1hbmRhdG9yeSBmaWVsZCBpcyBlbXB0eSwgc2hvdyBlcnJvciBtZXNzYWdlIHRvIHVzZXIgYW5kIGFib3J0IGZ1bmN0aW9uXHJcbiAgICAgICAgaWYgKG1hbmRhdG9yeUZpZWxkTWlzc2VzKVxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0b3Agb2YgcGFnZSBzbyB0aGF0IHVzZXJzIHNlZSBtZXNzYWdlIFwic29tZXRoaW5nIGlzIG5vdCBmaWxsZWQgaW5cIlxyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICAgIC8vIHNob3cgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcclxuICAgICAgICAgICAgJChcIiNyZWdpc3Rlcl9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgcGFzc3dvcmRzTm90SWRlbnRpY2FsID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChmb3JtRGF0YS53YWNodHdvb3JkICE9IGZvcm1EYXRhLndhY2h0d29vcmQyKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhc3N3b3Jkc05vdElkZW50aWNhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAkKFwiI3dhY2h0d29vcmRcIikuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xyXG4gICAgICAgICAgICAkKFwiI3dhY2h0d29vcmQyXCIpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFib3J0IGZ1bmN0aW9uIGlmIG1hbmRhdG9yeSBmaWVsZCBtaXNzZXMgb3IgcGFzc3dvcmRzIG5vdCBpZGVudGljYWxcclxuICAgICAgICBpZiAobWFuZGF0b3J5RmllbGRNaXNzZXMgfHwgcGFzc3dvcmRzTm90SWRlbnRpY2FsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgdXNlciBpbmZvIHRvIEFQSVxyXG4gICAgICAgIE1vZGVsLnJlZ2lzdGVyKGZvcm1EYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJy92aWV3cy9yZWdpc3Rlci9hZnRlcl9yZWdpc3Rlci5odG1sJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICAvLyBzZXQgdmlldyB0byByZWdpc3RlciBmb3JtXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCcvdmlld3MvcmVnaXN0ZXIvcmVnaXN0ZXIuaHRtbCcpO1xyXG5cclxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIHJlZ2lzdGVyIGluZm87IGNsaWNrcyAncmVnaXN0ZXInOiB2aWV3IG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG5cclxuICAgICAgICAvLyBlbWFpbCBhbmQgcGFzc3dvcmQgYXJlIHNlbmQgdG8gQVBJOyBBUEkgY2hlY2tzIGlmIGVtYWlsIGFscmVhZHkgZXhpc3RzIChhbmQgd2hldGhlciBwYXNzd29yZCBpcyBjb3JyZWN0PykgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBSZXNldFBhc3N3b3JkQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKClcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluIGFjdGlvblBlcmZvcm1lZFwiKTsgLy90ZXN0XHJcblxyXG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IGVycm9yIG1lc3NhZ2VzXHJcbiAgICAgICAgJChcIiNyZXNldF9wYXNzd29yZF9hcGlfZXJyb3JfbWVzc2FnZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiN3dzJfZXJyb3JfbWVzc2FnZVwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgIC8vIHB1dCBmb3JtIGZpZWxkcyBpbiBqYXZhc2NyaXB0IE9iamVjdFxyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IHt9O1xyXG5cclxuICAgICAgICAkLmVhY2goJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbiAoaSwgZmllbGQpIHtcclxuICAgICAgICAgICAgZm9ybURhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciBhbnkgbWFuZGF0b3J5IGZpZWxkIGlzIGxlZnQgZW1wdHkgYnkgdXNlciBhbmRcclxuICAgICAgICAvLyBpZiBzbywgYWJvcnQgZnVuY3Rpb25cclxuICAgICAgICB2YXIgbWFuZGF0b3J5RmllbGRNaXNzZXMgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbWFuZGF0b3J5RmllbGRzID0gW1wid2FjaHR3b29yZFwiLCBcIndhY2h0d29vcmQyXCIsIFwiZV9tYWlsYWRyZXNcIixcInNlY3VyaXR5X2Fuc3dlclwiXTsgLy9kcm9wZG93bnMgKGxpa2Ugc2VjdXJpdHlfcXVlc3Rpb25fYW5zd2VyKSBhcmUgYWx3YXlzIGZpbGxlZCBpbiwgc28gZG9uJ3QgcHV0IGluIHRoaXMgbGlzdFxyXG5cclxuICAgICAgICAvLyAocmVzZXQgYWxsIGZpZWxkcyB0byAndmFsaWQnIGJlY2F1c2UgdXNlciBtYXkgaGF2ZSBmaWxsZWQgaW4gZmllbGRzIHNpbmNlXHJcbiAgICAgICAgLy8gdGhlIHByZXZpb3VzIHRpbWUgdGhpcyBmdW5jdGlvbiB3YXMgY2FsbGVkKVxyXG4gICAgICAgICQuZWFjaChtYW5kYXRvcnlGaWVsZHMsIGZ1bmN0aW9uIChpLCBtYW5GaWVsZCkge1xyXG4gICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcclxuICAgICAgICAgICAgaWYgKGZvcm1EYXRhW21hbkZpZWxkXSA9PSBcIlwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyBpZiBhIG1hbmRhdG9yeSBmaWVsZCBpcyBlbXB0eSwgc2hvdyBlcnJvciBtZXNzYWdlIHRvIHVzZXIgYW5kIGFib3J0IGZ1bmN0aW9uXHJcbiAgICAgICAgaWYgKG1hbmRhdG9yeUZpZWxkTWlzc2VzKVxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0b3Agb2YgcGFnZSBzbyB0aGF0IHVzZXJzIHNlZSBtZXNzYWdlIFwic29tZXRoaW5nIGlzIG5vdCBmaWxsZWQgaW5cIlxyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICAgIC8vIHNob3cgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcclxuICAgICAgICAgICAgJChcIiNyZXNldF9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgcGFzc3dvcmRzTm90SWRlbnRpY2FsID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChmb3JtRGF0YS53YWNodHdvb3JkICE9IGZvcm1EYXRhLndhY2h0d29vcmQyKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhc3N3b3Jkc05vdElkZW50aWNhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAkKFwiI3dhY2h0d29vcmRcIikuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xyXG4gICAgICAgICAgICAkKFwiI3dhY2h0d29vcmQyXCIpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFib3J0IGZ1bmN0aW9uIGlmIG1hbmRhdG9yeSBmaWVsZCBtaXNzZXMgb3IgcGFzc3dvcmRzIG5vdCBpZGVudGljYWxcclxuICAgICAgICBpZiAobWFuZGF0b3J5RmllbGRNaXNzZXMgfHwgcGFzc3dvcmRzTm90SWRlbnRpY2FsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnRpbnVlZFwiKVxyXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIHVzZXIgaW5mbyB0byBBUElcclxuICAgICAgICBNb2RlbC5yZXNldHBhc3N3b3JkKGZvcm1EYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJ3ZpZXdzL3Jlc2V0cGFzc3dvcmQvYWZ0ZXJfcmVzZXQuaHRtbCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7ICAgICAgXHJcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gcmVzZXQgcGFzc3dvcmQgZm9ybVxyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0Vmlldygndmlld3MvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLmh0bWwnKTtcclxuXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgICAgIC8vIG5ldyBhY3Rpb24gd2FubmVyIGVyIG9wIGZpbHRlciB3b3JkdCBnZWRydWt0XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuIiwidmFyIFByb2R1Y3RDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcclxuICAgIHtcclxuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIExvb3AgdHJvdWdoIHRoZSBmb3JtIGRhdGEgYW5kIGdldCBhbGwgZmllbGRzXHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XHJcbiAgICAgICAgJC5lYWNoKCQodGhpcykuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIGVtYWlsIGFuZCBwYXNzd29yZCB0byBBUElcclxuICAgICAgICBNb2RlbC5sb2dpbihmb3JtRGF0YS5lbWFpbCwgZm9ybURhdGEucGFzc3dvcmQsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vIHNob3cgdWl0bG9nZ2VuIGJ1dHRvblxyXG4gICAgICAgICAgICAkKFwiI2lubG9nZ2VuX3RleHRcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiI3VpdGxvZ2dlbl90ZXh0XCIpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFdlZXJnZWVmIGVlbiBhbmRlcmUgcGFnaW5hIGdlYmFzc2VlcmQgb3AgJ2FkbWluJyBvZiAncmVnaXN0ZXJlZCB1c2VyJ1xyXG4gICAgICAgICAgICBuZXcgUGFnZUNvbnRyb2xsZXIobmV3IFBhZ2VWaWV3SGVscGVyKCksIG5ldyBQYWdlTW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGxldCB2aWV3IHNob3cgdmlldyB3aXRoIGRhdGEgZnJvbSBkYXRhYmFzZVxyXG4gICAgZnVuY3Rpb24gc2hvd1ZpZXcoZGF0YSlcclxuICAgIHtcclxuICAgICAgICB2aWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICAvLyB3aGF0IGhhcHBlbnM6XHJcbiAgICAgICAgLy8gMSkgdXNlciBjbGlja3Mgb24gYSBwcm9kdWN0IFxyXG4gICAgICAgIC8vIDIpIG1vZGVsIGdldHMgaW5mbyBvZiB0aGUgcHJvZHVjdFxyXG4gICAgICAgIC8vIDMpIHN5c3RlbSBwdXRzIGluZm8gaW4gaHRtbFxyXG4gICAgICAgIC8vIDQpIHZpZXcgc2hvd3MgaW5mb1xyXG5cclxuICAgICAgICAvLyAyKSBtb2RlbCBnZXRzIGluZm8gb2YgdGhlIHByb2R1Y3RcclxuICAgICAgICAvLyAzKSBzeXN0ZW0gcHV0cyBpbmZvIGluIGh0bWxcclxuICAgICAgICBtb2RlbC5HZXRQcm9kdWN0SW5mbyhzaG93Vmlldyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gbG9naW4gZm9ybVxyXG4gICAgICAgIC8vVmlld0hlbHBlci5zZXRWaWV3KCk7XHJcblxyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gZW1haWwgYW5kIHBhc3N3b3JkOyBjbGlja3MgJ2xvZ2luJzogVklFVyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xyXG4gICAgICAgIC8vVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW4sXHJcbiAgICAgICAgc2hvd1ZpZXcgOiBzaG93Vmlld1xyXG4gICAgfVxyXG59OyIsIiIsInZhciBXaXNobGlzdENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcblxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihnZXRXaXNobGlzdCk7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXREZWxldGVMaXN0ZW5lcihkZWxldGVGcm9tV2lzaGxpc3QpO1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0UHVibGljTGlzdGVuZXIoc3dpdGNoUHVibGljU3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFdpc2hsaXN0KClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5nZXRXaXNobGlzdChzZXRWaWV3KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoZGF0YSlcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlRnJvbVdpc2hsaXN0KGVhbiwgZGl2X3RvX2hpZGUpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZGVsZXRlRnJvbVdpc2hsaXN0KGVhbiwgZnVuY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVmlld0hlbHBlci5oaWRlSXRlbShkaXZfdG9faGlkZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3dpdGNoUHVibGljU3RhdGUobmV3U3RhdHVzKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLnN3aXRjaFB1YmxpY1N0YXRlKG5ld1N0YXR1cywgZnVuY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIEFkbWluVmlld0hlbHBlciA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIlxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgIGZ1bmN0aW9uIHNldFZpZXcoZGF0YSlcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9XCJBZG1pbiAtIEFaIEdhbWVzXCI7XHJcblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9hZG1pbi9hZG1pbi5odG1sJywgZnVuY3Rpb24gKCkgeyAvLyB3YWFyIGlkID0gJ2NvbXBvbmVudCcgZG9lIC5sb2FkLi4uLi4uXHJcbiAgICAgICAgICAgICQuZWFjaChkYXRhLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSBwcm9kdWN0XHJcbiAgICAgICAgICAgICAgICB2YXIgdXNlciA9ICQoJyNzaW5nbGVfdXNlcicpLmNsb25lKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0IGluZm9cclxuICAgICAgICAgICAgICAgICQodXNlcikuZmluZChcIi51c2VyX19maXJzdG5hbWVcIikuaHRtbCh2YWx1ZS5maXJzdF9uYW1lKTtcclxuICAgICAgICAgICAgICAgICQodXNlcikuZmluZChcIi51c2VyX19maXJzdG5hbWVcIikuYXR0cignaHJlZicsICcvYWRtaW5fdXNlci8nICsgdmFsdWUudXNlcl9pZCk7XHJcbiAgICAgICAgICAgICAgICAkKHVzZXIpLmZpbmQoXCIudXNlcl9faW5zZXJ0aW9uXCIpLmh0bWwodmFsdWUuaW5zZXJ0aW9uKTtcclxuICAgICAgICAgICAgICAgICQodXNlcikuZmluZChcIi51c2VyX19sYXN0bmFtZVwiKS5odG1sKHZhbHVlLnN1cm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgJCh1c2VyKS5maW5kKFwiLnVzZXJfX2VtYWlsXCIpLmh0bWwodmFsdWUuZW1haWwpO1xyXG4gICAgICAgICAgICAgICAgJCh1c2VyKS5maW5kKFwiLnVzZXJfX3Bob25lbnVtYmVyXCIpLmh0bWwodmFsdWUucGhvbmVfbnVtYmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI3VzZXJzX2JvZHlcIikuYXBwZW5kKHVzZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgbGlzdCBpdGVtLCBiZWNhdXNlIHRoaXMgaXRlbSBpcyBhbHdheXMgZW1wdHlcclxuICAgICAgICAgICAgJChcIiNzaW5nbGVfdXNlclwiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICAvL2RhdCBoaWVyb25kZXIgemF0IGFhcmRpZyB3YXQgd2VyayBpbi4uLiBEb25hbGQgd2lsIG5vZyBmZiBob3VkZW5cclxuXHJcbiAgICAvLyBmdW5jdGlvbiBzaG93VXNlcnMoZGF0YSlcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBkb2N1bWVudC50aXRsZSA9XCJBZG1pbiAtIEFaIEdhbWVzXCI7XHJcblxyXG4gICAgLy8gICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9hZG1pbi9hZG1pbi5odG1sJywgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICAgICB2YXIgdGFibGUgPSAkKFwiPHRhYmxlIGlkPSd1c2Vyc190YWJsZSc+PC90YWJsZT5cIik7XHJcblxyXG4gICAgLy8gICAgICAgICAvLyB0YWJsZSBoZWFkZXJcclxuICAgIC8vICAgICAgICAgdmFyIHJvdyA9ICQoJzx0cj48L3RyPicpO1xyXG4gICAgLy8gICAgICAgICByb3cuYXBwZW5kKCc8dGQ+Vm9vcm5hYW08L3RkPjx0ZD5UdXNzZW52PC90ZD48dGQ+QWNodGVybmFhbTwvdGQ+PHRkPkdlYnJ1aWtlcnNuYWFtPC90ZD48dGQ+ZW1haWw8L3RkPjx0ZD50eXBlPC90ZD4nKTtcclxuXHJcbiAgICAvLyAgICAgICAgICQuZWFjaChkYXRhLCBmdW5jdGlvbihudW1iZXJyLCB1c2VyKSBcclxuICAgIC8vICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIHJvdyA9ICQoJzx0cj48L3RyPicpO1xyXG4gICAgLy8gICAgICAgICAgICAgJC5lYWNoKHVzZXIsIGZ1bmN0aW9uKGtleSwgdmFsdWUpXHJcbiAgICAvLyAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZClcclxuICAgIC8vICAgICAgICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQoICQoXCI8dGQgY2xhc3M9J3RkX3VzZXInPjwvdGQ+XCIpLmh0bWwoU3RyaW5nKHZhbHVlKSkgKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByb3cuYXBwZW5kKCAkKFwiPHRkIGNsYXNzPSd0ZF91c2VyJz48L3RkPlwiKSApO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgICAgICB0YWJsZS5hcHBlbmQocm93KTtcclxuICAgIC8vICAgICAgICAgICAgIC8vIC8vZm9yIGFkZGl0aW9uYWwgdXNlciBpbmZvIGlmIGNsaWNrZWRcclxuICAgIC8vICAgICAgICAgICAgIC8vIHJvdyA9ICQoJzxkaXYgY2xhc3M9XCJ0b2JldGFibGVcIj48L2Rpdj4nKTtcclxuICAgIC8vICAgICAgICAgICAgIC8vIHRhYmxlLmFwcGVuZChyb3cpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgJCgnI3VzZXJzJykuYXBwZW5kKHRhYmxlKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBmdW5jdGlvbiBwdXRJbmZvSW5IdG1sKGNsaWNrZWQsIGRhdGEpXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2luIHB1dEluZm9Jbkh0bWwoKScpO1xyXG4gICAgLy8gICAgIC8vIHNob3cgaW5mbyBvZiB0aGUgcmlnaHQgdXNlciAoaWYgbm90IGFscmVhZHkgc2hvd2luZyBpdClcclxuICAgIC8vICAgICAvLyBpbnNlcnQgcm93IGFzIHRhYmxlIGhlYWRlclxyXG4gICAgLy8gICAgIHZhciBoZWFkZXJyb3cgPSAkKCc8dHI+PC90cj4nKS5hcHBlbmQoJzx0ZD53dzwvdGQ+PHRkPmdlYmxva2tlZXJkPC90ZD48dGQ+aWQ8L3RkPjx0ZD5nZW5kZXI8L3RkPjx0ZD5nZWJvb3J0ZWRhdHVtPC90ZD48dGQ+dnJhYWc8L3RkPjx0ZD5hbnR3b29yZDwvdGQ+Jyk7XHJcblxyXG4gICAgLy8gICAgIC8vIGluc2VydCByb3cgd2l0aCB0ZSB1c2VyaW5mb1xyXG4gICAgLy8gICAgIHZhciBpbmZvcm93ID0gJCgnPHRyPjwvdHI+Jyk7XHJcblxyXG4gICAgLy8gICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICAvLyAgICAgJC5lYWNoKGRhdGFbMF0sIGZ1bmN0aW9uKGtleSwgdmFsdWUpXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBpZiAoY291bnQgPT0gMSkgeyAvLyBnZWJsb2trZWVyZFxyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHZhbHVlID09IDEpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB2YWx1ZSA9ICduZWUnO1xyXG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PSAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFsdWUgPSAnamEnXHJcbiAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHZhbHVlID0gJ2RiIGZvdXQ/J1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhjb3VudCk7XHJcbiAgICAvLyAgICAgICAgIHZhciB0ZCA9ICQoJzx0ZD48L3RkPicpLmFwcGVuZCh2YWx1ZSk7XHJcblxyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygna2V5LCB2YWx1ZTogJyArIGtleSwgdmFsdWUpO1xyXG5cclxuICAgIC8vICAgICAgICAgaW5mb3Jvdy5hcHBlbmQodGQpO1xyXG5cclxuICAgIC8vICAgICAgICAgY291bnQgKz0gMTtcclxuICAgIC8vICAgICB9KVxyXG5cclxuICAgIC8vICAgICBpbmZvcm93Lmluc2VydEFmdGVyKCAkKGNsaWNrZWQpLmNsb3Nlc3QoJ3RyJykgKTtcclxuICAgIC8vICAgICBoZWFkZXJyb3cuaW5zZXJ0QWZ0ZXIoJChjbGlja2VkKS5jbG9zZXN0KCd0cicpKTtcclxuICAgIC8vIH1cclxuXHJcbiIsInZhciBBZG1pblVzZXJWaWV3SGVscGVyID0gZnVuY3Rpb24gKClcclxue1xyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7IC8vIGlmICdkb2N1bWVudCByZWFkeScgcGVyZm9ybSBcImFjdGlvblwiXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2YWx1ZSlcclxuICAgIHtcclxuICAgICAgICAvL3ByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2FkbWludXNlci9hZG1pbnVzZXIuaHRtbCcsIGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAkKFwiI2RlbGV0ZV9idG5cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUudXNlcl9pZCkgICBcclxuICAgICAgICAgICAgJChcIiNmaXJzdF9uYW1lXCIpLnZhbCh2YWx1ZS5maXJzdF9uYW1lKTtcclxuICAgICAgICAgICAgJChcIiNpbnNlcnRpb25cIikudmFsKHZhbHVlLmluc2VydGlvbik7XHJcbiAgICAgICAgICAgICQoXCIjc3VybmFtZVwiKS52YWwodmFsdWUuc3VybmFtZSk7XHJcbiAgICAgICAgICAgICQoXCIjdXNlcl90eXBlXCIpLnZhbCh2YWx1ZS51c2VyX3R5cGUpO1xyXG4gICAgICAgICAgICAkKFwiI2VtYWlsXCIpLnZhbCh2YWx1ZS5lbWFpbCk7XHJcbiAgICAgICAgICAgICQoXCIjcGFzc3dvcmRcIikuYXR0cigncGxhY2Vob2xkZXInLCAnVnVsIGhpZXIgaWV0cyBpbiBvbSBoZXQgd2FjaHR3b29yZCB0ZSB2ZXJhbmRlcmVuJyk7XHJcbiAgICAgICAgICAgICQoXCIjZ2VuZGVyXCIpLnZhbCh2YWx1ZS5nZW5kZXIpO1xyXG4gICAgICAgICAgICAkKFwiI2RhdGVfb2ZfYmlydGhcIikudmFsKHZhbHVlLmRhdGVfb2ZfYmlydGgpO1xyXG4gICAgICAgICAgICAkKFwiI3Bob25lX251bWJlclwiKS52YWwodmFsdWUucGhvbmVfbnVtYmVyKTtcclxuICAgICAgICAgICAgJChcIiNpc19hY3RpdmVcIikudmFsKHZhbHVlLmlzX2FjdGl2ZSk7XHJcbiAgICAgICAgICAgICQoXCIjdXNlcl9pZFwiKS52YWwodmFsdWUudXNlcl9pZCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdG9kYXkgICAgICAgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICB2YXIgZGF0ZU9mQmlydGggPSBuZXcgRGF0ZSh2YWx1ZS5kYXRlX29mX2JpcnRoKTtcclxuXHJcbiAgICAgICAgICAgIGZvcihpID0gMTsgaSA8IDMyOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IGRhdGVPZkJpcnRoLmdldERhdGUoKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2RhZ1wiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIGkgKyBcIicgc2VsZWN0ZWQ9J3NlbGVjdGVkJz5cIiArIGkgKyBcIjwvb3B0aW9uPlwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGFnXCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJz5cIiArIGkgKyBcIjwvb3B0aW9uPlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChpID0gMTkwMDsgaSA8IHRvZGF5LmdldEZ1bGxZZWFyKCkgKyAxOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IGRhdGVPZkJpcnRoLmdldEZ1bGxZZWFyKCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNqYWFyXCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJyBzZWxlY3RlZD0nc2VsZWN0ZWQnPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjamFhclwiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIGkgKyBcIic+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICQoXCIjbWFhbmRcIikudmFsKGRhdGVPZkJpcnRoLmdldE1vbnRoKCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U2F2ZUxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignc3VibWl0JywgJyN1c2VyZm9ybScsIGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0RGVsZXRlTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9mZigpLm9uKFwiY2xpY2tcIiwgJyNkZWxldGVfYnRuJywgZnVuY3Rpb24gKGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGFjdGlvbigkKHRoaXMpLmRhdGEoXCJpZFwiKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRTYXZlTGlzdGVuZXI6IHNldFNhdmVMaXN0ZW5lcixcclxuICAgICAgICBzZXREZWxldGVMaXN0ZW5lcjogc2V0RGVsZXRlTGlzdGVuZXJcclxuICAgIH1cclxufSIsInZhciBFcnJvclZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0VmlldygpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIk9lcHMgLSBBWiBHYW1lc1wiO1xyXG5cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvZXJyb3IvZXJyb3IuaHRtbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFjdGlvbkxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgYWN0aW9ucyBvbiBzcGVjaWZpYyBldmVudHNcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIENhcnRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHZpZXdEYXRhICE9IFwiXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2aWV3RGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgYWRkSXRlbShpdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSB0b3RhbCBwcmljZSAgb2YgdGhlIGNhcnRcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtpbnR9IHRvdGFsUHJpY2UgIFRvdGFsIHByaWNlIG9mIHRoZSBjYXJ0XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRvdGFsUHJpY2UobmV3UHJpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgbmV3UHJpY2UgPSBwYXJzZUZsb2F0KG5ld1ByaWNlKSArIHBhcnNlRmxvYXQoJChcIi5jYXJ0X190b3RhbCAucHJpY2VcIikuaHRtbCgpLnN1YnN0cigxKSk7XHJcbiAgICAgICAgJChcIi5jYXJ0X190b3RhbCAucHJpY2VcIikuaHRtbChcIuKCrFwiICsgcGFyc2VGbG9hdChuZXdQcmljZSkudG9GaXhlZCgyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlIG5ldyBjYXJ0IGl0ZW0gdmlzaWFibGUgaW4gdGhlIERPTVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gIHthcnJheX0gIGl0ZW0gIFByb2R1Y3RcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gYWRkSXRlbShpdGVtKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjYXJ0SXRlbSA9ICQoJzxkaXY+JykuaHRtbCgkKCcuc2lkZWJhcl9fY29udGVudF9fdG1wJykuaHRtbCgpKTtcclxuXHJcbiAgICAgICAgY2FydEl0ZW0uZmluZChcIi5jYXJ0X19pdGVtX190aXRsZVwiKS5odG1sKGl0ZW0udGl0bGUpO1xyXG4gICAgICAgIGNhcnRJdGVtLmZpbmQoXCIuY2FydF9faXRlbV9fcHJpY2VcIikuaHRtbChcIuKCrFwiICsgaXRlbS5wcmljZS50b0ZpeGVkKDIpKTtcclxuICAgICAgICBjYXJ0SXRlbS5maW5kKFwiLmNhcnRfX2l0ZW1fX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIGl0ZW0uaW1hZ2UpO1xyXG4gICAgICAgIGNhcnRJdGVtLmZpbmQoXCIuY2FydF9faXRlbVwiKS5hdHRyKFwiZGF0YS1pZFwiLCBpdGVtLmVhbl9udW1iZXIpXHJcblxyXG4gICAgICAgICQoXCIuY2FydFwiKS5hcHBlbmQoY2FydEl0ZW0pO1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2UgYW1vdW50IG9mIGl0ZW1zXHJcbiAgICAgICAgdmFyIGFtb3VudCA9ICQoXCIuY2FydF9idXR0b24gLmNvdW50XCIpLmh0bWwoKTtcclxuICAgICAgICAkKFwiLmNhcnRfYnV0dG9uIC5jb3VudFwiKS5odG1sKHBhcnNlSW50KGFtb3VudCkgKyAxKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSB0b3RhbCBwcmljZVxyXG4gICAgICAgIHVwZGF0ZVRvdGFsUHJpY2UoaXRlbS5wcmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIHRoZSBjYXJ0IHdoZW4gdGhlIHBhZ2UgaXMgIHJlYXNlXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuZXIgZm9yIHRoZSBBZGQgdG8gY2FydCBidXR0b25cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGFkZHRvQ2FydCAgTW9kZWwgY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gc2V0QWRkUHJvZHVjdExpc3RlbmVyKGFkZFRvQ2FydClcclxuICAgIHtcclxuICAgICAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmFkZHRvY2FydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwcm9kdWN0X2lkID0gJCh0aGlzKS5kYXRhKFwiaWRcIik7XHJcbiAgICAgICAgICAgIGFkZFRvQ2FydChwcm9kdWN0X2lkKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KFwiI3RvX3Nob3BfY2FydFwiKS5maW5kKFwiI3Nob3BfY2FydFwiKS5mYWRlVG8oMCwgMTAwKS5kZWxheSgxMDAwKS5mYWRlVG8oNjAwLCAwKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuZXIgZm9yIHJlbW92ZSBhIHByb2R1Y3QgZnJvbSB0aGUgRE9NIGNhcnRcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcmVtb3ZlUHJvZHVjdCBDYWxsYmFjayBmdW5jdGlvbiB0byByZW1vdmUgdGhlIHByb2RjdXQgZnJvbSB0aGUgbWVtb3J5XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldFJlbW92ZUxpc3RlbmVyKHJlbW92ZVByb2R1Y3QpIHtcclxuICAgICAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmNhcnRfX2l0ZW1fX3JlbW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpe1xyXG4gICAgICAgICAgICB2YXIgY2FydGl0ZW0gICA9ICQodGhpcykucGFyZW50KCk7XHJcbiAgICAgICAgICAgIHZhciBwcm9kdWN0X2lkID0gJCh0aGlzKS5wYXJlbnQoKS5kYXRhKFwiaWRcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgcHJvZHVjdCBmcm9tIERPTSBjYXJ0XHJcbiAgICAgICAgICAgICQoY2FydGl0ZW0pLmFkZENsYXNzKFwiY2FydF9faXRlbS0tcmVtb3ZlZFwiKTtcclxuICAgICAgICAgICAgJChjYXJ0aXRlbSkub24oXCJhbmltYXRpb25lbmQgd2Via2l0QW5pbWF0aW9uRW5kIG9BbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlY3Jlc2UgY291bnRcclxuICAgICAgICAgICAgdmFyIGFtb3VudCA9ICQoXCIuY2FydF9idXR0b24gLmNvdW50XCIpLmh0bWwoKTtcclxuICAgICAgICAgICAgJChcIi5jYXJ0X2J1dHRvbiAuY291bnRcIikuaHRtbChwYXJzZUludChhbW91bnQpIC0gMSk7XHJcblxyXG4gICAgICAgICAgICByZW1vdmVQcm9kdWN0KHByb2R1Y3RfaWQpXHJcbiAgICAgICAgICAgIHVwZGF0ZVRvdGFsUHJpY2UoLSQoY2FydGl0ZW0pLmZpbmQoXCIuY2FydF9faXRlbV9fcHJpY2VcIikuaHRtbCgpLnN1YnN0cigxKSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBhZGRJdGVtOiBhZGRJdGVtLFxyXG4gICAgICAgIHVwZGF0ZVRvdGFsUHJpY2U6IHVwZGF0ZVRvdGFsUHJpY2UsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxyXG4gICAgICAgIHNldEFkZFByb2R1Y3RMaXN0ZW5lcjogc2V0QWRkUHJvZHVjdExpc3RlbmVyLFxyXG4gICAgICAgIHNldFJlbW92ZUxpc3RlbmVyOiBzZXRSZW1vdmVMaXN0ZW5lclxyXG4gICAgfVxyXG59OyIsInZhciBMb2dpblZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0VmlldygpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPVwiSW5sb2dnZW4gLSBBWiBHYW1lc1wiO1xyXG5cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvbG9naW4vbG9naW4uaHRtbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gbG9naW4gZm9ybVxyXG4gICAgICAgIC8vIHVzZXIgcHJlc3NlcyAnbG9naW4nXHJcblxyXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyAnbG9naW4nLCBwZXJmb3JtIGFjdGlvbiAobWFrZSBjb250cm9sbGVyIHNlbmQgZW1haWwgYW5kIHBhc3N3b3JkIHRvIEFQSSlcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNsb2dpbmZvcm1cIiwgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxyXG4gICAgfVxyXG59OyIsInZhciBMb2dvdXRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoKVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJVaXRsb2dnZW4gLSBBWiBHYW1lc1wiO1xyXG5cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvbG9nb3V0L2xvZ291dC5odG1sJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnQgd2hlbiAnc29tZXRoaW5nJyBoYXBwZW5zICh3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgZm9yIGV4YW1wbGUpXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxyXG4gICAgfVxyXG59OyIsInZhciBQcm9kdWN0c1ZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiUHJvZHVjdGVuIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikuaHRtbCgnPGRpdiBjbGFzcz1cImNvbC0xMlwiPjxkaXYgY2xhc3M9XCJjb2wtM1wiIGlkPVwiZmlsdGVyc1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJjb2wtOVwiIGlkPVwicHJvZHVjdHNcIj48L2Rpdj48L2Rpdj4nKTtcclxuICAgICAgICAvLyBsb2FkIGZpbHRlcnNcclxuICAgICAgICAkKFwiI2ZpbHRlcnNcIikubG9hZCgnL3ZpZXdzL3Byb2R1Y3RzL2ZpbHRlcnMuaHRtbCcpO1xyXG5cclxuICAgICAgICAvLyBsb2FkIHByb2R1Y3RzXHJcbiAgICAgICAgbG9hZFByb2R1Y3RzKHZpZXdEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkUHJvZHVjdHModmlld0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNwcm9kdWN0c1wiKS5sb2FkKCcvdmlld3MvcHJvZHVjdHMvcHJvZHVjdHMuaHRtbCcsIGZ1bmN0aW9uICgpIHsgLy8gd2FhciBpZCA9ICdjb21wb25lbnQnIGRvZSAubG9hZC4uLi4uLlxyXG4gICAgICAgICAgICAkLmVhY2godmlld0RhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIENsb25lIHByb2R1Y3RcclxuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gJCgnPGRpdj4nKS5hcHBlbmQoJCgnI3Byb2R1Y3RfX2xpc3RfX2l0ZW0nKS5jbG9uZSgpKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3N1YnRpdGxlXCIpLmFwcGVuZCh2YWx1ZS5nZW5yZSArKFwiIHwgUEVHSSBcIikgKyB2YWx1ZS5wZWdpX2FnZSArKFwiIHwgXCIpKyBQbGF0Zm9ybUxvZ28odmFsdWUucGxhdGZvcm0pKTtcclxuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19kZXNjcmlwdGlvblwiKS5odG1sKEN1dFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpK3ZhbHVlLnByaWNlLnRvRml4ZWQoMikpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiI2J1dHRvbnNfX2luZm8sIC5wcm9kdWN0X19pbWFnZSBhLCAucHJvZHVjdF9fdGl0bGVcIikuYXR0cihcImhyZWZcIiwgXCJwcm9kdWN0L1wiICsgdmFsdWUuZWFuX251bWJlcik7XHJcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgdmFsdWUuaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLmFkZHRvY2FydFwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3RfX2xpc3RcIikuYXBwZW5kKHByb2R1Y3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgbGlzdCBpdGVtLCBiZWNhdXNlIHRoaXMgaXRlbSBpcyBhbHdheXMgZW1wdHlcclxuICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0X19pdGVtXCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TaG93IG1vcmUvbGVzc1xyXG4gICAgZnVuY3Rpb24gQ3V0U3RyaW5nKHRleHQpe1xyXG4gICAgICAgIHZhciBTaG93QW1vdW50ID0gNTA7XHJcbiAgICAgICAgdmFyIFdvcmRzQXJyYXkgPSB0ZXh0LnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBpZihXb3Jkc0FycmF5Lmxlbmd0aD5TaG93QW1vdW50KXtcclxuICAgICAgICAgICAgdmFyIFNob3J0U3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yKGk9MDsgaTxTaG93QW1vdW50OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgU2hvcnRTdHJpbmcgKz0gV29yZHNBcnJheVtpXSArIFwiIFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBTaG9ydFN0cmluZytcIi4uLlwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7IC8vIGlmICdkb2N1bWVudCByZWFkeScgcGVyZm9ybSBcImFjdGlvblwiXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0RmlsdGVyTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICAvLyBIaWVyIGhldCBmb3JtdWxpZXIgdmVyc3R1cmVuIGFscyB3ZSBvcCBlZW4gY2hlY2tib3ggZHJ1a2tlblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9mZigpLm9uKFwiY2hhbmdlXCIsIFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgJChcIiNwcm9kdWN0X2ZpbHRlclwiKS5zdWJtaXQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGRlIHByb2R1Y3RlbmxpanN0IGFscyBlZW4gd2FhcmRlIGluIGRlIHNsaWRlciB2ZXJhbmRlcmQoYWxsZSBtYW5pZXJlbilcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcImNoYW5nZSBrZXl1cFwiLCBcImlucHV0W25hbWU9cHJpY2UtbWF4XSwgaW5wdXRbbmFtZT1wcmljZS1taW5dXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmKCQoXCIjcHJpY2VtaW5cIikudmFsKCkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNwcmljZW1pblwiKS52YWwoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3RfZmlsdGVyXCIpLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI3Byb2R1Y3RfZmlsdGVyXCIsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIGxvYWRQcm9kdWN0czogbG9hZFByb2R1Y3RzLFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcclxuICAgICAgICBzZXRGaWx0ZXJMaXN0ZW5lcjogc2V0RmlsdGVyTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCJ2YXIgUHVibGljV2lzaGxpc3RWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pIC8vIGhlYiBkZSAkIGVyYmlqIGdlemV0LiBpbnRlcm5ldCBoYWQgaGV0IGRhYXJvdmVyICh6aWUgb25kZXJzdGFhbmRlIGNvbW1lbnQgb29rKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jaGFuZ2UgdmlldyBvZiBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh2aWV3RGF0YVswXS5pc19wdWJsaWMgPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJFcnJvciAtIEFaIEdhbWVzXCJcclxuICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2aWV3RGF0YVswXS5pc19wdWJsaWMgPT0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxvYWRQdWJsaWNXaXNobGlzdCh2aWV3RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmlld0RhdGFbMF0uaXNfcHVibGljIGhlZWZ0IG9udmVyd2FjaHRlIHdhYXJkZS4gdmlld0RhdGFbMF0uaXNfcHVibGljID0gXCIgKyB2aWV3RGF0YVswXS5pc19wdWJsaWMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkUHVibGljV2lzaGxpc3QoZGF0YSlcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiVmVybGFuZ2xpanN0IFwiICsgZGF0YVswXS5maXJzdF9uYW1lICsgXCIgLSBBWiBHYW1lc1wiO1xyXG5cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5odG1sKCc8ZGl2IGNsYXNzPVwiY29sLTEyXCIgaWQ9XCJwdWJsaWNfd2lzaGxpc3RcIj48L2Rpdj4nKTtcclxuXHJcbiAgICAgICAgJChcIiNwdWJsaWNfd2lzaGxpc3RcIikubG9hZCgnL3ZpZXdzL3B1YmxpY193aXNobGlzdC9wdWJsaWNfd2lzaGxpc3QuaHRtbCcsIGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAkKFwiI3B1YmxpY19fd2lzaGxpc3RfX2hlYWRlclwiKS5odG1sKFwiVmVybGFuZ2xpanN0IHZhbiBcIiArIGRhdGFbMF0uZmlyc3RfbmFtZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSAwO1xyXG4gICAgICAgICAgICAkLmVhY2goZGF0YSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSlcclxuICAgICAgICAgICAgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciB3aXNobGlzdF9pdGVtID0gJCgnPGRpdj4nKS5hcHBlbmQoICQoJyN3aXNoX19saXN0X19pdGVtJykuY2xvbmUoKSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGN1cnJlbnQrKztcclxuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIi53aXNoX19saXN0X19pZFwiKS5hcHBlbmQoY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgdmFsdWUuaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpK3ZhbHVlLnByaWNlKTtcclxuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIi53aXNoX19saXN0X19wbGF0Zm9ybVwiKS5hcHBlbmQoUGxhdGZvcm1Mb2dvKHZhbHVlLnBsYXRmb3JtKSk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fYXZhaWxhYmlsaXR5XCIpLmFwcGVuZChCZXNjaGlrYmFhcmhlaWRLbGV1cih2YWx1ZS5zdG9jaykpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX2xpa2VidXR0b25cIikuYXBwZW5kKCk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIjZGVsZXRlX2J0blwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIiNjYXJ0X2J0blwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aXNobGlzdF9pdGVtLmFwcGVuZFRvKCQoXCIjd2lzaF9fbGlzdFwiKSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAkKFwiI3dpc2hfX2xpc3RfX2l0ZW1cIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgbG9hZFB1YmxpY1dpc2hsaXN0OiBsb2FkUHVibGljV2lzaGxpc3QsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcblxyXG5cclxufSIsInZhciBSZXNldFBhc3N3b3JkVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdUb1Nob3cpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIklubG9nZ2VuIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCh2aWV3VG9TaG93KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBY3Rpb25MaXN0ZW5lciB0aGF0IGV4ZWN1dGVzIGFjdGlvbnMgb24gc3BlY2lmaWMgZXZlbnRzXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihldmVudEhhbmRsZXIpXHJcbiAgICB7XHJcbiAgICAgICAgLy8kKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI3Jlc2V0Zm9ybVwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07XHJcblxyXG4vKlxyXG52YXIgUmVzZXRQYXNzd29yZFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcclxuICAgIHtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCd2aWV3cy9yZXNldHBhc3N3b3JkL3Jlc2V0cGFzc3dvcmQuaHRtbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFjdGlvbkxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgYWN0aW9ucyBvbiBzcGVjaWZpYyBldmVudHNcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcclxuICAgIHtcclxuICAgICAgICAvLyQoZG9jdW1lbnQpLnJlYWR5KGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjcmVzZXRmb3JtXCIsIGV2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTtcclxuKi8iLCJ2YXIgUmVnaXN0ZXJWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld1RvU2hvdylcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiUmVnaXN0cmVyZW4gLSBBWiBHYW1lc1wiO1xyXG4gICAgICAgIFxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQodmlld1RvU2hvdywgZnVuY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGkgPSAxOyBpIDwgMzI7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJChcIiNkYWdcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGkgPSAxOTAwOyBpIDwgZGF0ZS5nZXRGdWxsWWVhcigpICsgMTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAyMDAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjamFhclwiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIGkgKyBcIicgc2VsZWN0ZWQ9J3NlbGVjdGVkJz5cIiArIGkgKyBcIjwvb3B0aW9uPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI2phYXJcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnQgd2hlbiAnc29tZXRoaW5nJyBoYXBwZW5zICh3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgZm9yIGV4YW1wbGUpXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiByZWdpc3RlciBmb3JtXHJcbiAgICAgICAgLy8gdXNlciBwcmVzc2VzICdyZWdpc3RlcidcclxuXHJcbiAgICAgICAgLy8gaWYgdXNlciBwcmVzc2VzICdyZWdpc3RlcicsIHBlcmZvcm0gYWN0aW9uXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjcmVnaXN0ZXJmb3JtXCIsIGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCJ2YXIgUHJvZHVjdFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0Vmlldyhwcm9kdWN0KVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gcHJvZHVjdC50aXRsZSArIFwiIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9zaW5nbGVfcHJvZHVjdC9zaW5nbGVfcHJvZHVjdC5odG1sJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCBwcm9kdWN0LmltYWdlKTtcclxuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fdGl0bGVcIikuaHRtbChwcm9kdWN0LnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fcHJpY2VcIikuaHRtbChcIuKCrCBcIiArIHByb2R1Y3QucHJpY2UudG9GaXhlZCgyKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19lYW5cIikuYXBwZW5kKHByb2R1Y3QuZWFuX251bWJlcik7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3BsYXRmb3JtXCIpLmFwcGVuZChQbGF0Zm9ybUxvZ28ocHJvZHVjdC5wbGF0Zm9ybSkpOyAvLyBmdW5jdGllIHZvb3IgbG9nb1xyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19wdWJsaXNoZXJcIikuYXBwZW5kKFBsYXRmb3JtTG9nbyhwcm9kdWN0LnB1Ymxpc2hlcikpOyAvLyBmdW5jdGllIHZvb3IgbG9nb1xyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19wZWdpXCIpLmFwcGVuZChwcm9kdWN0LnBlZ2lfYWdlKTtcclxuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fZ2VucmVcIikuYXBwZW5kKHByb2R1Y3QuZ2VucmUpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19kZXNjclwiKS5odG1sKHByb2R1Y3QuZGVzY3JpcHRpb24pXHJcbiAgICAgICAgICAgICAgICAkKFwiLmFkZHRvY2FydFwiKS5hdHRyKFwiZGF0YS1pZFwiLCBwcm9kdWN0LmVhbl9udW1iZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChVc2VySGVscGVyLmlzTG9nZWRJbigpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYWRkVG9XaXNobGlzdEJ1dHRvblwiKS5hdHRyKFwib25jbGlja1wiLCBcIldpc2hsaXN0SGVscGVyLmFkZEl0ZW0oXCIgKyBwcm9kdWN0LmVhbl9udW1iZXIgKyBcIik7XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYWRkVG9XaXNobGlzdEJ1dHRvblwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShwcm9kdWN0LnJlbGVhc2VfZGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1vbnRocyA9IFtcImphbnVhcmlcIiwgXCJmZWJydWFyaVwiLCBcIm1hYXJ0XCIsIFwiYXByaWxcIiwgXCJtZWlcIiwgXCJqdW5pXCIsIFwianVsaVwiLCBcImF1Z3VzdHVzXCIsIFwic2VwdGVtYmVyXCIsIFwib2t0b2JlclwiLCBcIm5vdmVtYmVyXCIsIFwiZGVjZW1iZXJcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19yZWxlYXNlZGF0ZVwiKS5hcHBlbmQoZC5nZXREYXRlKCkgKyBcIiBcIiArIG1vbnRoc1tkLmdldE1vbnRoKCldICsgXCIgXCIgKyBkLmdldEZ1bGxZZWFyKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIHJlZ2lzdGVyIGZvcm1cclxuICAgICAgICAvLyB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJ1xyXG5cclxuICAgICAgICAvLyBpZiB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJywgcGVyZm9ybSBhY3Rpb25cclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwiIiwidmFyIFdpc2hsaXN0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy9jaGFuZ2UgdmlldyBvZiBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxyXG4gICAge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJXTCBWSUVXOiBJbnNpZGUgc2V0Vmlld1wiKTtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiV2lzaGxpc3QgLSBBWiBHYW1lc1wiO1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmh0bWwoJzxkaXYgY2xhc3M9XCJjb2wtMTJcIj48ZGl2IGNsYXNzPVwiY29sLTEyXCIgaWQ9XCJ3aXNobGlzdFwiPjwvZGl2PjwvZGl2PicpO1xyXG5cclxuICAgICAgICBsb2FkV2lzaGxpc3Qodmlld0RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRXaXNobGlzdCh2aWV3RGF0YSlcclxuICAgIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiV0wgVklFVzogSW5zaWRlIGxvYWRXaXNoTGlzdFwiKTtcclxuICAgICAgICAkKFwiI3dpc2hsaXN0XCIpLmxvYWQoJy92aWV3cy93aXNobGlzdC93aXNobGlzdC5odG1sJywgZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGFkZCBhbGwgd2lzaGxpc3QgaXRlbXMgdG8gaHRtbFxyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IDA7XHJcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgICQuZWFjaCh2aWV3RGF0YSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgcHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgdmFyIHdpc2hfX2xpc3RfX2l0ZW0gPSAkKCc8ZGl2PicpLmFwcGVuZCgkKCcjd2lzaF9fbGlzdF9faXRlbScpLmNsb25lKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0IGluZm9cclxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50ICsxXHJcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9faWRcIikuYXBwZW5kKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHZhbHVlLmltYWdlKTtcclxuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIi53aXNoX19saXN0X190aXRsZVwiKS5odG1sKHZhbHVlLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIi53aXNoX19saXN0X19wcmljZVwiKS5hcHBlbmQoKFwi4oKsIFwiKSt2YWx1ZS5wcmljZSk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fcGxhdGZvcm1cIikuYXBwZW5kKFBsYXRmb3JtTG9nbyh2YWx1ZS5wbGF0Zm9ybSkpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX2F2YWlsYWJpbGl0eVwiKS5hcHBlbmQoQmVzY2hpa2JhYXJoZWlkS2xldXIodmFsdWUuc3RvY2spKTtcclxuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIi53aXNoX19saXN0X19saWtlYnV0dG9uXCIpLmFwcGVuZCgpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiI2RlbGV0ZV9idG5cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIjY2FydF9idG5cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiN3aXNoX19saXN0XCIpLmFwcGVuZCh3aXNoX19saXN0X19pdGVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pc19wdWJsaWMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3B1YmxpY2F0b3JcIikudmFsKFwicHJpdmF0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmlzX3B1YmxpYyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHVibGljYXRvclwiKS52YWwoXCJwdWJsaWNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZSBoYXMgdW5leHBlY3RlZCB2YWx1ZS4gdmFsdWUgPSBcIiArIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY291bnQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiN3aXNobGlzdF9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxyXG4gICAgICAgICAgICAkKFwiI3dpc2hfX2xpc3RfX2l0ZW1cIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXREZWxldGVMaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub2ZmKCkub24oXCJjbGlja1wiLCBcIiNkZWxldGVfYnRuXCIsIGZ1bmN0aW9uKGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBlYW4gPSAkKHRoaXMpLmRhdGEoXCJpZFwiKTtcclxuICAgICAgICAgICAgdmFyIGRpdl90b19oaWRlID0gJCh0aGlzKS5jbG9zZXN0KFwiLnJvd1wiKTtcclxuICAgICAgICAgICAgYWN0aW9uKGVhbiwgZGl2X3RvX2hpZGUpO1xyXG4gICAgICAgIH0gKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRQdWJsaWNMaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJjaGFuZ2VcIiwgXCIjcHVibGljYXRvclwiLCBmdW5jdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZhbHVlKTtcclxuICAgICAgICAgICAgYWN0aW9uKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVJdGVtKGRpdl90b19oaWRlKVxyXG4gICAge1xyXG4gICAgICAgIGRpdl90b19oaWRlLmZhZGVUbygyMDAsIDApLnNsaWRlVXAoMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgbG9hZFdpc2hsaXN0OiBsb2FkV2lzaGxpc3QsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxyXG4gICAgICAgIHNldERlbGV0ZUxpc3RlbmVyOiBzZXREZWxldGVMaXN0ZW5lcixcclxuICAgICAgICBzZXRQdWJsaWNMaXN0ZW5lcjogc2V0UHVibGljTGlzdGVuZXIsXHJcbiAgICAgICAgaGlkZUl0ZW06IGhpZGVJdGVtXHJcbiAgICB9XHJcbn0iXX0=
