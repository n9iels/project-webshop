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
        Model.login(formData.email, formData.password, function onSuccess(data) {
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

    // Main function, also the startpoint for a page
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
        model.GetProductInfo(function (data) {
            viewHelper.setView(data);
        });
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        viewHelper.setActionListener(actionPerformed);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main,
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

                $(".product__ean").append(product.ean_number);
                $(".product__platform").append(product.platform);
                $(".product__publisher").append(product.publisher);
                $(".product__pegi").append(product.pegi_age);
                $(".product__genre").append(product.genre);

                var d = new Date(product.release_date);

                var months = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];

                $(".liproduct__releasedate").append(d.getDay() + " " + months[d.getMonth()] + " " + d.getFullYear());

                $(".singleproduct__descr").html(product.description);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlci5qcyIsImxvZ2luX21vZGVsLmpzIiwibG9nb3V0X21vZGVsLmpzIiwicGFnZV9tb2RlbC5qcyIsInByb2R1Y3RzX21vZGVsLmpzIiwicmVnaXN0ZXJfbW9kZWwuanMiLCJyZXNldHBhc3N3b3JkX21vZGVsLmpzIiwic2luZ2xlX3Byb2R1Y3RfbW9kZWwuanMiLCJlcnJvcl9jb250cm9sbGVyLmpzIiwibG9naW5fY29udHJvbGxlci5qcyIsImxvZ291dF9jb250cm9sbGVyLmpzIiwicGFnZV9jb250cm9sbGVyLmpzIiwicHJvZHVjdHNfY29udHJvbGxlci5qcyIsInJlZ2lzdGVyX2NvbnRyb2xsZXIuanMiLCJyZXNldHBhc3N3b3JkX2NvbnRyb2xsZXIuanMiLCJzaW5nbGVfcHJvZHVjdF9jb250cm9sbGVyLmpzIiwiZXJyb3IvZXJyb3Jfdmlldy5qcyIsImxvZ2luL2xvZ2luX3ZpZXcuanMiLCJsb2dvdXQvbG9nb3V0X3ZpZXcuanMiLCJwYWdlL3BhZ2Vfdmlldy5qcyIsInByb2R1Y3RzL3Byb2R1Y3RzX3ZpZXcuanMiLCJyZWdpc3Rlci9yZWdpc3Rlcl92aWV3LmpzIiwicmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkX3ZpZXcuanMiLCJzaW5nbGVfcHJvZHVjdC9zaW5nbGVfcHJvZHVjdF92aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSb3V0ZXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIGJhc2VVcmwgPSBcInByb2plY3Qtd2Vic2hvcC9cIjtcblxuICAgIGZ1bmN0aW9uIHJvdXRlKHVybCwgaGlzdG9yeSlcbiAgICB7XG4gICAgICAgIGlmIChpc0ludGVybmFsKHVybCkgPT0gZmFsc2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwYXJ0aWNsZXMgPSBnZXRQYXJ0aWNsZXModXJsKTtcblxuICAgICAgICBzd2l0Y2gocGFydGljbGVzWzBdKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIFwiXCI6XG4gICAgICAgICAgICBjYXNlIFwiaW5kZXguaHRtbFwiOlxuICAgICAgICAgICAgY2FzZSBcInByb2R1Y3RzXCI6XG4gICAgICAgICAgICAgICAgbmV3IFByb2R1Y3RzQ29udHJvbGxlcihuZXcgUHJvZHVjdHNWaWV3SGVscGVyKCksIG5ldyBQcm9kdWN0c01vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwcm9kdWN0XCI6XG4gICAgICAgICAgICAgICAgbmV3IFByb2R1Y3RDb250cm9sbGVyKG5ldyBQcm9kdWN0Vmlld0hlbHBlcigpLCBuZXcgUHJvZHVjdE1vZGVsKHBhcnRpY2xlc1sxXSkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyZWdpc3RlclwiOlxuICAgICAgICAgICAgICAgIG5ldyBSZWdpc3RlckNvbnRyb2xsZXIobmV3IFJlZ2lzdGVyVmlld0hlbHBlcigpLCBuZXcgUmVnaXN0ZXJNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibG9naW5cIjpcbiAgICAgICAgICAgICAgICBuZXcgTG9naW5Db250cm9sbGVyKG5ldyBMb2dpblZpZXdIZWxwZXIoKSwgbmV3IExvZ2luTW9kZWwoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxvZ291dFwiOlxuICAgICAgICAgICAgICAgIG5ldyBMb2dvdXRDb250cm9sbGVyKG5ldyBMb2dvdXRWaWV3SGVscGVyKCksIG5ldyBMb2dvdXRNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVnaXN0ZXJcIjpcbiAgICAgICAgICAgICAgICBuZXcgUmVnaXN0ZXJDb250cm9sbGVyKG5ldyBSZWdpc3RlclZpZXdIZWxwZXIoKSwgbmV3IFJlZ2lzdGVyTW9kZWwoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJlc2V0cGFzc3dvcmRcIjpcbiAgICAgICAgICAgICAgICBuZXcgUmVzZXRQYXNzd29yZENvbnRyb2xsZXIobmV3IFJlc2V0UGFzc3dvcmRWaWV3SGVscGVyKCksIG5ldyBSZXNldFBhc3N3b3JkTW9kZWwoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3JDb250cm9sbGVyKG5ldyBFcnJvclZpZXdIZWxwZXIoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhpc3RvcnkgIT0gZmFsc2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh1cmwgPT0gXCJcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1cmwgPSBcImluZGV4Lmh0bWxcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd3JpdGVIaXN0b3J5KHt9LCBcIkEtWiBHYW1lc1wiLCB1cmwpXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0ludGVybmFsKHVybClcbiAgICB7XG4gICAgICAgIGlmICh1cmwuaW5kZXhPZihcImh0dHBcIikgIT0gLTEgfHwgdXJsLmluZGV4T2YoXCJodHRwc1wiKSAhPSAtMSB8fCB1cmwuaW5kZXhPZihcInd3d1wiKSAhPSAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdXJsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQYXJ0aWNsZXModXJsKVxuICAgIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCAvXG4gICAgICAgIGlmICh1cmwuaW5kZXhPZihcIi9cIikgPT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZygxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgYmFzZSB1cmwgc2V0LCByZW1vdmUgdGhlIGJhc2UgdXJsXG4gICAgICAgIGlmICh0aGlzLmJhc2VVcmwgIT0gbnVsbCAmJiB1cmwuaW5kZXhPZih0aGlzLmJhc2VVcmwpICE9IC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKHRoaXMuYmFzZVVybCkgKyB0aGlzLmJhc2VVcmwubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmwuc3BsaXQoL1xcLyguKyk/LylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3cml0ZUhpc3Rvcnkob2JqZWN0LCB0aXRsZSwgdXJsKVxuICAgIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG9iamVjdCwgdGl0bGUsIHVybCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm91dGU6IHJvdXRlXG4gICAgfVxufSIsInZhciBMb2dpbk1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIGxvZ2luKGVtYWlsLCBwYXNzd29yZCwgY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXIvbG9naW5cIixcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBlbWFpbCA6IGVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkIDogcGFzc3dvcmRcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyBwdXQgdG9rZW4gaW4gY29va2llXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llPSdhY2Nlc3NfdG9rZW49JyArIGRhdGEuYWNjZXNzX3Rva2VuO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZT0ndXNlcl9pZD0nICsgZGF0YS51c2VyX2lkO1xuXG4gICAgICAgICAgICAgICAgLy8gbGV0IGNvbnRyb2xsZXIgcmVzdW1lIHdpdGggc3R1ZmZcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIHNob3cgJ25vdCBnb29kIGVtYWlsIG9yIHBhc3N3b3JkIHRvIHVzZXInXG4gICAgICAgICAgICAgICAgJChcIiNlcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcblxuICAgICAgICAgICAgICAgIC8vJChcIiNjb21wb25lbnRcIikuaHRtbChcImVycm9yIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGxvZ2luOiBsb2dpblxuICAgIH1cbn07IiwidmFyIExvZ291dE1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIGxvZ291dChjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlci9sb2dvdXRcIiwgLy8/IGh0dHA6Ly84NC44NC4yNDUuMjk6MjQzID0gQVBJLWxvY2F0aWU/XG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdXNlcl9pZDogZ2V0Q29va2llKFwidXNlcl9pZFwiKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llPSdhY2Nlc3NfdG9rZW49JztcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWU9J3VzZXJfaWQ9JztcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIHNob3cgJ25vdCBnb29kIGVtYWlsIG9yIHBhc3N3b3JkIHRvIHVzZXInXG4gICAgICAgICAgICAgICAgJChcIiNlcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcblxuICAgICAgICAgICAgICAgIC8vJChcIiNjb21wb25lbnRcIikuaHRtbChcImVycm9yIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBnZXRDb29raWUobmFtZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldLnNwbGl0KFwiPVwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChjb29raWVbMF0udHJpbSgpID09IG5hbWUpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29va2llWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9nb3V0OiBsb2dvdXRcbiAgICB9XG59OyIsInZhciBQYWdlTW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgZnVuY3Rpb24gZ2V0UGFnZShjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlclwiLFxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUpXG4gICAge1xuICAgICAgICB2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGNvb2tpZSA9IGNvb2tpZXNbaV0uc3BsaXQoXCI9XCIpO1xuXG4gICAgICAgICAgICBpZiAoY29va2llWzBdID09IG5hbWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvb2tpZVsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UGFnZTogZ2V0UGFnZVxuICAgIH1cbn07IiwidmFyIFByb2R1Y3RzTW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgZnVuY3Rpb24gZ2V0UGFnZShmaWx0ZXIsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9wcm9kdWN0cz9cIiArIGZpbHRlciwgLy8/IGh0dHA6Ly84NC44NC4yNDUuMjk6MjQzID0gQVBJLWxvY2F0aWU/XG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwidmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQYWdlOiBnZXRQYWdlXG4gICAgfVxufTsiLCJ2YXIgUmVnaXN0ZXJNb2RlbCA9IGZ1bmN0aW9uKClcbntcbiAgICBmdW5jdGlvbiByZWdpc3Rlcihmb3JtRGF0YSwgY2FsbGJhY2spXG4gICAge1xuICAgICAgICAvL2NvbnNvbGUubG9nKGZvcm1EYXRhKTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC91c2VyL3JlZ2lzdGVyXCIsXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZV9tYWlsIDogZm9ybURhdGEuZV9tYWlsYWRyZXMsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQgOiBmb3JtRGF0YS53YWNodHdvb3JkLFxuICAgICAgICAgICAgICAgIGZpcnN0X25hbWUgOiBmb3JtRGF0YS52b29ybmFhbSxcbiAgICAgICAgICAgICAgICBpbnNlcnRpb24gOiBmb3JtRGF0YS50dXNzZW52b2Vnc2VsLFxuICAgICAgICAgICAgICAgIHN1cm5hbWUgOiBmb3JtRGF0YS5hY2h0ZXJuYWFtLFxuICAgICAgICAgICAgICAgIGdlbmRlciA6IGZvcm1EYXRhLmdlbmRlcixcbiAgICAgICAgICAgICAgICBkYXRlX29mX2JpcnRoIDogZm9ybURhdGEuYmlydGhfZGF0ZSxcbiAgICAgICAgICAgICAgICBwaG9uZV9udW1iZXIgOiBmb3JtRGF0YS5tb2JpZWxfbnVtbWVyLFxuICAgICAgICAgICAgICAgIHNlY3JldF9xdWVzdGlvbiA6IGZvcm1EYXRhLnNlY3VyaXR5X3F1ZXN0aW9uLFxuICAgICAgICAgICAgICAgIHNlY3JldF9xdWVzdGlvbl9hbnN3ZXIgOiBmb3JtRGF0YS5zZWN1cml0eV9hbnN3ZXIsXG5cbiAgICAgICAgICAgICAgICBwb3N0YWxfY29kZSA6IGZvcm1EYXRhLnBvc3Rjb2RlLFxuICAgICAgICAgICAgICAgIG51bWJlciA6IGZvcm1EYXRhLmh1aXNudW1tZXIsXG4gICAgICAgICAgICAgICAgc3RyZWV0X25hbWUgOiBmb3JtRGF0YS5zdHJhYXRuYWFtLFxuICAgICAgICAgICAgICAgIGNpdHkgOiBmb3JtRGF0YS5wbGFhdHMgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gc2hvdyAnZW1haWwgYWwgZ2Vib25kZW4gYWFuIGVlbiBhY2NvdW50PydcbiAgICAgICAgICAgICAgICAkKFwiI3JlZ2lfYXBpX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgIC8vJChcIiNjb21wb25lbnRcIikuaHRtbChcImVycm9yIGZ1bmN0aW9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHJlZ2lzdGVyOiByZWdpc3RlclxuICAgIH1cbn07IiwidmFyIFJlc2V0UGFzc3dvcmRNb2RlbCA9IGZ1bmN0aW9uKClcbntcbiAgICBmdW5jdGlvbiByZXNldHBhc3N3b3JkKGZvcm1EYXRhLCBjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC91c2VyL3Jlc2V0cGFzc3dvcmRcIixcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBlbWFpbCA6IGZvcm1EYXRhLmVfbWFpbGFkcmVzLFxuICAgICAgICAgICAgICAgIHNlY3JldF9xdWVzdGlvbl9hbnN3ZXIgOiBmb3JtRGF0YS5zZWN1cml0eV9hbnN3ZXIsXG4gICAgICAgICAgICAgICAgc2VjcmV0X3F1ZXN0aW9uIDogZm9ybURhdGEuc2VjdXJpdHlfcXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgbmV3X3Bhc3N3b3JkIDogZm9ybURhdGEud2FjaHR3b29yZCxcbiAgICAgICAgICAgICAgICByZXBlYXRfcGFzc3dvcmQgOiBmb3JtRGF0YS53YWNodHdvb3JkMlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8kKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwidmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgICAgICAkKFwiI3Jlc2V0X3Bhc3N3b3JkX2FwaV9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICByZXNldHBhc3N3b3JkOiByZXNldHBhc3N3b3JkXG4gICAgfVxufTsiLCJ2YXIgUHJvZHVjdE1vZGVsID0gZnVuY3Rpb24oZWFuKVxue1xuICAgIGZ1bmN0aW9uIEdldFByb2R1Y3RJbmZvKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9wcm9kdWN0cy9cIiArIGVhbixcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbMF0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIEdldFByb2R1Y3RJbmZvOiBHZXRQcm9kdWN0SW5mb1xuICAgIH1cbn07IiwidmFyIEVycm9yQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIpXG57XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICAvLyBzZXQgdmlldyB0byBsb2dpbiBmb3JtXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwidmFyIExvZ2luQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuICAgIFxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXG4gICAge1xuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy8gTG9vcCB0cm91Z2ggdGhlIGZvcm0gZGF0YSBhbmQgZ2V0IGFsbCBmaWVsZHNcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XG4gICAgICAgICQuZWFjaCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uIChpLCBmaWVsZCkge1xuICAgICAgICAgICAgZm9ybURhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgZW1haWwgYW5kIHBhc3N3b3JkIHRvIEFQSVxuICAgICAgICBNb2RlbC5sb2dpbihmb3JtRGF0YS5lbWFpbCwgZm9ybURhdGEucGFzc3dvcmQsIGZ1bmN0aW9uIG9uU3VjY2VzcyhkYXRhKSB7XG4gICAgICAgICAgICAvLyBzaG93IHVpdGxvZ2dlbiBidXR0b25cbiAgICAgICAgICAgICQoXCIjaW5sb2dnZW5fdGV4dFwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI3VpdGxvZ2dlbl90ZXh0XCIpLnNob3coKTtcblxuICAgICAgICAgICAgLy8gV2VlcmdlZWYgZWVuIGFuZGVyZSBwYWdpbmEgZ2ViYXNzZWVyZCBvcCAnYWRtaW4nIG9mICdyZWdpc3RlcmVkIHVzZXInXG4gICAgICAgICAgICBuZXcgUGFnZUNvbnRyb2xsZXIobmV3IFBhZ2VWaWV3SGVscGVyKCksIG5ldyBQYWdlTW9kZWwoKSkubWFpbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCk7XG5cbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBlbWFpbCBhbmQgcGFzc3dvcmQ7IGNsaWNrcyAnbG9naW4nOiBWSUVXIG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBMb2dvdXRDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcbiAgICB7XG4gICAgICAgIE1vZGVsLmxvZ291dChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8gc2hvdyB1aXRsb2dnZW4gYnV0dG9uXG4gICAgICAgICAgICAkKFwiI2lubG9nZ2VuX3RleHRcIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIiN1aXRsb2dnZW5fdGV4dFwiKS5oaWRlKCk7XG5cbiAgICAgICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cbiAgICAgICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gZW1haWwgYW5kIHBhc3N3b3JkOyBjbGlja3MgJ2xvZ2luJzogVklFVyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTsiLCJ2YXIgUGFnZUNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgPSBtb2RlbDtcbiAgICB2YXIgVmlldyAgPSB2aWV3SGVscGVyO1xuICAgIFxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXG4gICAge1xuICAgICAgICBNb2RlbC5nZXRQYWdlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBWaWV3LnNldFZpZXcoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgVmlldy5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwidmFyIFByb2R1Y3RzQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuICAgIFxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcbiAgICBmdW5jdGlvbiBnZXRQYWdlKClcbiAgICB7XG4gICAgICAgIE1vZGVsLmdldFBhZ2UoXCJcIiwgZnVuY3Rpb24gKGRhdGEpIHsgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpOyB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJQcm9kdWN0cyhldmVudClcbiAgICB7XG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybSAocGFnZSByZWxvYWQpXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIGZpbHRlcnMgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpO1xuICAgICAgICBNb2RlbC5nZXRQYWdlKGZpbHRlcnMsIGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIubG9hZFByb2R1Y3RzKGRhdGEpOyB9KTtcbiAgICB9XG5cbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0UGFnZSk7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0RmlsdGVyTGlzdGVuZXIoZmlsdGVyUHJvZHVjdHMpO1xuICAgICAgICAvLyBuZXcgYWN0aW9uIHdhbm5lciBlciBvcCBmaWx0ZXIgd29yZHQgZ2VkcnVrdFxuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwidmFyIFJlZ2lzdGVyQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuICAgIFxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbiBhY3Rpb25QZXJmb3JtZWRcIik7IC8vdGVzdFxuXG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIHJlc2V0IGVycm9yIG1lc3NhZ2VzXG4gICAgICAgICQoXCIjcmVnaV9hcGlfZXJyb3JfbWVzc2FnZVwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuaGlkZSgpO1xuXG4gICAgICAgIC8vIHB1dCBmb3JtIGZpZWxkcyBpbiBqYXZhc2NyaXB0IE9iamVjdFxuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcblxuICAgICAgICAkLmVhY2goJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbiAoaSwgZmllbGQpIHtcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGZpeCBkYXRlIG9mIGJpcnRoIChBUEkgZXhwZWN0cyBjZXJ0YWluIGZvcm1hdClcbiAgICAgICAgZm9ybURhdGFbXCJiaXJ0aF9kYXRlXCJdID0gZm9ybURhdGEuamFhciArIFwiLVwiICsgZm9ybURhdGEubWFhbmQgKyBcIi1cIiArIGZvcm1EYXRhLmRhZztcblxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG5cbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciBhbnkgbWFuZGF0b3J5IGZpZWxkIGlzIGxlZnQgZW1wdHkgYnkgdXNlciBhbmRcbiAgICAgICAgLy8gaWYgc28sIGFib3J0IGZ1bmN0aW9uXG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IGZhbHNlO1xuICAgICAgICB2YXIgbWFuZGF0b3J5RmllbGRzID0gW1widm9vcm5hYW1cIiwgXCJhY2h0ZXJuYWFtXCIsIFwicG9zdGNvZGVcIiwgXCJodWlzbnVtbWVyXCIsIFwiZV9tYWlsYWRyZXNcIiwgXCJ3YWNodHdvb3JkXCIsIFwid2FjaHR3b29yZDJcIiwgXCJzZWN1cml0eV9hbnN3ZXJcIl07IC8vZHJvcGRvd25zIChsaWtlIGdlbmRlcikgYXJlIGFsd2F5cyBmaWxsZWQgaW4sIHNvIGRvbid0IHB1dCBpbiB0aGlzIGxpc3RcblxuICAgICAgICAvLyAocmVzZXQgYWxsIGZpZWxkcyB0byAndmFsaWQnIGJlY2F1c2UgdXNlciBtYXkgaGF2ZSBmaWxsZWQgaW4gZmllbGRzIHNpbmNlXG4gICAgICAgIC8vIHRoZSBwcmV2aW91cyB0aW1lIHRoaXMgZnVuY3Rpb24gd2FzIGNhbGxlZClcbiAgICAgICAgJC5lYWNoKG1hbmRhdG9yeUZpZWxkcywgZnVuY3Rpb24gKGksIG1hbkZpZWxkKSB7XG4gICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKTtcbiAgICAgICAgfSlcblxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcbiAgICAgICAgICAgIGlmIChmb3JtRGF0YVttYW5GaWVsZF0gPT0gXCJcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcblxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeUZpZWxkTWlzc2VzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBcbiAgICAgICAgLy8gaWYgYSBtYW5kYXRvcnkgZmllbGQgaXMgZW1wdHksIHNob3cgZXJyb3IgbWVzc2FnZSB0byB1c2VyIGFuZCBhYm9ydCBmdW5jdGlvblxuICAgICAgICBpZiAobWFuZGF0b3J5RmllbGRNaXNzZXMpXG4gICAgICAgIHsgXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdG9wIG9mIHBhZ2Ugc28gdGhhdCB1c2VycyBzZWUgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIC8vIHNob3cgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcbiAgICAgICAgICAgICQoXCIjcmVnaXN0ZXJfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHBhc3N3b3Jkc05vdElkZW50aWNhbCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChmb3JtRGF0YS53YWNodHdvb3JkICE9IGZvcm1EYXRhLndhY2h0d29vcmQyKSBcbiAgICAgICAge1xuICAgICAgICAgICAgcGFzc3dvcmRzTm90SWRlbnRpY2FsID0gdHJ1ZTtcbiAgICAgICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIiN3YWNodHdvb3JkXCIpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgICQoXCIjd2FjaHR3b29yZDJcIikuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWJvcnQgZnVuY3Rpb24gaWYgbWFuZGF0b3J5IGZpZWxkIG1pc3NlcyBvciBwYXNzd29yZHMgbm90IGlkZW50aWNhbFxuICAgICAgICBpZiAobWFuZGF0b3J5RmllbGRNaXNzZXMgfHwgcGFzc3dvcmRzTm90SWRlbnRpY2FsKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJjb250aW51ZWRcIilcbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgdXNlciBpbmZvIHRvIEFQSVxuICAgICAgICBNb2RlbC5yZWdpc3Rlcihmb3JtRGF0YSwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygnL3ZpZXdzL3JlZ2lzdGVyL2FmdGVyX3JlZ2lzdGVyLmh0bWwnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICAvLyBzZXQgdmlldyB0byByZWdpc3RlciBmb3JtXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygnL3ZpZXdzL3JlZ2lzdGVyL3JlZ2lzdGVyLmh0bWwnKTtcblxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIHJlZ2lzdGVyIGluZm87IGNsaWNrcyAncmVnaXN0ZXInOiB2aWV3IG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcblxuICAgICAgICAvLyBlbWFpbCBhbmQgcGFzc3dvcmQgYXJlIHNlbmQgdG8gQVBJOyBBUEkgY2hlY2tzIGlmIGVtYWlsIGFscmVhZHkgZXhpc3RzIChhbmQgd2hldGhlciBwYXNzd29yZCBpcyBjb3JyZWN0PykgXG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTsiLCJ2YXIgUmVzZXRQYXNzd29yZENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZCgpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcImluIGFjdGlvblBlcmZvcm1lZFwiKTsgLy90ZXN0XG5cbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgJChcIiNyZXNldF9wYXNzd29yZF9hcGlfZXJyb3JfbWVzc2FnZVwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuaGlkZSgpO1xuXG4gICAgICAgIC8vIHB1dCBmb3JtIGZpZWxkcyBpbiBqYXZhc2NyaXB0IE9iamVjdFxuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcblxuICAgICAgICAkLmVhY2goJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbiAoaSwgZmllbGQpIHtcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgYW55IG1hbmRhdG9yeSBmaWVsZCBpcyBsZWZ0IGVtcHR5IGJ5IHVzZXIgYW5kXG4gICAgICAgIC8vIGlmIHNvLCBhYm9ydCBmdW5jdGlvblxuICAgICAgICB2YXIgbWFuZGF0b3J5RmllbGRNaXNzZXMgPSBmYWxzZTtcbiAgICAgICAgdmFyIG1hbmRhdG9yeUZpZWxkcyA9IFtcIndhY2h0d29vcmRcIiwgXCJ3YWNodHdvb3JkMlwiLCBcImVfbWFpbGFkcmVzXCIsXCJzZWN1cml0eV9hbnN3ZXJcIl07IC8vZHJvcGRvd25zIChsaWtlIHNlY3VyaXR5X3F1ZXN0aW9uX2Fuc3dlcikgYXJlIGFsd2F5cyBmaWxsZWQgaW4sIHNvIGRvbid0IHB1dCBpbiB0aGlzIGxpc3RcblxuICAgICAgICAvLyAocmVzZXQgYWxsIGZpZWxkcyB0byAndmFsaWQnIGJlY2F1c2UgdXNlciBtYXkgaGF2ZSBmaWxsZWQgaW4gZmllbGRzIHNpbmNlXG4gICAgICAgIC8vIHRoZSBwcmV2aW91cyB0aW1lIHRoaXMgZnVuY3Rpb24gd2FzIGNhbGxlZClcbiAgICAgICAgJC5lYWNoKG1hbmRhdG9yeUZpZWxkcywgZnVuY3Rpb24gKGksIG1hbkZpZWxkKSB7XG4gICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKTtcbiAgICAgICAgfSlcblxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcbiAgICAgICAgICAgIGlmIChmb3JtRGF0YVttYW5GaWVsZF0gPT0gXCJcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcblxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeUZpZWxkTWlzc2VzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBcbiAgICAgICAgLy8gaWYgYSBtYW5kYXRvcnkgZmllbGQgaXMgZW1wdHksIHNob3cgZXJyb3IgbWVzc2FnZSB0byB1c2VyIGFuZCBhYm9ydCBmdW5jdGlvblxuICAgICAgICBpZiAobWFuZGF0b3J5RmllbGRNaXNzZXMpXG4gICAgICAgIHsgXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdG9wIG9mIHBhZ2Ugc28gdGhhdCB1c2VycyBzZWUgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIC8vIHNob3cgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcbiAgICAgICAgICAgICQoXCIjcmVzZXRfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHBhc3N3b3Jkc05vdElkZW50aWNhbCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChmb3JtRGF0YS53YWNodHdvb3JkICE9IGZvcm1EYXRhLndhY2h0d29vcmQyKSBcbiAgICAgICAge1xuICAgICAgICAgICAgcGFzc3dvcmRzTm90SWRlbnRpY2FsID0gdHJ1ZTtcbiAgICAgICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIiN3YWNodHdvb3JkXCIpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgICQoXCIjd2FjaHR3b29yZDJcIikuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWJvcnQgZnVuY3Rpb24gaWYgbWFuZGF0b3J5IGZpZWxkIG1pc3NlcyBvciBwYXNzd29yZHMgbm90IGlkZW50aWNhbFxuICAgICAgICBpZiAobWFuZGF0b3J5RmllbGRNaXNzZXMgfHwgcGFzc3dvcmRzTm90SWRlbnRpY2FsKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJjb250aW51ZWRcIilcbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgdXNlciBpbmZvIHRvIEFQSVxuICAgICAgICBNb2RlbC5yZXNldHBhc3N3b3JkKGZvcm1EYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCd2aWV3cy9yZXNldHBhc3N3b3JkL2FmdGVyX3Jlc2V0Lmh0bWwnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAgeyAgICAgIFxuICAgICAgICAvLyBzZXQgdmlldyB0byByZXNldCBwYXNzd29yZCBmb3JtXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0Vmlldygndmlld3MvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLmh0bWwnKTtcblxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XG4gICAgICAgIC8vIG5ldyBhY3Rpb24gd2FubmVyIGVyIG9wIGZpbHRlciB3b3JkdCBnZWRydWt0XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTtcblxuXG5cblxuIiwidmFyIFByb2R1Y3RDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcbiAgICB7XG4gICAgICAgIG1vZGVsLkdldFByb2R1Y3RJbmZvKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB2aWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgdmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpbixcbiAgICB9XG59OyIsInZhciBFcnJvclZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0VmlldygpXG4gICAge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiT2VwcyAtIEFaIEdhbWVzXCI7XG5cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWwnKTtcbiAgICB9XG5cbiAgICAvLyBBY3Rpb25MaXN0ZW5lciB0aGF0IGV4ZWN1dGVzIGFjdGlvbnMgb24gc3BlY2lmaWMgZXZlbnRzXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoZXZlbnRIYW5kbGVyKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZXZlbnRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIExvZ2luVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KClcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID1cIklubG9nZ2VuIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvbG9naW4vbG9naW4uaHRtbCcpO1xuICAgIH1cblxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gbG9naW4gZm9ybVxuICAgICAgICAvLyB1c2VyIHByZXNzZXMgJ2xvZ2luJ1xuXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyAnbG9naW4nLCBwZXJmb3JtIGFjdGlvbiAobWFrZSBjb250cm9sbGVyIHNlbmQgZW1haWwgYW5kIHBhc3N3b3JkIHRvIEFQSSlcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjbG9naW5mb3JtXCIsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG59OyIsInZhciBMb2dvdXRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcoKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIlVpdGxvZ2dlbiAtIEFaIEdhbWVzXCI7XG5cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2xvZ291dC9sb2dvdXQuaHRtbCcpO1xuICAgIH1cblxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG59OyIsInZhciBQYWdlVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIldlbGtvbSAtIEFaIEdhbWVzXCI7XG5cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL3BhZ2UvcGFnZS5odG1sJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHZpZXdEYXRhWzBdLnVzZXJfdHlwZSA9PSBcImN1c3RvbWVyXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJChcIiN1c2VyLWJsb2NrXCIpLmFwcGVuZChcIjxoMT5KZSBsZWVzIGRpdCBhbGxlZW4gYWxzIGplIGVlbiBjdXN0b21lciBiZW50XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZpZXdEYXRhWzBdLnVzZXJfdHlwZSA9PSBcImFkbWluXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJChcIiN1c2VyLWJsb2NrXCIpLmFwcGVuZChcIjxoMT5KZSBsZWVzIGRpdCBhbGxlZW4gYWxzIGplIGVlbiBhZG1pbmlzdHJhdG9yIGJlbnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFjdGlvbkxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgYWN0aW9ucyBvbiBzcGVjaWZpYyBldmVudHNcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihldmVudEhhbmRsZXIpXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXG4gICAgfVxufTsiLCJ2YXIgUHJvZHVjdHNWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXG4gICAge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiUHJvZHVjdGVuIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5odG1sKCc8ZGl2IGNsYXNzPVwiY29sLTEyXCI+PGRpdiBjbGFzcz1cImNvbC0zXCIgaWQ9XCJmaWx0ZXJzXCI+PC9kaXY+PGRpdiBjbGFzcz1cImNvbC05XCIgaWQ9XCJwcm9kdWN0c1wiPjwvZGl2PjwvZGl2PicpO1xuICAgICAgICAvLyBsb2FkIGZpbHRlcnNcbiAgICAgICAgJChcIiNmaWx0ZXJzXCIpLmxvYWQoJy92aWV3cy9wcm9kdWN0cy9maWx0ZXJzLmh0bWwnKTtcblxuICAgICAgICAvLyBsb2FkIHByb2R1Y3RzXG4gICAgICAgIGxvYWRQcm9kdWN0cyh2aWV3RGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFByb2R1Y3RzKHZpZXdEYXRhKVxuICAgIHtcbiAgICAgICAgJChcIiNwcm9kdWN0c1wiKS5sb2FkKCd2aWV3cy9wcm9kdWN0cy9wcm9kdWN0cy5odG1sJywgZnVuY3Rpb24gKCkgeyAvLyB3YWFyIGlkID0gJ2NvbXBvbmVudCcgZG9lIC5sb2FkLi4uLi4uXG4gICAgICAgICAgICAkLmVhY2godmlld0RhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSBwcm9kdWN0XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSAkKCc8ZGl2PicpLmFwcGVuZCgkKCcjcHJvZHVjdF9fbGlzdF9faXRlbScpLmNsb25lKCkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0IGluZm9cbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9fdGl0bGVcIikuaHRtbCh2YWx1ZS50aXRsZSk7XG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3N1YnRpdGxlXCIpLmFwcGVuZCh2YWx1ZS5nZW5yZSArKFwiIHwgUEVHSSBcIikgKyB2YWx1ZS5wZWdpX2FnZSArKFwiIHwgXCIpKyBQbGF0Zm9ybUxvZ28odmFsdWUucGxhdGZvcm0pKTtcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9fZGVzY3JpcHRpb25cIikuaHRtbChDdXRTdHJpbmcodmFsdWUuZGVzY3JpcHRpb24pKTtcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9fcHJpY2VcIikuYXBwZW5kKChcIuKCrCBcIikrdmFsdWUucHJpY2UpO1xuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIiNidXR0b25zX19pbmZvXCIpLmF0dHIoXCJocmVmXCIsIFwicHJvZHVjdC9cIiArIHZhbHVlLmVhbl9udW1iZXIpXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHZhbHVlLmltYWdlKTtcblxuICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5hcHBlbmQocHJvZHVjdCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxuICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0X19pdGVtXCIpLmZpcnN0KCkucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vU2hvdyBtb3JlL2xlc3NcbiAgICBmdW5jdGlvbiBDdXRTdHJpbmcodGV4dCl7XG4gICAgICAgIHZhciBTaG93QW1vdW50ID0gNTA7XG4gICAgICAgIHZhciBXb3Jkc0FycmF5ID0gdGV4dC5zcGxpdChcIiBcIik7XG4gICAgICAgIGlmKFdvcmRzQXJyYXkubGVuZ3RoPlNob3dBbW91bnQpe1xuICAgICAgICAgICAgdmFyIFNob3J0U3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIGZvcihpPTA7IGk8U2hvd0Ftb3VudDsgaSsrKXtcbiAgICAgICAgICAgICAgICBTaG9ydFN0cmluZyArPSBXb3Jkc0FycmF5W2ldICsgXCIgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gU2hvcnRTdHJpbmcrXCIuLi5cIjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvL1BsYXRmb3JtIExvZ28nc1xuICAgIGZ1bmN0aW9uIFBsYXRmb3JtTG9nbyhwbGF0Zm9ybW5hYW0pXG4gICAge1xuICAgICAgICBwbGF0Zm9ybW5hYW0gPSBwbGF0Zm9ybW5hYW0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgc3dpdGNoIChwbGF0Zm9ybW5hYW0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgXCJQUzRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvcHMucG5nJyAvPlwiO1xuICAgICAgICAgICAgY2FzZSBcIlBDXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3dpbmRvd3MucG5nJyAvPlwiO1xuICAgICAgICAgICAgY2FzZSBcIlhCT1hcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMveGJveC5wbmcnIC8+XCI7XG4gICAgICAgICAgICBjYXNlIFwiTklOVEVORE9cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvbmludGVuZG8ucG5nJyAvPlwiO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxhdGZvcm1uYWFtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnQgd2hlbiAnc29tZXRoaW5nJyBoYXBwZW5zICh3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgZm9yIGV4YW1wbGUpXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTsgLy8gaWYgJ2RvY3VtZW50IHJlYWR5JyBwZXJmb3JtIFwiYWN0aW9uXCJcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRGaWx0ZXJMaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAgLy8gSGllciBoZXQgZm9ybXVsaWVyIHZlcnN0dXJlbiBhbHMgd2Ugb3AgZWVuIGNoZWNrYm94IGRydWtrZW5cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub2ZmKCkub24oXCJjaGFuZ2VcIiwgXCJpbnB1dFt0eXBlPWNoZWNrYm94XVwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgJChcIiNwcm9kdWN0X2ZpbHRlclwiKS5zdWJtaXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGRlIHByb2R1Y3RlbmxpanN0IGFscyBlZW4gd2FhcmRlIGluIGRlIHNsaWRlciB2ZXJhbmRlcmQoYWxsZSBtYW5pZXJlbilcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJjaGFuZ2Uga2V5dXBcIiwgXCJpbnB1dFtuYW1lPXByaWNlLW1heF0sIGlucHV0W25hbWU9cHJpY2UtbWluXVwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYoJChcIiNwcmljZW1pblwiKS52YWwoKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgJChcIiNwcmljZW1pblwiKS52YWwoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X2ZpbHRlclwiKS5zdWJtaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjcHJvZHVjdF9maWx0ZXJcIiwgYWN0aW9uKTtcbiAgICB9XG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBsb2FkUHJvZHVjdHM6IGxvYWRQcm9kdWN0cyxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxuICAgICAgICBzZXRGaWx0ZXJMaXN0ZW5lcjogc2V0RmlsdGVyTGlzdGVuZXJcbiAgICB9XG59OyIsInZhciBSZWdpc3RlclZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3VG9TaG93KVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIlJlZ2lzdHJlcmVuIC0gQVogR2FtZXNcIjtcbiAgICAgICAgXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQodmlld1RvU2hvdyk7XG4gICAgfVxuXG4gICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnQgd2hlbiAnc29tZXRoaW5nJyBoYXBwZW5zICh3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgZm9yIGV4YW1wbGUpXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiByZWdpc3RlciBmb3JtXG4gICAgICAgIC8vIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInXG5cbiAgICAgICAgLy8gaWYgdXNlciBwcmVzc2VzICdyZWdpc3RlcicsIHBlcmZvcm0gYWN0aW9uXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI3JlZ2lzdGVyZm9ybVwiLCBhY3Rpb24pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXG4gICAgfVxufTsiLCJ2YXIgUmVzZXRQYXNzd29yZFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3VG9TaG93KVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIklubG9nZ2VuIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKHZpZXdUb1Nob3cpO1xuICAgIH1cblxuICAgIC8vIEFjdGlvbkxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgYWN0aW9ucyBvbiBzcGVjaWZpYyBldmVudHNcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihldmVudEhhbmRsZXIpXG4gICAge1xuICAgICAgICAvLyQoZG9jdW1lbnQpLnJlYWR5KGV2ZW50SGFuZGxlcik7XG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI3Jlc2V0Zm9ybVwiLCBldmVudEhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXG4gICAgfVxufTtcblxuLypcbnZhciBSZXNldFBhc3N3b3JkVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxuICAgIHtcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgndmlld3MvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLmh0bWwnKTtcbiAgICB9XG5cbiAgICAvLyBBY3Rpb25MaXN0ZW5lciB0aGF0IGV4ZWN1dGVzIGFjdGlvbnMgb24gc3BlY2lmaWMgZXZlbnRzXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoZXZlbnRIYW5kbGVyKVxuICAgIHtcbiAgICAgICAgLy8kKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNyZXNldGZvcm1cIiwgZXZlbnRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07XG4qLyIsInZhciBQcm9kdWN0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHByb2R1Y3QpXG4gICAge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHByb2R1Y3QudGl0bGUgKyBcIiAtIEFaIEdhbWVzXCI7XG5cbiAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9zaW5nbGVfcHJvZHVjdC9zaW5nbGVfcHJvZHVjdC5odG1sJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCBwcm9kdWN0LmltYWdlKTtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3RpdGxlXCIpLmh0bWwocHJvZHVjdC50aXRsZSk7XG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19wcmljZVwiKS5odG1sKFwi4oKsIFwiICsgcHJvZHVjdC5wcmljZSk7XG5cbiAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3RfX2VhblwiKS5hcHBlbmQocHJvZHVjdC5lYW5fbnVtYmVyKTtcbiAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3RfX3BsYXRmb3JtXCIpLmFwcGVuZChwcm9kdWN0LnBsYXRmb3JtKTtcbiAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3RfX3B1Ymxpc2hlclwiKS5hcHBlbmQocHJvZHVjdC5wdWJsaXNoZXIpO1xuICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdF9fcGVnaVwiKS5hcHBlbmQocHJvZHVjdC5wZWdpX2FnZSk7XG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0X19nZW5yZVwiKS5hcHBlbmQocHJvZHVjdC5nZW5yZSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKHByb2R1Y3QucmVsZWFzZV9kYXRlKTtcblxuICAgICAgICAgICAgICAgIHZhciBtb250aHMgPSBbXCJqYW51YXJpXCIsIFwiZmVicnVhcmlcIiwgXCJtYWFydFwiLCBcImFwcmlsXCIsIFwibWVpXCIsIFwianVuaVwiLCBcImp1bGlcIiwgXCJhdWd1c3R1c1wiLCBcInNlcHRlbWJlclwiLCBcIm9rdG9iZXJcIiwgXCJub3ZlbWJlclwiLCBcImRlY2VtYmVyXCJdO1xuXG4gICAgICAgICAgICAgICAgJChcIi5saXByb2R1Y3RfX3JlbGVhc2VkYXRlXCIpLmFwcGVuZChkLmdldERheSgpICsgXCIgXCIgKyBtb250aHNbZC5nZXRNb250aCgpXSArIFwiIFwiICsgZC5nZXRGdWxsWWVhcigpKTtcblxuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fZGVzY3JcIikuaHRtbChwcm9kdWN0LmRlc2NyaXB0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiByZWdpc3RlciBmb3JtXG4gICAgICAgIC8vIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInXG5cbiAgICAgICAgLy8gaWYgdXNlciBwcmVzc2VzICdyZWdpc3RlcicsIHBlcmZvcm0gYWN0aW9uXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG59OyJdfQ==
