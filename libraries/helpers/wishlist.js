/**
 * Helper for cart actions
 */
function WishlistHelper()
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
            url: "https://api.az-games.nl/wishlist/" + CookieHelper.getCookie("user_id") + "/" + ean_number,
            type: "post",
            dataType: 'json',
            data: JSON.stringify({}),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                $(this).toggleClass("like--active");
                alert("Het product is succesvol toegevoegd aan je verlanglijst.");
            },
            error: function(xhr, status, error) {
                alert("Dit product staat al op je verlanglijst.");
            }
        });
    }
}