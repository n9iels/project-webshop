/**
 * Helper for cart actions
 */
function FavoriteListHelper()
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
            url: "https://localhost:8081/favoritelist/" + CookieHelper.getCookie("user_id") + "/" + ean_number, // "https://api.az-games.nl/favoritelist/"
            type: "post",
            dataType: 'json',
            data: JSON.stringify({}),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                $(this).toggleClass("like--active");
                alert("Product (van (im)order uit (im)order history) succesvol toegevoegd aan uw favorieten lijst."); // im staat voor imaginary/denkbeeldig
                // Comment to self = (ORDER + ORDER HISTORY verhaal Niels) + (FAVORIETEN LIJST verhaal Habbo) SAMENVOEGEN STRAKS OR ELSE...!!!!
            },
            error: function(xhr, status, error) {
                alert("Product (van (im)order uit (im)order history) is al in favorieten lijst.");
                // Comment to self = (ORDER + ORDER HISTORY verhaal Niels) + (FAVORIETEN LIJST verhaal Habbo) SAMENVOEGEN STRAKS OR ELSE...!!!!
            }
        });
    }
}