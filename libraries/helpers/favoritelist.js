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
    //this.addItem = function(ean_number)
    var addItem = function(ean_number)
    {
        $.ajax({
            url: "http://localhost:8081/favoritelist/" + ean_number, // "https://api.az-games.nl/favoritelist/"
            type: "post",
            dataType: 'json',
            data: JSON.stringify({}),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                $(this).toggleClass("like--active");
                alert("Product succesvol toegevoegd aan je favorieten."); // im staat voor imaginary/denkbeeldig
                // Comment to self = (ORDER + ORDER HISTORY verhaal Niels) + (FAVORIETEN LIJST verhaal Habbo) SAMENVOEGEN STRAKS OR ELSE...!!!!
            },
            error: function(xhr, status, error) {
                alert("Product is al in je favorieten.");
                // Comment to self = (ORDER + ORDER HISTORY verhaal Niels) + (FAVORIETEN LIJST verhaal Habbo) SAMENVOEGEN STRAKS OR ELSE...!!!!
            }
        });
    }

    return {
        addItem: addItem
    }
}