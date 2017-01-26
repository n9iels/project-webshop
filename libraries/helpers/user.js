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

    /**
     * Get the information of the current user
     */
    this.getUserInfo = function(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/user",
            type: "get",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                Router.route("/login");
            }
        });

    }
}