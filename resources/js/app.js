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
            default:
                new ErrorController(new ErrorViewHelper()).main();
                break;
        }

        if (history != false)
        {
            if (url == "")
            {
                url = "index.html";
            }

            writeHistory({}, "A-Z Games", url)
            window.scrollTo(0, 0);
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
var LoginModel = function()
{
    function login(email, password, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/user/login",
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                email : email,
                password : password
            }),
            success: function (data) {
                // put token in cookie
                document.cookie='access_token=' + data.access_token;
                document.cookie='user_id=' + data.user_id;

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
                document.cookie='access_token=';
                document.cookie='user_id=';
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
var PageModel = function()
{
    function getPage(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/user",
            type: "get",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/error.html");
            }
        });
    }

    function getCookie(name)
    {
        var cookies = document.cookie.split(';');

        for (var i = 0; i < cookies.length; i++)
        {
            var cookie = cookies[i].split("=");

            if (cookie[0] == name)
            {
                return cookie[1];
            }
        }
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getPage: getPage
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
                $("#component").load("views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getPage: getPage
    }
};
var RegisterModel = function()
{
    function register(formData, callback)
    {
        //console.log(formData);
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
                //console.log(data);
                // let controller resume with stuff
                callback(data);
            },
            error: function (xhr, status, error) {
                // show 'email al gebonden aan een account?'
                $("#regi_api_error_message").show();
                //$("#component").html("error function");
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
                $("#component").load("/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        GetProductInfo: GetProductInfo
    }
};
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
        Model.login(formData.email, formData.password, function (data) {
            // show uitloggen button
            $("#inloggen_text").hide();
            $("#uitloggen_text").show();

            // Weergeef een andere pagina gebasseerd op 'admin' of 'registered user'
            new PageController(new PageViewHelper(), new PageModel()).main();
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
var PageController = function(viewHelper, model)
{
    var Model = model;
    var View  = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed(event)
    {
        Model.getPage(function (data) {
            View.setView(data);
        });
    }

    // Main function, also the start startpoint for a page
    function main()
    {                        
        View.setActionListener(actionPerformed);
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
var RegisterController = function(viewHelper, model)
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
        $("#regi_api_error_message").hide();
        $("#ww2_error_message").hide();

        // put form fields in javascript Object
        var formData = {};

        $.each($(this).serializeArray(), function (i, field) {
            formData[field.name] = field.value;
        });

        // fix date of birth (API expects certain format)
        formData["birth_date"] = formData.jaar + "-" + formData.maand + "-" + formData.dag;

        console.log(formData);

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
        console.log("continued")
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
var PageViewHelper = function()
{
    // Change the view of the page
    function setView(viewData)
    {
        document.title = "Welkom - AZ Games";

        $("#component").load('/views/page/page.html', function () {
            if (viewData[0].user_type == "customer")
            {
                $("#user-block").append("<h1>Je lees dit alleen als je een customer bent");
            }
            if (viewData[0].user_type == "admin")
            {
                $("#user-block").append("<h1>Je lees dit alleen als je een administrator bent");
            }
        });
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
        $("#products").load('views/products/products.html', function () { // waar id = 'component' doe .load......
            $.each(viewData, function(key, value) {
                // Clone product
                var product = $('<div>').append($('#product__list__item').clone());
                
                // Add product info
                $(product).find(".product__title").html(value.title);
                $(product).find(".product__subtitle").append(value.genre +(" | PEGI ") + value.pegi_age +(" | ")+ PlatformLogo(value.platform));
                $(product).find(".product__description").html(CutString(value.description));
                $(product).find(".product__price").append(("€ ")+value.price);
                $(product).find("#buttons__info").attr("href", "product/" + value.ean_number)
                $(product).find(".product__image img").attr("src", value.image);

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
var RegisterViewHelper = function()
{
    // Change the view of the page
    function setView(viewToShow)
    {
        document.title = "Registreren - AZ Games";
        
        $("#component").load(viewToShow);
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
var ProductViewHelper = function()
{
    // Change the view of the page
    function setView(product)
    {
        document.title = product.title + " - AZ Games";

         $("#component").load('/views/single_product/single_product.html', function () {
                $(".singleproduct__image img").attr("src", product.image);
                $(".singleproduct__title").html(product.title);
                $(".singleproduct__price").html("€ " + product.price);

                $(".singleproduct__ean").append(product.ean_number);
                $(".singleproduct__platform").append(product.platform);
                $(".singleproduct__publisher").append(product.publisher);
                $(".singleproduct__pegi").append(product.pegi_age);
                $(".singleproduct__genre").append(product.genre);
                $(".singleproduct__descr").html(product.description)

                var d = new Date(product.release_date);

                var months = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];

                $(".singleproduct__releasedate").append(d.getDay() + " " + months[d.getMonth()] + " " + d.getFullYear());
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiLCJyb3V0ZXIuanMiLCJzaWRlYmFyLmpzIiwibG9naW5fbW9kZWwuanMiLCJsb2dvdXRfbW9kZWwuanMiLCJwYWdlX21vZGVsLmpzIiwicHJvZHVjdHNfbW9kZWwuanMiLCJyZWdpc3Rlcl9tb2RlbC5qcyIsInJlc2V0cGFzc3dvcmRfbW9kZWwuanMiLCJzaW5nbGVfcHJvZHVjdF9tb2RlbC5qcyIsImVycm9yX2NvbnRyb2xsZXIuanMiLCJsb2dpbl9jb250cm9sbGVyLmpzIiwibG9nb3V0X2NvbnRyb2xsZXIuanMiLCJwYWdlX2NvbnRyb2xsZXIuanMiLCJwcm9kdWN0c19jb250cm9sbGVyLmpzIiwicmVnaXN0ZXJfY29udHJvbGxlci5qcyIsInJlc2V0cGFzc3dvcmRfY29udHJvbGxlci5qcyIsInNpbmdsZV9wcm9kdWN0X2NvbnRyb2xsZXIuanMiLCJlcnJvci9lcnJvcl92aWV3LmpzIiwibG9naW4vbG9naW5fdmlldy5qcyIsImxvZ291dC9sb2dvdXRfdmlldy5qcyIsInBhZ2UvcGFnZV92aWV3LmpzIiwicHJvZHVjdHMvcHJvZHVjdHNfdmlldy5qcyIsInJlZ2lzdGVyL3JlZ2lzdGVyX3ZpZXcuanMiLCJyZXNldHBhc3N3b3JkL3Jlc2V0cGFzc3dvcmRfdmlldy5qcyIsInNpbmdsZV9wcm9kdWN0L3NpbmdsZV9wcm9kdWN0X3ZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKClcbntcbiAgICAkKFwiLmNhcnRfX2l0ZW1fX3JlbW92ZVwiKS5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBjYXJ0aXRlbSA9ICQodGhpcykucGFyZW50KCk7XG5cbiAgICAgICAgJChjYXJ0aXRlbSkuYWRkQ2xhc3MoXCJjYXJ0X19pdGVtLS1yZW1vdmVkXCIpO1xuICAgICAgICAkKGNhcnRpdGVtKS5vbihcImFuaW1hdGlvbmVuZCB3ZWJraXRBbmltYXRpb25FbmQgb0FuaW1hdGlvbkVuZCBNU0FuaW1hdGlvbkVuZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlXCIpXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICB9KVxuICAgIH0pO1xufSk7IiwidmFyIFJvdXRlciA9IGZ1bmN0aW9uICgpXG57XG4gICAgYmFzZVVybCA9IFwicHJvamVjdC13ZWJzaG9wL1wiO1xuXG4gICAgZnVuY3Rpb24gcm91dGUodXJsLCBoaXN0b3J5KVxuICAgIHtcbiAgICAgICAgaWYgKGlzSW50ZXJuYWwodXJsKSA9PSBmYWxzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBhcnRpY2xlcyA9IGdldFBhcnRpY2xlcyh1cmwpO1xuXG4gICAgICAgIHN3aXRjaChwYXJ0aWNsZXNbMF0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgICAgIGNhc2UgXCJpbmRleC5odG1sXCI6XG4gICAgICAgICAgICBjYXNlIFwicHJvZHVjdHNcIjpcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdHNDb250cm9sbGVyKG5ldyBQcm9kdWN0c1ZpZXdIZWxwZXIoKSwgbmV3IFByb2R1Y3RzTW9kZWwoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInByb2R1Y3RcIjpcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdENvbnRyb2xsZXIobmV3IFByb2R1Y3RWaWV3SGVscGVyKCksIG5ldyBQcm9kdWN0TW9kZWwocGFydGljbGVzWzFdKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJlZ2lzdGVyXCI6XG4gICAgICAgICAgICAgICAgbmV3IFJlZ2lzdGVyQ29udHJvbGxlcihuZXcgUmVnaXN0ZXJWaWV3SGVscGVyKCksIG5ldyBSZWdpc3Rlck1vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsb2dpblwiOlxuICAgICAgICAgICAgICAgIG5ldyBMb2dpbkNvbnRyb2xsZXIobmV3IExvZ2luVmlld0hlbHBlcigpLCBuZXcgTG9naW5Nb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibG9nb3V0XCI6XG4gICAgICAgICAgICAgICAgbmV3IExvZ291dENvbnRyb2xsZXIobmV3IExvZ291dFZpZXdIZWxwZXIoKSwgbmV3IExvZ291dE1vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyZWdpc3RlclwiOlxuICAgICAgICAgICAgICAgIG5ldyBSZWdpc3RlckNvbnRyb2xsZXIobmV3IFJlZ2lzdGVyVmlld0hlbHBlcigpLCBuZXcgUmVnaXN0ZXJNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVzZXRwYXNzd29yZFwiOlxuICAgICAgICAgICAgICAgIG5ldyBSZXNldFBhc3N3b3JkQ29udHJvbGxlcihuZXcgUmVzZXRQYXNzd29yZFZpZXdIZWxwZXIoKSwgbmV3IFJlc2V0UGFzc3dvcmRNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIG5ldyBFcnJvckNvbnRyb2xsZXIobmV3IEVycm9yVmlld0hlbHBlcigpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGlzdG9yeSAhPSBmYWxzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHVybCA9PSBcIlwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVybCA9IFwiaW5kZXguaHRtbFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3cml0ZUhpc3Rvcnkoe30sIFwiQS1aIEdhbWVzXCIsIHVybClcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzSW50ZXJuYWwodXJsKVxuICAgIHtcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKFwiaHR0cFwiKSAhPSAtMSB8fCB1cmwuaW5kZXhPZihcImh0dHBzXCIpICE9IC0xIHx8IHVybC5pbmRleE9mKFwid3d3XCIpICE9IC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB1cmw7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBhcnRpY2xlcyh1cmwpXG4gICAge1xuICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IC9cbiAgICAgICAgaWYgKHVybC5pbmRleE9mKFwiL1wiKSA9PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBiYXNlIHVybCBzZXQsIHJlbW92ZSB0aGUgYmFzZSB1cmxcbiAgICAgICAgaWYgKHRoaXMuYmFzZVVybCAhPSBudWxsICYmIHVybC5pbmRleE9mKHRoaXMuYmFzZVVybCkgIT0gLTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YodGhpcy5iYXNlVXJsKSArIHRoaXMuYmFzZVVybC5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybC5zcGxpdCgvXFwvKC4rKT8vKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdyaXRlSGlzdG9yeShvYmplY3QsIHRpdGxlLCB1cmwpXG4gICAge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUob2JqZWN0LCB0aXRsZSwgdXJsKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByb3V0ZTogcm91dGVcbiAgICB9XG59IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKVxue1xuICAgICQoXCIuc2lkZWJhci10b2dnbGVcIikuY2xpY2soZnVuY3Rpb24gKGUpXG4gICAge1xuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgY2xpY2sgYWN0aW9uXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBJZCBvZiB0aGUgc2lkZWJhciB0byB0b2dnbGVcbiAgICAgICAgdmFyIHNpZGViYXIgPSAkKHRoaXMpLmRhdGEoXCJzaWRlYmFyXCIpO1xuXG4gICAgICAgIHRvZ2dsZVNpZGViYXIoJChcIiNcIiArIHNpZGViYXIpKTtcbiAgICB9KTtcblxuICAgICQoXCIuc2lkZWJhcl9fY2xvc2VcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpKTtcbiAgICB9KVxuXG4gICAgJChcIi5vdmVybGF5XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRvZ2dsZVNpZGViYXIoJChcIi5zaWRlYmFyXCIpKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIoc2lkZWJhcilcbiAgICB7XG4gICAgICAgICQoc2lkZWJhcikudG9nZ2xlQ2xhc3MoXCJzaWRlYmFyLS1vcGVuXCIpO1xuICAgICAgICAkKFwiLm92ZXJsYXlcIikudG9nZ2xlQ2xhc3MoXCJvdmVybGF5LS12aXNpYmxlXCIpO1xuICAgICAgICAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcInNpZGViYXItLW9wZW5cIik7XG4gICAgfVxufSk7IiwidmFyIExvZ2luTW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgZnVuY3Rpb24gbG9naW4oZW1haWwsIHBhc3N3b3JkLCBjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlci9sb2dpblwiLFxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsIDogZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQgOiBwYXNzd29yZFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIHB1dCB0b2tlbiBpbiBjb29raWVcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWU9J2FjY2Vzc190b2tlbj0nICsgZGF0YS5hY2Nlc3NfdG9rZW47XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llPSd1c2VyX2lkPScgKyBkYXRhLnVzZXJfaWQ7XG5cbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gc2hvdyAnbm90IGdvb2QgZW1haWwgb3IgcGFzc3dvcmQgdG8gdXNlcidcbiAgICAgICAgICAgICAgICAkKFwiI2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgLy8kKFwiI2NvbXBvbmVudFwiKS5odG1sKFwiZXJyb3IgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9naW46IGxvZ2luXG4gICAgfVxufTsiLCJ2YXIgTG9nb3V0TW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgZnVuY3Rpb24gbG9nb3V0KGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC91c2VyL2xvZ291dFwiLCAvLz8gaHR0cDovLzg0Ljg0LjI0NS4yOToyNDMgPSBBUEktbG9jYXRpZT9cbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiBnZXRDb29raWUoXCJ1c2VyX2lkXCIpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0IGNvbnRyb2xsZXIgcmVzdW1lIHdpdGggc3R1ZmZcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWU9J2FjY2Vzc190b2tlbj0nO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZT0ndXNlcl9pZD0nO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gc2hvdyAnbm90IGdvb2QgZW1haWwgb3IgcGFzc3dvcmQgdG8gdXNlcidcbiAgICAgICAgICAgICAgICAkKFwiI2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgLy8kKFwiI2NvbXBvbmVudFwiKS5odG1sKFwiZXJyb3IgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldENvb2tpZShuYW1lKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGNvb2tpZSA9IGNvb2tpZXNbaV0uc3BsaXQoXCI9XCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvb2tpZVswXS50cmltKCkgPT0gbmFtZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb29raWVbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2dvdXQ6IGxvZ291dFxuICAgIH1cbn07IiwidmFyIFBhZ2VNb2RlbCA9IGZ1bmN0aW9uKClcbntcbiAgICBmdW5jdGlvbiBnZXRQYWdlKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC91c2VyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBnZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb29raWUobmFtZSlcbiAgICB7XG4gICAgICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgY29va2llID0gY29va2llc1tpXS5zcGxpdChcIj1cIik7XG5cbiAgICAgICAgICAgIGlmIChjb29raWVbMF0gPT0gbmFtZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29va2llWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQYWdlOiBnZXRQYWdlXG4gICAgfVxufTsiLCJ2YXIgUHJvZHVjdHNNb2RlbCA9IGZ1bmN0aW9uKClcbntcbiAgICBmdW5jdGlvbiBnZXRQYWdlKGZpbHRlciwgY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3Byb2R1Y3RzP1wiICsgZmlsdGVyLCAvLz8gaHR0cDovLzg0Ljg0LjI0NS4yOToyNDMgPSBBUEktbG9jYXRpZT9cbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCJ2aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFBhZ2U6IGdldFBhZ2VcbiAgICB9XG59OyIsInZhciBSZWdpc3Rlck1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyKGZvcm1EYXRhLCBjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIC8vY29uc29sZS5sb2coZm9ybURhdGEpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXIvcmVnaXN0ZXJcIixcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBlX21haWwgOiBmb3JtRGF0YS5lX21haWxhZHJlcyxcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA6IGZvcm1EYXRhLndhY2h0d29vcmQsXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZSA6IGZvcm1EYXRhLnZvb3JuYWFtLFxuICAgICAgICAgICAgICAgIGluc2VydGlvbiA6IGZvcm1EYXRhLnR1c3NlbnZvZWdzZWwsXG4gICAgICAgICAgICAgICAgc3VybmFtZSA6IGZvcm1EYXRhLmFjaHRlcm5hYW0sXG4gICAgICAgICAgICAgICAgZ2VuZGVyIDogZm9ybURhdGEuZ2VuZGVyLFxuICAgICAgICAgICAgICAgIGRhdGVfb2ZfYmlydGggOiBmb3JtRGF0YS5iaXJ0aF9kYXRlLFxuICAgICAgICAgICAgICAgIHBob25lX251bWJlciA6IGZvcm1EYXRhLm1vYmllbF9udW1tZXIsXG4gICAgICAgICAgICAgICAgc2VjcmV0X3F1ZXN0aW9uIDogZm9ybURhdGEuc2VjdXJpdHlfcXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgc2VjcmV0X3F1ZXN0aW9uX2Fuc3dlciA6IGZvcm1EYXRhLnNlY3VyaXR5X2Fuc3dlcixcblxuICAgICAgICAgICAgICAgIHBvc3RhbF9jb2RlIDogZm9ybURhdGEucG9zdGNvZGUsXG4gICAgICAgICAgICAgICAgbnVtYmVyIDogZm9ybURhdGEuaHVpc251bW1lcixcbiAgICAgICAgICAgICAgICBzdHJlZXRfbmFtZSA6IGZvcm1EYXRhLnN0cmFhdG5hYW0sXG4gICAgICAgICAgICAgICAgY2l0eSA6IGZvcm1EYXRhLnBsYWF0cyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBzaG93ICdlbWFpbCBhbCBnZWJvbmRlbiBhYW4gZWVuIGFjY291bnQ/J1xuICAgICAgICAgICAgICAgICQoXCIjcmVnaV9hcGlfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgLy8kKFwiI2NvbXBvbmVudFwiKS5odG1sKFwiZXJyb3IgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVnaXN0ZXI6IHJlZ2lzdGVyXG4gICAgfVxufTsiLCJ2YXIgUmVzZXRQYXNzd29yZE1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIHJlc2V0cGFzc3dvcmQoZm9ybURhdGEsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXIvcmVzZXRwYXNzd29yZFwiLFxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsIDogZm9ybURhdGEuZV9tYWlsYWRyZXMsXG4gICAgICAgICAgICAgICAgc2VjcmV0X3F1ZXN0aW9uX2Fuc3dlciA6IGZvcm1EYXRhLnNlY3VyaXR5X2Fuc3dlcixcbiAgICAgICAgICAgICAgICBzZWNyZXRfcXVlc3Rpb24gOiBmb3JtRGF0YS5zZWN1cml0eV9xdWVzdGlvbixcbiAgICAgICAgICAgICAgICBuZXdfcGFzc3dvcmQgOiBmb3JtRGF0YS53YWNodHdvb3JkLFxuICAgICAgICAgICAgICAgIHJlcGVhdF9wYXNzd29yZCA6IGZvcm1EYXRhLndhY2h0d29vcmQyXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCJ2aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgICAgICQoXCIjcmVzZXRfcGFzc3dvcmRfYXBpX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc2V0cGFzc3dvcmQ6IHJlc2V0cGFzc3dvcmRcbiAgICB9XG59OyIsInZhciBQcm9kdWN0TW9kZWwgPSBmdW5jdGlvbihlYW4pXG57XG4gICAgZnVuY3Rpb24gR2V0UHJvZHVjdEluZm8oY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3Byb2R1Y3RzL1wiICsgZWFuLFxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVswXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgR2V0UHJvZHVjdEluZm86IEdldFByb2R1Y3RJbmZvXG4gICAgfVxufTsiLCJ2YXIgRXJyb3JDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlcilcbntcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG5cbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTsiLCJ2YXIgTG9naW5Db250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcbiAgICB7XG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBMb29wIHRyb3VnaCB0aGUgZm9ybSBkYXRhIGFuZCBnZXQgYWxsIGZpZWxkc1xuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcbiAgICAgICAgJC5lYWNoKCQodGhpcykuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBsZXQgbW9kZWwgc2VuZCBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gQVBJXG4gICAgICAgIE1vZGVsLmxvZ2luKGZvcm1EYXRhLmVtYWlsLCBmb3JtRGF0YS5wYXNzd29yZCwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIC8vIHNob3cgdWl0bG9nZ2VuIGJ1dHRvblxuICAgICAgICAgICAgJChcIiNpbmxvZ2dlbl90ZXh0XCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIjdWl0bG9nZ2VuX3RleHRcIikuc2hvdygpO1xuXG4gICAgICAgICAgICAvLyBXZWVyZ2VlZiBlZW4gYW5kZXJlIHBhZ2luYSBnZWJhc3NlZXJkIG9wICdhZG1pbicgb2YgJ3JlZ2lzdGVyZWQgdXNlcidcbiAgICAgICAgICAgIG5ldyBQYWdlQ29udHJvbGxlcihuZXcgUGFnZVZpZXdIZWxwZXIoKSwgbmV3IFBhZ2VNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gbG9naW4gZm9ybVxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoKTtcblxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGVtYWlsIGFuZCBwYXNzd29yZDsgY2xpY2tzICdsb2dpbic6IFZJRVcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwidmFyIExvZ291dENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxuICAgIHtcbiAgICAgICAgTW9kZWwubG9nb3V0KGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAvLyBzaG93IHVpdGxvZ2dlbiBidXR0b25cbiAgICAgICAgICAgICQoXCIjaW5sb2dnZW5fdGV4dFwiKS5zaG93KCk7XG4gICAgICAgICAgICAkKFwiI3VpdGxvZ2dlbl90ZXh0XCIpLmhpZGUoKTtcblxuICAgICAgICAgICAgLy8gc2V0IHZpZXcgdG8gbG9naW4gZm9ybVxuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBlbWFpbCBhbmQgcGFzc3dvcmQ7IGNsaWNrcyAnbG9naW4nOiBWSUVXIG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBQYWdlQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCA9IG1vZGVsO1xuICAgIHZhciBWaWV3ICA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcbiAgICB7XG4gICAgICAgIE1vZGVsLmdldFBhZ2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIFZpZXcuc2V0VmlldyhkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBWaWV3LnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTsiLCJ2YXIgUHJvZHVjdHNDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxuICAgIGZ1bmN0aW9uIGdldFBhZ2UoKVxuICAgIHtcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShcIlwiLCBmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7IH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbHRlclByb2R1Y3RzKGV2ZW50KVxuICAgIHtcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtIChwYWdlIHJlbG9hZClcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgZmlsdGVycyA9ICQodGhpcykuc2VyaWFsaXplKCk7XG4gICAgICAgIE1vZGVsLmdldFBhZ2UoZmlsdGVycywgZnVuY3Rpb24gKGRhdGEpIHsgVmlld0hlbHBlci5sb2FkUHJvZHVjdHMoZGF0YSk7IH0pO1xuICAgIH1cblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihnZXRQYWdlKTtcbiAgICAgICAgVmlld0hlbHBlci5zZXRGaWx0ZXJMaXN0ZW5lcihmaWx0ZXJQcm9kdWN0cyk7XG4gICAgICAgIC8vIG5ldyBhY3Rpb24gd2FubmVyIGVyIG9wIGZpbHRlciB3b3JkdCBnZWRydWt0XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTsiLCJ2YXIgUmVnaXN0ZXJDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZCgpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcImluIGFjdGlvblBlcmZvcm1lZFwiKTsgLy90ZXN0XG5cbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgJChcIiNyZWdpX2FwaV9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiN3dzJfZXJyb3JfbWVzc2FnZVwiKS5oaWRlKCk7XG5cbiAgICAgICAgLy8gcHV0IGZvcm0gZmllbGRzIGluIGphdmFzY3JpcHQgT2JqZWN0XG4gICAgICAgIHZhciBmb3JtRGF0YSA9IHt9O1xuXG4gICAgICAgICQuZWFjaCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uIChpLCBmaWVsZCkge1xuICAgICAgICAgICAgZm9ybURhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZml4IGRhdGUgb2YgYmlydGggKEFQSSBleHBlY3RzIGNlcnRhaW4gZm9ybWF0KVxuICAgICAgICBmb3JtRGF0YVtcImJpcnRoX2RhdGVcIl0gPSBmb3JtRGF0YS5qYWFyICsgXCItXCIgKyBmb3JtRGF0YS5tYWFuZCArIFwiLVwiICsgZm9ybURhdGEuZGFnO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcblxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIGFueSBtYW5kYXRvcnkgZmllbGQgaXMgbGVmdCBlbXB0eSBieSB1c2VyIGFuZFxuICAgICAgICAvLyBpZiBzbywgYWJvcnQgZnVuY3Rpb25cbiAgICAgICAgdmFyIG1hbmRhdG9yeUZpZWxkTWlzc2VzID0gZmFsc2U7XG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZHMgPSBbXCJ2b29ybmFhbVwiLCBcImFjaHRlcm5hYW1cIiwgXCJwb3N0Y29kZVwiLCBcImh1aXNudW1tZXJcIiwgXCJlX21haWxhZHJlc1wiLCBcIndhY2h0d29vcmRcIiwgXCJ3YWNodHdvb3JkMlwiLCBcInNlY3VyaXR5X2Fuc3dlclwiXTsgLy9kcm9wZG93bnMgKGxpa2UgZ2VuZGVyKSBhcmUgYWx3YXlzIGZpbGxlZCBpbiwgc28gZG9uJ3QgcHV0IGluIHRoaXMgbGlzdFxuXG4gICAgICAgIC8vIChyZXNldCBhbGwgZmllbGRzIHRvICd2YWxpZCcgYmVjYXVzZSB1c2VyIG1heSBoYXZlIGZpbGxlZCBpbiBmaWVsZHMgc2luY2VcbiAgICAgICAgLy8gdGhlIHByZXZpb3VzIHRpbWUgdGhpcyBmdW5jdGlvbiB3YXMgY2FsbGVkKVxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcbiAgICAgICAgICAgICQoXCIjXCIgKyBtYW5GaWVsZCkucmVtb3ZlQ2xhc3MoXCJpbnZhbGlkXCIpO1xuICAgICAgICB9KVxuXG4gICAgICAgICQuZWFjaChtYW5kYXRvcnlGaWVsZHMsIGZ1bmN0aW9uIChpLCBtYW5GaWVsZCkge1xuICAgICAgICAgICAgaWYgKGZvcm1EYXRhW21hbkZpZWxkXSA9PSBcIlwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBtYW5GaWVsZCkuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xuXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5RmllbGRNaXNzZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIFxuICAgICAgICAvLyBpZiBhIG1hbmRhdG9yeSBmaWVsZCBpcyBlbXB0eSwgc2hvdyBlcnJvciBtZXNzYWdlIHRvIHVzZXIgYW5kIGFib3J0IGZ1bmN0aW9uXG4gICAgICAgIGlmIChtYW5kYXRvcnlGaWVsZE1pc3NlcylcbiAgICAgICAgeyBcbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0b3Agb2YgcGFnZSBzbyB0aGF0IHVzZXJzIHNlZSBtZXNzYWdlIFwic29tZXRoaW5nIGlzIG5vdCBmaWxsZWQgaW5cIlxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgLy8gc2hvdyBtZXNzYWdlIFwic29tZXRoaW5nIGlzIG5vdCBmaWxsZWQgaW5cIlxuICAgICAgICAgICAgJChcIiNyZWdpc3Rlcl9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcGFzc3dvcmRzTm90SWRlbnRpY2FsID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGZvcm1EYXRhLndhY2h0d29vcmQgIT0gZm9ybURhdGEud2FjaHR3b29yZDIpIFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXNzd29yZHNOb3RJZGVudGljYWwgPSB0cnVlO1xuICAgICAgICAgICAgJChcIiN3dzJfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgICAgICAkKFwiI3dhY2h0d29vcmRcIikuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgICAgJChcIiN3YWNodHdvb3JkMlwiKS5hZGRDbGFzcyhcImludmFsaWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhYm9ydCBmdW5jdGlvbiBpZiBtYW5kYXRvcnkgZmllbGQgbWlzc2VzIG9yIHBhc3N3b3JkcyBub3QgaWRlbnRpY2FsXG4gICAgICAgIGlmIChtYW5kYXRvcnlGaWVsZE1pc3NlcyB8fCBwYXNzd29yZHNOb3RJZGVudGljYWwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnRpbnVlZFwiKVxuICAgICAgICAvLyBsZXQgbW9kZWwgc2VuZCB1c2VyIGluZm8gdG8gQVBJXG4gICAgICAgIE1vZGVsLnJlZ2lzdGVyKGZvcm1EYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCcvdmlld3MvcmVnaXN0ZXIvYWZ0ZXJfcmVnaXN0ZXIuaHRtbCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIC8vIHNldCB2aWV3IHRvIHJlZ2lzdGVyIGZvcm1cbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCcvdmlld3MvcmVnaXN0ZXIvcmVnaXN0ZXIuaHRtbCcpO1xuXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gcmVnaXN0ZXIgaW5mbzsgY2xpY2tzICdyZWdpc3Rlcic6IHZpZXcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xuXG4gICAgICAgIC8vIGVtYWlsIGFuZCBwYXNzd29yZCBhcmUgc2VuZCB0byBBUEk7IEFQSSBjaGVja3MgaWYgZW1haWwgYWxyZWFkeSBleGlzdHMgKGFuZCB3aGV0aGVyIHBhc3N3b3JkIGlzIGNvcnJlY3Q/KSBcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBSZXNldFBhc3N3b3JkQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuICAgIFxuICAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gYWN0aW9uUGVyZm9ybWVkXCIpOyAvL3Rlc3RcblxuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyByZXNldCBlcnJvciBtZXNzYWdlc1xuICAgICAgICAkKFwiI3Jlc2V0X3Bhc3N3b3JkX2FwaV9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiN3dzJfZXJyb3JfbWVzc2FnZVwiKS5oaWRlKCk7XG5cbiAgICAgICAgLy8gcHV0IGZvcm0gZmllbGRzIGluIGphdmFzY3JpcHQgT2JqZWN0XG4gICAgICAgIHZhciBmb3JtRGF0YSA9IHt9O1xuXG4gICAgICAgICQuZWFjaCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uIChpLCBmaWVsZCkge1xuICAgICAgICAgICAgZm9ybURhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciBhbnkgbWFuZGF0b3J5IGZpZWxkIGlzIGxlZnQgZW1wdHkgYnkgdXNlciBhbmRcbiAgICAgICAgLy8gaWYgc28sIGFib3J0IGZ1bmN0aW9uXG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IGZhbHNlO1xuICAgICAgICB2YXIgbWFuZGF0b3J5RmllbGRzID0gW1wid2FjaHR3b29yZFwiLCBcIndhY2h0d29vcmQyXCIsIFwiZV9tYWlsYWRyZXNcIixcInNlY3VyaXR5X2Fuc3dlclwiXTsgLy9kcm9wZG93bnMgKGxpa2Ugc2VjdXJpdHlfcXVlc3Rpb25fYW5zd2VyKSBhcmUgYWx3YXlzIGZpbGxlZCBpbiwgc28gZG9uJ3QgcHV0IGluIHRoaXMgbGlzdFxuXG4gICAgICAgIC8vIChyZXNldCBhbGwgZmllbGRzIHRvICd2YWxpZCcgYmVjYXVzZSB1c2VyIG1heSBoYXZlIGZpbGxlZCBpbiBmaWVsZHMgc2luY2VcbiAgICAgICAgLy8gdGhlIHByZXZpb3VzIHRpbWUgdGhpcyBmdW5jdGlvbiB3YXMgY2FsbGVkKVxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcbiAgICAgICAgICAgICQoXCIjXCIgKyBtYW5GaWVsZCkucmVtb3ZlQ2xhc3MoXCJpbnZhbGlkXCIpO1xuICAgICAgICB9KVxuXG4gICAgICAgICQuZWFjaChtYW5kYXRvcnlGaWVsZHMsIGZ1bmN0aW9uIChpLCBtYW5GaWVsZCkge1xuICAgICAgICAgICAgaWYgKGZvcm1EYXRhW21hbkZpZWxkXSA9PSBcIlwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBtYW5GaWVsZCkuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xuXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5RmllbGRNaXNzZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIFxuICAgICAgICAvLyBpZiBhIG1hbmRhdG9yeSBmaWVsZCBpcyBlbXB0eSwgc2hvdyBlcnJvciBtZXNzYWdlIHRvIHVzZXIgYW5kIGFib3J0IGZ1bmN0aW9uXG4gICAgICAgIGlmIChtYW5kYXRvcnlGaWVsZE1pc3NlcylcbiAgICAgICAgeyBcbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0b3Agb2YgcGFnZSBzbyB0aGF0IHVzZXJzIHNlZSBtZXNzYWdlIFwic29tZXRoaW5nIGlzIG5vdCBmaWxsZWQgaW5cIlxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgLy8gc2hvdyBtZXNzYWdlIFwic29tZXRoaW5nIGlzIG5vdCBmaWxsZWQgaW5cIlxuICAgICAgICAgICAgJChcIiNyZXNldF9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcGFzc3dvcmRzTm90SWRlbnRpY2FsID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGZvcm1EYXRhLndhY2h0d29vcmQgIT0gZm9ybURhdGEud2FjaHR3b29yZDIpIFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXNzd29yZHNOb3RJZGVudGljYWwgPSB0cnVlO1xuICAgICAgICAgICAgJChcIiN3dzJfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgICAgICAkKFwiI3dhY2h0d29vcmRcIikuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgICAgJChcIiN3YWNodHdvb3JkMlwiKS5hZGRDbGFzcyhcImludmFsaWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhYm9ydCBmdW5jdGlvbiBpZiBtYW5kYXRvcnkgZmllbGQgbWlzc2VzIG9yIHBhc3N3b3JkcyBub3QgaWRlbnRpY2FsXG4gICAgICAgIGlmIChtYW5kYXRvcnlGaWVsZE1pc3NlcyB8fCBwYXNzd29yZHNOb3RJZGVudGljYWwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnRpbnVlZFwiKVxuICAgICAgICAvLyBsZXQgbW9kZWwgc2VuZCB1c2VyIGluZm8gdG8gQVBJXG4gICAgICAgIE1vZGVsLnJlc2V0cGFzc3dvcmQoZm9ybURhdGEsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJ3ZpZXdzL3Jlc2V0cGFzc3dvcmQvYWZ0ZXJfcmVzZXQuaHRtbCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7ICAgICAgXG4gICAgICAgIC8vIHNldCB2aWV3IHRvIHJlc2V0IHBhc3N3b3JkIGZvcm1cbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCd2aWV3cy9yZXNldHBhc3N3b3JkL3Jlc2V0cGFzc3dvcmQuaHRtbCcpO1xuXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcbiAgICAgICAgLy8gbmV3IGFjdGlvbiB3YW5uZXIgZXIgb3AgZmlsdGVyIHdvcmR0IGdlZHJ1a3RcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59O1xuXG5cblxuXG4iLCJ2YXIgUHJvZHVjdENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxuICAgIHtcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblxuXG5cblxuXG4gICAgICAgIC8vIExvb3AgdHJvdWdoIHRoZSBmb3JtIGRhdGEgYW5kIGdldCBhbGwgZmllbGRzXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IHt9O1xuICAgICAgICAkLmVhY2goJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbiAoaSwgZmllbGQpIHtcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIGVtYWlsIGFuZCBwYXNzd29yZCB0byBBUElcbiAgICAgICAgTW9kZWwubG9naW4oZm9ybURhdGEuZW1haWwsIGZvcm1EYXRhLnBhc3N3b3JkLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8gc2hvdyB1aXRsb2dnZW4gYnV0dG9uXG4gICAgICAgICAgICAkKFwiI2lubG9nZ2VuX3RleHRcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiN1aXRsb2dnZW5fdGV4dFwiKS5zaG93KCk7XG5cbiAgICAgICAgICAgIC8vIFdlZXJnZWVmIGVlbiBhbmRlcmUgcGFnaW5hIGdlYmFzc2VlcmQgb3AgJ2FkbWluJyBvZiAncmVnaXN0ZXJlZCB1c2VyJ1xuICAgICAgICAgICAgbmV3IFBhZ2VDb250cm9sbGVyKG5ldyBQYWdlVmlld0hlbHBlcigpLCBuZXcgUGFnZU1vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gbGV0IHZpZXcgc2hvdyB2aWV3IHdpdGggZGF0YSBmcm9tIGRhdGFiYXNlXG4gICAgZnVuY3Rpb24gc2hvd1ZpZXcoZGF0YSlcbiAgICB7XG4gICAgICAgIHZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIC8vIHdoYXQgaGFwcGVuczpcbiAgICAgICAgLy8gMSkgdXNlciBjbGlja3Mgb24gYSBwcm9kdWN0IFxuICAgICAgICAvLyAyKSBtb2RlbCBnZXRzIGluZm8gb2YgdGhlIHByb2R1Y3RcbiAgICAgICAgLy8gMykgc3lzdGVtIHB1dHMgaW5mbyBpbiBodG1sXG4gICAgICAgIC8vIDQpIHZpZXcgc2hvd3MgaW5mb1xuXG4gICAgICAgIC8vIDIpIG1vZGVsIGdldHMgaW5mbyBvZiB0aGUgcHJvZHVjdFxuICAgICAgICAvLyAzKSBzeXN0ZW0gcHV0cyBpbmZvIGluIGh0bWxcbiAgICAgICAgbW9kZWwuR2V0UHJvZHVjdEluZm8oc2hvd1ZpZXcpO1xuXG5cblxuICAgICAgICAvLyBzZXQgdmlldyB0byBsb2dpbiBmb3JtXG4gICAgICAgIC8vVmlld0hlbHBlci5zZXRWaWV3KCk7XG5cbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBlbWFpbCBhbmQgcGFzc3dvcmQ7IGNsaWNrcyAnbG9naW4nOiBWSUVXIG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXG4gICAgICAgIC8vVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpbixcbiAgICAgICAgc2hvd1ZpZXcgOiBzaG93Vmlld1xuICAgIH1cbn07IiwidmFyIEVycm9yVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KClcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJPZXBzIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvZXJyb3IvZXJyb3IuaHRtbCcpO1xuICAgIH1cblxuICAgIC8vIEFjdGlvbkxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgYWN0aW9ucyBvbiBzcGVjaWZpYyBldmVudHNcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihldmVudEhhbmRsZXIpXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXG4gICAgfVxufTsiLCJ2YXIgTG9naW5WaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcoKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPVwiSW5sb2dnZW4gLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9sb2dpbi9sb2dpbi5odG1sJyk7XG4gICAgfVxuXG4gICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnQgd2hlbiAnc29tZXRoaW5nJyBoYXBwZW5zICh3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgZm9yIGV4YW1wbGUpXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBsb2dpbiBmb3JtXG4gICAgICAgIC8vIHVzZXIgcHJlc3NlcyAnbG9naW4nXG5cbiAgICAgICAgLy8gaWYgdXNlciBwcmVzc2VzICdsb2dpbicsIHBlcmZvcm0gYWN0aW9uIChtYWtlIGNvbnRyb2xsZXIgc2VuZCBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gQVBJKVxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNsb2dpbmZvcm1cIiwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIExvZ291dFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0VmlldygpXG4gICAge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiVWl0bG9nZ2VuIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvbG9nb3V0L2xvZ291dC5odG1sJyk7XG4gICAgfVxuXG4gICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnQgd2hlbiAnc29tZXRoaW5nJyBoYXBwZW5zICh3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgZm9yIGV4YW1wbGUpXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIFBhZ2VWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXG4gICAge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiV2Vsa29tIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvcGFnZS9wYWdlLmh0bWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodmlld0RhdGFbMF0udXNlcl90eXBlID09IFwiY3VzdG9tZXJcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKFwiI3VzZXItYmxvY2tcIikuYXBwZW5kKFwiPGgxPkplIGxlZXMgZGl0IGFsbGVlbiBhbHMgamUgZWVuIGN1c3RvbWVyIGJlbnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmlld0RhdGFbMF0udXNlcl90eXBlID09IFwiYWRtaW5cIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKFwiI3VzZXItYmxvY2tcIikuYXBwZW5kKFwiPGgxPkplIGxlZXMgZGl0IGFsbGVlbiBhbHMgamUgZWVuIGFkbWluaXN0cmF0b3IgYmVudFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWN0aW9uTGlzdGVuZXIgdGhhdCBleGVjdXRlcyBhY3Rpb25zIG9uIHNwZWNpZmljIGV2ZW50c1xuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG59OyIsInZhciBQcm9kdWN0c1ZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJQcm9kdWN0ZW4gLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmh0bWwoJzxkaXYgY2xhc3M9XCJjb2wtMTJcIj48ZGl2IGNsYXNzPVwiY29sLTNcIiBpZD1cImZpbHRlcnNcIj48L2Rpdj48ZGl2IGNsYXNzPVwiY29sLTlcIiBpZD1cInByb2R1Y3RzXCI+PC9kaXY+PC9kaXY+Jyk7XG4gICAgICAgIC8vIGxvYWQgZmlsdGVyc1xuICAgICAgICAkKFwiI2ZpbHRlcnNcIikubG9hZCgnL3ZpZXdzL3Byb2R1Y3RzL2ZpbHRlcnMuaHRtbCcpO1xuXG4gICAgICAgIC8vIGxvYWQgcHJvZHVjdHNcbiAgICAgICAgbG9hZFByb2R1Y3RzKHZpZXdEYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkUHJvZHVjdHModmlld0RhdGEpXG4gICAge1xuICAgICAgICAkKFwiI3Byb2R1Y3RzXCIpLmxvYWQoJ3ZpZXdzL3Byb2R1Y3RzL3Byb2R1Y3RzLmh0bWwnLCBmdW5jdGlvbiAoKSB7IC8vIHdhYXIgaWQgPSAnY29tcG9uZW50JyBkb2UgLmxvYWQuLi4uLi5cbiAgICAgICAgICAgICQuZWFjaCh2aWV3RGF0YSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIENsb25lIHByb2R1Y3RcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdCA9ICQoJzxkaXY+JykuYXBwZW5kKCQoJyNwcm9kdWN0X19saXN0X19pdGVtJykuY2xvbmUoKSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X190aXRsZVwiKS5odG1sKHZhbHVlLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9fc3VidGl0bGVcIikuYXBwZW5kKHZhbHVlLmdlbnJlICsoXCIgfCBQRUdJIFwiKSArIHZhbHVlLnBlZ2lfYWdlICsoXCIgfCBcIikrIFBsYXRmb3JtTG9nbyh2YWx1ZS5wbGF0Zm9ybSkpO1xuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19kZXNjcmlwdGlvblwiKS5odG1sKEN1dFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbikpO1xuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19wcmljZVwiKS5hcHBlbmQoKFwi4oKsIFwiKSt2YWx1ZS5wcmljZSk7XG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiI2J1dHRvbnNfX2luZm9cIikuYXR0cihcImhyZWZcIiwgXCJwcm9kdWN0L1wiICsgdmFsdWUuZWFuX251bWJlcilcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgdmFsdWUuaW1hZ2UpO1xuXG4gICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0XCIpLmFwcGVuZChwcm9kdWN0KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IGxpc3QgaXRlbSwgYmVjYXVzZSB0aGlzIGl0ZW0gaXMgYWx3YXlzIGVtcHR5XG4gICAgICAgICAgICAkKFwiI3Byb2R1Y3RfX2xpc3RfX2l0ZW1cIikuZmlyc3QoKS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy9TaG93IG1vcmUvbGVzc1xuICAgIGZ1bmN0aW9uIEN1dFN0cmluZyh0ZXh0KXtcbiAgICAgICAgdmFyIFNob3dBbW91bnQgPSA1MDtcbiAgICAgICAgdmFyIFdvcmRzQXJyYXkgPSB0ZXh0LnNwbGl0KFwiIFwiKTtcbiAgICAgICAgaWYoV29yZHNBcnJheS5sZW5ndGg+U2hvd0Ftb3VudCl7XG4gICAgICAgICAgICB2YXIgU2hvcnRTdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgZm9yKGk9MDsgaTxTaG93QW1vdW50OyBpKyspe1xuICAgICAgICAgICAgICAgIFNob3J0U3RyaW5nICs9IFdvcmRzQXJyYXlbaV0gKyBcIiBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTaG9ydFN0cmluZytcIi4uLlwiO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vUGxhdGZvcm0gTG9nbydzXG4gICAgZnVuY3Rpb24gUGxhdGZvcm1Mb2dvKHBsYXRmb3JtbmFhbSlcbiAgICB7XG4gICAgICAgIHBsYXRmb3JtbmFhbSA9IHBsYXRmb3JtbmFhbS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBzd2l0Y2ggKHBsYXRmb3JtbmFhbSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSBcIlBTNFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9wcy5wbmcnIC8+XCI7XG4gICAgICAgICAgICBjYXNlIFwiUENcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvd2luZG93cy5wbmcnIC8+XCI7XG4gICAgICAgICAgICBjYXNlIFwiWEJPWFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy94Ym94LnBuZycgLz5cIjtcbiAgICAgICAgICAgIGNhc2UgXCJOSU5URU5ET1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9uaW50ZW5kby5wbmcnIC8+XCI7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBwbGF0Zm9ybW5hYW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeGVjdXRlIHRoZSBldmVudCB3aGVuICdzb21ldGhpbmcnIGhhcHBlbnMgKHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZCBmb3IgZXhhbXBsZSlcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIlxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEZpbHRlckxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICAvLyBIaWVyIGhldCBmb3JtdWxpZXIgdmVyc3R1cmVuIGFscyB3ZSBvcCBlZW4gY2hlY2tib3ggZHJ1a2tlblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vZmYoKS5vbihcImNoYW5nZVwiLCBcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAkKFwiI3Byb2R1Y3RfZmlsdGVyXCIpLnN1Ym1pdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgZGUgcHJvZHVjdGVubGlqc3QgYWxzIGVlbiB3YWFyZGUgaW4gZGUgc2xpZGVyIHZlcmFuZGVyZChhbGxlIG1hbmllcmVuKVxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcImNoYW5nZSBrZXl1cFwiLCBcImlucHV0W25hbWU9cHJpY2UtbWF4XSwgaW5wdXRbbmFtZT1wcmljZS1taW5dXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZigkKFwiI3ByaWNlbWluXCIpLnZhbCgpID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAkKFwiI3ByaWNlbWluXCIpLnZhbCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3RfZmlsdGVyXCIpLnN1Ym1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNwcm9kdWN0X2ZpbHRlclwiLCBhY3Rpb24pO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIGxvYWRQcm9kdWN0czogbG9hZFByb2R1Y3RzLFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXG4gICAgICAgIHNldEZpbHRlckxpc3RlbmVyOiBzZXRGaWx0ZXJMaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIFJlZ2lzdGVyVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdUb1Nob3cpXG4gICAge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiUmVnaXN0cmVyZW4gLSBBWiBHYW1lc1wiO1xuICAgICAgICBcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCh2aWV3VG9TaG93KTtcbiAgICB9XG5cbiAgICAvLyBFeGVjdXRlIHRoZSBldmVudCB3aGVuICdzb21ldGhpbmcnIGhhcHBlbnMgKHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZCBmb3IgZXhhbXBsZSlcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIHJlZ2lzdGVyIGZvcm1cbiAgICAgICAgLy8gdXNlciBwcmVzc2VzICdyZWdpc3RlcidcblxuICAgICAgICAvLyBpZiB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJywgcGVyZm9ybSBhY3Rpb25cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjcmVnaXN0ZXJmb3JtXCIsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG59OyIsInZhciBSZXNldFBhc3N3b3JkVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdUb1Nob3cpXG4gICAge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiSW5sb2dnZW4gLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQodmlld1RvU2hvdyk7XG4gICAgfVxuXG4gICAgLy8gQWN0aW9uTGlzdGVuZXIgdGhhdCBleGVjdXRlcyBhY3Rpb25zIG9uIHNwZWNpZmljIGV2ZW50c1xuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcbiAgICB7XG4gICAgICAgIC8vJChkb2N1bWVudCkucmVhZHkoZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjcmVzZXRmb3JtXCIsIGV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG59O1xuXG4vKlxudmFyIFJlc2V0UGFzc3dvcmRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXG4gICAge1xuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCd2aWV3cy9yZXNldHBhc3N3b3JkL3Jlc2V0cGFzc3dvcmQuaHRtbCcpO1xuICAgIH1cblxuICAgIC8vIEFjdGlvbkxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgYWN0aW9ucyBvbiBzcGVjaWZpYyBldmVudHNcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihldmVudEhhbmRsZXIpXG4gICAge1xuICAgICAgICAvLyQoZG9jdW1lbnQpLnJlYWR5KGV2ZW50SGFuZGxlcik7XG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI3Jlc2V0Zm9ybVwiLCBldmVudEhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXG4gICAgfVxufTtcbiovIiwidmFyIFByb2R1Y3RWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcocHJvZHVjdClcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gcHJvZHVjdC50aXRsZSArIFwiIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL3NpbmdsZV9wcm9kdWN0L3NpbmdsZV9wcm9kdWN0Lmh0bWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCBwcm9kdWN0LmltYWdlKTtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3RpdGxlXCIpLmh0bWwocHJvZHVjdC50aXRsZSk7XG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19wcmljZVwiKS5odG1sKFwi4oKsIFwiICsgcHJvZHVjdC5wcmljZSk7XG5cbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2VhblwiKS5hcHBlbmQocHJvZHVjdC5lYW5fbnVtYmVyKTtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3BsYXRmb3JtXCIpLmFwcGVuZChwcm9kdWN0LnBsYXRmb3JtKTtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3B1Ymxpc2hlclwiKS5hcHBlbmQocHJvZHVjdC5wdWJsaXNoZXIpO1xuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fcGVnaVwiKS5hcHBlbmQocHJvZHVjdC5wZWdpX2FnZSk7XG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19nZW5yZVwiKS5hcHBlbmQocHJvZHVjdC5nZW5yZSk7XG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19kZXNjclwiKS5odG1sKHByb2R1Y3QuZGVzY3JpcHRpb24pXG5cbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKHByb2R1Y3QucmVsZWFzZV9kYXRlKTtcblxuICAgICAgICAgICAgICAgIHZhciBtb250aHMgPSBbXCJqYW51YXJpXCIsIFwiZmVicnVhcmlcIiwgXCJtYWFydFwiLCBcImFwcmlsXCIsIFwibWVpXCIsIFwianVuaVwiLCBcImp1bGlcIiwgXCJhdWd1c3R1c1wiLCBcInNlcHRlbWJlclwiLCBcIm9rdG9iZXJcIiwgXCJub3ZlbWJlclwiLCBcImRlY2VtYmVyXCJdO1xuXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19yZWxlYXNlZGF0ZVwiKS5hcHBlbmQoZC5nZXREYXkoKSArIFwiIFwiICsgbW9udGhzW2QuZ2V0TW9udGgoKV0gKyBcIiBcIiArIGQuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gcmVnaXN0ZXIgZm9ybVxuICAgICAgICAvLyB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJ1xuXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInLCBwZXJmb3JtIGFjdGlvblxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXG4gICAgfVxufTsiXX0=
