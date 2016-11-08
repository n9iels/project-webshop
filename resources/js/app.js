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
            url: "http:///84.84.245.29:243/user/login",
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
            url: "http://84.84.245.29:243/user/logout", //? http://84.84.245.29:243 = API-locatie?
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
var ProductsModel = function()
{
    function getPage(filter, callback)
    {
        $.ajax({
            url: "http://84.84.245.29:243/products?" + filter, //? http://84.84.245.29:243 = API-locatie?
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
        console.log(formData);
        $.ajax({
            url: "http://localhost:8080/user/register", //? http://84.84.245.29:243 = API-locatie?
            // url: "http://84.84.245.29:243/user/login", //? http://84.84.245.29:243 = API-locatie?
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                gender : formData["gender"],
                first_name : formData["voornaam"],
                //prefix : prefix,
                surname : formData["achternaam"],
                date_of_birth : formData["birth_date"],
                street : formData["straatnaam"],
                number : formData["huisnummer"],
                postal_code : formData["postcode"],
                city : formData["plaats"],
                //mobile_number : mobile_number,
                phone_number : formData["mobiel_nummer"],
                email : formData["e_mailadres"],
                password : formData["wachtwoord"],
                repeat_password : formData["wachtwoord2"],
                security_question : formData["security_question"],
                security_question_answer : formData["security_answer"]
            }),
            success: function (data) {
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

/*
var RegisterModel = function()
{
    function register(gender, first_name, prefix, surname, date_of_birth, street, number, postal_code, city, mobile_number, phone_number, email, password, repeat_password, security_question, security_question_answer, callback)
    {
        console.log(formData);
        $.ajax({
            url: "http://84.84.245.29:243/user/register", //? http://84.84.245.29:243 = API-locatie?
            // url: "http://84.84.245.29:243/user/login", //? http://84.84.245.29:243 = API-locatie?
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                gender : gender,
                first_name : first_name,
                prefix : prefix,
                surname : surname,
                date_of_birth : date_of_birth,
                street : street,
                number : number,
                postal_code : postal_code,
                city : city,
                mobile_number : mobile_number,
                phone_number : phone_number,
                email : email,
                password : password,
                repeat_password : repeat_password,
                security_question : security_question,
                security_question_answer : security_question_answer
            }),
            success: function (data) {
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
*/


var ResetPasswordModel = function()
{
    function resetpassword(formData, callback)
    {
        console.log(formData);
        $.ajax({
            url: "http://84.84.245.29:243/resetpassword", //? http://84.84.245.29:243 = API-locatie?
            type: "get",
            dataType: 'json',
            data: JSON.stringify({
                new_password : formData["wachtwoord"],
                repeat_password : formData["wachtwoord2"],
                email : formData["e-mailadres"],
                security_question : formData["security_question"],
                security_question_answer : formData["security_question_answer"]
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

/*
var ResetPasswordModel = function()
{
    function resetpassword(new_password, repeat_password, email, security_question, security_question_answer, callback)
    {
        $.ajax({
            url: "http://84.84.245.29:243/resetpassword", //? http://84.84.245.29:243 = API-locatie?
            type: "get",
            dataType: 'json',
            data: JSON.stringify({
                new_password : new_password,
                repeat_password : repeat_password,
                email : email,
                security_question : security_question,
                security_question_answer : security_question_answer
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
*/
var ProductModel = function(ean)
{
    function GetProductInfo(callback)
    {
        $.ajax({
            url: "http://84.84.245.29:243/products/" + ean, //http://localhost:8080/user/register
            type: "get",
            dataType: 'json',
            success: function (data) {
                // let controller resume with stuff
                callback(data[0]);
                console.log(data); //test
            },
            error: function (xhr, status, error) {
                console.log("something wrong with API, BITCH");



                //$("#regi_api_error_message").show();

                //$("#component").html("error function");
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
        //console.log("in actionPerformed"); //test

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
            ViewHelper.setView('views/register/after_register.html');
        });
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        // set view to register form
        ViewHelper.setView('views/register/register.html');

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
        $("#component").load('views/error/error.html');
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
        $("#component").load('views/login/login.html');
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
var ProductsViewHelper = function()
{
    // Change the view of the page
    function setView(viewData)
    {
        $("#component").html('<div class="col-12"><div class="col-3" id="filters"></div><div class="col-9" id="products"></div></div>');
        // load filters
        $("#filters").load('views/products/filters.html');

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
                $(product).find(".product__subtitle").append(value.genre +(" | ")+ value.pegi_age +(" | ")+ PlatformLogo(value.platform));
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
                return "<img src='https://maxcdn.icons8.com/Android_L/PNG/48/Logos/play_station_copyrighted-48.png' />";
                break;
            case "PC":
                return "<img src='https://maxcdn.icons8.com/Color/PNG/48/Operating_Systems/windows_logo_copyrighted-48.png' />";
                break;
            case "XBOX":
                return "<img src='https://maxcdn.icons8.com/Color/PNG/48/Logos/xbox-48.png' />";
                break;
            case "NINTENDO":
                return "<img src='https://maxcdn.icons8.com/Color/PNG/48/Gaming/nintendo-48.png' />";
                break;
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
        $("#component").on("change", "input[type=checkbox]", function(event) {
            $("#product_filter").submit();
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
var LogoutViewHelper = function()
{
    // Change the view of the page
    function setView()
    {
        $("#component").load('views/logout/logout.html');
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
        $("#component").load('views/page/page.html', function () {
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
var RegisterViewHelper = function()
{
    // Change the view of the page
    function setView()
    {
        $("#component").load('views/register/register.html');
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
var ProductViewHelper = function()
{
    // Change the view of the page
    function setView(viewData)
    {
        //$("#component").html('<div class="col-12"><div class="col-3" id="filters"></div><div class="col-9" id="products"></div></div>');

        loadProduct(viewData);
    }
/*
    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        // user fills in login form
        // user presses 'login'

        // if user presses 'login', perform action (make controller send email and password to API)
        $("#component").on("submit", "#loginform", action);
    }
*/
    function loadProduct(product)
    {
        $("#component").load('views/single_product/single_product.html', function () {

                $(".singleproduct__image img").attr("src", product.image);
                $(".singleproduct__title").html(product.title);
                $(".singleproduct__price").html("€ " + product.price);
                //li voor list
                $(".liproduct__ean").append(product.ean_number);
                $(".liproduct__platform").append(product.platform);
                var d = new Date(product.release_date);

                var months = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];

                $(".liproduct__releasedate").append(d.getDay() + " " + months[d.getMonth()] + " " + d.getFullYear());
                $(".liproduct__pegi").append(product.pegi_age);
                $(".liproduct__publisher").append(product.publisher);
                $(".liproduct__title").append(product.title);
                $(".liproduct__subtitle").append(product.subtitle);
                $(".liproduct__genre").append(product.genre);
                $(".liproduct__franchise").append(product.franchise);

                $(".singleproduct__descr").html(product.description);


                /*
                $(prod).find(".product__price").html(product.price);
                $(prod).find(".product__image img").attr("src", product.image);






                // Clone product
                var prod = $('<div>').append($('#product__list__item').clone());
                
                // Add product info
                $(prod).find(".product__title").html(product.title);
                $(prod).find(".product__price").html(value.price);
                $(prod).find(".product__image img").attr("src", value.image);
                
                // Determin what we have to do with the rows
                if (key % 4 == 0 && key == 0)
                {
                    $("#product__list").append("<div class='row'>" + prod.html());
                }
                else if (key % 4 == 0)
                {
                    $("#product__list").append("</div><div class='row'>" + prod.html());
                }
                else
                {
                    $("#product__list div.row").last().append(prod.html());
                }

            // Close the last row
            $("</div>").appendTo("#product__list");

            // Remove the first list item, because this item is always empty
            $("#product__list__item").first().remove();*/
        });
    }


    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        loadProduct : loadProduct
    }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlci5qcyIsImxvZ2luX21vZGVsLmpzIiwibG9nb3V0X21vZGVsLmpzIiwicHJvZHVjdHNfbW9kZWwuanMiLCJyZWdpc3Rlcl9tb2RlbC5qcyIsInJlc2V0cGFzc3dvcmRfbW9kZWwuanMiLCJzaW5nbGVfcHJvZHVjdF9tb2RlbC5qcyIsImVycm9yX2NvbnRyb2xsZXIuanMiLCJsb2dpbl9jb250cm9sbGVyLmpzIiwibG9nb3V0X2NvbnRyb2xsZXIuanMiLCJwYWdlX2NvbnRyb2xsZXIuanMiLCJwcm9kdWN0c19jb250cm9sbGVyLmpzIiwicmVnaXN0ZXJfY29udHJvbGxlci5qcyIsInJlc2V0cGFzc3dvcmRfY29udHJvbGxlci5qcyIsInNpbmdsZV9wcm9kdWN0X2NvbnRyb2xsZXIuanMiLCJlcnJvci9lcnJvcl92aWV3LmpzIiwibG9naW4vbG9naW5fdmlldy5qcyIsInByb2R1Y3RzL3Byb2R1Y3RzX3ZpZXcuanMiLCJsb2dvdXQvbG9nb3V0X3ZpZXcuanMiLCJwYWdlL3BhZ2Vfdmlldy5qcyIsInJlZ2lzdGVyL3JlZ2lzdGVyX3ZpZXcuanMiLCJyZXNldHBhc3N3b3JkL3Jlc2V0cGFzc3dvcmRfdmlldy5qcyIsInNpbmdsZV9wcm9kdWN0L3NpbmdsZV9wcm9kdWN0X3ZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUm91dGVyID0gZnVuY3Rpb24gKClcclxue1xyXG4gICAgYmFzZVVybCA9IFwicHJvamVjdC13ZWJzaG9wL1wiO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJvdXRlKHVybCwgaGlzdG9yeSlcclxuICAgIHtcclxuICAgICAgICBpZiAoaXNJbnRlcm5hbCh1cmwpID09IGZhbHNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHBhcnRpY2xlcyA9IGdldFBhcnRpY2xlcyh1cmwpO1xyXG5cclxuICAgICAgICBzd2l0Y2gocGFydGljbGVzWzBdKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBcIlwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiaW5kZXguaHRtbFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicHJvZHVjdHNcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBQcm9kdWN0c0NvbnRyb2xsZXIobmV3IFByb2R1Y3RzVmlld0hlbHBlcigpLCBuZXcgUHJvZHVjdHNNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInByb2R1Y3RcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBQcm9kdWN0Q29udHJvbGxlcihuZXcgUHJvZHVjdFZpZXdIZWxwZXIoKSwgbmV3IFByb2R1Y3RNb2RlbChwYXJ0aWNsZXNbMV0pKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJlZ2lzdGVyXCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgUmVnaXN0ZXJDb250cm9sbGVyKG5ldyBSZWdpc3RlclZpZXdIZWxwZXIoKSwgbmV3IFJlZ2lzdGVyTW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsb2dpblwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IExvZ2luQ29udHJvbGxlcihuZXcgTG9naW5WaWV3SGVscGVyKCksIG5ldyBMb2dpbk1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibG9nb3V0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgTG9nb3V0Q29udHJvbGxlcihuZXcgTG9nb3V0Vmlld0hlbHBlcigpLCBuZXcgTG9nb3V0TW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWdpc3RlclwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IFJlZ2lzdGVyQ29udHJvbGxlcihuZXcgUmVnaXN0ZXJWaWV3SGVscGVyKCksIG5ldyBSZWdpc3Rlck1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmVzZXRwYXNzd29yZFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IFJlc2V0UGFzc3dvcmRDb250cm9sbGVyKG5ldyBSZXNldFBhc3N3b3JkVmlld0hlbHBlcigpLCBuZXcgUmVzZXRQYXNzd29yZE1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yQ29udHJvbGxlcihuZXcgRXJyb3JWaWV3SGVscGVyKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhpc3RvcnkgIT0gZmFsc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodXJsID09IFwiXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IFwiaW5kZXguaHRtbFwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3cml0ZUhpc3Rvcnkoe30sIFwiQS1aIEdhbWVzXCIsIHVybClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNJbnRlcm5hbCh1cmwpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKFwiaHR0cFwiKSAhPSAtMSB8fCB1cmwuaW5kZXhPZihcImh0dHBzXCIpICE9IC0xIHx8IHVybC5pbmRleE9mKFwid3d3XCIpICE9IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdXJsO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UGFydGljbGVzKHVybClcclxuICAgIHtcclxuICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IC9cclxuICAgICAgICBpZiAodXJsLmluZGV4T2YoXCIvXCIpID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBiYXNlIHVybCBzZXQsIHJlbW92ZSB0aGUgYmFzZSB1cmxcclxuICAgICAgICBpZiAodGhpcy5iYXNlVXJsICE9IG51bGwgJiYgdXJsLmluZGV4T2YodGhpcy5iYXNlVXJsKSAhPSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YodGhpcy5iYXNlVXJsKSArIHRoaXMuYmFzZVVybC5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVybC5zcGxpdCgvXFwvKC4rKT8vKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdyaXRlSGlzdG9yeShvYmplY3QsIHRpdGxlLCB1cmwpXHJcbiAgICB7XHJcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG9iamVjdCwgdGl0bGUsIHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByb3V0ZTogcm91dGVcclxuICAgIH1cclxufSIsInZhciBMb2dpbk1vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiBsb2dpbihlbWFpbCwgcGFzc3dvcmQsIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vLzg0Ljg0LjI0NS4yOToyNDMvdXNlci9sb2dpblwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgZW1haWwgOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkIDogcGFzc3dvcmRcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBwdXQgdG9rZW4gaW4gY29va2llXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWU9J2FjY2Vzc190b2tlbj0nICsgZGF0YS5hY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWU9J3VzZXJfaWQ9JyArIGRhdGEudXNlcl9pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzaG93ICdub3QgZ29vZCBlbWFpbCBvciBwYXNzd29yZCB0byB1c2VyJ1xyXG4gICAgICAgICAgICAgICAgJChcIiNlcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyQoXCIjY29tcG9uZW50XCIpLmh0bWwoXCJlcnJvciBmdW5jdGlvblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxvZ2luOiBsb2dpblxyXG4gICAgfVxyXG59OyIsInZhciBMb2dvdXRNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gbG9nb3V0KGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vODQuODQuMjQ1LjI5OjI0My91c2VyL2xvZ291dFwiLCAvLz8gaHR0cDovLzg0Ljg0LjI0NS4yOToyNDMgPSBBUEktbG9jYXRpZT9cclxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHVzZXJfaWQ6IGdldENvb2tpZShcInVzZXJfaWRcIilcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llPSdhY2Nlc3NfdG9rZW49JztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZT0ndXNlcl9pZD0nO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzaG93ICdub3QgZ29vZCBlbWFpbCBvciBwYXNzd29yZCB0byB1c2VyJ1xyXG4gICAgICAgICAgICAgICAgJChcIiNlcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyQoXCIjY29tcG9uZW50XCIpLmh0bWwoXCJlcnJvciBmdW5jdGlvblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRDb29raWUobmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldLnNwbGl0KFwiPVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29va2llWzBdLnRyaW0oKSA9PSBuYW1lKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb29raWVbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9nb3V0OiBsb2dvdXRcclxuICAgIH1cclxufTsiLCJ2YXIgUHJvZHVjdHNNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZShmaWx0ZXIsIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vODQuODQuMjQ1LjI5OjI0My9wcm9kdWN0cz9cIiArIGZpbHRlciwgLy8/IGh0dHA6Ly84NC44NC4yNDUuMjk6MjQzID0gQVBJLWxvY2F0aWU/XHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCJ2aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0UGFnZTogZ2V0UGFnZVxyXG4gICAgfVxyXG59OyIsInZhciBSZWdpc3Rlck1vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiByZWdpc3Rlcihmb3JtRGF0YSwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwODAvdXNlci9yZWdpc3RlclwiLCAvLz8gaHR0cDovLzg0Ljg0LjI0NS4yOToyNDMgPSBBUEktbG9jYXRpZT9cclxuICAgICAgICAgICAgLy8gdXJsOiBcImh0dHA6Ly84NC44NC4yNDUuMjk6MjQzL3VzZXIvbG9naW5cIiwgLy8/IGh0dHA6Ly84NC44NC4yNDUuMjk6MjQzID0gQVBJLWxvY2F0aWU/XHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBnZW5kZXIgOiBmb3JtRGF0YVtcImdlbmRlclwiXSxcclxuICAgICAgICAgICAgICAgIGZpcnN0X25hbWUgOiBmb3JtRGF0YVtcInZvb3JuYWFtXCJdLFxyXG4gICAgICAgICAgICAgICAgLy9wcmVmaXggOiBwcmVmaXgsXHJcbiAgICAgICAgICAgICAgICBzdXJuYW1lIDogZm9ybURhdGFbXCJhY2h0ZXJuYWFtXCJdLFxyXG4gICAgICAgICAgICAgICAgZGF0ZV9vZl9iaXJ0aCA6IGZvcm1EYXRhW1wiYmlydGhfZGF0ZVwiXSxcclxuICAgICAgICAgICAgICAgIHN0cmVldCA6IGZvcm1EYXRhW1wic3RyYWF0bmFhbVwiXSxcclxuICAgICAgICAgICAgICAgIG51bWJlciA6IGZvcm1EYXRhW1wiaHVpc251bW1lclwiXSxcclxuICAgICAgICAgICAgICAgIHBvc3RhbF9jb2RlIDogZm9ybURhdGFbXCJwb3N0Y29kZVwiXSxcclxuICAgICAgICAgICAgICAgIGNpdHkgOiBmb3JtRGF0YVtcInBsYWF0c1wiXSxcclxuICAgICAgICAgICAgICAgIC8vbW9iaWxlX251bWJlciA6IG1vYmlsZV9udW1iZXIsXHJcbiAgICAgICAgICAgICAgICBwaG9uZV9udW1iZXIgOiBmb3JtRGF0YVtcIm1vYmllbF9udW1tZXJcIl0sXHJcbiAgICAgICAgICAgICAgICBlbWFpbCA6IGZvcm1EYXRhW1wiZV9tYWlsYWRyZXNcIl0sXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA6IGZvcm1EYXRhW1wid2FjaHR3b29yZFwiXSxcclxuICAgICAgICAgICAgICAgIHJlcGVhdF9wYXNzd29yZCA6IGZvcm1EYXRhW1wid2FjaHR3b29yZDJcIl0sXHJcbiAgICAgICAgICAgICAgICBzZWN1cml0eV9xdWVzdGlvbiA6IGZvcm1EYXRhW1wic2VjdXJpdHlfcXVlc3Rpb25cIl0sXHJcbiAgICAgICAgICAgICAgICBzZWN1cml0eV9xdWVzdGlvbl9hbnN3ZXIgOiBmb3JtRGF0YVtcInNlY3VyaXR5X2Fuc3dlclwiXVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNob3cgJ2VtYWlsIGFsIGdlYm9uZGVuIGFhbiBlZW4gYWNjb3VudD8nXHJcbiAgICAgICAgICAgICAgICAkKFwiI3JlZ2lfYXBpX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgLy8kKFwiI2NvbXBvbmVudFwiKS5odG1sKFwiZXJyb3IgZnVuY3Rpb25cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZWdpc3RlcjogcmVnaXN0ZXJcclxuICAgIH1cclxufTtcclxuXHJcbi8qXHJcbnZhciBSZWdpc3Rlck1vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiByZWdpc3RlcihnZW5kZXIsIGZpcnN0X25hbWUsIHByZWZpeCwgc3VybmFtZSwgZGF0ZV9vZl9iaXJ0aCwgc3RyZWV0LCBudW1iZXIsIHBvc3RhbF9jb2RlLCBjaXR5LCBtb2JpbGVfbnVtYmVyLCBwaG9uZV9udW1iZXIsIGVtYWlsLCBwYXNzd29yZCwgcmVwZWF0X3Bhc3N3b3JkLCBzZWN1cml0eV9xdWVzdGlvbiwgc2VjdXJpdHlfcXVlc3Rpb25fYW5zd2VyLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly84NC44NC4yNDUuMjk6MjQzL3VzZXIvcmVnaXN0ZXJcIiwgLy8/IGh0dHA6Ly84NC44NC4yNDUuMjk6MjQzID0gQVBJLWxvY2F0aWU/XHJcbiAgICAgICAgICAgIC8vIHVybDogXCJodHRwOi8vODQuODQuMjQ1LjI5OjI0My91c2VyL2xvZ2luXCIsIC8vPyBodHRwOi8vODQuODQuMjQ1LjI5OjI0MyA9IEFQSS1sb2NhdGllP1xyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgZ2VuZGVyIDogZ2VuZGVyLFxyXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZSA6IGZpcnN0X25hbWUsXHJcbiAgICAgICAgICAgICAgICBwcmVmaXggOiBwcmVmaXgsXHJcbiAgICAgICAgICAgICAgICBzdXJuYW1lIDogc3VybmFtZSxcclxuICAgICAgICAgICAgICAgIGRhdGVfb2ZfYmlydGggOiBkYXRlX29mX2JpcnRoLFxyXG4gICAgICAgICAgICAgICAgc3RyZWV0IDogc3RyZWV0LFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyIDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcG9zdGFsX2NvZGUgOiBwb3N0YWxfY29kZSxcclxuICAgICAgICAgICAgICAgIGNpdHkgOiBjaXR5LFxyXG4gICAgICAgICAgICAgICAgbW9iaWxlX251bWJlciA6IG1vYmlsZV9udW1iZXIsXHJcbiAgICAgICAgICAgICAgICBwaG9uZV9udW1iZXIgOiBwaG9uZV9udW1iZXIsXHJcbiAgICAgICAgICAgICAgICBlbWFpbCA6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQgOiBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIHJlcGVhdF9wYXNzd29yZCA6IHJlcGVhdF9wYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIHNlY3VyaXR5X3F1ZXN0aW9uIDogc2VjdXJpdHlfcXVlc3Rpb24sXHJcbiAgICAgICAgICAgICAgICBzZWN1cml0eV9xdWVzdGlvbl9hbnN3ZXIgOiBzZWN1cml0eV9xdWVzdGlvbl9hbnN3ZXJcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzaG93ICdlbWFpbCBhbCBnZWJvbmRlbiBhYW4gZWVuIGFjY291bnQ/J1xyXG4gICAgICAgICAgICAgICAgJChcIiNyZWdpX2FwaV9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIC8vJChcIiNjb21wb25lbnRcIikuaHRtbChcImVycm9yIGZ1bmN0aW9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVnaXN0ZXI6IHJlZ2lzdGVyXHJcbiAgICB9XHJcbn07XHJcbiovXHJcblxyXG4iLCJ2YXIgUmVzZXRQYXNzd29yZE1vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiByZXNldHBhc3N3b3JkKGZvcm1EYXRhLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly84NC44NC4yNDUuMjk6MjQzL3Jlc2V0cGFzc3dvcmRcIiwgLy8/IGh0dHA6Ly84NC44NC4yNDUuMjk6MjQzID0gQVBJLWxvY2F0aWU/XHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIG5ld19wYXNzd29yZCA6IGZvcm1EYXRhW1wid2FjaHR3b29yZFwiXSxcclxuICAgICAgICAgICAgICAgIHJlcGVhdF9wYXNzd29yZCA6IGZvcm1EYXRhW1wid2FjaHR3b29yZDJcIl0sXHJcbiAgICAgICAgICAgICAgICBlbWFpbCA6IGZvcm1EYXRhW1wiZS1tYWlsYWRyZXNcIl0sXHJcbiAgICAgICAgICAgICAgICBzZWN1cml0eV9xdWVzdGlvbiA6IGZvcm1EYXRhW1wic2VjdXJpdHlfcXVlc3Rpb25cIl0sXHJcbiAgICAgICAgICAgICAgICBzZWN1cml0eV9xdWVzdGlvbl9hbnN3ZXIgOiBmb3JtRGF0YVtcInNlY3VyaXR5X3F1ZXN0aW9uX2Fuc3dlclwiXVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8kKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwidmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgICAgICQoXCIjcmVzZXRfcGFzc3dvcmRfYXBpX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzZXRwYXNzd29yZDogcmVzZXRwYXNzd29yZFxyXG4gICAgfVxyXG59O1xyXG5cclxuLypcclxudmFyIFJlc2V0UGFzc3dvcmRNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gcmVzZXRwYXNzd29yZChuZXdfcGFzc3dvcmQsIHJlcGVhdF9wYXNzd29yZCwgZW1haWwsIHNlY3VyaXR5X3F1ZXN0aW9uLCBzZWN1cml0eV9xdWVzdGlvbl9hbnN3ZXIsIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vODQuODQuMjQ1LjI5OjI0My9yZXNldHBhc3N3b3JkXCIsIC8vPyBodHRwOi8vODQuODQuMjQ1LjI5OjI0MyA9IEFQSS1sb2NhdGllP1xyXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBuZXdfcGFzc3dvcmQgOiBuZXdfcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICByZXBlYXRfcGFzc3dvcmQgOiByZXBlYXRfcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICBlbWFpbCA6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgc2VjdXJpdHlfcXVlc3Rpb24gOiBzZWN1cml0eV9xdWVzdGlvbixcclxuICAgICAgICAgICAgICAgIHNlY3VyaXR5X3F1ZXN0aW9uX2Fuc3dlciA6IHNlY3VyaXR5X3F1ZXN0aW9uX2Fuc3dlclxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8kKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwidmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgICAgICQoXCIjcmVzZXRfcGFzc3dvcmRfYXBpX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzZXRwYXNzd29yZDogcmVzZXRwYXNzd29yZFxyXG4gICAgfVxyXG59O1xyXG4qLyIsInZhciBQcm9kdWN0TW9kZWwgPSBmdW5jdGlvbihlYW4pXHJcbntcclxuICAgIGZ1bmN0aW9uIEdldFByb2R1Y3RJbmZvKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vODQuODQuMjQ1LjI5OjI0My9wcm9kdWN0cy9cIiArIGVhbiwgLy9odHRwOi8vbG9jYWxob3N0OjgwODAvdXNlci9yZWdpc3RlclxyXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGNvbnRyb2xsZXIgcmVzdW1lIHdpdGggc3R1ZmZcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbMF0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7IC8vdGVzdFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb21ldGhpbmcgd3Jvbmcgd2l0aCBBUEksIEJJVENIXCIpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8kKFwiI3JlZ2lfYXBpX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vJChcIiNjb21wb25lbnRcIikuaHRtbChcImVycm9yIGZ1bmN0aW9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgR2V0UHJvZHVjdEluZm86IEdldFByb2R1Y3RJbmZvXHJcbiAgICB9XHJcbn07IiwidmFyIEVycm9yQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIpXHJcbntcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIExvZ2luQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gTG9vcCB0cm91Z2ggdGhlIGZvcm0gZGF0YSBhbmQgZ2V0IGFsbCBmaWVsZHNcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcclxuICAgICAgICAkLmVhY2goJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbiAoaSwgZmllbGQpIHtcclxuICAgICAgICAgICAgZm9ybURhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgZW1haWwgYW5kIHBhc3N3b3JkIHRvIEFQSVxyXG4gICAgICAgIE1vZGVsLmxvZ2luKGZvcm1EYXRhLmVtYWlsLCBmb3JtRGF0YS5wYXNzd29yZCwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gc2hvdyB1aXRsb2dnZW4gYnV0dG9uXHJcbiAgICAgICAgICAgICQoXCIjaW5sb2dnZW5fdGV4dFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIjdWl0bG9nZ2VuX3RleHRcIikuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgLy8gV2VlcmdlZWYgZWVuIGFuZGVyZSBwYWdpbmEgZ2ViYXNzZWVyZCBvcCAnYWRtaW4nIG9mICdyZWdpc3RlcmVkIHVzZXInXHJcbiAgICAgICAgICAgIG5ldyBQYWdlQ29udHJvbGxlcihuZXcgUGFnZVZpZXdIZWxwZXIoKSwgbmV3IFBhZ2VNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICAvLyBzZXQgdmlldyB0byBsb2dpbiBmb3JtXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCk7XHJcblxyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gZW1haWwgYW5kIHBhc3N3b3JkOyBjbGlja3MgJ2xvZ2luJzogVklFVyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIExvZ291dENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmxvZ291dChmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBzaG93IHVpdGxvZ2dlbiBidXR0b25cclxuICAgICAgICAgICAgJChcIiNpbmxvZ2dlbl90ZXh0XCIpLnNob3coKTtcclxuICAgICAgICAgICAgJChcIiN1aXRsb2dnZW5fdGV4dFwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzZXQgdmlldyB0byBsb2dpbiBmb3JtXHJcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBlbWFpbCBhbmQgcGFzc3dvcmQ7IGNsaWNrcyAnbG9naW4nOiBWSUVXIG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgUGFnZUNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsID0gbW9kZWw7XHJcbiAgICB2YXIgVmlldyAgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBWaWV3LnNldFZpZXcoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBWaWV3LnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBQcm9kdWN0c0NvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZSgpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShcIlwiLCBmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbHRlclByb2R1Y3RzKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybSAocGFnZSByZWxvYWQpXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyIGZpbHRlcnMgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpO1xyXG4gICAgICAgIE1vZGVsLmdldFBhZ2UoZmlsdGVycywgZnVuY3Rpb24gKGRhdGEpIHsgVmlld0hlbHBlci5sb2FkUHJvZHVjdHMoZGF0YSk7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihnZXRQYWdlKTtcclxuICAgICAgICBWaWV3SGVscGVyLnNldEZpbHRlckxpc3RlbmVyKGZpbHRlclByb2R1Y3RzKTtcclxuICAgICAgICAvLyBuZXcgYWN0aW9uIHdhbm5lciBlciBvcCBmaWx0ZXIgd29yZHQgZ2VkcnVrdFxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgUmVnaXN0ZXJDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZCgpXHJcbiAgICB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImluIGFjdGlvblBlcmZvcm1lZFwiKTsgLy90ZXN0XHJcblxyXG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IGVycm9yIG1lc3NhZ2VzXHJcbiAgICAgICAgJChcIiNyZWdpX2FwaV9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgLy8gcHV0IGZvcm0gZmllbGRzIGluIGphdmFzY3JpcHQgT2JqZWN0XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XHJcblxyXG4gICAgICAgICQuZWFjaCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uIChpLCBmaWVsZCkge1xyXG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBmaXggZGF0ZSBvZiBiaXJ0aCAoQVBJIGV4cGVjdHMgY2VydGFpbiBmb3JtYXQpXHJcbiAgICAgICAgZm9ybURhdGFbXCJiaXJ0aF9kYXRlXCJdID0gZm9ybURhdGEuamFhciArIFwiLVwiICsgZm9ybURhdGEubWFhbmQgKyBcIi1cIiArIGZvcm1EYXRhLmRhZztcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciBhbnkgbWFuZGF0b3J5IGZpZWxkIGlzIGxlZnQgZW1wdHkgYnkgdXNlciBhbmRcclxuICAgICAgICAvLyBpZiBzbywgYWJvcnQgZnVuY3Rpb25cclxuICAgICAgICB2YXIgbWFuZGF0b3J5RmllbGRNaXNzZXMgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbWFuZGF0b3J5RmllbGRzID0gW1widm9vcm5hYW1cIiwgXCJhY2h0ZXJuYWFtXCIsIFwicG9zdGNvZGVcIiwgXCJodWlzbnVtbWVyXCIsIFwiZV9tYWlsYWRyZXNcIiwgXCJ3YWNodHdvb3JkXCIsIFwid2FjaHR3b29yZDJcIiwgXCJzZWN1cml0eV9hbnN3ZXJcIl07IC8vZHJvcGRvd25zIChsaWtlIGdlbmRlcikgYXJlIGFsd2F5cyBmaWxsZWQgaW4sIHNvIGRvbid0IHB1dCBpbiB0aGlzIGxpc3RcclxuXHJcbiAgICAgICAgLy8gKHJlc2V0IGFsbCBmaWVsZHMgdG8gJ3ZhbGlkJyBiZWNhdXNlIHVzZXIgbWF5IGhhdmUgZmlsbGVkIGluIGZpZWxkcyBzaW5jZVxyXG4gICAgICAgIC8vIHRoZSBwcmV2aW91cyB0aW1lIHRoaXMgZnVuY3Rpb24gd2FzIGNhbGxlZClcclxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcclxuICAgICAgICAgICAgJChcIiNcIiArIG1hbkZpZWxkKS5yZW1vdmVDbGFzcyhcImludmFsaWRcIik7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJC5lYWNoKG1hbmRhdG9yeUZpZWxkcywgZnVuY3Rpb24gKGksIG1hbkZpZWxkKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtRGF0YVttYW5GaWVsZF0gPT0gXCJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJChcIiNcIiArIG1hbkZpZWxkKS5hZGRDbGFzcyhcImludmFsaWRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5RmllbGRNaXNzZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaWYgYSBtYW5kYXRvcnkgZmllbGQgaXMgZW1wdHksIHNob3cgZXJyb3IgbWVzc2FnZSB0byB1c2VyIGFuZCBhYm9ydCBmdW5jdGlvblxyXG4gICAgICAgIGlmIChtYW5kYXRvcnlGaWVsZE1pc3NlcylcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdG9wIG9mIHBhZ2Ugc28gdGhhdCB1c2VycyBzZWUgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgICAvLyBzaG93IG1lc3NhZ2UgXCJzb21ldGhpbmcgaXMgbm90IGZpbGxlZCBpblwiXHJcbiAgICAgICAgICAgICQoXCIjcmVnaXN0ZXJfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHBhc3N3b3Jkc05vdElkZW50aWNhbCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoZm9ybURhdGEud2FjaHR3b29yZCAhPSBmb3JtRGF0YS53YWNodHdvb3JkMikgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXNzd29yZHNOb3RJZGVudGljYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgJChcIiN3YWNodHdvb3JkXCIpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcclxuICAgICAgICAgICAgJChcIiN3YWNodHdvb3JkMlwiKS5hZGRDbGFzcyhcImludmFsaWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhYm9ydCBmdW5jdGlvbiBpZiBtYW5kYXRvcnkgZmllbGQgbWlzc2VzIG9yIHBhc3N3b3JkcyBub3QgaWRlbnRpY2FsXHJcbiAgICAgICAgaWYgKG1hbmRhdG9yeUZpZWxkTWlzc2VzIHx8IHBhc3N3b3Jkc05vdElkZW50aWNhbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIHVzZXIgaW5mbyB0byBBUElcclxuICAgICAgICBNb2RlbC5yZWdpc3Rlcihmb3JtRGF0YSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCd2aWV3cy9yZWdpc3Rlci9hZnRlcl9yZWdpc3Rlci5odG1sJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICAvLyBzZXQgdmlldyB0byByZWdpc3RlciBmb3JtXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCd2aWV3cy9yZWdpc3Rlci9yZWdpc3Rlci5odG1sJyk7XHJcblxyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gcmVnaXN0ZXIgaW5mbzsgY2xpY2tzICdyZWdpc3Rlcic6IHZpZXcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XHJcblxyXG4gICAgICAgIC8vIGVtYWlsIGFuZCBwYXNzd29yZCBhcmUgc2VuZCB0byBBUEk7IEFQSSBjaGVja3MgaWYgZW1haWwgYWxyZWFkeSBleGlzdHMgKGFuZCB3aGV0aGVyIHBhc3N3b3JkIGlzIGNvcnJlY3Q/KSBcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIFJlc2V0UGFzc3dvcmRDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gYWN0aW9uUGVyZm9ybWVkXCIpOyAvL3Rlc3RcclxuXHJcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZXNcclxuICAgICAgICAkKFwiI3Jlc2V0X3Bhc3N3b3JkX2FwaV9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgLy8gcHV0IGZvcm0gZmllbGRzIGluIGphdmFzY3JpcHQgT2JqZWN0XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XHJcblxyXG4gICAgICAgICQuZWFjaCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uIChpLCBmaWVsZCkge1xyXG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIGFueSBtYW5kYXRvcnkgZmllbGQgaXMgbGVmdCBlbXB0eSBieSB1c2VyIGFuZFxyXG4gICAgICAgIC8vIGlmIHNvLCBhYm9ydCBmdW5jdGlvblxyXG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZHMgPSBbXCJ3YWNodHdvb3JkXCIsIFwid2FjaHR3b29yZDJcIiwgXCJlX21haWxhZHJlc1wiLFwic2VjdXJpdHlfYW5zd2VyXCJdOyAvL2Ryb3Bkb3ducyAobGlrZSBzZWN1cml0eV9xdWVzdGlvbl9hbnN3ZXIpIGFyZSBhbHdheXMgZmlsbGVkIGluLCBzbyBkb24ndCBwdXQgaW4gdGhpcyBsaXN0XHJcblxyXG4gICAgICAgIC8vIChyZXNldCBhbGwgZmllbGRzIHRvICd2YWxpZCcgYmVjYXVzZSB1c2VyIG1heSBoYXZlIGZpbGxlZCBpbiBmaWVsZHMgc2luY2VcclxuICAgICAgICAvLyB0aGUgcHJldmlvdXMgdGltZSB0aGlzIGZ1bmN0aW9uIHdhcyBjYWxsZWQpXHJcbiAgICAgICAgJC5lYWNoKG1hbmRhdG9yeUZpZWxkcywgZnVuY3Rpb24gKGksIG1hbkZpZWxkKSB7XHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBtYW5GaWVsZCkucmVtb3ZlQ2xhc3MoXCJpbnZhbGlkXCIpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQuZWFjaChtYW5kYXRvcnlGaWVsZHMsIGZ1bmN0aW9uIChpLCBtYW5GaWVsZCkge1xyXG4gICAgICAgICAgICBpZiAoZm9ybURhdGFbbWFuRmllbGRdID09IFwiXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBtYW5GaWVsZCkuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeUZpZWxkTWlzc2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGlmIGEgbWFuZGF0b3J5IGZpZWxkIGlzIGVtcHR5LCBzaG93IGVycm9yIG1lc3NhZ2UgdG8gdXNlciBhbmQgYWJvcnQgZnVuY3Rpb25cclxuICAgICAgICBpZiAobWFuZGF0b3J5RmllbGRNaXNzZXMpXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgLy8gc2Nyb2xsIHRvIHRvcCBvZiBwYWdlIHNvIHRoYXQgdXNlcnMgc2VlIG1lc3NhZ2UgXCJzb21ldGhpbmcgaXMgbm90IGZpbGxlZCBpblwiXHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgICAgLy8gc2hvdyBtZXNzYWdlIFwic29tZXRoaW5nIGlzIG5vdCBmaWxsZWQgaW5cIlxyXG4gICAgICAgICAgICAkKFwiI3Jlc2V0X2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBwYXNzd29yZHNOb3RJZGVudGljYWwgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGZvcm1EYXRhLndhY2h0d29vcmQgIT0gZm9ybURhdGEud2FjaHR3b29yZDIpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFzc3dvcmRzTm90SWRlbnRpY2FsID0gdHJ1ZTtcclxuICAgICAgICAgICAgJChcIiN3dzJfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIjd2FjaHR3b29yZFwiKS5hZGRDbGFzcyhcImludmFsaWRcIik7XHJcbiAgICAgICAgICAgICQoXCIjd2FjaHR3b29yZDJcIikuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYWJvcnQgZnVuY3Rpb24gaWYgbWFuZGF0b3J5IGZpZWxkIG1pc3NlcyBvciBwYXNzd29yZHMgbm90IGlkZW50aWNhbFxyXG4gICAgICAgIGlmIChtYW5kYXRvcnlGaWVsZE1pc3NlcyB8fCBwYXNzd29yZHNOb3RJZGVudGljYWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBsZXQgbW9kZWwgc2VuZCB1c2VyIGluZm8gdG8gQVBJXHJcbiAgICAgICAgTW9kZWwucmVzZXRwYXNzd29yZChmb3JtRGF0YSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCd2aWV3cy9yZXNldHBhc3N3b3JkL2FmdGVyX3Jlc2V0Lmh0bWwnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAgeyAgICAgIFxyXG4gICAgICAgIC8vIHNldCB2aWV3IHRvIHJlc2V0IHBhc3N3b3JkIGZvcm1cclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJ3ZpZXdzL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5odG1sJyk7XHJcblxyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcclxuICAgICAgICAvLyBuZXcgYWN0aW9uIHdhbm5lciBlciBvcCBmaWx0ZXIgd29yZHQgZ2VkcnVrdFxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTtcclxuXHJcblxyXG5cclxuXHJcbiIsInZhciBQcm9kdWN0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyBMb29wIHRyb3VnaCB0aGUgZm9ybSBkYXRhIGFuZCBnZXQgYWxsIGZpZWxkc1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IHt9O1xyXG4gICAgICAgICQuZWFjaCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uIChpLCBmaWVsZCkge1xyXG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBsZXQgbW9kZWwgc2VuZCBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gQVBJXHJcbiAgICAgICAgTW9kZWwubG9naW4oZm9ybURhdGEuZW1haWwsIGZvcm1EYXRhLnBhc3N3b3JkLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBzaG93IHVpdGxvZ2dlbiBidXR0b25cclxuICAgICAgICAgICAgJChcIiNpbmxvZ2dlbl90ZXh0XCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIiN1aXRsb2dnZW5fdGV4dFwiKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBXZWVyZ2VlZiBlZW4gYW5kZXJlIHBhZ2luYSBnZWJhc3NlZXJkIG9wICdhZG1pbicgb2YgJ3JlZ2lzdGVyZWQgdXNlcidcclxuICAgICAgICAgICAgbmV3IFBhZ2VDb250cm9sbGVyKG5ldyBQYWdlVmlld0hlbHBlcigpLCBuZXcgUGFnZU1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBsZXQgdmlldyBzaG93IHZpZXcgd2l0aCBkYXRhIGZyb20gZGF0YWJhc2VcclxuICAgIGZ1bmN0aW9uIHNob3dWaWV3KGRhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgdmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gd2hhdCBoYXBwZW5zOlxyXG4gICAgICAgIC8vIDEpIHVzZXIgY2xpY2tzIG9uIGEgcHJvZHVjdCBcclxuICAgICAgICAvLyAyKSBtb2RlbCBnZXRzIGluZm8gb2YgdGhlIHByb2R1Y3RcclxuICAgICAgICAvLyAzKSBzeXN0ZW0gcHV0cyBpbmZvIGluIGh0bWxcclxuICAgICAgICAvLyA0KSB2aWV3IHNob3dzIGluZm9cclxuXHJcbiAgICAgICAgLy8gMikgbW9kZWwgZ2V0cyBpbmZvIG9mIHRoZSBwcm9kdWN0XHJcbiAgICAgICAgLy8gMykgc3lzdGVtIHB1dHMgaW5mbyBpbiBodG1sXHJcbiAgICAgICAgbW9kZWwuR2V0UHJvZHVjdEluZm8oc2hvd1ZpZXcpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cclxuICAgICAgICAvL1ZpZXdIZWxwZXIuc2V0VmlldygpO1xyXG5cclxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGVtYWlsIGFuZCBwYXNzd29yZDsgY2xpY2tzICdsb2dpbic6IFZJRVcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcclxuICAgICAgICAvL1ZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluLFxyXG4gICAgICAgIHNob3dWaWV3IDogc2hvd1ZpZXdcclxuICAgIH1cclxufTsiLCJ2YXIgRXJyb3JWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJ3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWwnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBY3Rpb25MaXN0ZW5lciB0aGF0IGV4ZWN1dGVzIGFjdGlvbnMgb24gc3BlY2lmaWMgZXZlbnRzXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihldmVudEhhbmRsZXIpXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxyXG4gICAgfVxyXG59OyIsInZhciBMb2dpblZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0VmlldygpXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgndmlld3MvbG9naW4vbG9naW4uaHRtbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gbG9naW4gZm9ybVxyXG4gICAgICAgIC8vIHVzZXIgcHJlc3NlcyAnbG9naW4nXHJcblxyXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyAnbG9naW4nLCBwZXJmb3JtIGFjdGlvbiAobWFrZSBjb250cm9sbGVyIHNlbmQgZW1haWwgYW5kIHBhc3N3b3JkIHRvIEFQSSlcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNsb2dpbmZvcm1cIiwgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxyXG4gICAgfVxyXG59OyIsInZhciBQcm9kdWN0c1ZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcclxuICAgIHtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5odG1sKCc8ZGl2IGNsYXNzPVwiY29sLTEyXCI+PGRpdiBjbGFzcz1cImNvbC0zXCIgaWQ9XCJmaWx0ZXJzXCI+PC9kaXY+PGRpdiBjbGFzcz1cImNvbC05XCIgaWQ9XCJwcm9kdWN0c1wiPjwvZGl2PjwvZGl2PicpO1xyXG4gICAgICAgIC8vIGxvYWQgZmlsdGVyc1xyXG4gICAgICAgICQoXCIjZmlsdGVyc1wiKS5sb2FkKCd2aWV3cy9wcm9kdWN0cy9maWx0ZXJzLmh0bWwnKTtcclxuXHJcbiAgICAgICAgLy8gbG9hZCBwcm9kdWN0c1xyXG4gICAgICAgIGxvYWRQcm9kdWN0cyh2aWV3RGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZFByb2R1Y3RzKHZpZXdEYXRhKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIjcHJvZHVjdHNcIikubG9hZCgndmlld3MvcHJvZHVjdHMvcHJvZHVjdHMuaHRtbCcsIGZ1bmN0aW9uICgpIHsgLy8gd2FhciBpZCA9ICdjb21wb25lbnQnIGRvZSAubG9hZC4uLi4uLlxyXG4gICAgICAgICAgICAkLmVhY2godmlld0RhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIENsb25lIHByb2R1Y3RcclxuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gJCgnPGRpdj4nKS5hcHBlbmQoJCgnI3Byb2R1Y3RfX2xpc3RfX2l0ZW0nKS5jbG9uZSgpKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3N1YnRpdGxlXCIpLmFwcGVuZCh2YWx1ZS5nZW5yZSArKFwiIHwgXCIpKyB2YWx1ZS5wZWdpX2FnZSArKFwiIHwgXCIpKyBQbGF0Zm9ybUxvZ28odmFsdWUucGxhdGZvcm0pKTtcclxuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19kZXNjcmlwdGlvblwiKS5odG1sKEN1dFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpK3ZhbHVlLnByaWNlKTtcclxuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIiNidXR0b25zX19pbmZvXCIpLmF0dHIoXCJocmVmXCIsIFwicHJvZHVjdC9cIiArIHZhbHVlLmVhbl9udW1iZXIpXHJcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgdmFsdWUuaW1hZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5hcHBlbmQocHJvZHVjdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxyXG4gICAgICAgICAgICAkKFwiI3Byb2R1Y3RfX2xpc3RfX2l0ZW1cIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL1Nob3cgbW9yZS9sZXNzXHJcbiAgICBmdW5jdGlvbiBDdXRTdHJpbmcodGV4dCl7XHJcbiAgICAgICAgdmFyIFNob3dBbW91bnQgPSA1MDtcclxuICAgICAgICB2YXIgV29yZHNBcnJheSA9IHRleHQuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGlmKFdvcmRzQXJyYXkubGVuZ3RoPlNob3dBbW91bnQpe1xyXG4gICAgICAgICAgICB2YXIgU2hvcnRTdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IoaT0wOyBpPFNob3dBbW91bnQ7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBTaG9ydFN0cmluZyArPSBXb3Jkc0FycmF5W2ldICsgXCIgXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFNob3J0U3RyaW5nK1wiLi4uXCI7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy9QbGF0Zm9ybSBMb2dvJ3NcclxuICAgIGZ1bmN0aW9uIFBsYXRmb3JtTG9nbyhwbGF0Zm9ybW5hYW0pXHJcbiAgICB7XHJcbiAgICAgICAgcGxhdGZvcm1uYWFtID0gcGxhdGZvcm1uYWFtLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgc3dpdGNoIChwbGF0Zm9ybW5hYW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIFwiUFM0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0naHR0cHM6Ly9tYXhjZG4uaWNvbnM4LmNvbS9BbmRyb2lkX0wvUE5HLzQ4L0xvZ29zL3BsYXlfc3RhdGlvbl9jb3B5cmlnaHRlZC00OC5wbmcnIC8+XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlBDXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0naHR0cHM6Ly9tYXhjZG4uaWNvbnM4LmNvbS9Db2xvci9QTkcvNDgvT3BlcmF0aW5nX1N5c3RlbXMvd2luZG93c19sb2dvX2NvcHlyaWdodGVkLTQ4LnBuZycgLz5cIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiWEJPWFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9J2h0dHBzOi8vbWF4Y2RuLmljb25zOC5jb20vQ29sb3IvUE5HLzQ4L0xvZ29zL3hib3gtNDgucG5nJyAvPlwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJOSU5URU5ET1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9J2h0dHBzOi8vbWF4Y2RuLmljb25zOC5jb20vQ29sb3IvUE5HLzQ4L0dhbWluZy9uaW50ZW5kby00OC5wbmcnIC8+XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwbGF0Zm9ybW5hYW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7IC8vIGlmICdkb2N1bWVudCByZWFkeScgcGVyZm9ybSBcImFjdGlvblwiXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0RmlsdGVyTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICAvLyBIaWVyIGhldCBmb3JtdWxpZXIgdmVyc3R1cmVuIGFscyB3ZSBvcCBlZW4gY2hlY2tib3ggZHJ1a2tlblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwiY2hhbmdlXCIsIFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgJChcIiNwcm9kdWN0X2ZpbHRlclwiKS5zdWJtaXQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjcHJvZHVjdF9maWx0ZXJcIiwgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIGxvYWRQcm9kdWN0czogbG9hZFByb2R1Y3RzLFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcclxuICAgICAgICBzZXRGaWx0ZXJMaXN0ZW5lcjogc2V0RmlsdGVyTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCJ2YXIgTG9nb3V0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KClcclxuICAgIHtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCd2aWV3cy9sb2dvdXQvbG9nb3V0Lmh0bWwnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeGVjdXRlIHRoZSBldmVudCB3aGVuICdzb21ldGhpbmcnIGhhcHBlbnMgKHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZCBmb3IgZXhhbXBsZSlcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIFBhZ2VWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgndmlld3MvcGFnZS9wYWdlLmh0bWwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh2aWV3RGF0YVswXS51c2VyX3R5cGUgPT0gXCJjdXN0b21lclwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3VzZXItYmxvY2tcIikuYXBwZW5kKFwiPGgxPkplIGxlZXMgZGl0IGFsbGVlbiBhbHMgamUgZWVuIGN1c3RvbWVyIGJlbnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHZpZXdEYXRhWzBdLnVzZXJfdHlwZSA9PSBcImFkbWluXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICQoXCIjdXNlci1ibG9ja1wiKS5hcHBlbmQoXCI8aDE+SmUgbGVlcyBkaXQgYWxsZWVuIGFscyBqZSBlZW4gYWRtaW5pc3RyYXRvciBiZW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWN0aW9uTGlzdGVuZXIgdGhhdCBleGVjdXRlcyBhY3Rpb25zIG9uIHNwZWNpZmljIGV2ZW50c1xyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoZXZlbnRIYW5kbGVyKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGV2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCJ2YXIgUmVnaXN0ZXJWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJ3ZpZXdzL3JlZ2lzdGVyL3JlZ2lzdGVyLmh0bWwnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeGVjdXRlIHRoZSBldmVudCB3aGVuICdzb21ldGhpbmcnIGhhcHBlbnMgKHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZCBmb3IgZXhhbXBsZSlcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIHJlZ2lzdGVyIGZvcm1cclxuICAgICAgICAvLyB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJ1xyXG5cclxuICAgICAgICAvLyBpZiB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJywgcGVyZm9ybSBhY3Rpb25cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNyZWdpc3RlcmZvcm1cIiwgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxyXG4gICAgfVxyXG59OyIsInZhciBSZXNldFBhc3N3b3JkVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJ3ZpZXdzL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5odG1sJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWN0aW9uTGlzdGVuZXIgdGhhdCBleGVjdXRlcyBhY3Rpb25zIG9uIHNwZWNpZmljIGV2ZW50c1xyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoZXZlbnRIYW5kbGVyKVxyXG4gICAge1xyXG4gICAgICAgIC8vJChkb2N1bWVudCkucmVhZHkoZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNyZXNldGZvcm1cIiwgZXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxyXG4gICAgfVxyXG59OyIsInZhciBQcm9kdWN0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxyXG4gICAge1xyXG4gICAgICAgIC8vJChcIiNjb21wb25lbnRcIikuaHRtbCgnPGRpdiBjbGFzcz1cImNvbC0xMlwiPjxkaXYgY2xhc3M9XCJjb2wtM1wiIGlkPVwiZmlsdGVyc1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJjb2wtOVwiIGlkPVwicHJvZHVjdHNcIj48L2Rpdj48L2Rpdj4nKTtcclxuXHJcbiAgICAgICAgbG9hZFByb2R1Y3Qodmlld0RhdGEpO1xyXG4gICAgfVxyXG4vKlxyXG4gICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnQgd2hlbiAnc29tZXRoaW5nJyBoYXBwZW5zICh3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgZm9yIGV4YW1wbGUpXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBsb2dpbiBmb3JtXHJcbiAgICAgICAgLy8gdXNlciBwcmVzc2VzICdsb2dpbidcclxuXHJcbiAgICAgICAgLy8gaWYgdXNlciBwcmVzc2VzICdsb2dpbicsIHBlcmZvcm0gYWN0aW9uIChtYWtlIGNvbnRyb2xsZXIgc2VuZCBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gQVBJKVxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI2xvZ2luZm9ybVwiLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4qL1xyXG4gICAgZnVuY3Rpb24gbG9hZFByb2R1Y3QocHJvZHVjdClcclxuICAgIHtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCd2aWV3cy9zaW5nbGVfcHJvZHVjdC9zaW5nbGVfcHJvZHVjdC5odG1sJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgcHJvZHVjdC5pbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3RpdGxlXCIpLmh0bWwocHJvZHVjdC50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3ByaWNlXCIpLmh0bWwoXCLigqwgXCIgKyBwcm9kdWN0LnByaWNlKTtcclxuICAgICAgICAgICAgICAgIC8vbGkgdm9vciBsaXN0XHJcbiAgICAgICAgICAgICAgICAkKFwiLmxpcHJvZHVjdF9fZWFuXCIpLmFwcGVuZChwcm9kdWN0LmVhbl9udW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5saXByb2R1Y3RfX3BsYXRmb3JtXCIpLmFwcGVuZChwcm9kdWN0LnBsYXRmb3JtKTtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUocHJvZHVjdC5yZWxlYXNlX2RhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtb250aHMgPSBbXCJqYW51YXJpXCIsIFwiZmVicnVhcmlcIiwgXCJtYWFydFwiLCBcImFwcmlsXCIsIFwibWVpXCIsIFwianVuaVwiLCBcImp1bGlcIiwgXCJhdWd1c3R1c1wiLCBcInNlcHRlbWJlclwiLCBcIm9rdG9iZXJcIiwgXCJub3ZlbWJlclwiLCBcImRlY2VtYmVyXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIubGlwcm9kdWN0X19yZWxlYXNlZGF0ZVwiKS5hcHBlbmQoZC5nZXREYXkoKSArIFwiIFwiICsgbW9udGhzW2QuZ2V0TW9udGgoKV0gKyBcIiBcIiArIGQuZ2V0RnVsbFllYXIoKSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmxpcHJvZHVjdF9fcGVnaVwiKS5hcHBlbmQocHJvZHVjdC5wZWdpX2FnZSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmxpcHJvZHVjdF9fcHVibGlzaGVyXCIpLmFwcGVuZChwcm9kdWN0LnB1Ymxpc2hlcik7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmxpcHJvZHVjdF9fdGl0bGVcIikuYXBwZW5kKHByb2R1Y3QudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5saXByb2R1Y3RfX3N1YnRpdGxlXCIpLmFwcGVuZChwcm9kdWN0LnN1YnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICQoXCIubGlwcm9kdWN0X19nZW5yZVwiKS5hcHBlbmQocHJvZHVjdC5nZW5yZSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmxpcHJvZHVjdF9fZnJhbmNoaXNlXCIpLmFwcGVuZChwcm9kdWN0LmZyYW5jaGlzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19kZXNjclwiKS5odG1sKHByb2R1Y3QuZGVzY3JpcHRpb24pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgJChwcm9kKS5maW5kKFwiLnByb2R1Y3RfX3ByaWNlXCIpLmh0bWwocHJvZHVjdC5wcmljZSk7XHJcbiAgICAgICAgICAgICAgICAkKHByb2QpLmZpbmQoXCIucHJvZHVjdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgcHJvZHVjdC5pbWFnZSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSBwcm9kdWN0XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZCA9ICQoJzxkaXY+JykuYXBwZW5kKCQoJyNwcm9kdWN0X19saXN0X19pdGVtJykuY2xvbmUoKSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0IGluZm9cclxuICAgICAgICAgICAgICAgICQocHJvZCkuZmluZChcIi5wcm9kdWN0X190aXRsZVwiKS5odG1sKHByb2R1Y3QudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kKS5maW5kKFwiLnByb2R1Y3RfX3ByaWNlXCIpLmh0bWwodmFsdWUucHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kKS5maW5kKFwiLnByb2R1Y3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHZhbHVlLmltYWdlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW4gd2hhdCB3ZSBoYXZlIHRvIGRvIHdpdGggdGhlIHJvd3NcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgJSA0ID09IDAgJiYga2V5ID09IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0XCIpLmFwcGVuZChcIjxkaXYgY2xhc3M9J3Jvdyc+XCIgKyBwcm9kLmh0bWwoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChrZXkgJSA0ID09IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0XCIpLmFwcGVuZChcIjwvZGl2PjxkaXYgY2xhc3M9J3Jvdyc+XCIgKyBwcm9kLmh0bWwoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0IGRpdi5yb3dcIikubGFzdCgpLmFwcGVuZChwcm9kLmh0bWwoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDbG9zZSB0aGUgbGFzdCByb3dcclxuICAgICAgICAgICAgJChcIjwvZGl2PlwiKS5hcHBlbmRUbyhcIiNwcm9kdWN0X19saXN0XCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxyXG4gICAgICAgICAgICAkKFwiI3Byb2R1Y3RfX2xpc3RfX2l0ZW1cIikuZmlyc3QoKS5yZW1vdmUoKTsqL1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIGxvYWRQcm9kdWN0IDogbG9hZFByb2R1Y3RcclxuICAgIH1cclxufTsiXX0=
