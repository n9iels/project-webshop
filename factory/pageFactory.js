var pageFactory = function ()
{
    function getPage(name)
    {
        switch(name)
        {
            case "products":
                new ProductsController(new ProductsViewHelper(), new ProductsModel()).main();
                break;
            case "login":
                new LoginController(new LoginViewHelper(), new LoginModel()).main();
                break;
            default:
                new ProductsController(new ProductsViewHelper(), new ProductsModel()).main();
                break;
        }
    }
}