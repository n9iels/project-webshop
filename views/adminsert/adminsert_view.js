var AdminsertViewHelper = function()
{
    function setView()
    {
        document.title = "New Games - AZ Games"

        $("#component").load("views/adminsert/adminsert.html", function()
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

    function setActionListener(action)
    {
        $("#component").on("submit", "#adminsert__form", action)
    }

    return {
        setActionListener: setActionListener,
        setView: setView
    }
}