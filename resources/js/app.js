<<<<<<< HEAD
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
            case "admin":
                new AdminController(new AdminViewHelper(), new AdminModel()).main();
                break;
            case "admin_user":
                new AdminUserController(new AdminUserViewHelper(), new AdminUserModel(particles[1])).main();
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
var AdminUserModel = function(email)
{
    function getPage(callback)
    {
        $.ajax({
            url: "http://localhost:8081/admin/" + email, //"https://api.az-games.nl/
            type: "GET",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

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

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getPage: getPage
    }
}
var AdminModel = function()
{
    // function getUsers(callback)
    // {
    //     console.log("in getUserIds");
    //     $.ajax({
    //         url: "http://localhost:8081/admin", //"https://api.az-games.nl/users",
    //         type: "GET",
    //         dataType: 'json',
    //         headers: {
    //             "Authorization": "Bearer " + getCookie("access_token")
    //         },
    //         success: function (data) {
    //             callback(data);
    //         },
    //         error: function (xhr, status, error) {
    //             $("#component").load("/views/error/error.html");
    //         }
    //     });
    // }


    // function getUserInfo(clicked, callback)
    // {
    //     console.log("in getUserInfo");

    //     var email = $(clicked).closest('tr')[0].cells[3].innerHTML;
    //     email = String(email);

    //     // get userinfo
    //     $.ajax({
    //         url: "http://localhost:8081/admin/" + email, //"https://api.az-games.nl/
    //         type: "GET",
    //         //data: "email=" + email,
    //         dataType: 'json',
    //         headers: {
    //             "Authorization": "Bearer " + getCookie("access_token")
    //         },
    //         success: function (data) {
    //             callback(clicked, data);
    //         },
    //         error: function (xhr, status, error) {
    //             $("#component").load("/error.html");
    //         }
    //     });
    // }

    // // Return the methods that can be used by other programs (the controller in this case)
    // return {
    //     getUserIds: getUserIds,
    //     getUserInfo: getUserInfo
    // }


    function getPage(callback)
    {
        $.ajax({
            url: "http://localhost:8081/admin", //"https://api.az-games.nl/
            type: "GET",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

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

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getPage: getPage
    }

};

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
                $("#component").load("/views/error/error.html");
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
var AdminUserController = function(viewHelper, model)
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
        Model.getPage(setView);
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
        ViewHelper.setView(data)
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

        $("#component").load('/views/admin/admin.html', function () {
            var table = $("<table id='users_table'></table>");

            $.each(data, function(numberr, user) 
            {
                var row = $('<tr></tr>');

                var email = ''
                $.each(user, function(key, value)
                {
                    if (key == 'email') {
                        email = value;
                    }
                })

                $.each(user, function(key, value)
                {
                    var td = $("<td class='td_user'></td>");
                    if (value != undefined)
                    {
                        var a = $("<a></a>");
                        a.attr('href', '/admin_user/' + email); //in routes
                        a.html(String(value));
                        $(td).append(a);
                        row.append(td);
                    } else {
                        row.append( td );
                        $(row).attr('href', '/admin_user/' + email); // in routes
                    }
                })

                table.append(row);
            });
            $('#users').append(table);
        });
    }

    return {
        setActionListener: setActionListener,
        setView: setView
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

    function setView(data)
    {
        //preventDefault();
        $("#component").load('/views/admin/adminuser.html', function ()
        {
            this.preventDefault();
            return;
        } )
    }

    return {
        setActionListener: setActionListener,
        setView: setView
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
var PageViewHelper = function()
{
    // Change the view of the page
    function setView(viewData)
    {
        document.title = "Welkom - AZ Games";

        $("#component").load('/views/page/page.html', function () {
            if (viewData[0].user_type == "customer")
            {
                $("#user-block").append("<h1>Je lees dit alleen als je een customer</h1>");
            }
            if (viewData[0].user_type == "admin")
            {
                $("#user-block").append("<h1>Je lees dit alleen als je een administrator</h1>");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlci5qcyIsImFkbWludXNlcl9tb2RlbC5qcyIsImFkbWluX21vZGVsLmpzIiwiZGVsZXRlX21vZGVsLmpzIiwibG9naW5fbW9kZWwuanMiLCJsb2dvdXRfbW9kZWwuanMiLCJwYWdlX21vZGVsLmpzIiwicHJvZHVjdHNfbW9kZWwuanMiLCJyZWdpc3Rlcl9tb2RlbC5qcyIsInJlc2V0cGFzc3dvcmRfbW9kZWwuanMiLCJzaW5nbGVfcHJvZHVjdF9tb2RlbC5qcyIsInVzZXJfbW9kZWwuanMiLCJhZG1pbnVzZXJfY29udHJvbGxlci5qcyIsImFkbWluX2NvbnRyb2xsZXIuanMiLCJkZWxldGVfY29udHJvbGxlci5qcyIsImVycm9yX2NvbnRyb2xsZXIuanMiLCJsb2dpbl9jb250cm9sbGVyLmpzIiwibG9nb3V0X2NvbnRyb2xsZXIuanMiLCJwYWdlX2NvbnRyb2xsZXIuanMiLCJwcm9kdWN0c19jb250cm9sbGVyLmpzIiwicmVnaXN0ZXJfY29udHJvbGxlci5qcyIsInJlc2V0cGFzc3dvcmRfY29udHJvbGxlci5qcyIsInNpbmdsZV9wcm9kdWN0X2NvbnRyb2xsZXIuanMiLCJ1c2VyX2NvbnRyb2xsZXIuanMiLCJhZG1pbi9hZG1pbl92aWV3LmpzIiwiYWRtaW51c2VyL2FkbWludXNlcl92aWV3LmpzIiwiZXJyb3IvZXJyb3Jfdmlldy5qcyIsImxvZ2luL2xvZ2luX3ZpZXcuanMiLCJsb2dvdXQvbG9nb3V0X3ZpZXcuanMiLCJwcm9kdWN0cy9wcm9kdWN0c192aWV3LmpzIiwicGFnZS9wYWdlX3ZpZXcuanMiLCJyZWdpc3Rlci9yZWdpc3Rlcl92aWV3LmpzIiwic2luZ2xlX3Byb2R1Y3Qvc2luZ2xlX3Byb2R1Y3Rfdmlldy5qcyIsInVzZXIvdXNlcl92aWV3LmpzIiwicmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkX3ZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVGQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJvdXRlciA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIGJhc2VVcmwgPSBcInByb2plY3Qtd2Vic2hvcC9cIjtcclxuXHJcbiAgICBmdW5jdGlvbiByb3V0ZSh1cmwsIGhpc3RvcnkpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGlzSW50ZXJuYWwodXJsKSA9PSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwYXJ0aWNsZXMgPSBnZXRQYXJ0aWNsZXModXJsKTtcclxuXHJcbiAgICAgICAgc3dpdGNoKHBhcnRpY2xlc1swXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJcIjpcclxuICAgICAgICAgICAgY2FzZSBcImluZGV4Lmh0bWxcIjpcclxuICAgICAgICAgICAgY2FzZSBcInByb2R1Y3RzXCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdHNDb250cm9sbGVyKG5ldyBQcm9kdWN0c1ZpZXdIZWxwZXIoKSwgbmV3IFByb2R1Y3RzTW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwcm9kdWN0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdENvbnRyb2xsZXIobmV3IFByb2R1Y3RWaWV3SGVscGVyKCksIG5ldyBQcm9kdWN0TW9kZWwocGFydGljbGVzWzFdKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWdpc3RlclwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IFJlZ2lzdGVyQ29udHJvbGxlcihuZXcgUmVnaXN0ZXJWaWV3SGVscGVyKCksIG5ldyBSZWdpc3Rlck1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibG9naW5cIjpcclxuICAgICAgICAgICAgICAgIG5ldyBMb2dpbkNvbnRyb2xsZXIobmV3IExvZ2luVmlld0hlbHBlcigpLCBuZXcgTG9naW5Nb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImxvZ291dFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IExvZ291dENvbnRyb2xsZXIobmV3IExvZ291dFZpZXdIZWxwZXIoKSwgbmV3IExvZ291dE1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmVnaXN0ZXJcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBSZWdpc3RlckNvbnRyb2xsZXIobmV3IFJlZ2lzdGVyVmlld0hlbHBlcigpLCBuZXcgUmVnaXN0ZXJNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJlc2V0cGFzc3dvcmRcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBSZXNldFBhc3N3b3JkQ29udHJvbGxlcihuZXcgUmVzZXRQYXNzd29yZFZpZXdIZWxwZXIoKSwgbmV3IFJlc2V0UGFzc3dvcmRNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkbWluXCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgQWRtaW5Db250cm9sbGVyKG5ldyBBZG1pblZpZXdIZWxwZXIoKSwgbmV3IEFkbWluTW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZG1pbl91c2VyXCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgQWRtaW5Vc2VyQ29udHJvbGxlcihuZXcgQWRtaW5Vc2VyVmlld0hlbHBlcigpLCBuZXcgQWRtaW5Vc2VyTW9kZWwocGFydGljbGVzWzFdKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3JDb250cm9sbGVyKG5ldyBFcnJvclZpZXdIZWxwZXIoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGlzdG9yeSAhPSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh1cmwgPT0gXCJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsID0gXCJpbmRleC5odG1sXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHdyaXRlSGlzdG9yeSh7fSwgXCJBLVogR2FtZXNcIiwgdXJsKVxyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzSW50ZXJuYWwodXJsKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh1cmwuaW5kZXhPZihcImh0dHBcIikgIT0gLTEgfHwgdXJsLmluZGV4T2YoXCJodHRwc1wiKSAhPSAtMSB8fCB1cmwuaW5kZXhPZihcInd3d1wiKSAhPSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFBhcnRpY2xlcyh1cmwpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCAvXHJcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKFwiL1wiKSA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZygxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgYmFzZSB1cmwgc2V0LCByZW1vdmUgdGhlIGJhc2UgdXJsXHJcbiAgICAgICAgaWYgKHRoaXMuYmFzZVVybCAhPSBudWxsICYmIHVybC5pbmRleE9mKHRoaXMuYmFzZVVybCkgIT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKHRoaXMuYmFzZVVybCkgKyB0aGlzLmJhc2VVcmwubGVuZ3RoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1cmwuc3BsaXQoL1xcLyguKyk/LylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3cml0ZUhpc3Rvcnkob2JqZWN0LCB0aXRsZSwgdXJsKVxyXG4gICAge1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShvYmplY3QsIHRpdGxlLCB1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcm91dGU6IHJvdXRlXHJcbiAgICB9XHJcbn0iLCJ2YXIgQWRtaW5Vc2VyTW9kZWwgPSBmdW5jdGlvbihlbWFpbClcclxue1xyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZShjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgxL2FkbWluL1wiICsgZW1haWwsIC8vXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9cclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvb2tpZShuYW1lKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldLnNwbGl0KFwiPVwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb29raWVbMF0udHJpbSgpID09IG5hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb29raWVbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0UGFnZTogZ2V0UGFnZVxyXG4gICAgfVxyXG59IiwidmFyIEFkbWluTW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIGZ1bmN0aW9uIGdldFVzZXJzKGNhbGxiYWNrKVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiaW4gZ2V0VXNlcklkc1wiKTtcclxuICAgIC8vICAgICAkLmFqYXgoe1xyXG4gICAgLy8gICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgxL2FkbWluXCIsIC8vXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC91c2Vyc1wiLFxyXG4gICAgLy8gICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgLy8gICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgLy8gICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAvLyAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBnZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIC8vICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgLy8gICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIGdldFVzZXJJbmZvKGNsaWNrZWQsIGNhbGxiYWNrKVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiaW4gZ2V0VXNlckluZm9cIik7XHJcblxyXG4gICAgLy8gICAgIHZhciBlbWFpbCA9ICQoY2xpY2tlZCkuY2xvc2VzdCgndHInKVswXS5jZWxsc1szXS5pbm5lckhUTUw7XHJcbiAgICAvLyAgICAgZW1haWwgPSBTdHJpbmcoZW1haWwpO1xyXG5cclxuICAgIC8vICAgICAvLyBnZXQgdXNlcmluZm9cclxuICAgIC8vICAgICAkLmFqYXgoe1xyXG4gICAgLy8gICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgxL2FkbWluL1wiICsgZW1haWwsIC8vXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9cclxuICAgIC8vICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgIC8vICAgICAgICAgLy9kYXRhOiBcImVtYWlsPVwiICsgZW1haWwsXHJcbiAgICAvLyAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAvLyAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgIC8vICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIGdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgLy8gICAgICAgICAgICAgY2FsbGJhY2soY2xpY2tlZCwgZGF0YSk7XHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL2Vycm9yLmh0bWxcIik7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgLy8gcmV0dXJuIHtcclxuICAgIC8vICAgICBnZXRVc2VySWRzOiBnZXRVc2VySWRzLFxyXG4gICAgLy8gICAgIGdldFVzZXJJbmZvOiBnZXRVc2VySW5mb1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQYWdlKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwODEvYWRtaW5cIiwgLy9cImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBnZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGNvb2tpZSA9IGNvb2tpZXNbaV0uc3BsaXQoXCI9XCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvb2tpZVswXS50cmltKCkgPT0gbmFtZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvb2tpZVsxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRQYWdlOiBnZXRQYWdlXHJcbiAgICB9XHJcblxyXG59OyIsIiIsInZhciBMb2dpbk1vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiBsb2dpbihlbWFpbCwgcGFzc3dvcmQsIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC91c2VyL2xvZ2luXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBlbWFpbCA6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQgOiBwYXNzd29yZFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vIHB1dCB0b2tlbiBpbiBjb29raWVcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZT0nYWNjZXNzX3Rva2VuPScgKyBkYXRhLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZT0ndXNlcl9pZD0nICsgZGF0YS51c2VyX2lkO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNob3cgJ25vdCBnb29kIGVtYWlsIG9yIHBhc3N3b3JkIHRvIHVzZXInXHJcbiAgICAgICAgICAgICAgICAkKFwiI2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vJChcIiNjb21wb25lbnRcIikuaHRtbChcImVycm9yIGZ1bmN0aW9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9naW46IGxvZ2luXHJcbiAgICB9XHJcbn07IiwidmFyIExvZ291dE1vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiBsb2dvdXQoY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXIvbG9nb3V0XCIsIC8vPyBodHRwOi8vODQuODQuMjQ1LjI5OjI0MyA9IEFQSS1sb2NhdGllP1xyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgdXNlcl9pZDogZ2V0Q29va2llKFwidXNlcl9pZFwiKVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWU9J2FjY2Vzc190b2tlbj0nO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llPSd1c2VyX2lkPSc7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNob3cgJ25vdCBnb29kIGVtYWlsIG9yIHBhc3N3b3JkIHRvIHVzZXInXHJcbiAgICAgICAgICAgICAgICAkKFwiI2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vJChcIiNjb21wb25lbnRcIikuaHRtbChcImVycm9yIGZ1bmN0aW9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldENvb2tpZShuYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvb2tpZSA9IGNvb2tpZXNbaV0uc3BsaXQoXCI9XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb29raWVbMF0udHJpbSgpID09IG5hbWUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvb2tpZVsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsb2dvdXQ6IGxvZ291dFxyXG4gICAgfVxyXG59OyIsInZhciBQYWdlTW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIGdldFBhZ2UoY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXJcIixcclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvb2tpZShuYW1lKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldLnNwbGl0KFwiPVwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb29raWVbMF0gPT0gbmFtZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvb2tpZVsxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRQYWdlOiBnZXRQYWdlXHJcbiAgICB9XHJcbn07IiwidmFyIFByb2R1Y3RzTW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIGdldFBhZ2UoZmlsdGVyLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvcHJvZHVjdHM/XCIgKyBmaWx0ZXIsIC8vPyBodHRwOi8vODQuODQuMjQ1LjI5OjI0MyA9IEFQSS1sb2NhdGllP1xyXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRQYWdlOiBnZXRQYWdlXHJcbiAgICB9XHJcbn07IiwidmFyIFJlZ2lzdGVyTW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyKGZvcm1EYXRhLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlci9yZWdpc3RlclwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgZV9tYWlsIDogZm9ybURhdGEuZV9tYWlsYWRyZXMsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA6IGZvcm1EYXRhLndhY2h0d29vcmQsXHJcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lIDogZm9ybURhdGEudm9vcm5hYW0sXHJcbiAgICAgICAgICAgICAgICBpbnNlcnRpb24gOiBmb3JtRGF0YS50dXNzZW52b2Vnc2VsLFxyXG4gICAgICAgICAgICAgICAgc3VybmFtZSA6IGZvcm1EYXRhLmFjaHRlcm5hYW0sXHJcbiAgICAgICAgICAgICAgICBnZW5kZXIgOiBmb3JtRGF0YS5nZW5kZXIsXHJcbiAgICAgICAgICAgICAgICBkYXRlX29mX2JpcnRoIDogZm9ybURhdGEuYmlydGhfZGF0ZSxcclxuICAgICAgICAgICAgICAgIHBob25lX251bWJlciA6IGZvcm1EYXRhLm1vYmllbF9udW1tZXIsXHJcbiAgICAgICAgICAgICAgICBzZWNyZXRfcXVlc3Rpb24gOiBmb3JtRGF0YS5zZWN1cml0eV9xdWVzdGlvbixcclxuICAgICAgICAgICAgICAgIHNlY3JldF9xdWVzdGlvbl9hbnN3ZXIgOiBmb3JtRGF0YS5zZWN1cml0eV9hbnN3ZXIsXHJcblxyXG4gICAgICAgICAgICAgICAgcG9zdGFsX2NvZGUgOiBmb3JtRGF0YS5wb3N0Y29kZSxcclxuICAgICAgICAgICAgICAgIG51bWJlciA6IGZvcm1EYXRhLmh1aXNudW1tZXIsXHJcbiAgICAgICAgICAgICAgICBzdHJlZXRfbmFtZSA6IGZvcm1EYXRhLnN0cmFhdG5hYW0sXHJcbiAgICAgICAgICAgICAgICBjaXR5IDogZm9ybURhdGEucGxhYXRzICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzaG93ICdlbWFpbCBhbCBnZWJvbmRlbiBhYW4gZWVuIGFjY291bnQ/J1xyXG4gICAgICAgICAgICAgICAgJChcIiNyZWdpX2FwaV9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIC8vJChcIiNjb21wb25lbnRcIikuaHRtbChcImVycm9yIGZ1bmN0aW9uXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVnaXN0ZXI6IHJlZ2lzdGVyXHJcbiAgICB9XHJcbn07IiwidmFyIFJlc2V0UGFzc3dvcmRNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gcmVzZXRwYXNzd29yZChmb3JtRGF0YSwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC91c2VyL3Jlc2V0cGFzc3dvcmRcIixcclxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGVtYWlsIDogZm9ybURhdGEuZV9tYWlsYWRyZXMsXHJcbiAgICAgICAgICAgICAgICBzZWNyZXRfcXVlc3Rpb25fYW5zd2VyIDogZm9ybURhdGEuc2VjdXJpdHlfYW5zd2VyLFxyXG4gICAgICAgICAgICAgICAgc2VjcmV0X3F1ZXN0aW9uIDogZm9ybURhdGEuc2VjdXJpdHlfcXVlc3Rpb24sXHJcbiAgICAgICAgICAgICAgICBuZXdfcGFzc3dvcmQgOiBmb3JtRGF0YS53YWNodHdvb3JkLFxyXG4gICAgICAgICAgICAgICAgcmVwZWF0X3Bhc3N3b3JkIDogZm9ybURhdGEud2FjaHR3b29yZDJcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vJChcIiNjb21wb25lbnRcIikubG9hZChcInZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3Jlc2V0X3Bhc3N3b3JkX2FwaV9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc2V0cGFzc3dvcmQ6IHJlc2V0cGFzc3dvcmRcclxuICAgIH1cclxufTsiLCJ2YXIgUHJvZHVjdE1vZGVsID0gZnVuY3Rpb24oZWFuKVxyXG57XHJcbiAgICBmdW5jdGlvbiBHZXRQcm9kdWN0SW5mbyhjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvcHJvZHVjdHMvXCIgKyBlYW4sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVswXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBHZXRQcm9kdWN0SW5mbzogR2V0UHJvZHVjdEluZm9cclxuICAgIH1cclxufTsiLCJ2YXIgVXNlck1vZGVsID0gZnVuY3Rpb24odXNlcmlkKVxyXG57XHJcbiAgICBmdW5jdGlvbiBHZXRVc2VySW5mbyhjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlcnMvXCIgKyB1c2VyaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVswXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBHZXRVc2VySW5mbzogR2V0VXNlckluZm9cclxuICAgIH1cclxufTsiLCJ2YXIgQWRtaW5Vc2VyQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0UGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZSgpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShzZXRWaWV3KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKSBcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBBZG1pbkNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldFBhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFBhZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmdldFBhZ2Uoc2V0Vmlldyk7IC8vXCJcIiwgZnVuY3Rpb24gKGRhdGEpIHsgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpOyB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoZGF0YSkgXHJcbiAgICB7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgRGVsZXRlQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwidmFyIEVycm9yQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIpXHJcbntcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIExvZ2luQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgLy8gTG9vcCB0cm91Z2ggdGhlIGZvcm0gZGF0YSBhbmQgZ2V0IGFsbCBmaWVsZHNcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcclxuICAgICAgICAkLmVhY2goJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbiAoaSwgZmllbGQpIHtcclxuICAgICAgICAgICAgZm9ybURhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgZW1haWwgYW5kIHBhc3N3b3JkIHRvIEFQSVxyXG4gICAgICAgIE1vZGVsLmxvZ2luKGZvcm1EYXRhLmVtYWlsLCBmb3JtRGF0YS5wYXNzd29yZCwgZnVuY3Rpb24gb25TdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gc2hvdyB1aXRsb2dnZW4gYnV0dG9uXHJcbiAgICAgICAgICAgICQoXCIjaW5sb2dnZW5fdGV4dFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIjdWl0bG9nZ2VuX3RleHRcIikuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgLy8gV2VlcmdlZWYgZWVuIGFuZGVyZSBwYWdpbmEgZ2ViYXNzZWVyZCBvcCAnYWRtaW4nIG9mICdyZWdpc3RlcmVkIHVzZXInXHJcbiAgICAgICAgICAgIG5ldyBQYWdlQ29udHJvbGxlcihuZXcgUGFnZVZpZXdIZWxwZXIoKSwgbmV3IFBhZ2VNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICAvLyBzZXQgdmlldyB0byBsb2dpbiBmb3JtXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCk7XHJcblxyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gZW1haWwgYW5kIHBhc3N3b3JkOyBjbGlja3MgJ2xvZ2luJzogVklFVyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIExvZ291dENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmxvZ291dChmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBzaG93IHVpdGxvZ2dlbiBidXR0b25cclxuICAgICAgICAgICAgJChcIiNpbmxvZ2dlbl90ZXh0XCIpLnNob3coKTtcclxuICAgICAgICAgICAgJChcIiN1aXRsb2dnZW5fdGV4dFwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzZXQgdmlldyB0byBsb2dpbiBmb3JtXHJcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBlbWFpbCBhbmQgcGFzc3dvcmQ7IGNsaWNrcyAnbG9naW4nOiBWSUVXIG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgUGFnZUNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsID0gbW9kZWw7XHJcbiAgICB2YXIgVmlldyAgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBWaWV3LnNldFZpZXcoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBWaWV3LnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBQcm9kdWN0c0NvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZSgpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShcIlwiLCBmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbHRlclByb2R1Y3RzKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybSAocGFnZSByZWxvYWQpXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyIGZpbHRlcnMgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpO1xyXG4gICAgICAgIE1vZGVsLmdldFBhZ2UoZmlsdGVycywgZnVuY3Rpb24gKGRhdGEpIHsgVmlld0hlbHBlci5sb2FkUHJvZHVjdHMoZGF0YSk7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihnZXRQYWdlKTtcclxuICAgICAgICBWaWV3SGVscGVyLnNldEZpbHRlckxpc3RlbmVyKGZpbHRlclByb2R1Y3RzKTtcclxuICAgICAgICAvLyBuZXcgYWN0aW9uIHdhbm5lciBlciBvcCBmaWx0ZXIgd29yZHQgZ2VkcnVrdFxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgUmVnaXN0ZXJDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZCgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbiBhY3Rpb25QZXJmb3JtZWRcIik7IC8vdGVzdFxyXG5cclxuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyByZXNldCBlcnJvciBtZXNzYWdlc1xyXG4gICAgICAgICQoXCIjcmVnaV9hcGlfZXJyb3JfbWVzc2FnZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiN3dzJfZXJyb3JfbWVzc2FnZVwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgIC8vIHB1dCBmb3JtIGZpZWxkcyBpbiBqYXZhc2NyaXB0IE9iamVjdFxyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IHt9O1xyXG5cclxuICAgICAgICAkLmVhY2goJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbiAoaSwgZmllbGQpIHtcclxuICAgICAgICAgICAgZm9ybURhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZml4IGRhdGUgb2YgYmlydGggKEFQSSBleHBlY3RzIGNlcnRhaW4gZm9ybWF0KVxyXG4gICAgICAgIGZvcm1EYXRhW1wiYmlydGhfZGF0ZVwiXSA9IGZvcm1EYXRhLmphYXIgKyBcIi1cIiArIGZvcm1EYXRhLm1hYW5kICsgXCItXCIgKyBmb3JtRGF0YS5kYWc7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciBhbnkgbWFuZGF0b3J5IGZpZWxkIGlzIGxlZnQgZW1wdHkgYnkgdXNlciBhbmRcclxuICAgICAgICAvLyBpZiBzbywgYWJvcnQgZnVuY3Rpb25cclxuICAgICAgICB2YXIgbWFuZGF0b3J5RmllbGRNaXNzZXMgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbWFuZGF0b3J5RmllbGRzID0gW1widm9vcm5hYW1cIiwgXCJhY2h0ZXJuYWFtXCIsIFwicG9zdGNvZGVcIiwgXCJodWlzbnVtbWVyXCIsIFwiZV9tYWlsYWRyZXNcIiwgXCJ3YWNodHdvb3JkXCIsIFwid2FjaHR3b29yZDJcIiwgXCJzZWN1cml0eV9hbnN3ZXJcIl07IC8vZHJvcGRvd25zIChsaWtlIGdlbmRlcikgYXJlIGFsd2F5cyBmaWxsZWQgaW4sIHNvIGRvbid0IHB1dCBpbiB0aGlzIGxpc3RcclxuXHJcbiAgICAgICAgLy8gKHJlc2V0IGFsbCBmaWVsZHMgdG8gJ3ZhbGlkJyBiZWNhdXNlIHVzZXIgbWF5IGhhdmUgZmlsbGVkIGluIGZpZWxkcyBzaW5jZVxyXG4gICAgICAgIC8vIHRoZSBwcmV2aW91cyB0aW1lIHRoaXMgZnVuY3Rpb24gd2FzIGNhbGxlZClcclxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcclxuICAgICAgICAgICAgJChcIiNcIiArIG1hbkZpZWxkKS5yZW1vdmVDbGFzcyhcImludmFsaWRcIik7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJC5lYWNoKG1hbmRhdG9yeUZpZWxkcywgZnVuY3Rpb24gKGksIG1hbkZpZWxkKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtRGF0YVttYW5GaWVsZF0gPT0gXCJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJChcIiNcIiArIG1hbkZpZWxkKS5hZGRDbGFzcyhcImludmFsaWRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5RmllbGRNaXNzZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaWYgYSBtYW5kYXRvcnkgZmllbGQgaXMgZW1wdHksIHNob3cgZXJyb3IgbWVzc2FnZSB0byB1c2VyIGFuZCBhYm9ydCBmdW5jdGlvblxyXG4gICAgICAgIGlmIChtYW5kYXRvcnlGaWVsZE1pc3NlcylcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdG9wIG9mIHBhZ2Ugc28gdGhhdCB1c2VycyBzZWUgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgICAvLyBzaG93IG1lc3NhZ2UgXCJzb21ldGhpbmcgaXMgbm90IGZpbGxlZCBpblwiXHJcbiAgICAgICAgICAgICQoXCIjcmVnaXN0ZXJfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHBhc3N3b3Jkc05vdElkZW50aWNhbCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoZm9ybURhdGEud2FjaHR3b29yZCAhPSBmb3JtRGF0YS53YWNodHdvb3JkMikgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXNzd29yZHNOb3RJZGVudGljYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgJChcIiN3YWNodHdvb3JkXCIpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcclxuICAgICAgICAgICAgJChcIiN3YWNodHdvb3JkMlwiKS5hZGRDbGFzcyhcImludmFsaWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhYm9ydCBmdW5jdGlvbiBpZiBtYW5kYXRvcnkgZmllbGQgbWlzc2VzIG9yIHBhc3N3b3JkcyBub3QgaWRlbnRpY2FsXHJcbiAgICAgICAgaWYgKG1hbmRhdG9yeUZpZWxkTWlzc2VzIHx8IHBhc3N3b3Jkc05vdElkZW50aWNhbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb250aW51ZWRcIilcclxuICAgICAgICAvLyBsZXQgbW9kZWwgc2VuZCB1c2VyIGluZm8gdG8gQVBJXHJcbiAgICAgICAgTW9kZWwucmVnaXN0ZXIoZm9ybURhdGEsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygnL3ZpZXdzL3JlZ2lzdGVyL2FmdGVyX3JlZ2lzdGVyLmh0bWwnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHNldCB2aWV3IHRvIHJlZ2lzdGVyIGZvcm1cclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJy92aWV3cy9yZWdpc3Rlci9yZWdpc3Rlci5odG1sJyk7XHJcblxyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gcmVnaXN0ZXIgaW5mbzsgY2xpY2tzICdyZWdpc3Rlcic6IHZpZXcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XHJcblxyXG4gICAgICAgIC8vIGVtYWlsIGFuZCBwYXNzd29yZCBhcmUgc2VuZCB0byBBUEk7IEFQSSBjaGVja3MgaWYgZW1haWwgYWxyZWFkeSBleGlzdHMgKGFuZCB3aGV0aGVyIHBhc3N3b3JkIGlzIGNvcnJlY3Q/KSBcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIFJlc2V0UGFzc3dvcmRDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gYWN0aW9uUGVyZm9ybWVkXCIpOyAvL3Rlc3RcclxuXHJcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZXNcclxuICAgICAgICAkKFwiI3Jlc2V0X3Bhc3N3b3JkX2FwaV9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgLy8gcHV0IGZvcm0gZmllbGRzIGluIGphdmFzY3JpcHQgT2JqZWN0XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XHJcblxyXG4gICAgICAgICQuZWFjaCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uIChpLCBmaWVsZCkge1xyXG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIGFueSBtYW5kYXRvcnkgZmllbGQgaXMgbGVmdCBlbXB0eSBieSB1c2VyIGFuZFxyXG4gICAgICAgIC8vIGlmIHNvLCBhYm9ydCBmdW5jdGlvblxyXG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZHMgPSBbXCJ3YWNodHdvb3JkXCIsIFwid2FjaHR3b29yZDJcIiwgXCJlX21haWxhZHJlc1wiLFwic2VjdXJpdHlfYW5zd2VyXCJdOyAvL2Ryb3Bkb3ducyAobGlrZSBzZWN1cml0eV9xdWVzdGlvbl9hbnN3ZXIpIGFyZSBhbHdheXMgZmlsbGVkIGluLCBzbyBkb24ndCBwdXQgaW4gdGhpcyBsaXN0XHJcblxyXG4gICAgICAgIC8vIChyZXNldCBhbGwgZmllbGRzIHRvICd2YWxpZCcgYmVjYXVzZSB1c2VyIG1heSBoYXZlIGZpbGxlZCBpbiBmaWVsZHMgc2luY2VcclxuICAgICAgICAvLyB0aGUgcHJldmlvdXMgdGltZSB0aGlzIGZ1bmN0aW9uIHdhcyBjYWxsZWQpXHJcbiAgICAgICAgJC5lYWNoKG1hbmRhdG9yeUZpZWxkcywgZnVuY3Rpb24gKGksIG1hbkZpZWxkKSB7XHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBtYW5GaWVsZCkucmVtb3ZlQ2xhc3MoXCJpbnZhbGlkXCIpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQuZWFjaChtYW5kYXRvcnlGaWVsZHMsIGZ1bmN0aW9uIChpLCBtYW5GaWVsZCkge1xyXG4gICAgICAgICAgICBpZiAoZm9ybURhdGFbbWFuRmllbGRdID09IFwiXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBtYW5GaWVsZCkuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeUZpZWxkTWlzc2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGlmIGEgbWFuZGF0b3J5IGZpZWxkIGlzIGVtcHR5LCBzaG93IGVycm9yIG1lc3NhZ2UgdG8gdXNlciBhbmQgYWJvcnQgZnVuY3Rpb25cclxuICAgICAgICBpZiAobWFuZGF0b3J5RmllbGRNaXNzZXMpXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgLy8gc2Nyb2xsIHRvIHRvcCBvZiBwYWdlIHNvIHRoYXQgdXNlcnMgc2VlIG1lc3NhZ2UgXCJzb21ldGhpbmcgaXMgbm90IGZpbGxlZCBpblwiXHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgICAgLy8gc2hvdyBtZXNzYWdlIFwic29tZXRoaW5nIGlzIG5vdCBmaWxsZWQgaW5cIlxyXG4gICAgICAgICAgICAkKFwiI3Jlc2V0X2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBwYXNzd29yZHNOb3RJZGVudGljYWwgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGZvcm1EYXRhLndhY2h0d29vcmQgIT0gZm9ybURhdGEud2FjaHR3b29yZDIpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFzc3dvcmRzTm90SWRlbnRpY2FsID0gdHJ1ZTtcclxuICAgICAgICAgICAgJChcIiN3dzJfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIjd2FjaHR3b29yZFwiKS5hZGRDbGFzcyhcImludmFsaWRcIik7XHJcbiAgICAgICAgICAgICQoXCIjd2FjaHR3b29yZDJcIikuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYWJvcnQgZnVuY3Rpb24gaWYgbWFuZGF0b3J5IGZpZWxkIG1pc3NlcyBvciBwYXNzd29yZHMgbm90IGlkZW50aWNhbFxyXG4gICAgICAgIGlmIChtYW5kYXRvcnlGaWVsZE1pc3NlcyB8fCBwYXNzd29yZHNOb3RJZGVudGljYWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29udGludWVkXCIpXHJcbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgdXNlciBpbmZvIHRvIEFQSVxyXG4gICAgICAgIE1vZGVsLnJlc2V0cGFzc3dvcmQoZm9ybURhdGEsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuc2V0Vmlldygndmlld3MvcmVzZXRwYXNzd29yZC9hZnRlcl9yZXNldC5odG1sJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHsgICAgICBcclxuICAgICAgICAvLyBzZXQgdmlldyB0byByZXNldCBwYXNzd29yZCBmb3JtXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCd2aWV3cy9yZXNldHBhc3N3b3JkL3Jlc2V0cGFzc3dvcmQuaHRtbCcpO1xyXG5cclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XHJcbiAgICAgICAgLy8gbmV3IGFjdGlvbiB3YW5uZXIgZXIgb3AgZmlsdGVyIHdvcmR0IGdlZHJ1a3RcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4iLCJ2YXIgUHJvZHVjdENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIG1vZGVsLkdldFByb2R1Y3RJbmZvKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIHZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluLFxyXG4gICAgfVxyXG59OyIsIiIsInZhciBBZG1pblZpZXdIZWxwZXIgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTsgLy8gaWYgJ2RvY3VtZW50IHJlYWR5JyBwZXJmb3JtIFwiYWN0aW9uXCJcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgICBmdW5jdGlvbiBzZXRWaWV3KGRhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPVwiQWRtaW4gLSBBWiBHYW1lc1wiO1xyXG5cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvYWRtaW4vYWRtaW4uaHRtbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHRhYmxlID0gJChcIjx0YWJsZSBpZD0ndXNlcnNfdGFibGUnPjwvdGFibGU+XCIpO1xyXG5cclxuICAgICAgICAgICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uKG51bWJlcnIsIHVzZXIpIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcm93ID0gJCgnPHRyPjwvdHI+Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGVtYWlsID0gJydcclxuICAgICAgICAgICAgICAgICQuZWFjaCh1c2VyLCBmdW5jdGlvbihrZXksIHZhbHVlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gJ2VtYWlsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgJC5lYWNoKHVzZXIsIGZ1bmN0aW9uKGtleSwgdmFsdWUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRkID0gJChcIjx0ZCBjbGFzcz0ndGRfdXNlcic+PC90ZD5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhID0gJChcIjxhPjwvYT5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuYXR0cignaHJlZicsICcvYWRtaW5fdXNlci8nICsgZW1haWwpOyAvL2luIHJvdXRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmh0bWwoU3RyaW5nKHZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGQpLmFwcGVuZChhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZCh0ZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZCggdGQgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChyb3cpLmF0dHIoJ2hyZWYnLCAnL2FkbWluX3VzZXIvJyArIGVtYWlsKTsgLy8gaW4gcm91dGVzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICB0YWJsZS5hcHBlbmQocm93KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICQoJyN1c2VycycpLmFwcGVuZCh0YWJsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXHJcbiAgICAgICAgc2V0Vmlldzogc2V0Vmlld1xyXG4gICAgfVxyXG59XHJcblxyXG4gICAgLy9kYXQgaGllcm9uZGVyIHphdCBhYXJkaWcgd2F0IHdlcmsgaW4uLi4gRG9uYWxkIHdpbCBub2cgZmYgaG91ZGVuXHJcblxyXG4gICAgLy8gZnVuY3Rpb24gc2hvd1VzZXJzKGRhdGEpXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgZG9jdW1lbnQudGl0bGUgPVwiQWRtaW4gLSBBWiBHYW1lc1wiO1xyXG5cclxuICAgIC8vICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvYWRtaW4vYWRtaW4uaHRtbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAgICAgdmFyIHRhYmxlID0gJChcIjx0YWJsZSBpZD0ndXNlcnNfdGFibGUnPjwvdGFibGU+XCIpO1xyXG5cclxuICAgIC8vICAgICAgICAgLy8gdGFibGUgaGVhZGVyXHJcbiAgICAvLyAgICAgICAgIHZhciByb3cgPSAkKCc8dHI+PC90cj4nKTtcclxuICAgIC8vICAgICAgICAgcm93LmFwcGVuZCgnPHRkPlZvb3JuYWFtPC90ZD48dGQ+VHVzc2VudjwvdGQ+PHRkPkFjaHRlcm5hYW08L3RkPjx0ZD5HZWJydWlrZXJzbmFhbTwvdGQ+PHRkPmVtYWlsPC90ZD48dGQ+dHlwZTwvdGQ+Jyk7XHJcblxyXG4gICAgLy8gICAgICAgICAkLmVhY2goZGF0YSwgZnVuY3Rpb24obnVtYmVyciwgdXNlcikgXHJcbiAgICAvLyAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgIHZhciByb3cgPSAkKCc8dHI+PC90cj4nKTtcclxuICAgIC8vICAgICAgICAgICAgICQuZWFjaCh1c2VyLCBmdW5jdGlvbihrZXksIHZhbHVlKVxyXG4gICAgLy8gICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpXHJcbiAgICAvLyAgICAgICAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByb3cuYXBwZW5kKCAkKFwiPHRkIGNsYXNzPSd0ZF91c2VyJz48L3RkPlwiKS5odG1sKFN0cmluZyh2YWx1ZSkpICk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZCggJChcIjx0ZCBjbGFzcz0ndGRfdXNlcic+PC90ZD5cIikgKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAgICAgdGFibGUuYXBwZW5kKHJvdyk7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyAvL2ZvciBhZGRpdGlvbmFsIHVzZXIgaW5mbyBpZiBjbGlja2VkXHJcbiAgICAvLyAgICAgICAgICAgICAvLyByb3cgPSAkKCc8ZGl2IGNsYXNzPVwidG9iZXRhYmxlXCI+PC9kaXY+Jyk7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyB0YWJsZS5hcHBlbmQocm93KTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgICQoJyN1c2VycycpLmFwcGVuZCh0YWJsZSk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gcHV0SW5mb0luSHRtbChjbGlja2VkLCBkYXRhKVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdpbiBwdXRJbmZvSW5IdG1sKCknKTtcclxuICAgIC8vICAgICAvLyBzaG93IGluZm8gb2YgdGhlIHJpZ2h0IHVzZXIgKGlmIG5vdCBhbHJlYWR5IHNob3dpbmcgaXQpXHJcbiAgICAvLyAgICAgLy8gaW5zZXJ0IHJvdyBhcyB0YWJsZSBoZWFkZXJcclxuICAgIC8vICAgICB2YXIgaGVhZGVycm93ID0gJCgnPHRyPjwvdHI+JykuYXBwZW5kKCc8dGQ+d3c8L3RkPjx0ZD5nZWJsb2trZWVyZDwvdGQ+PHRkPmlkPC90ZD48dGQ+Z2VuZGVyPC90ZD48dGQ+Z2Vib29ydGVkYXR1bTwvdGQ+PHRkPnZyYWFnPC90ZD48dGQ+YW50d29vcmQ8L3RkPicpO1xyXG5cclxuICAgIC8vICAgICAvLyBpbnNlcnQgcm93IHdpdGggdGUgdXNlcmluZm9cclxuICAgIC8vICAgICB2YXIgaW5mb3JvdyA9ICQoJzx0cj48L3RyPicpO1xyXG5cclxuICAgIC8vICAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgLy8gICAgICQuZWFjaChkYXRhWzBdLCBmdW5jdGlvbihrZXksIHZhbHVlKVxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgaWYgKGNvdW50ID09IDEpIHsgLy8gZ2VibG9ra2VlcmRcclxuICAgIC8vICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAxKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFsdWUgPSAnbmVlJztcclxuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT0gMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHZhbHVlID0gJ2phJ1xyXG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB2YWx1ZSA9ICdkYiBmb3V0PydcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coY291bnQpO1xyXG4gICAgLy8gICAgICAgICB2YXIgdGQgPSAkKCc8dGQ+PC90ZD4nKS5hcHBlbmQodmFsdWUpO1xyXG5cclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2tleSwgdmFsdWU6ICcgKyBrZXksIHZhbHVlKTtcclxuXHJcbiAgICAvLyAgICAgICAgIGluZm9yb3cuYXBwZW5kKHRkKTtcclxuXHJcbiAgICAvLyAgICAgICAgIGNvdW50ICs9IDE7XHJcbiAgICAvLyAgICAgfSlcclxuXHJcbiAgICAvLyAgICAgaW5mb3Jvdy5pbnNlcnRBZnRlciggJChjbGlja2VkKS5jbG9zZXN0KCd0cicpICk7XHJcbiAgICAvLyAgICAgaGVhZGVycm93Lmluc2VydEFmdGVyKCQoY2xpY2tlZCkuY2xvc2VzdCgndHInKSk7XHJcbiAgICAvLyB9XHJcblxyXG4iLCJ2YXIgQWRtaW5Vc2VyVmlld0hlbHBlciA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIlxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoZGF0YSlcclxuICAgIHtcclxuICAgICAgICAvL3ByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2FkbWluL2FkbWludXNlci5odG1sJywgZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXdcclxuICAgIH1cclxufSIsInZhciBFcnJvclZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0VmlldygpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIk9lcHMgLSBBWiBHYW1lc1wiO1xyXG5cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvZXJyb3IvZXJyb3IuaHRtbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFjdGlvbkxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgYWN0aW9ucyBvbiBzcGVjaWZpYyBldmVudHNcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIExvZ2luVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KClcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9XCJJbmxvZ2dlbiAtIEFaIEdhbWVzXCI7XHJcblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9sb2dpbi9sb2dpbi5odG1sJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnQgd2hlbiAnc29tZXRoaW5nJyBoYXBwZW5zICh3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgZm9yIGV4YW1wbGUpXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBsb2dpbiBmb3JtXHJcbiAgICAgICAgLy8gdXNlciBwcmVzc2VzICdsb2dpbidcclxuXHJcbiAgICAgICAgLy8gaWYgdXNlciBwcmVzc2VzICdsb2dpbicsIHBlcmZvcm0gYWN0aW9uIChtYWtlIGNvbnRyb2xsZXIgc2VuZCBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gQVBJKVxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI2xvZ2luZm9ybVwiLCBhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIExvZ291dFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0VmlldygpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIlVpdGxvZ2dlbiAtIEFaIEdhbWVzXCI7XHJcblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9sb2dvdXQvbG9nb3V0Lmh0bWwnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeGVjdXRlIHRoZSBldmVudCB3aGVuICdzb21ldGhpbmcnIGhhcHBlbnMgKHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZCBmb3IgZXhhbXBsZSlcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIFByb2R1Y3RzVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJQcm9kdWN0ZW4gLSBBWiBHYW1lc1wiO1xyXG5cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5odG1sKCc8ZGl2IGNsYXNzPVwiY29sLTEyXCI+PGRpdiBjbGFzcz1cImNvbC0zXCIgaWQ9XCJmaWx0ZXJzXCI+PC9kaXY+PGRpdiBjbGFzcz1cImNvbC05XCIgaWQ9XCJwcm9kdWN0c1wiPjwvZGl2PjwvZGl2PicpO1xyXG4gICAgICAgIC8vIGxvYWQgZmlsdGVyc1xyXG4gICAgICAgICQoXCIjZmlsdGVyc1wiKS5sb2FkKCcvdmlld3MvcHJvZHVjdHMvZmlsdGVycy5odG1sJyk7XHJcblxyXG4gICAgICAgIC8vIGxvYWQgcHJvZHVjdHNcclxuICAgICAgICBsb2FkUHJvZHVjdHModmlld0RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRQcm9kdWN0cyh2aWV3RGF0YSlcclxuICAgIHtcclxuICAgICAgICAkKFwiI3Byb2R1Y3RzXCIpLmxvYWQoJ3ZpZXdzL3Byb2R1Y3RzL3Byb2R1Y3RzLmh0bWwnLCBmdW5jdGlvbiAoKSB7IC8vIHdhYXIgaWQgPSAnY29tcG9uZW50JyBkb2UgLmxvYWQuLi4uLi5cclxuICAgICAgICAgICAgJC5lYWNoKHZpZXdEYXRhLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSBwcm9kdWN0XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdCA9ICQoJzxkaXY+JykuYXBwZW5kKCQoJyNwcm9kdWN0X19saXN0X19pdGVtJykuY2xvbmUoKSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0IGluZm9cclxuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X190aXRsZVwiKS5odG1sKHZhbHVlLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19zdWJ0aXRsZVwiKS5hcHBlbmQodmFsdWUuZ2VucmUgKyhcIiB8IFBFR0kgXCIpICsgdmFsdWUucGVnaV9hZ2UgKyhcIiB8IFwiKSsgUGxhdGZvcm1Mb2dvKHZhbHVlLnBsYXRmb3JtKSk7XHJcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9fZGVzY3JpcHRpb25cIikuaHRtbChDdXRTdHJpbmcodmFsdWUuZGVzY3JpcHRpb24pKTtcclxuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19wcmljZVwiKS5hcHBlbmQoKFwi4oKsIFwiKSt2YWx1ZS5wcmljZSk7XHJcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIjYnV0dG9uc19faW5mb1wiKS5hdHRyKFwiaHJlZlwiLCBcInByb2R1Y3QvXCIgKyB2YWx1ZS5lYW5fbnVtYmVyKVxyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHZhbHVlLmltYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3RfX2xpc3RcIikuYXBwZW5kKHByb2R1Y3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgbGlzdCBpdGVtLCBiZWNhdXNlIHRoaXMgaXRlbSBpcyBhbHdheXMgZW1wdHlcclxuICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0X19pdGVtXCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TaG93IG1vcmUvbGVzc1xyXG4gICAgZnVuY3Rpb24gQ3V0U3RyaW5nKHRleHQpe1xyXG4gICAgICAgIHZhciBTaG93QW1vdW50ID0gNTA7XHJcbiAgICAgICAgdmFyIFdvcmRzQXJyYXkgPSB0ZXh0LnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBpZihXb3Jkc0FycmF5Lmxlbmd0aD5TaG93QW1vdW50KXtcclxuICAgICAgICAgICAgdmFyIFNob3J0U3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yKGk9MDsgaTxTaG93QW1vdW50OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgU2hvcnRTdHJpbmcgKz0gV29yZHNBcnJheVtpXSArIFwiIFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBTaG9ydFN0cmluZytcIi4uLlwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vUGxhdGZvcm0gTG9nbydzXHJcbiAgICBmdW5jdGlvbiBQbGF0Zm9ybUxvZ28ocGxhdGZvcm1uYWFtKVxyXG4gICAge1xyXG4gICAgICAgIHBsYXRmb3JtbmFhbSA9IHBsYXRmb3JtbmFhbS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIHN3aXRjaCAocGxhdGZvcm1uYWFtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBcIlBTNFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3BzLnBuZycgLz5cIjtcclxuICAgICAgICAgICAgY2FzZSBcIlBDXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvd2luZG93cy5wbmcnIC8+XCI7XHJcbiAgICAgICAgICAgIGNhc2UgXCJYQk9YXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMveGJveC5wbmcnIC8+XCI7XHJcbiAgICAgICAgICAgIGNhc2UgXCJOSU5URU5ET1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL25pbnRlbmRvLnBuZycgLz5cIjtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwbGF0Zm9ybW5hYW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7IC8vIGlmICdkb2N1bWVudCByZWFkeScgcGVyZm9ybSBcImFjdGlvblwiXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0RmlsdGVyTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICAvLyBIaWVyIGhldCBmb3JtdWxpZXIgdmVyc3R1cmVuIGFscyB3ZSBvcCBlZW4gY2hlY2tib3ggZHJ1a2tlblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9mZigpLm9uKFwiY2hhbmdlXCIsIFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgJChcIiNwcm9kdWN0X2ZpbHRlclwiKS5zdWJtaXQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGRlIHByb2R1Y3RlbmxpanN0IGFscyBlZW4gd2FhcmRlIGluIGRlIHNsaWRlciB2ZXJhbmRlcmQoYWxsZSBtYW5pZXJlbilcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcImNoYW5nZSBrZXl1cFwiLCBcImlucHV0W25hbWU9cHJpY2UtbWF4XSwgaW5wdXRbbmFtZT1wcmljZS1taW5dXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmKCQoXCIjcHJpY2VtaW5cIikudmFsKCkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNwcmljZW1pblwiKS52YWwoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3RfZmlsdGVyXCIpLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI3Byb2R1Y3RfZmlsdGVyXCIsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIGxvYWRQcm9kdWN0czogbG9hZFByb2R1Y3RzLFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcclxuICAgICAgICBzZXRGaWx0ZXJMaXN0ZW5lcjogc2V0RmlsdGVyTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCJ2YXIgUGFnZVZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiV2Vsa29tIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL3BhZ2UvcGFnZS5odG1sJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodmlld0RhdGFbMF0udXNlcl90eXBlID09IFwiY3VzdG9tZXJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJChcIiN1c2VyLWJsb2NrXCIpLmFwcGVuZChcIjxoMT5KZSBsZWVzIGRpdCBhbGxlZW4gYWxzIGplIGVlbiBjdXN0b21lcjwvaDE+XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2aWV3RGF0YVswXS51c2VyX3R5cGUgPT0gXCJhZG1pblwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3VzZXItYmxvY2tcIikuYXBwZW5kKFwiPGgxPkplIGxlZXMgZGl0IGFsbGVlbiBhbHMgamUgZWVuIGFkbWluaXN0cmF0b3I8L2gxPlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFjdGlvbkxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgYWN0aW9ucyBvbiBzcGVjaWZpYyBldmVudHNcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIFJlZ2lzdGVyVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdUb1Nob3cpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIlJlZ2lzdHJlcmVuIC0gQVogR2FtZXNcIjtcclxuICAgICAgICBcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKHZpZXdUb1Nob3cpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gcmVnaXN0ZXIgZm9ybVxyXG4gICAgICAgIC8vIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInXHJcblxyXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInLCBwZXJmb3JtIGFjdGlvblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI3JlZ2lzdGVyZm9ybVwiLCBhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIFByb2R1Y3RWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcocHJvZHVjdClcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHByb2R1Y3QudGl0bGUgKyBcIiAtIEFaIEdhbWVzXCI7XHJcblxyXG4gICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3Mvc2luZ2xlX3Byb2R1Y3Qvc2luZ2xlX3Byb2R1Y3QuaHRtbCcsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHByb2R1Y3QuaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X190aXRsZVwiKS5odG1sKHByb2R1Y3QudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19wcmljZVwiKS5odG1sKFwi4oKsIFwiICsgcHJvZHVjdC5wcmljZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0X19lYW5cIikuYXBwZW5kKHByb2R1Y3QuZWFuX251bWJlcik7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3RfX3BsYXRmb3JtXCIpLmFwcGVuZChwcm9kdWN0LnBsYXRmb3JtKTtcclxuICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdF9fcHVibGlzaGVyXCIpLmFwcGVuZChwcm9kdWN0LnB1Ymxpc2hlcik7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3RfX3BlZ2lcIikuYXBwZW5kKHByb2R1Y3QucGVnaV9hZ2UpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0X19nZW5yZVwiKS5hcHBlbmQocHJvZHVjdC5nZW5yZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShwcm9kdWN0LnJlbGVhc2VfZGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1vbnRocyA9IFtcImphbnVhcmlcIiwgXCJmZWJydWFyaVwiLCBcIm1hYXJ0XCIsIFwiYXByaWxcIiwgXCJtZWlcIiwgXCJqdW5pXCIsIFwianVsaVwiLCBcImF1Z3VzdHVzXCIsIFwic2VwdGVtYmVyXCIsIFwib2t0b2JlclwiLCBcIm5vdmVtYmVyXCIsIFwiZGVjZW1iZXJcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5saXByb2R1Y3RfX3JlbGVhc2VkYXRlXCIpLmFwcGVuZChkLmdldERheSgpICsgXCIgXCIgKyBtb250aHNbZC5nZXRNb250aCgpXSArIFwiIFwiICsgZC5nZXRGdWxsWWVhcigpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2Rlc2NyXCIpLmh0bWwocHJvZHVjdC5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gcmVnaXN0ZXIgZm9ybVxyXG4gICAgICAgIC8vIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInXHJcblxyXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInLCBwZXJmb3JtIGFjdGlvblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCIiLCJ2YXIgUmVzZXRQYXNzd29yZFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3VG9TaG93KVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJJbmxvZ2dlbiAtIEFaIEdhbWVzXCI7XHJcblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQodmlld1RvU2hvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWN0aW9uTGlzdGVuZXIgdGhhdCBleGVjdXRlcyBhY3Rpb25zIG9uIHNwZWNpZmljIGV2ZW50c1xyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoZXZlbnRIYW5kbGVyKVxyXG4gICAge1xyXG4gICAgICAgIC8vJChkb2N1bWVudCkucmVhZHkoZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNyZXNldGZvcm1cIiwgZXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxyXG4gICAgfVxyXG59O1xyXG5cclxuLypcclxudmFyIFJlc2V0UGFzc3dvcmRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgndmlld3MvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLmh0bWwnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBY3Rpb25MaXN0ZW5lciB0aGF0IGV4ZWN1dGVzIGFjdGlvbnMgb24gc3BlY2lmaWMgZXZlbnRzXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihldmVudEhhbmRsZXIpXHJcbiAgICB7XHJcbiAgICAgICAgLy8kKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI3Jlc2V0Zm9ybVwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07XHJcbiovIl19
=======
function CartHelper(){this.removeProduct=function(e){},this.addProduct=function(e){}}function CookieHelper(){this.getCookie=function(e){for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var r=t[n].split("=");if(r[0].trim()==e)return r[1]}},this.createCookie=function(e,t){var n=new Date;n.setTime(n.getTime()+864e5);var r="expires="+n.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"},this.deleteCookie=function(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}}function showLoadScreen(){$("#component").html('<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div> </div>')}var Router=function(){function e(e,o){if(0!=t(e)){var i=n(e);switch(i[0]){case"":case"index.html":case"products":new ProductsController(new ProductsViewHelper,new ProductsModel).main();break;case"product":new ProductController(new ProductViewHelper,new ProductModel(i[1])).main();break;case"register":new RegisterController(new RegisterViewHelper,new RegisterModel).main();break;case"login":new LoginController(new LoginViewHelper,new LoginModel).main();break;case"logout":new LogoutController(new LogoutViewHelper,new LogoutModel).main();break;case"register":new RegisterController(new RegisterViewHelper,new RegisterModel).main();break;case"resetpassword":new ResetPasswordController(new ResetPasswordViewHelper,new ResetPasswordModel).main();break;default:new ErrorController(new ErrorViewHelper).main()}0!=o&&(""==e&&(e="index.html"),r({},"A-Z Games",e),window.scrollTo(0,0))}}function t(e){return e.indexOf("http")==-1&&e.indexOf("https")==-1&&e.indexOf("www")==-1||(window.location=e,!1)}function n(e){return 0==e.indexOf("/")&&(e=e.substring(1)),null!=this.baseUrl&&e.indexOf(this.baseUrl)!=-1&&(e=e.substring(e.indexOf(this.baseUrl)+this.baseUrl.length)),e.split(/\/(.+)?/)}function r(e,t,n){window.history.pushState(e,t,n)}return baseUrl="project-webshop/",{route:e}};$(document).ready(function(){function e(e){$(e).toggleClass("sidebar--open"),$(".overlay").toggleClass("overlay--visible"),$("body").toggleClass("sidebar--open")}$(".sidebar-toggle").click(function(t){t.preventDefault();var n=$(this).data("sidebar");e($("#"+n))}),$(".sidebar__close").click(function(t){e($(this).parent().parent())}),$(".overlay").click(function(t){e($(".sidebar"))})});var CookieHelper=new CookieHelper,CartModel=function(){function e(e){var t=CookieHelper.getCookie("cart");void 0!=t&&e(JSON.parse(t))}function t(e,t){$.ajax({url:"https://api.az-games.nl/products/"+e,type:"get",contentType:"json",success:function(e){cart={ean_number:e[0].ean_number,title:e[0].title,price:e[0].price,image:e[0].image},t(cart);var n=CookieHelper.getCookie("cart");void 0==n?CookieHelper.createCookie("cart",JSON.stringify([cart])):(n=JSON.parse(n),n.push(cart),CookieHelper.createCookie("cart",JSON.stringify(n)))},error:function(e,t,n){$("#component").load("/views/error/error.html")}})}function n(e){for(cart=JSON.parse(CookieHelper.getCookie("cart")),i=0;i<cart.length;i++)if(cart[i].ean_number==e){cart.splice(i,1);break}CookieHelper.createCookie("cart",JSON.stringify(cart))}return{getCart:e,addProduct:t,removeProduct:n}},LoginModel=function(){function e(e,t,n){$.ajax({url:"https://api.az-games.nl/user/login",type:"GET",dataType:"json",headers:{Authorization:"Basic "+btoa(e+":"+t)},success:function(e){CookieHelper.createCookie("access_token",e.access_token),CookieHelper.createCookie("user_id",e.user_id),n(e)},error:function(e,t,n){$("#error_message").show()}})}return{login:e}},LogoutModel=function(){function e(e){function t(e){for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var r=t[n].split("=");if(r[0].trim()==e)return r[1]}}$.ajax({url:"https://api.az-games.nl/user/logout",type:"post",dataType:"json",data:JSON.stringify({user_id:t("user_id")}),success:function(t){document.cookie="access_token=",document.cookie="user_id=",e(t)},error:function(e,t,n){$("#error_message").show()}})}return{logout:e}},PageModel=function(){function e(e){$.ajax({url:"https://api.az-games.nl/user",type:"get",dataType:"json",headers:{Authorization:"Bearer "+t("access_token")},success:function(t){e(t)},error:function(e,t,n){$("#component").load("/views/error/error.html")}})}function t(e){for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var r=t[n].split("=");if(r[0]==e)return r[1]}}return{getPage:e}},ProductsModel=function(){function e(e,t){$.ajax({url:"https://api.az-games.nl/products?"+e,type:"get",dataType:"json",success:function(e){t(e)},error:function(e,t,n){$("#component").load("views/error/error.html")}})}return{getPage:e}},RegisterModel=function(){function e(e,t){$.ajax({url:"https://api.az-games.nl/user/register",type:"post",dataType:"json",data:JSON.stringify({e_mail:e.e_mailadres,password:e.wachtwoord,first_name:e.voornaam,insertion:e.tussenvoegsel,surname:e.achternaam,gender:e.gender,date_of_birth:e.birth_date,phone_number:e.mobiel_nummer,secret_question:e.security_question,secret_question_answer:e.security_answer,postal_code:e.postcode,number:e.huisnummer,street_name:e.straatnaam,city:e.plaats}),success:function(e){t(e)},error:function(e,t,n){$("#regi_api_error_message").show()}})}return{register:e}},ResetPasswordModel=function(){function e(e,t){console.log(e),$.ajax({url:"https://api.az-games.nl/user/resetpassword",type:"post",dataType:"json",data:JSON.stringify({email:e.e_mailadres,secret_question_answer:e.security_answer,secret_question:e.security_question,new_password:e.wachtwoord,repeat_password:e.wachtwoord2}),success:function(e){t(e)},error:function(e,t,n){$("#reset_password_api_error_message").show()}})}return{resetpassword:e}},ProductModel=function(e){function t(t){$.ajax({url:"https://api.az-games.nl/products/"+e,type:"get",dataType:"json",success:function(e){t(e[0])},error:function(e,t,n){$("#component").load("/error.html")}})}return{GetProductInfo:t}},AdminController=function(e,t){function n(){t.getUserIds(e.showUserIds)}return{main:n}},CartController=function(e,t){function n(){s.getCart(function(e){a.setView(e)})}function r(e){s.addProduct(e,function(e){a.addItem(e)})}function o(e){s.removeProduct(e,function(e){})}function i(){a.setActionListener(n),a.setAddProductListener(r),a.setRemoveListener(o)}var s=t,a=e;return{main:i}},ErrorController=function(e){function t(){n.setView()}var n=e;return{main:t}},LoginController=function(e,t){function n(e){e.preventDefault(),e.stopImmediatePropagation();var t={};$.each($(this).serializeArray(),function(e,n){t[n.name]=n.value}),o.login(t.email,t.password,function(e){$("#inloggen_text").hide(),$("#uitloggen_text").show(),new PageController(new PageViewHelper,new PageModel).main()})}function r(){i.setView(),i.setActionListener(n)}var o=t,i=e;return{main:r}},LogoutController=function(e,t){function n(e){o.logout(function(e){$("#inloggen_text").show(),$("#uitloggen_text").hide(),i.setView()})}function r(){i.setActionListener(n)}var o=t,i=e;return{main:r}},PageController=function(e,t){function n(e){o.getPage(function(e){i.setView(e)})}function r(){i.setActionListener(n)}var o=t,i=e;return{main:r}},ProductsController=function(e,t){function n(){i.getPage("",function(e){s.setView(e)})}function r(e){e.preventDefault();var t=$(this).serialize();i.getPage(t,function(e){s.loadProducts(e)})}function o(){s.setActionListener(n),s.setFilterListener(r)}var i=t,s=e;return{main:o}},RegisterController=function(e,t){function n(){console.log("in actionPerformed"),event.preventDefault(),$("#regi_api_error_message").hide(),$("#ww2_error_message").hide();var e={};$.each($(this).serializeArray(),function(t,n){e[n.name]=n.value}),e.birth_date=e.jaar+"-"+e.maand+"-"+e.dag,console.log(e);var t=!1,n=["voornaam","achternaam","postcode","huisnummer","e_mailadres","wachtwoord","wachtwoord2","security_answer"];$.each(n,function(e,t){$("#"+t).removeClass("invalid")}),$.each(n,function(n,r){""==e[r]&&($("#"+r).addClass("invalid"),t=!0)}),t&&(window.scrollTo(0,0),$("#register_error_message").show());var r=!1;return e.wachtwoord!=e.wachtwoord2&&(r=!0,$("#ww2_error_message").show(),$("#wachtwoord").addClass("invalid"),$("#wachtwoord2").addClass("invalid")),!t&&!r&&(console.log("continued"),void o.register(e,function(e){i.setView("/views/register/after_register.html")}))}function r(){i.setView("/views/register/register.html"),i.setActionListener(n)}var o=t,i=e;return{main:r}},ResetPasswordController=function(e,t){function n(){console.log("in actionPerformed"),event.preventDefault(),$("#reset_password_api_error_message").hide(),$("#ww2_error_message").hide();var e={};$.each($(this).serializeArray(),function(t,n){e[n.name]=n.value});var t=!1,n=["wachtwoord","wachtwoord2","e_mailadres","security_answer"];$.each(n,function(e,t){$("#"+t).removeClass("invalid")}),$.each(n,function(n,r){""==e[r]&&($("#"+r).addClass("invalid"),t=!0)}),t&&(window.scrollTo(0,0),$("#reset_error_message").show());var r=!1;return e.wachtwoord!=e.wachtwoord2&&(r=!0,$("#ww2_error_message").show(),$("#wachtwoord").addClass("invalid"),$("#wachtwoord2").addClass("invalid")),!t&&!r&&(console.log("continued"),void o.resetpassword(e,function(e){i.setView("views/resetpassword/after_reset.html")}))}function r(){i.setView("views/resetpassword/resetpassword.html"),i.setActionListener(n)}var o=t,i=e;return{main:r}},ProductController=function(e,t){function n(t){e.setView(t)}function r(){t.GetProductInfo(n)}return{main:r,showView:n}},ErrorViewHelper=function(){function e(){document.title="Oeps - AZ Games",$("#component").load("/views/error/error.html")}function t(e){$(document).ready(e)}return{setView:e,setActionListener:t}},CartViewHelper=function(){function e(e){""!=e&&e.forEach(function(e,t){n(e)})}function t(e){e=parseFloat(e)+parseFloat($(".cart__total .price").html().substr(1)),$(".cart__total .price").html("€"+parseFloat(e).toFixed(2))}function n(e){var n=$("<div>").html($(".sidebar__content__tmp").html());n.find(".cart__item__title").html(e.title),n.find(".cart__item__price").html("€"+e.price),n.find(".cart__item__image img").attr("src",e.image),n.find(".cart__item").attr("data-id",e.ean_number),$(".cart").append(n);var r=$(".cart_button .count").html();$(".cart_button .count").html(parseInt(r)+1),t(e.price)}function r(e){$(document).ready(e)}function o(e){$("body").on("click",".addtocart",function(t){t.preventDefault();var n=$(this).data("id");e(n)})}function i(e){$("body").on("click",".cart__item__remove",function(n){var r=$(this).parent(),o=$(this).parent().data("id");$(r).addClass("cart__item--removed"),$(r).on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",function(){$(this).remove()});var i=$(".cart_button .count").html();$(".cart_button .count").html(parseInt(i)-1),e(o),t(-$(r).find(".cart__item__price").html().substr(1))})}return{setView:e,addItem:n,updateTotalPrice:t,setActionListener:r,setAddProductListener:o,setRemoveListener:i}},LogoutViewHelper=function(){function e(){document.title="Uitloggen - AZ Games",$("#component").load("/views/logout/logout.html")}function t(e){$(document).ready(e)}return{setView:e,setActionListener:t}},LoginViewHelper=function(){function e(){document.title="Inloggen - AZ Games",$("#component").load("/views/login/login.html")}function t(e){$("#component").on("submit","#loginform",e)}return{setView:e,setActionListener:t}},PageViewHelper=function(){function e(e){document.title="Welkom - AZ Games",$("#component").load("/views/page/page.html",function(){"customer"==e[0].user_type&&$("#user-block").append("<h1>Je lees dit alleen als je een customer bent"),"admin"==e[0].user_type&&$("#user-block").append("<h1>Je lees dit alleen als je een administrator bent")})}function t(e){$(document).ready(e)}return{setView:e,setActionListener:t}},ProductsViewHelper=function(){function e(e){document.title="Producten - AZ Games",$("#component").html('<div class="col-12"><div class="col-3" id="filters"></div><div class="col-9" id="products"></div></div>'),$("#filters").load("/views/products/filters.html"),t(e)}function t(e){$("#products").load("/views/products/products.html",function(){$.each(e,function(e,t){var o=$("<div>").append($("#product__list__item").clone());$(o).find(".product__title").html(t.title),$(o).find(".product__subtitle").append(t.genre+" | PEGI "+t.pegi_age+" | "+r(t.platform)),$(o).find(".product__description").html(n(t.description)),$(o).find(".product__price").append("€ "+t.price),$(o).find("#buttons__info").attr("href","product/"+t.ean_number),$(o).find(".product__image img").attr("src",t.image),$(o).find(".addtocart").attr("data-id",t.ean_number),$("#product__list").append(o)}),$("#product__list__item").first().remove()})}function n(e){var t=50,n=e.split(" ");if(n.length>t){var r="";for(i=0;i<t;i++)r+=n[i]+" ";return r+"..."}return e}function r(e){switch(e=e.toUpperCase()){case"PS4":return"<img src='/resources/images/icons/ps.png' />";case"PC":return"<img src='/resources/images/icons/windows.png' />";case"XBOX":return"<img src='/resources/images/icons/xbox.png' />";case"NINTENDO":return"<img src='/resources/images/icons/nintendo.png' />";default:return e}}function o(e){$(document).ready(e)}function s(e){$("#component").off().on("change","input[type=checkbox]",function(e){$("#product_filter").submit()}),$("#component").on("change keyup","input[name=price-max], input[name=price-min]",function(e){null==$("#pricemin").val()?$("#pricemin").val(0):$("#product_filter").submit()}),$("#component").on("submit","#product_filter",e)}return{setView:e,loadProducts:t,setActionListener:o,setFilterListener:s}},RegisterViewHelper=function(){function e(e){document.title="Registreren - AZ Games",$("#component").load(e)}function t(e){$("#component").on("submit","#registerform",e)}return{setView:e,setActionListener:t}},ResetPasswordViewHelper=function(){function e(e){document.title="Inloggen - AZ Games",$("#component").load(e)}function t(e){$("#component").on("submit","#resetform",e)}return{setView:e,setActionListener:t}},ProductViewHelper=function(){function e(e){document.title=e.title+" - AZ Games",$("#component").load("/views/single_product/single_product.html",function(){$(".singleproduct__image img").attr("src",e.image),$(".singleproduct__title").html(e.title),$(".singleproduct__price").html("€ "+e.price),$(".singleproduct__ean").append(e.ean_number),$(".singleproduct__platform").append(e.platform),$(".singleproduct__publisher").append(e.publisher),$(".singleproduct__pegi").append(e.pegi_age),$(".singleproduct__genre").append(e.genre),$(".singleproduct__descr").html(e.description),$(".addtocart").attr("data-id",e.ean_number);var t=new Date(e.release_date),n=["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"];$(".singleproduct__releasedate").append(t.getDay()+" "+n[t.getMonth()]+" "+t.getFullYear())})}function t(e){$(document).ready(e)}return{setView:e,setActionListener:t}};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMvY2FydC5qcyIsImhlbHBlcnMvY29va2llLmpzIiwiaGVscGVycy9nbG9iYWwuanMiLCJyb3V0ZXIuanMiLCJzaWRlYmFyLmpzIiwiY2FydF9tb2RlbC5qcyIsImxvZ2luX21vZGVsLmpzIiwibG9nb3V0X21vZGVsLmpzIiwicGFnZV9tb2RlbC5qcyIsInByb2R1Y3RzX21vZGVsLmpzIiwicmVnaXN0ZXJfbW9kZWwuanMiLCJyZXNldHBhc3N3b3JkX21vZGVsLmpzIiwic2luZ2xlX3Byb2R1Y3RfbW9kZWwuanMiLCJhZG1pbl9jb250cm9sbGVyLmpzIiwiY2FydF9jb250cm9sbGVyLmpzIiwiZXJyb3JfY29udHJvbGxlci5qcyIsImxvZ2luX2NvbnRyb2xsZXIuanMiLCJsb2dvdXRfY29udHJvbGxlci5qcyIsInBhZ2VfY29udHJvbGxlci5qcyIsInByb2R1Y3RzX2NvbnRyb2xsZXIuanMiLCJyZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwicmVzZXRwYXNzd29yZF9jb250cm9sbGVyLmpzIiwic2luZ2xlX3Byb2R1Y3RfY29udHJvbGxlci5qcyIsImVycm9yL2Vycm9yX3ZpZXcuanMiLCJjYXJ0L2NhcnRfdmlldy5qcyIsImxvZ291dC9sb2dvdXRfdmlldy5qcyIsImxvZ2luL2xvZ2luX3ZpZXcuanMiLCJwYWdlL3BhZ2Vfdmlldy5qcyIsInByb2R1Y3RzL3Byb2R1Y3RzX3ZpZXcuanMiLCJyZWdpc3Rlci9yZWdpc3Rlcl92aWV3LmpzIiwicmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkX3ZpZXcuanMiLCJzaW5nbGVfcHJvZHVjdC9zaW5nbGVfcHJvZHVjdF92aWV3LmpzIl0sIm5hbWVzIjpbIkNhcnRIZWxwZXIiLCJ0aGlzIiwicmVtb3ZlUHJvZHVjdCIsImlkIiwiYWRkUHJvZHVjdCIsIkNvb2tpZUhlbHBlciIsImdldENvb2tpZSIsIm5hbWUiLCJjb29raWVzIiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJ0cmltIiwiY3JlYXRlQ29va2llIiwidmFsdWUiLCJkIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwiZXhwaXJlcyIsInRvVVRDU3RyaW5nIiwiZGVsZXRlQ29va2llIiwic2hvd0xvYWRTY3JlZW4iLCIkIiwiaHRtbCIsIlJvdXRlciIsInJvdXRlIiwidXJsIiwiaGlzdG9yeSIsImlzSW50ZXJuYWwiLCJwYXJ0aWNsZXMiLCJnZXRQYXJ0aWNsZXMiLCJQcm9kdWN0c0NvbnRyb2xsZXIiLCJQcm9kdWN0c1ZpZXdIZWxwZXIiLCJQcm9kdWN0c01vZGVsIiwibWFpbiIsIlByb2R1Y3RDb250cm9sbGVyIiwiUHJvZHVjdFZpZXdIZWxwZXIiLCJQcm9kdWN0TW9kZWwiLCJSZWdpc3RlckNvbnRyb2xsZXIiLCJSZWdpc3RlclZpZXdIZWxwZXIiLCJSZWdpc3Rlck1vZGVsIiwiTG9naW5Db250cm9sbGVyIiwiTG9naW5WaWV3SGVscGVyIiwiTG9naW5Nb2RlbCIsIkxvZ291dENvbnRyb2xsZXIiLCJMb2dvdXRWaWV3SGVscGVyIiwiTG9nb3V0TW9kZWwiLCJSZXNldFBhc3N3b3JkQ29udHJvbGxlciIsIlJlc2V0UGFzc3dvcmRWaWV3SGVscGVyIiwiUmVzZXRQYXNzd29yZE1vZGVsIiwiRXJyb3JDb250cm9sbGVyIiwiRXJyb3JWaWV3SGVscGVyIiwid3JpdGVIaXN0b3J5Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJpbmRleE9mIiwibG9jYXRpb24iLCJzdWJzdHJpbmciLCJiYXNlVXJsIiwib2JqZWN0IiwidGl0bGUiLCJwdXNoU3RhdGUiLCJyZWFkeSIsInRvZ2dsZVNpZGViYXIiLCJzaWRlYmFyIiwidG9nZ2xlQ2xhc3MiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJwYXJlbnQiLCJDYXJ0TW9kZWwiLCJnZXRDYXJ0IiwiY2FsbGJhY2siLCJjYXJ0IiwidW5kZWZpbmVkIiwiSlNPTiIsInBhcnNlIiwiYWpheCIsInR5cGUiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJlYW5fbnVtYmVyIiwicHJpY2UiLCJpbWFnZSIsImN1cnJlbnRDYXJ0Iiwic3RyaW5naWZ5IiwicHVzaCIsImVycm9yIiwieGhyIiwic3RhdHVzIiwibG9hZCIsInNwbGljZSIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsImRhdGFUeXBlIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJidG9hIiwiYWNjZXNzX3Rva2VuIiwidXNlcl9pZCIsInNob3ciLCJsb2dvdXQiLCJQYWdlTW9kZWwiLCJnZXRQYWdlIiwiZmlsdGVyIiwicmVnaXN0ZXIiLCJmb3JtRGF0YSIsImVfbWFpbCIsImVfbWFpbGFkcmVzIiwid2FjaHR3b29yZCIsImZpcnN0X25hbWUiLCJ2b29ybmFhbSIsImluc2VydGlvbiIsInR1c3NlbnZvZWdzZWwiLCJzdXJuYW1lIiwiYWNodGVybmFhbSIsImdlbmRlciIsImRhdGVfb2ZfYmlydGgiLCJiaXJ0aF9kYXRlIiwicGhvbmVfbnVtYmVyIiwibW9iaWVsX251bW1lciIsInNlY3JldF9xdWVzdGlvbiIsInNlY3VyaXR5X3F1ZXN0aW9uIiwic2VjcmV0X3F1ZXN0aW9uX2Fuc3dlciIsInNlY3VyaXR5X2Fuc3dlciIsInBvc3RhbF9jb2RlIiwicG9zdGNvZGUiLCJudW1iZXIiLCJodWlzbnVtbWVyIiwic3RyZWV0X25hbWUiLCJzdHJhYXRuYWFtIiwiY2l0eSIsInBsYWF0cyIsInJlc2V0cGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwibmV3X3Bhc3N3b3JkIiwicmVwZWF0X3Bhc3N3b3JkIiwid2FjaHR3b29yZDIiLCJlYW4iLCJHZXRQcm9kdWN0SW5mbyIsIkFkbWluQ29udHJvbGxlciIsInZpZXdIZWxwZXIiLCJtb2RlbCIsImdldFVzZXJJZHMiLCJzaG93VXNlcklkcyIsIkNhcnRDb250cm9sbGVyIiwiTW9kZWwiLCJWaWV3SGVscGVyIiwic2V0VmlldyIsImFkZEl0ZW0iLCJzZXRBY3Rpb25MaXN0ZW5lciIsInNldEFkZFByb2R1Y3RMaXN0ZW5lciIsInNldFJlbW92ZUxpc3RlbmVyIiwiYWN0aW9uUGVyZm9ybWVkIiwiZXZlbnQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJlYWNoIiwic2VyaWFsaXplQXJyYXkiLCJmaWVsZCIsImhpZGUiLCJQYWdlQ29udHJvbGxlciIsIlBhZ2VWaWV3SGVscGVyIiwiVmlldyIsImZpbHRlclByb2R1Y3RzIiwiZmlsdGVycyIsInNlcmlhbGl6ZSIsImxvYWRQcm9kdWN0cyIsInNldEZpbHRlckxpc3RlbmVyIiwiamFhciIsIm1hYW5kIiwiZGFnIiwibWFuZGF0b3J5RmllbGRNaXNzZXMiLCJtYW5kYXRvcnlGaWVsZHMiLCJtYW5GaWVsZCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJwYXNzd29yZHNOb3RJZGVudGljYWwiLCJzaG93VmlldyIsImV2ZW50SGFuZGxlciIsIkNhcnRWaWV3SGVscGVyIiwidmlld0RhdGEiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwidXBkYXRlVG90YWxQcmljZSIsIm5ld1ByaWNlIiwicGFyc2VGbG9hdCIsInN1YnN0ciIsInRvRml4ZWQiLCJjYXJ0SXRlbSIsImZpbmQiLCJhdHRyIiwiYXBwZW5kIiwiYW1vdW50IiwicGFyc2VJbnQiLCJhY3Rpb24iLCJhZGRUb0NhcnQiLCJvbiIsInByb2R1Y3RfaWQiLCJjYXJ0aXRlbSIsInJlbW92ZSIsInVzZXJfdHlwZSIsImtleSIsInByb2R1Y3QiLCJjbG9uZSIsImdlbnJlIiwicGVnaV9hZ2UiLCJQbGF0Zm9ybUxvZ28iLCJwbGF0Zm9ybSIsIkN1dFN0cmluZyIsImRlc2NyaXB0aW9uIiwiZmlyc3QiLCJ0ZXh0IiwiU2hvd0Ftb3VudCIsIldvcmRzQXJyYXkiLCJTaG9ydFN0cmluZyIsInBsYXRmb3JtbmFhbSIsInRvVXBwZXJDYXNlIiwib2ZmIiwic3VibWl0IiwidmFsIiwidmlld1RvU2hvdyIsInB1Ymxpc2hlciIsInJlbGVhc2VfZGF0ZSIsIm1vbnRocyIsImdldERheSIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiXSwibWFwcGluZ3MiOiJBQUdBLFFBQUFB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SUEsT0FDQS9DLFFBQUFBLEVBQ0FFLGtCQUFBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEhlbHBlciBmb3IgY2FydCBhY3Rpb25zXG4gKi9cbmZ1bmN0aW9uIENhcnRIZWxwZXIoKVxue1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgYSBjb29raWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgIFByb2RjdXQgSUQgdG8gcmVtb3ZlIGZvbSB0aGUgY2FyXG4gICAgICogXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMucmVtb3ZlUHJvZHVjdCA9IGZ1bmN0aW9uKGlkKVxuICAgIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIG5ldyBwcm9kdWN0IHRvIHRoZSBjYXJ0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFByb2R1Y3QgSUQgdG8gYWRkXG4gICAgICovXG4gICAgdGhpcy5hZGRQcm9kdWN0ID0gZnVuY3Rpb24oaWQpXG4gICAge1xuICAgIH1cbn0iLCIvKipcbiAqIEhlbHBlciBmb3IgZmluZGluZywgY3JlYXRpbmcgYW5kIGRlbGV0aW5nIGNvb2tpZXNcbiAqL1xuZnVuY3Rpb24gQ29va2llSGVscGVyKClcbntcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHZhbHVlIG9mIGEgY29va2llXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgIE5hbWUgb2YgdGhlIGNvb2tpZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmdldENvb2tpZSA9IGZ1bmN0aW9uKG5hbWUpXG4gICAge1xuICAgICAgICB2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGNvb2tpZSA9IGNvb2tpZXNbaV0uc3BsaXQoXCI9XCIpO1xuXG4gICAgICAgICAgICBpZiAoY29va2llWzBdLnRyaW0oKSA9PSBuYW1lKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb29raWVbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBjb29raWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgIE5hbWUgb2YgdGhlIGNvb2tpZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAgVmFsdWUgb2YgdGhlIGNvb2tpZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdGhpcy5jcmVhdGVDb29raWUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSlcbiAgICB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcbiAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgKDEqMjQqNjAqNjAqMTAwMCkpO1xuICAgICAgICB2YXIgZXhwaXJlcyA9IFwiZXhwaXJlcz1cIisgZC50b1VUQ1N0cmluZygpO1xuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPScgKyB2YWx1ZSArICc7JyArIGV4cGlyZXMgKyAnO3BhdGg9Lyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGEgY29va2llIGFuZCBpdCdzIHZhbHVlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgIE5hbWUgb2YgdGhlIGNvb2tpZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdGhpcy5kZWxldGVDb29raWUgPSBmdW5jdGlvbihuYW1lKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UOyc7XG4gICAgfVxufSIsInZhciBDb29raWVIZWxwZXIgPSBuZXcgQ29va2llSGVscGVyKCk7XG5cbmZ1bmN0aW9uIHNob3dMb2FkU2NyZWVuKClcbntcbiAgICAkKFwiI2NvbXBvbmVudFwiKS5odG1sKCc8ZGl2IGNsYXNzPVwic3Bpbm5lclwiPjxkaXYgY2xhc3M9XCJib3VuY2UxXCI+PC9kaXY+PGRpdiBjbGFzcz1cImJvdW5jZTJcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYm91bmNlM1wiPjwvZGl2PiA8L2Rpdj4nKTtcbn0iLCJ2YXIgUm91dGVyID0gZnVuY3Rpb24gKClcbntcbiAgICBiYXNlVXJsID0gXCJwcm9qZWN0LXdlYnNob3AvXCI7XG5cbiAgICBmdW5jdGlvbiByb3V0ZSh1cmwsIGhpc3RvcnkpXG4gICAge1xuICAgICAgICBpZiAoaXNJbnRlcm5hbCh1cmwpID09IGZhbHNlKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFydGljbGVzID0gZ2V0UGFydGljbGVzKHVybCk7XG5cbiAgICAgICAgc3dpdGNoKHBhcnRpY2xlc1swXSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSBcIlwiOlxuICAgICAgICAgICAgY2FzZSBcImluZGV4Lmh0bWxcIjpcbiAgICAgICAgICAgIGNhc2UgXCJwcm9kdWN0c1wiOlxuICAgICAgICAgICAgICAgIG5ldyBQcm9kdWN0c0NvbnRyb2xsZXIobmV3IFByb2R1Y3RzVmlld0hlbHBlcigpLCBuZXcgUHJvZHVjdHNNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicHJvZHVjdFwiOlxuICAgICAgICAgICAgICAgIG5ldyBQcm9kdWN0Q29udHJvbGxlcihuZXcgUHJvZHVjdFZpZXdIZWxwZXIoKSwgbmV3IFByb2R1Y3RNb2RlbChwYXJ0aWNsZXNbMV0pKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVnaXN0ZXJcIjpcbiAgICAgICAgICAgICAgICBuZXcgUmVnaXN0ZXJDb250cm9sbGVyKG5ldyBSZWdpc3RlclZpZXdIZWxwZXIoKSwgbmV3IFJlZ2lzdGVyTW9kZWwoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxvZ2luXCI6XG4gICAgICAgICAgICAgICAgbmV3IExvZ2luQ29udHJvbGxlcihuZXcgTG9naW5WaWV3SGVscGVyKCksIG5ldyBMb2dpbk1vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsb2dvdXRcIjpcbiAgICAgICAgICAgICAgICBuZXcgTG9nb3V0Q29udHJvbGxlcihuZXcgTG9nb3V0Vmlld0hlbHBlcigpLCBuZXcgTG9nb3V0TW9kZWwoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJlZ2lzdGVyXCI6XG4gICAgICAgICAgICAgICAgbmV3IFJlZ2lzdGVyQ29udHJvbGxlcihuZXcgUmVnaXN0ZXJWaWV3SGVscGVyKCksIG5ldyBSZWdpc3Rlck1vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyZXNldHBhc3N3b3JkXCI6XG4gICAgICAgICAgICAgICAgbmV3IFJlc2V0UGFzc3dvcmRDb250cm9sbGVyKG5ldyBSZXNldFBhc3N3b3JkVmlld0hlbHBlcigpLCBuZXcgUmVzZXRQYXNzd29yZE1vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgbmV3IEVycm9yQ29udHJvbGxlcihuZXcgRXJyb3JWaWV3SGVscGVyKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoaXN0b3J5ICE9IGZhbHNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodXJsID09IFwiXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdXJsID0gXCJpbmRleC5odG1sXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdyaXRlSGlzdG9yeSh7fSwgXCJBLVogR2FtZXNcIiwgdXJsKVxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNJbnRlcm5hbCh1cmwpXG4gICAge1xuICAgICAgICBpZiAodXJsLmluZGV4T2YoXCJodHRwXCIpICE9IC0xIHx8IHVybC5pbmRleE9mKFwiaHR0cHNcIikgIT0gLTEgfHwgdXJsLmluZGV4T2YoXCJ3d3dcIikgIT0gLTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGFydGljbGVzKHVybClcbiAgICB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgL1xuICAgICAgICBpZiAodXJsLmluZGV4T2YoXCIvXCIpID09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIGJhc2UgdXJsIHNldCwgcmVtb3ZlIHRoZSBiYXNlIHVybFxuICAgICAgICBpZiAodGhpcy5iYXNlVXJsICE9IG51bGwgJiYgdXJsLmluZGV4T2YodGhpcy5iYXNlVXJsKSAhPSAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZyh1cmwuaW5kZXhPZih0aGlzLmJhc2VVcmwpICsgdGhpcy5iYXNlVXJsLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsLnNwbGl0KC9cXC8oLispPy8pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd3JpdGVIaXN0b3J5KG9iamVjdCwgdGl0bGUsIHVybClcbiAgICB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShvYmplY3QsIHRpdGxlLCB1cmwpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRlOiByb3V0ZVxuICAgIH1cbn0iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgJChcIi5zaWRlYmFyLXRvZ2dsZVwiKS5jbGljayhmdW5jdGlvbiAoZSlcbiAgICB7XG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBjbGljayBhY3Rpb25cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIElkIG9mIHRoZSBzaWRlYmFyIHRvIHRvZ2dsZVxuICAgICAgICB2YXIgc2lkZWJhciA9ICQodGhpcykuZGF0YShcInNpZGViYXJcIik7XG5cbiAgICAgICAgdG9nZ2xlU2lkZWJhcigkKFwiI1wiICsgc2lkZWJhcikpO1xuICAgIH0pO1xuXG4gICAgJChcIi5zaWRlYmFyX19jbG9zZVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICB0b2dnbGVTaWRlYmFyKCQodGhpcykucGFyZW50KCkucGFyZW50KCkpO1xuICAgIH0pXG5cbiAgICAkKFwiLm92ZXJsYXlcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigkKFwiLnNpZGViYXJcIikpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlU2lkZWJhcihzaWRlYmFyKVxuICAgIHtcbiAgICAgICAgJChzaWRlYmFyKS50b2dnbGVDbGFzcyhcInNpZGViYXItLW9wZW5cIik7XG4gICAgICAgICQoXCIub3ZlcmxheVwiKS50b2dnbGVDbGFzcyhcIm92ZXJsYXktLXZpc2libGVcIik7XG4gICAgICAgICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwic2lkZWJhci0tb3BlblwiKTtcbiAgICB9XG59KTsiLCJ2YXIgQ2FydE1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIC8qKlxuICAgICAqIEdldCBhbGwgY2FydCBpdGVtc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldENhcnQoY2FsbGJhY2spXG4gICAge1xuICAgICAgICB2YXIgY2FydCA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJjYXJ0XCIpO1xuXG4gICAgICAgIGlmIChjYXJ0ICE9IHVuZGVmaW5lZClcbiAgICAgICAge1xuICAgICAgICAgICAgY2FsbGJhY2soSlNPTi5wYXJzZShjYXJ0KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBwcm9kdWN0IHRvIHRoZSBjYXJ0IGNvb2tpZSBhbmQgZGF0YWJhc2UgaWYgdGhlIHVzZXIgaXMgcmVnaXN0ZXJlZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZFByb2R1Y3QoaWQsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9wcm9kdWN0cy9cIiArIGlkLFxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FydCA9IHtlYW5fbnVtYmVyOmRhdGFbMF0uZWFuX251bWJlciwgdGl0bGU6ZGF0YVswXS50aXRsZSwgcHJpY2U6ZGF0YVswXS5wcmljZSwgaW1hZ2U6ZGF0YVswXS5pbWFnZX07XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soY2FydCk7XG5cbiAgICAgICAgICAgICAgICAvLyBTYXZlIGNhcnQgaW4gY29va2llc1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50Q2FydCA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJjYXJ0XCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDYXJ0ID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIENvb2tpZUhlbHBlci5jcmVhdGVDb29raWUoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KFtjYXJ0XSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FydCA9IEpTT04ucGFyc2UoY3VycmVudENhcnQpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FydC5wdXNoKGNhcnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIENvb2tpZUhlbHBlci5jcmVhdGVDb29raWUoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRDYXJ0KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGl0ZW0gZnJvbSB0aGUgY2FydFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7aW50fSBpZCBQcm9kdWN0IGlkXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvZHVjdChpZClcbiAgICB7XG4gICAgICAgIGNhcnQgPSBKU09OLnBhcnNlKENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJjYXJ0XCIpKTtcblxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBjYXJ0Lmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoY2FydFtpXS5lYW5fbnVtYmVyID09IGlkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhcnQuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBDb29raWVIZWxwZXIuY3JlYXRlQ29va2llKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRDYXJ0OiBnZXRDYXJ0LFxuICAgICAgICBhZGRQcm9kdWN0OiBhZGRQcm9kdWN0LFxuICAgICAgICByZW1vdmVQcm9kdWN0OiByZW1vdmVQcm9kdWN0XG4gICAgfVxufTsiLCJ2YXIgTG9naW5Nb2RlbCA9IGZ1bmN0aW9uKClcbntcbiAgICBmdW5jdGlvbiBsb2dpbihlbWFpbCwgcGFzc3dvcmQsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC91c2VyL2xvZ2luXCIsXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCYXNpYyBcIiArIGJ0b2EoZW1haWwgKyBcIjpcIiArIHBhc3N3b3JkKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gcHV0IHRva2VuIGluIGNvb2tpZVxuICAgICAgICAgICAgICAgIENvb2tpZUhlbHBlci5jcmVhdGVDb29raWUoXCJhY2Nlc3NfdG9rZW5cIiwgZGF0YS5hY2Nlc3NfdG9rZW4pO1xuICAgICAgICAgICAgICAgIENvb2tpZUhlbHBlci5jcmVhdGVDb29raWUoXCJ1c2VyX2lkXCIsIGRhdGEudXNlcl9pZCk7XG5cbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gc2hvdyAnbm90IGdvb2QgZW1haWwgb3IgcGFzc3dvcmQgdG8gdXNlcidcbiAgICAgICAgICAgICAgICAkKFwiI2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgLy8kKFwiI2NvbXBvbmVudFwiKS5odG1sKFwiZXJyb3IgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9naW46IGxvZ2luXG4gICAgfVxufTsiLCJ2YXIgTG9nb3V0TW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgZnVuY3Rpb24gbG9nb3V0KGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC91c2VyL2xvZ291dFwiLCAvLz8gaHR0cDovLzg0Ljg0LjI0NS4yOToyNDMgPSBBUEktbG9jYXRpZT9cbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB1c2VyX2lkOiBnZXRDb29raWUoXCJ1c2VyX2lkXCIpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0IGNvbnRyb2xsZXIgcmVzdW1lIHdpdGggc3R1ZmZcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWU9J2FjY2Vzc190b2tlbj0nO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZT0ndXNlcl9pZD0nO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gc2hvdyAnbm90IGdvb2QgZW1haWwgb3IgcGFzc3dvcmQgdG8gdXNlcidcbiAgICAgICAgICAgICAgICAkKFwiI2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgLy8kKFwiI2NvbXBvbmVudFwiKS5odG1sKFwiZXJyb3IgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldENvb2tpZShuYW1lKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGNvb2tpZSA9IGNvb2tpZXNbaV0uc3BsaXQoXCI9XCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvb2tpZVswXS50cmltKCkgPT0gbmFtZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb29raWVbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2dvdXQ6IGxvZ291dFxuICAgIH1cbn07IiwidmFyIFBhZ2VNb2RlbCA9IGZ1bmN0aW9uKClcbntcbiAgICBmdW5jdGlvbiBnZXRQYWdlKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC91c2VyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBnZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb29raWUobmFtZSlcbiAgICB7XG4gICAgICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgY29va2llID0gY29va2llc1tpXS5zcGxpdChcIj1cIik7XG5cbiAgICAgICAgICAgIGlmIChjb29raWVbMF0gPT0gbmFtZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29va2llWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQYWdlOiBnZXRQYWdlXG4gICAgfVxufTsiLCJ2YXIgUHJvZHVjdHNNb2RlbCA9IGZ1bmN0aW9uKClcbntcbiAgICBmdW5jdGlvbiBnZXRQYWdlKGZpbHRlciwgY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3Byb2R1Y3RzP1wiICsgZmlsdGVyLCAvLz8gaHR0cDovLzg0Ljg0LjI0NS4yOToyNDMgPSBBUEktbG9jYXRpZT9cbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCJ2aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFBhZ2U6IGdldFBhZ2VcbiAgICB9XG59OyIsInZhciBSZWdpc3Rlck1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyKGZvcm1EYXRhLCBjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIC8vY29uc29sZS5sb2coZm9ybURhdGEpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXIvcmVnaXN0ZXJcIixcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBlX21haWwgOiBmb3JtRGF0YS5lX21haWxhZHJlcyxcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA6IGZvcm1EYXRhLndhY2h0d29vcmQsXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZSA6IGZvcm1EYXRhLnZvb3JuYWFtLFxuICAgICAgICAgICAgICAgIGluc2VydGlvbiA6IGZvcm1EYXRhLnR1c3NlbnZvZWdzZWwsXG4gICAgICAgICAgICAgICAgc3VybmFtZSA6IGZvcm1EYXRhLmFjaHRlcm5hYW0sXG4gICAgICAgICAgICAgICAgZ2VuZGVyIDogZm9ybURhdGEuZ2VuZGVyLFxuICAgICAgICAgICAgICAgIGRhdGVfb2ZfYmlydGggOiBmb3JtRGF0YS5iaXJ0aF9kYXRlLFxuICAgICAgICAgICAgICAgIHBob25lX251bWJlciA6IGZvcm1EYXRhLm1vYmllbF9udW1tZXIsXG4gICAgICAgICAgICAgICAgc2VjcmV0X3F1ZXN0aW9uIDogZm9ybURhdGEuc2VjdXJpdHlfcXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgc2VjcmV0X3F1ZXN0aW9uX2Fuc3dlciA6IGZvcm1EYXRhLnNlY3VyaXR5X2Fuc3dlcixcblxuICAgICAgICAgICAgICAgIHBvc3RhbF9jb2RlIDogZm9ybURhdGEucG9zdGNvZGUsXG4gICAgICAgICAgICAgICAgbnVtYmVyIDogZm9ybURhdGEuaHVpc251bW1lcixcbiAgICAgICAgICAgICAgICBzdHJlZXRfbmFtZSA6IGZvcm1EYXRhLnN0cmFhdG5hYW0sXG4gICAgICAgICAgICAgICAgY2l0eSA6IGZvcm1EYXRhLnBsYWF0cyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBzaG93ICdlbWFpbCBhbCBnZWJvbmRlbiBhYW4gZWVuIGFjY291bnQ/J1xuICAgICAgICAgICAgICAgICQoXCIjcmVnaV9hcGlfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgLy8kKFwiI2NvbXBvbmVudFwiKS5odG1sKFwiZXJyb3IgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVnaXN0ZXI6IHJlZ2lzdGVyXG4gICAgfVxufTsiLCJ2YXIgUmVzZXRQYXNzd29yZE1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIHJlc2V0cGFzc3dvcmQoZm9ybURhdGEsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXIvcmVzZXRwYXNzd29yZFwiLFxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsIDogZm9ybURhdGEuZV9tYWlsYWRyZXMsXG4gICAgICAgICAgICAgICAgc2VjcmV0X3F1ZXN0aW9uX2Fuc3dlciA6IGZvcm1EYXRhLnNlY3VyaXR5X2Fuc3dlcixcbiAgICAgICAgICAgICAgICBzZWNyZXRfcXVlc3Rpb24gOiBmb3JtRGF0YS5zZWN1cml0eV9xdWVzdGlvbixcbiAgICAgICAgICAgICAgICBuZXdfcGFzc3dvcmQgOiBmb3JtRGF0YS53YWNodHdvb3JkLFxuICAgICAgICAgICAgICAgIHJlcGVhdF9wYXNzd29yZCA6IGZvcm1EYXRhLndhY2h0d29vcmQyXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCJ2aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgICAgICQoXCIjcmVzZXRfcGFzc3dvcmRfYXBpX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc2V0cGFzc3dvcmQ6IHJlc2V0cGFzc3dvcmRcbiAgICB9XG59OyIsInZhciBQcm9kdWN0TW9kZWwgPSBmdW5jdGlvbihlYW4pXG57XG4gICAgZnVuY3Rpb24gR2V0UHJvZHVjdEluZm8oY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3Byb2R1Y3RzL1wiICsgZWFuLFxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVswXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgR2V0UHJvZHVjdEluZm86IEdldFByb2R1Y3RJbmZvXG4gICAgfVxufTsiLCJ2YXIgQWRtaW5Db250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcbiAgICB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgLy8gbW9kZWwgZ2V0cyBzb21lIHVzZXIgaW5mbyBmcm9tIGRhdGFiYXNlXG4gICAgICAgIC8vIHZpZXcgc2hvd3MgIG9uIHBhZ2VcbiAgICAgICAgbW9kZWwuZ2V0VXNlcklkcyh2aWV3SGVscGVyLnNob3dVc2VySWRzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHNldCB2aWV3IHRvIGFkbWluIHBhZ2UuIG1vZGVsIGdldHMgdXNlciBpbmZvIGZyb20gZGF0YWJhc2VcbiAgICAgICAgLy9WaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTsiLCJ2YXIgQ2FydENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGNhcnQgaXRlbXMgYW5kIHBhc3MgdGhlIGl0ZW1zIHRvIHRoZSBWaWV3SGVscGVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0Q2FydCgpXG4gICAge1xuICAgICAgICBNb2RlbC5nZXRDYXJ0KGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTsgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgaXRlbSB0byB0aGUgY2FydCBhbmQgcGFzcyBpdCB0byB0aGUgdmlld0hlbHBlclxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7aW50fSBpZCAgSXRlbSBpZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZFByb2R1Y3QoaWQpXG4gICAge1xuICAgICAgICBNb2RlbC5hZGRQcm9kdWN0KGlkLCBmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLmFkZEl0ZW0oZGF0YSk7IH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIHByb2R1Y3QgYW5kIGNhbGwgdGhlIHZpZXdIZWxwZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZW1vdmVQcm9kdWN0KGlkKVxuICAgIHtcbiAgICAgICAgTW9kZWwucmVtb3ZlUHJvZHVjdChpZCwgZnVuY3Rpb24gKGRhdGEpIHsgfSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldENhcnQpO1xuICAgICAgICBWaWV3SGVscGVyLnNldEFkZFByb2R1Y3RMaXN0ZW5lcihhZGRQcm9kdWN0KTtcbiAgICAgICAgVmlld0hlbHBlci5zZXRSZW1vdmVMaXN0ZW5lcihyZW1vdmVQcm9kdWN0KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBFcnJvckNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyKVxue1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gbG9naW4gZm9ybVxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBMb2dpbkNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxuICAgIHtcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIC8vIExvb3AgdHJvdWdoIHRoZSBmb3JtIGRhdGEgYW5kIGdldCBhbGwgZmllbGRzXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IHt9O1xuICAgICAgICAkLmVhY2goJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbiAoaSwgZmllbGQpIHtcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIGVtYWlsIGFuZCBwYXNzd29yZCB0byBBUElcbiAgICAgICAgTW9kZWwubG9naW4oZm9ybURhdGEuZW1haWwsIGZvcm1EYXRhLnBhc3N3b3JkLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8gc2hvdyB1aXRsb2dnZW4gYnV0dG9uXG4gICAgICAgICAgICAkKFwiI2lubG9nZ2VuX3RleHRcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIiN1aXRsb2dnZW5fdGV4dFwiKS5zaG93KCk7XG5cbiAgICAgICAgICAgIC8vIFdlZXJnZWVmIGVlbiBhbmRlcmUgcGFnaW5hIGdlYmFzc2VlcmQgb3AgJ2FkbWluJyBvZiAncmVnaXN0ZXJlZCB1c2VyJ1xuICAgICAgICAgICAgbmV3IFBhZ2VDb250cm9sbGVyKG5ldyBQYWdlVmlld0hlbHBlcigpLCBuZXcgUGFnZU1vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICAvLyBzZXQgdmlldyB0byBsb2dpbiBmb3JtXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygpO1xuXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gZW1haWwgYW5kIHBhc3N3b3JkOyBjbGlja3MgJ2xvZ2luJzogVklFVyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTsiLCJ2YXIgTG9nb3V0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuICAgIFxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXG4gICAge1xuICAgICAgICBNb2RlbC5sb2dvdXQoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIC8vIHNob3cgdWl0bG9nZ2VuIGJ1dHRvblxuICAgICAgICAgICAgJChcIiNpbmxvZ2dlbl90ZXh0XCIpLnNob3coKTtcbiAgICAgICAgICAgICQoXCIjdWl0bG9nZ2VuX3RleHRcIikuaGlkZSgpO1xuXG4gICAgICAgICAgICAvLyBzZXQgdmlldyB0byBsb2dpbiBmb3JtXG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGVtYWlsIGFuZCBwYXNzd29yZDsgY2xpY2tzICdsb2dpbic6IFZJRVcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwidmFyIFBhZ2VDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsID0gbW9kZWw7XG4gICAgdmFyIFZpZXcgID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxuICAgIHtcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgVmlldy5zZXRWaWV3KGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIFZpZXcuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBQcm9kdWN0c0NvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZSgpXG4gICAge1xuICAgICAgICBNb2RlbC5nZXRQYWdlKFwiXCIsIGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTsgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyUHJvZHVjdHMoZXZlbnQpXG4gICAge1xuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm0gKHBhZ2UgcmVsb2FkKVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciBmaWx0ZXJzID0gJCh0aGlzKS5zZXJpYWxpemUoKTtcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShmaWx0ZXJzLCBmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLmxvYWRQcm9kdWN0cyhkYXRhKTsgfSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldFBhZ2UpO1xuICAgICAgICBWaWV3SGVscGVyLnNldEZpbHRlckxpc3RlbmVyKGZpbHRlclByb2R1Y3RzKTtcbiAgICAgICAgLy8gbmV3IGFjdGlvbiB3YW5uZXIgZXIgb3AgZmlsdGVyIHdvcmR0IGdlZHJ1a3RcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBSZWdpc3RlckNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKClcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW4gYWN0aW9uUGVyZm9ybWVkXCIpOyAvL3Rlc3RcblxuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyByZXNldCBlcnJvciBtZXNzYWdlc1xuICAgICAgICAkKFwiI3JlZ2lfYXBpX2Vycm9yX21lc3NhZ2VcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcblxuICAgICAgICAvLyBwdXQgZm9ybSBmaWVsZHMgaW4gamF2YXNjcmlwdCBPYmplY3RcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XG5cbiAgICAgICAgJC5lYWNoKCQodGhpcykuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBmaXggZGF0ZSBvZiBiaXJ0aCAoQVBJIGV4cGVjdHMgY2VydGFpbiBmb3JtYXQpXG4gICAgICAgIGZvcm1EYXRhW1wiYmlydGhfZGF0ZVwiXSA9IGZvcm1EYXRhLmphYXIgKyBcIi1cIiArIGZvcm1EYXRhLm1hYW5kICsgXCItXCIgKyBmb3JtRGF0YS5kYWc7XG5cbiAgICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xuXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgYW55IG1hbmRhdG9yeSBmaWVsZCBpcyBsZWZ0IGVtcHR5IGJ5IHVzZXIgYW5kXG4gICAgICAgIC8vIGlmIHNvLCBhYm9ydCBmdW5jdGlvblxuICAgICAgICB2YXIgbWFuZGF0b3J5RmllbGRNaXNzZXMgPSBmYWxzZTtcbiAgICAgICAgdmFyIG1hbmRhdG9yeUZpZWxkcyA9IFtcInZvb3JuYWFtXCIsIFwiYWNodGVybmFhbVwiLCBcInBvc3Rjb2RlXCIsIFwiaHVpc251bW1lclwiLCBcImVfbWFpbGFkcmVzXCIsIFwid2FjaHR3b29yZFwiLCBcIndhY2h0d29vcmQyXCIsIFwic2VjdXJpdHlfYW5zd2VyXCJdOyAvL2Ryb3Bkb3ducyAobGlrZSBnZW5kZXIpIGFyZSBhbHdheXMgZmlsbGVkIGluLCBzbyBkb24ndCBwdXQgaW4gdGhpcyBsaXN0XG5cbiAgICAgICAgLy8gKHJlc2V0IGFsbCBmaWVsZHMgdG8gJ3ZhbGlkJyBiZWNhdXNlIHVzZXIgbWF5IGhhdmUgZmlsbGVkIGluIGZpZWxkcyBzaW5jZVxuICAgICAgICAvLyB0aGUgcHJldmlvdXMgdGltZSB0aGlzIGZ1bmN0aW9uIHdhcyBjYWxsZWQpXG4gICAgICAgICQuZWFjaChtYW5kYXRvcnlGaWVsZHMsIGZ1bmN0aW9uIChpLCBtYW5GaWVsZCkge1xuICAgICAgICAgICAgJChcIiNcIiArIG1hbkZpZWxkKS5yZW1vdmVDbGFzcyhcImludmFsaWRcIik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgJC5lYWNoKG1hbmRhdG9yeUZpZWxkcywgZnVuY3Rpb24gKGksIG1hbkZpZWxkKSB7XG4gICAgICAgICAgICBpZiAoZm9ybURhdGFbbWFuRmllbGRdID09IFwiXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJChcIiNcIiArIG1hbkZpZWxkKS5hZGRDbGFzcyhcImludmFsaWRcIik7XG5cbiAgICAgICAgICAgICAgICBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgXG4gICAgICAgIC8vIGlmIGEgbWFuZGF0b3J5IGZpZWxkIGlzIGVtcHR5LCBzaG93IGVycm9yIG1lc3NhZ2UgdG8gdXNlciBhbmQgYWJvcnQgZnVuY3Rpb25cbiAgICAgICAgaWYgKG1hbmRhdG9yeUZpZWxkTWlzc2VzKVxuICAgICAgICB7IFxuICAgICAgICAgICAgLy8gc2Nyb2xsIHRvIHRvcCBvZiBwYWdlIHNvIHRoYXQgdXNlcnMgc2VlIG1lc3NhZ2UgXCJzb21ldGhpbmcgaXMgbm90IGZpbGxlZCBpblwiXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICAvLyBzaG93IG1lc3NhZ2UgXCJzb21ldGhpbmcgaXMgbm90IGZpbGxlZCBpblwiXG4gICAgICAgICAgICAkKFwiI3JlZ2lzdGVyX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBwYXNzd29yZHNOb3RJZGVudGljYWwgPSBmYWxzZTtcblxuICAgICAgICBpZiAoZm9ybURhdGEud2FjaHR3b29yZCAhPSBmb3JtRGF0YS53YWNodHdvb3JkMikgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhc3N3b3Jkc05vdElkZW50aWNhbCA9IHRydWU7XG4gICAgICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgICAgICQoXCIjd2FjaHR3b29yZFwiKS5hZGRDbGFzcyhcImludmFsaWRcIik7XG4gICAgICAgICAgICAkKFwiI3dhY2h0d29vcmQyXCIpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFib3J0IGZ1bmN0aW9uIGlmIG1hbmRhdG9yeSBmaWVsZCBtaXNzZXMgb3IgcGFzc3dvcmRzIG5vdCBpZGVudGljYWxcbiAgICAgICAgaWYgKG1hbmRhdG9yeUZpZWxkTWlzc2VzIHx8IHBhc3N3b3Jkc05vdElkZW50aWNhbClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29udGludWVkXCIpXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIHVzZXIgaW5mbyB0byBBUElcbiAgICAgICAgTW9kZWwucmVnaXN0ZXIoZm9ybURhdGEsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJy92aWV3cy9yZWdpc3Rlci9hZnRlcl9yZWdpc3Rlci5odG1sJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gcmVnaXN0ZXIgZm9ybVxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJy92aWV3cy9yZWdpc3Rlci9yZWdpc3Rlci5odG1sJyk7XG5cbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiByZWdpc3RlciBpbmZvOyBjbGlja3MgJ3JlZ2lzdGVyJzogdmlldyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XG5cbiAgICAgICAgLy8gZW1haWwgYW5kIHBhc3N3b3JkIGFyZSBzZW5kIHRvIEFQSTsgQVBJIGNoZWNrcyBpZiBlbWFpbCBhbHJlYWR5IGV4aXN0cyAoYW5kIHdoZXRoZXIgcGFzc3dvcmQgaXMgY29ycmVjdD8pIFxuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwidmFyIFJlc2V0UGFzc3dvcmRDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbiBhY3Rpb25QZXJmb3JtZWRcIik7IC8vdGVzdFxuXG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIHJlc2V0IGVycm9yIG1lc3NhZ2VzXG4gICAgICAgICQoXCIjcmVzZXRfcGFzc3dvcmRfYXBpX2Vycm9yX21lc3NhZ2VcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcblxuICAgICAgICAvLyBwdXQgZm9ybSBmaWVsZHMgaW4gamF2YXNjcmlwdCBPYmplY3RcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XG5cbiAgICAgICAgJC5lYWNoKCQodGhpcykuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIGFueSBtYW5kYXRvcnkgZmllbGQgaXMgbGVmdCBlbXB0eSBieSB1c2VyIGFuZFxuICAgICAgICAvLyBpZiBzbywgYWJvcnQgZnVuY3Rpb25cbiAgICAgICAgdmFyIG1hbmRhdG9yeUZpZWxkTWlzc2VzID0gZmFsc2U7XG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZHMgPSBbXCJ3YWNodHdvb3JkXCIsIFwid2FjaHR3b29yZDJcIiwgXCJlX21haWxhZHJlc1wiLFwic2VjdXJpdHlfYW5zd2VyXCJdOyAvL2Ryb3Bkb3ducyAobGlrZSBzZWN1cml0eV9xdWVzdGlvbl9hbnN3ZXIpIGFyZSBhbHdheXMgZmlsbGVkIGluLCBzbyBkb24ndCBwdXQgaW4gdGhpcyBsaXN0XG5cbiAgICAgICAgLy8gKHJlc2V0IGFsbCBmaWVsZHMgdG8gJ3ZhbGlkJyBiZWNhdXNlIHVzZXIgbWF5IGhhdmUgZmlsbGVkIGluIGZpZWxkcyBzaW5jZVxuICAgICAgICAvLyB0aGUgcHJldmlvdXMgdGltZSB0aGlzIGZ1bmN0aW9uIHdhcyBjYWxsZWQpXG4gICAgICAgICQuZWFjaChtYW5kYXRvcnlGaWVsZHMsIGZ1bmN0aW9uIChpLCBtYW5GaWVsZCkge1xuICAgICAgICAgICAgJChcIiNcIiArIG1hbkZpZWxkKS5yZW1vdmVDbGFzcyhcImludmFsaWRcIik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgJC5lYWNoKG1hbmRhdG9yeUZpZWxkcywgZnVuY3Rpb24gKGksIG1hbkZpZWxkKSB7XG4gICAgICAgICAgICBpZiAoZm9ybURhdGFbbWFuRmllbGRdID09IFwiXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJChcIiNcIiArIG1hbkZpZWxkKS5hZGRDbGFzcyhcImludmFsaWRcIik7XG5cbiAgICAgICAgICAgICAgICBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgXG4gICAgICAgIC8vIGlmIGEgbWFuZGF0b3J5IGZpZWxkIGlzIGVtcHR5LCBzaG93IGVycm9yIG1lc3NhZ2UgdG8gdXNlciBhbmQgYWJvcnQgZnVuY3Rpb25cbiAgICAgICAgaWYgKG1hbmRhdG9yeUZpZWxkTWlzc2VzKVxuICAgICAgICB7IFxuICAgICAgICAgICAgLy8gc2Nyb2xsIHRvIHRvcCBvZiBwYWdlIHNvIHRoYXQgdXNlcnMgc2VlIG1lc3NhZ2UgXCJzb21ldGhpbmcgaXMgbm90IGZpbGxlZCBpblwiXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICAvLyBzaG93IG1lc3NhZ2UgXCJzb21ldGhpbmcgaXMgbm90IGZpbGxlZCBpblwiXG4gICAgICAgICAgICAkKFwiI3Jlc2V0X2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBwYXNzd29yZHNOb3RJZGVudGljYWwgPSBmYWxzZTtcblxuICAgICAgICBpZiAoZm9ybURhdGEud2FjaHR3b29yZCAhPSBmb3JtRGF0YS53YWNodHdvb3JkMikgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhc3N3b3Jkc05vdElkZW50aWNhbCA9IHRydWU7XG4gICAgICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgICAgICQoXCIjd2FjaHR3b29yZFwiKS5hZGRDbGFzcyhcImludmFsaWRcIik7XG4gICAgICAgICAgICAkKFwiI3dhY2h0d29vcmQyXCIpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFib3J0IGZ1bmN0aW9uIGlmIG1hbmRhdG9yeSBmaWVsZCBtaXNzZXMgb3IgcGFzc3dvcmRzIG5vdCBpZGVudGljYWxcbiAgICAgICAgaWYgKG1hbmRhdG9yeUZpZWxkTWlzc2VzIHx8IHBhc3N3b3Jkc05vdElkZW50aWNhbClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29udGludWVkXCIpXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIHVzZXIgaW5mbyB0byBBUElcbiAgICAgICAgTW9kZWwucmVzZXRwYXNzd29yZChmb3JtRGF0YSwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuc2V0Vmlldygndmlld3MvcmVzZXRwYXNzd29yZC9hZnRlcl9yZXNldC5odG1sJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHsgICAgICBcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gcmVzZXQgcGFzc3dvcmQgZm9ybVxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJ3ZpZXdzL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5odG1sJyk7XG5cbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xuICAgICAgICAvLyBuZXcgYWN0aW9uIHdhbm5lciBlciBvcCBmaWx0ZXIgd29yZHQgZ2VkcnVrdFxuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07XG5cblxuXG5cbiIsInZhciBQcm9kdWN0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuICAgIFxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXG4gICAge1xuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXG5cblxuXG5cbiAgICAgICAgLy8gTG9vcCB0cm91Z2ggdGhlIGZvcm0gZGF0YSBhbmQgZ2V0IGFsbCBmaWVsZHNcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XG4gICAgICAgICQuZWFjaCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uIChpLCBmaWVsZCkge1xuICAgICAgICAgICAgZm9ybURhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgZW1haWwgYW5kIHBhc3N3b3JkIHRvIEFQSVxuICAgICAgICBNb2RlbC5sb2dpbihmb3JtRGF0YS5lbWFpbCwgZm9ybURhdGEucGFzc3dvcmQsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAvLyBzaG93IHVpdGxvZ2dlbiBidXR0b25cbiAgICAgICAgICAgICQoXCIjaW5sb2dnZW5fdGV4dFwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiI3VpdGxvZ2dlbl90ZXh0XCIpLnNob3coKTtcblxuICAgICAgICAgICAgLy8gV2VlcmdlZWYgZWVuIGFuZGVyZSBwYWdpbmEgZ2ViYXNzZWVyZCBvcCAnYWRtaW4nIG9mICdyZWdpc3RlcmVkIHVzZXInXG4gICAgICAgICAgICBuZXcgUGFnZUNvbnRyb2xsZXIobmV3IFBhZ2VWaWV3SGVscGVyKCksIG5ldyBQYWdlTW9kZWwoKSkubWFpbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBsZXQgdmlldyBzaG93IHZpZXcgd2l0aCBkYXRhIGZyb20gZGF0YWJhc2VcbiAgICBmdW5jdGlvbiBzaG93VmlldyhkYXRhKVxuICAgIHtcbiAgICAgICAgdmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xuICAgIH1cblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgLy8gd2hhdCBoYXBwZW5zOlxuICAgICAgICAvLyAxKSB1c2VyIGNsaWNrcyBvbiBhIHByb2R1Y3QgXG4gICAgICAgIC8vIDIpIG1vZGVsIGdldHMgaW5mbyBvZiB0aGUgcHJvZHVjdFxuICAgICAgICAvLyAzKSBzeXN0ZW0gcHV0cyBpbmZvIGluIGh0bWxcbiAgICAgICAgLy8gNCkgdmlldyBzaG93cyBpbmZvXG5cbiAgICAgICAgLy8gMikgbW9kZWwgZ2V0cyBpbmZvIG9mIHRoZSBwcm9kdWN0XG4gICAgICAgIC8vIDMpIHN5c3RlbSBwdXRzIGluZm8gaW4gaHRtbFxuICAgICAgICBtb2RlbC5HZXRQcm9kdWN0SW5mbyhzaG93Vmlldyk7XG5cblxuXG4gICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cbiAgICAgICAgLy9WaWV3SGVscGVyLnNldFZpZXcoKTtcblxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGVtYWlsIGFuZCBwYXNzd29yZDsgY2xpY2tzICdsb2dpbic6IFZJRVcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcbiAgICAgICAgLy9WaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluLFxuICAgICAgICBzaG93VmlldyA6IHNob3dWaWV3XG4gICAgfVxufTsiLCJ2YXIgRXJyb3JWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcoKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIk9lcHMgLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9lcnJvci9lcnJvci5odG1sJyk7XG4gICAgfVxuXG4gICAgLy8gQWN0aW9uTGlzdGVuZXIgdGhhdCBleGVjdXRlcyBhY3Rpb25zIG9uIHNwZWNpZmljIGV2ZW50c1xuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG59OyIsInZhciBDYXJ0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxuICAgIHtcbiAgICAgICAgaWYgKHZpZXdEYXRhICE9IFwiXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZpZXdEYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgYWRkSXRlbShpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB0b3RhbCBwcmljZSAgb2YgdGhlIGNhcnRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2ludH0gdG90YWxQcmljZSAgVG90YWwgcHJpY2Ugb2YgdGhlIGNhcnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1cGRhdGVUb3RhbFByaWNlKG5ld1ByaWNlKVxuICAgIHtcbiAgICAgICAgbmV3UHJpY2UgPSBwYXJzZUZsb2F0KG5ld1ByaWNlKSArIHBhcnNlRmxvYXQoJChcIi5jYXJ0X190b3RhbCAucHJpY2VcIikuaHRtbCgpLnN1YnN0cigxKSk7XG4gICAgICAgICQoXCIuY2FydF9fdG90YWwgLnByaWNlXCIpLmh0bWwoXCLigqxcIiArIHBhcnNlRmxvYXQobmV3UHJpY2UpLnRvRml4ZWQoMikpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2UgbmV3IGNhcnQgaXRlbSB2aXNpYWJsZSBpbiB0aGUgRE9NXG4gICAgICogXG4gICAgICogQHBhcmFtICB7YXJyYXl9ICBpdGVtICBQcm9kdWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkSXRlbShpdGVtKVxuICAgIHtcbiAgICAgICAgdmFyIGNhcnRJdGVtID0gJCgnPGRpdj4nKS5odG1sKCQoJy5zaWRlYmFyX19jb250ZW50X190bXAnKS5odG1sKCkpO1xuXG4gICAgICAgIGNhcnRJdGVtLmZpbmQoXCIuY2FydF9faXRlbV9fdGl0bGVcIikuaHRtbChpdGVtLnRpdGxlKTtcbiAgICAgICAgY2FydEl0ZW0uZmluZChcIi5jYXJ0X19pdGVtX19wcmljZVwiKS5odG1sKFwi4oKsXCIgKyBpdGVtLnByaWNlKTtcbiAgICAgICAgY2FydEl0ZW0uZmluZChcIi5jYXJ0X19pdGVtX19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCBpdGVtLmltYWdlKTtcbiAgICAgICAgY2FydEl0ZW0uZmluZChcIi5jYXJ0X19pdGVtXCIpLmF0dHIoXCJkYXRhLWlkXCIsIGl0ZW0uZWFuX251bWJlcilcblxuICAgICAgICAkKFwiLmNhcnRcIikuYXBwZW5kKGNhcnRJdGVtKTtcblxuICAgICAgICAvLyBDaGFuZ2UgYW1vdW50IG9mIGl0ZW1zXG4gICAgICAgIHZhciBhbW91bnQgPSAkKFwiLmNhcnRfYnV0dG9uIC5jb3VudFwiKS5odG1sKCk7XG4gICAgICAgICQoXCIuY2FydF9idXR0b24gLmNvdW50XCIpLmh0bWwocGFyc2VJbnQoYW1vdW50KSArIDEpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdG90YWwgcHJpY2VcbiAgICAgICAgdXBkYXRlVG90YWxQcmljZShpdGVtLnByaWNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIHRoZSBjYXJ0IHdoZW4gdGhlIHBhZ2UgaXMgIHJlYXNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW5lciBmb3IgdGhlIEFkZCB0byBjYXJ0IGJ1dHRvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSAge2Z1bmN0aW9ufSBhZGR0b0NhcnQgIE1vZGVsIGNhbGxiYWNrXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0QWRkUHJvZHVjdExpc3RlbmVyKGFkZFRvQ2FydClcbiAgICB7XG4gICAgICAgICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIuYWRkdG9jYXJ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyIHByb2R1Y3RfaWQgPSAkKHRoaXMpLmRhdGEoXCJpZFwiKTtcbiAgICAgICAgICAgIGFkZFRvQ2FydChwcm9kdWN0X2lkKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW5lciBmb3IgcmVtb3ZlIGEgcHJvZHVjdCBmcm9tIHRoZSBET00gY2FydFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHJlbW92ZVByb2R1Y3QgQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBwcm9kY3V0IGZyb20gdGhlIG1lbW9yeVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldFJlbW92ZUxpc3RlbmVyKHJlbW92ZVByb2R1Y3QpIHtcbiAgICAgICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5jYXJ0X19pdGVtX19yZW1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KXtcbiAgICAgICAgICAgIHZhciBjYXJ0aXRlbSAgID0gJCh0aGlzKS5wYXJlbnQoKTtcbiAgICAgICAgICAgIHZhciBwcm9kdWN0X2lkID0gJCh0aGlzKS5wYXJlbnQoKS5kYXRhKFwiaWRcIik7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBwcm9kdWN0IGZyb20gRE9NIGNhcnRcbiAgICAgICAgICAgICQoY2FydGl0ZW0pLmFkZENsYXNzKFwiY2FydF9faXRlbS0tcmVtb3ZlZFwiKTtcbiAgICAgICAgICAgICQoY2FydGl0ZW0pLm9uKFwiYW5pbWF0aW9uZW5kIHdlYmtpdEFuaW1hdGlvbkVuZCBvQW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gRGVjcmVzZSBjb3VudFxuICAgICAgICAgICAgdmFyIGFtb3VudCA9ICQoXCIuY2FydF9idXR0b24gLmNvdW50XCIpLmh0bWwoKTtcbiAgICAgICAgICAgICQoXCIuY2FydF9idXR0b24gLmNvdW50XCIpLmh0bWwocGFyc2VJbnQoYW1vdW50KSAtIDEpO1xuXG4gICAgICAgICAgICByZW1vdmVQcm9kdWN0KHByb2R1Y3RfaWQpXG4gICAgICAgICAgICB1cGRhdGVUb3RhbFByaWNlKC0kKGNhcnRpdGVtKS5maW5kKFwiLmNhcnRfX2l0ZW1fX3ByaWNlXCIpLmh0bWwoKS5zdWJzdHIoMSkpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIGFkZEl0ZW06IGFkZEl0ZW0sXG4gICAgICAgIHVwZGF0ZVRvdGFsUHJpY2U6IHVwZGF0ZVRvdGFsUHJpY2UsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcbiAgICAgICAgc2V0QWRkUHJvZHVjdExpc3RlbmVyOiBzZXRBZGRQcm9kdWN0TGlzdGVuZXIsXG4gICAgICAgIHNldFJlbW92ZUxpc3RlbmVyOiBzZXRSZW1vdmVMaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIExvZ291dFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0VmlldygpXG4gICAge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiVWl0bG9nZ2VuIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvbG9nb3V0L2xvZ291dC5odG1sJyk7XG4gICAgfVxuXG4gICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnQgd2hlbiAnc29tZXRoaW5nJyBoYXBwZW5zICh3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgZm9yIGV4YW1wbGUpXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIExvZ2luVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KClcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID1cIklubG9nZ2VuIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvbG9naW4vbG9naW4uaHRtbCcpO1xuICAgIH1cblxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gbG9naW4gZm9ybVxuICAgICAgICAvLyB1c2VyIHByZXNzZXMgJ2xvZ2luJ1xuXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyAnbG9naW4nLCBwZXJmb3JtIGFjdGlvbiAobWFrZSBjb250cm9sbGVyIHNlbmQgZW1haWwgYW5kIHBhc3N3b3JkIHRvIEFQSSlcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjbG9naW5mb3JtXCIsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG59OyIsInZhciBQYWdlVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIldlbGtvbSAtIEFaIEdhbWVzXCI7XG5cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL3BhZ2UvcGFnZS5odG1sJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHZpZXdEYXRhWzBdLnVzZXJfdHlwZSA9PSBcImN1c3RvbWVyXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJChcIiN1c2VyLWJsb2NrXCIpLmFwcGVuZChcIjxoMT5KZSBsZWVzIGRpdCBhbGxlZW4gYWxzIGplIGVlbiBjdXN0b21lciBiZW50XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZpZXdEYXRhWzBdLnVzZXJfdHlwZSA9PSBcImFkbWluXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJChcIiN1c2VyLWJsb2NrXCIpLmFwcGVuZChcIjxoMT5KZSBsZWVzIGRpdCBhbGxlZW4gYWxzIGplIGVlbiBhZG1pbmlzdHJhdG9yIGJlbnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFjdGlvbkxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgYWN0aW9ucyBvbiBzcGVjaWZpYyBldmVudHNcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihldmVudEhhbmRsZXIpXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXG4gICAgfVxufTsiLCJ2YXIgUHJvZHVjdHNWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXG4gICAge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiUHJvZHVjdGVuIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5odG1sKCc8ZGl2IGNsYXNzPVwiY29sLTEyXCI+PGRpdiBjbGFzcz1cImNvbC0zXCIgaWQ9XCJmaWx0ZXJzXCI+PC9kaXY+PGRpdiBjbGFzcz1cImNvbC05XCIgaWQ9XCJwcm9kdWN0c1wiPjwvZGl2PjwvZGl2PicpO1xuICAgICAgICAvLyBsb2FkIGZpbHRlcnNcbiAgICAgICAgJChcIiNmaWx0ZXJzXCIpLmxvYWQoJy92aWV3cy9wcm9kdWN0cy9maWx0ZXJzLmh0bWwnKTtcblxuICAgICAgICAvLyBsb2FkIHByb2R1Y3RzXG4gICAgICAgIGxvYWRQcm9kdWN0cyh2aWV3RGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFByb2R1Y3RzKHZpZXdEYXRhKVxuICAgIHtcbiAgICAgICAgJChcIiNwcm9kdWN0c1wiKS5sb2FkKCcvdmlld3MvcHJvZHVjdHMvcHJvZHVjdHMuaHRtbCcsIGZ1bmN0aW9uICgpIHsgLy8gd2FhciBpZCA9ICdjb21wb25lbnQnIGRvZSAubG9hZC4uLi4uLlxuICAgICAgICAgICAgJC5lYWNoKHZpZXdEYXRhLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgcHJvZHVjdFxuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gJCgnPGRpdj4nKS5hcHBlbmQoJCgnI3Byb2R1Y3RfX2xpc3RfX2l0ZW0nKS5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBBZGQgcHJvZHVjdCBpbmZvXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19zdWJ0aXRsZVwiKS5hcHBlbmQodmFsdWUuZ2VucmUgKyhcIiB8IFBFR0kgXCIpICsgdmFsdWUucGVnaV9hZ2UgKyhcIiB8IFwiKSsgUGxhdGZvcm1Mb2dvKHZhbHVlLnBsYXRmb3JtKSk7XG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX2Rlc2NyaXB0aW9uXCIpLmh0bWwoQ3V0U3RyaW5nKHZhbHVlLmRlc2NyaXB0aW9uKSk7XG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpK3ZhbHVlLnByaWNlKTtcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIjYnV0dG9uc19faW5mb1wiKS5hdHRyKFwiaHJlZlwiLCBcInByb2R1Y3QvXCIgKyB2YWx1ZS5lYW5fbnVtYmVyKTtcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgdmFsdWUuaW1hZ2UpO1xuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5hZGR0b2NhcnRcIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XG5cbiAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3RfX2xpc3RcIikuYXBwZW5kKHByb2R1Y3QpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgbGlzdCBpdGVtLCBiZWNhdXNlIHRoaXMgaXRlbSBpcyBhbHdheXMgZW1wdHlcbiAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdF9faXRlbVwiKS5maXJzdCgpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL1Nob3cgbW9yZS9sZXNzXG4gICAgZnVuY3Rpb24gQ3V0U3RyaW5nKHRleHQpe1xuICAgICAgICB2YXIgU2hvd0Ftb3VudCA9IDUwO1xuICAgICAgICB2YXIgV29yZHNBcnJheSA9IHRleHQuc3BsaXQoXCIgXCIpO1xuICAgICAgICBpZihXb3Jkc0FycmF5Lmxlbmd0aD5TaG93QW1vdW50KXtcbiAgICAgICAgICAgIHZhciBTaG9ydFN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBmb3IoaT0wOyBpPFNob3dBbW91bnQ7IGkrKyl7XG4gICAgICAgICAgICAgICAgU2hvcnRTdHJpbmcgKz0gV29yZHNBcnJheVtpXSArIFwiIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFNob3J0U3RyaW5nK1wiLi4uXCI7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9QbGF0Zm9ybSBMb2dvJ3NcbiAgICBmdW5jdGlvbiBQbGF0Zm9ybUxvZ28ocGxhdGZvcm1uYWFtKVxuICAgIHtcbiAgICAgICAgcGxhdGZvcm1uYWFtID0gcGxhdGZvcm1uYWFtLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHN3aXRjaCAocGxhdGZvcm1uYWFtKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIFwiUFM0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3BzLnBuZycgLz5cIjtcbiAgICAgICAgICAgIGNhc2UgXCJQQ1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy93aW5kb3dzLnBuZycgLz5cIjtcbiAgICAgICAgICAgIGNhc2UgXCJYQk9YXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3hib3gucG5nJyAvPlwiO1xuICAgICAgICAgICAgY2FzZSBcIk5JTlRFTkRPXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL25pbnRlbmRvLnBuZycgLz5cIjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBsYXRmb3JtbmFhbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7IC8vIGlmICdkb2N1bWVudCByZWFkeScgcGVyZm9ybSBcImFjdGlvblwiXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RmlsdGVyTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgIC8vIEhpZXIgaGV0IGZvcm11bGllciB2ZXJzdHVyZW4gYWxzIHdlIG9wIGVlbiBjaGVja2JveCBkcnVra2VuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9mZigpLm9uKFwiY2hhbmdlXCIsIFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICQoXCIjcHJvZHVjdF9maWx0ZXJcIikuc3VibWl0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBkZSBwcm9kdWN0ZW5saWpzdCBhbHMgZWVuIHdhYXJkZSBpbiBkZSBzbGlkZXIgdmVyYW5kZXJkKGFsbGUgbWFuaWVyZW4pXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwiY2hhbmdlIGtleXVwXCIsIFwiaW5wdXRbbmFtZT1wcmljZS1tYXhdLCBpbnB1dFtuYW1lPXByaWNlLW1pbl1cIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmKCQoXCIjcHJpY2VtaW5cIikudmFsKCkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICQoXCIjcHJpY2VtaW5cIikudmFsKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9maWx0ZXJcIikuc3VibWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI3Byb2R1Y3RfZmlsdGVyXCIsIGFjdGlvbik7XG4gICAgfVxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgbG9hZFByb2R1Y3RzOiBsb2FkUHJvZHVjdHMsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcbiAgICAgICAgc2V0RmlsdGVyTGlzdGVuZXI6IHNldEZpbHRlckxpc3RlbmVyXG4gICAgfVxufTsiLCJ2YXIgUmVnaXN0ZXJWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld1RvU2hvdylcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJSZWdpc3RyZXJlbiAtIEFaIEdhbWVzXCI7XG4gICAgICAgIFxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKHZpZXdUb1Nob3cpO1xuICAgIH1cblxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gcmVnaXN0ZXIgZm9ybVxuICAgICAgICAvLyB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJ1xuXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInLCBwZXJmb3JtIGFjdGlvblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNyZWdpc3RlcmZvcm1cIiwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIFJlc2V0UGFzc3dvcmRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld1RvU2hvdylcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJJbmxvZ2dlbiAtIEFaIEdhbWVzXCI7XG5cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCh2aWV3VG9TaG93KTtcbiAgICB9XG5cbiAgICAvLyBBY3Rpb25MaXN0ZW5lciB0aGF0IGV4ZWN1dGVzIGFjdGlvbnMgb24gc3BlY2lmaWMgZXZlbnRzXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoZXZlbnRIYW5kbGVyKVxuICAgIHtcbiAgICAgICAgLy8kKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNyZXNldGZvcm1cIiwgZXZlbnRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07XG5cbi8qXG52YXIgUmVzZXRQYXNzd29yZFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcbiAgICB7XG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJ3ZpZXdzL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5odG1sJyk7XG4gICAgfVxuXG4gICAgLy8gQWN0aW9uTGlzdGVuZXIgdGhhdCBleGVjdXRlcyBhY3Rpb25zIG9uIHNwZWNpZmljIGV2ZW50c1xuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcbiAgICB7XG4gICAgICAgIC8vJChkb2N1bWVudCkucmVhZHkoZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjcmVzZXRmb3JtXCIsIGV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG59O1xuKi8iLCJ2YXIgUHJvZHVjdFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0Vmlldyhwcm9kdWN0KVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBwcm9kdWN0LnRpdGxlICsgXCIgLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3Mvc2luZ2xlX3Byb2R1Y3Qvc2luZ2xlX3Byb2R1Y3QuaHRtbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHByb2R1Y3QuaW1hZ2UpO1xuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fdGl0bGVcIikuaHRtbChwcm9kdWN0LnRpdGxlKTtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3ByaWNlXCIpLmh0bWwoXCLigqwgXCIgKyBwcm9kdWN0LnByaWNlKTtcblxuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fZWFuXCIpLmFwcGVuZChwcm9kdWN0LmVhbl9udW1iZXIpO1xuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fcGxhdGZvcm1cIikuYXBwZW5kKHByb2R1Y3QucGxhdGZvcm0pO1xuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fcHVibGlzaGVyXCIpLmFwcGVuZChwcm9kdWN0LnB1Ymxpc2hlcik7XG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19wZWdpXCIpLmFwcGVuZChwcm9kdWN0LnBlZ2lfYWdlKTtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2dlbnJlXCIpLmFwcGVuZChwcm9kdWN0LmdlbnJlKTtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2Rlc2NyXCIpLmh0bWwocHJvZHVjdC5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAkKFwiLmFkZHRvY2FydFwiKS5hdHRyKFwiZGF0YS1pZFwiLCBwcm9kdWN0LmVhbl9udW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShwcm9kdWN0LnJlbGVhc2VfZGF0ZSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbW9udGhzID0gW1wiamFudWFyaVwiLCBcImZlYnJ1YXJpXCIsIFwibWFhcnRcIiwgXCJhcHJpbFwiLCBcIm1laVwiLCBcImp1bmlcIiwgXCJqdWxpXCIsIFwiYXVndXN0dXNcIiwgXCJzZXB0ZW1iZXJcIiwgXCJva3RvYmVyXCIsIFwibm92ZW1iZXJcIiwgXCJkZWNlbWJlclwiXTtcblxuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fcmVsZWFzZWRhdGVcIikuYXBwZW5kKGQuZ2V0RGF5KCkgKyBcIiBcIiArIG1vbnRoc1tkLmdldE1vbnRoKCldICsgXCIgXCIgKyBkLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIHJlZ2lzdGVyIGZvcm1cbiAgICAgICAgLy8gdXNlciBwcmVzc2VzICdyZWdpc3RlcidcblxuICAgICAgICAvLyBpZiB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJywgcGVyZm9ybSBhY3Rpb25cbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07Il19
>>>>>>> develop
