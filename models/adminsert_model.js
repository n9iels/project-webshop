var AdminsertModel = function()
{
    function updateDB(formData, callback)
    {
        // Modify data before sending (also convert to UTC)
        formData.release_date = new Date(Date.UTC(formData.jaar, formData.maand, formData.dag));

        // Remove year, month and day
        delete formData.jaar;
        delete formData.maand;
        delete formData.dag;

        $.ajax({
            url: "http://localhost:8081/admin/new_game",
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                publisher : formData.publisher,
                title : formData.title,
                subtitle : formData.subtitle,
                genre : formData.genre,
                franchise : formData.franchise,
                description : formData.description,
                ean_number : formData.ean_number,
                platform : formData.platform,
                release_date : formData.release_date,
                pegi_age : formData.pegi_age,
                stock : formData.stock,
                price : formData.price,
                image : formData.image
            }),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#adminsert__api__error__message").show();
            }
        });
    }

    return {
        updateDB: updateDB
    }
}