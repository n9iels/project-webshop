var PageModel = function()
{
    function getPage(callback)
    {
        $.ajax({
            url: "http://84.84.245.29:243/user",
            type: "get",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer FwweDy+UQDOwz2JCS2FDLjNcuc38vnl6dnr19p87GSxhp4m1xROLaevbH0lWN1"
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getPage: getPage
    }
};