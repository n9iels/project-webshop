var LogoutModel = function()
{
    function logout(callback)
    {
        // let controller resume with stuff
        CookieHelper.deleteCookie("access_token");
        CookieHelper.deleteCookie("user_id");

        // 'reload' page
        onLoadPage();

        callback();
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        logout: logout
    }
};