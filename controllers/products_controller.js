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
        console.log("in filterProducts");
        // Prevent sending the form (page reload)
        event.preventDefault();

        var filters = $(this).serialize();
        /*
        var filters = {};
        $.each($(this).serializeArray(), function (i, field) {
            filters[field.name] = field.value;
        });
        console.log("filters: ", filters);*/

        Model.getPage(filters, function (data)
        { 
            ViewHelper.loadProducts(data); 
        });
    }

    // Main function, also the start startpoint for a page
    function main()
    {                        
        ViewHelper.setActionListener(getPage); // why not getPage();
        ViewHelper.setFilterListener(filterProducts);
        // new action wanner er op filter wordt gedrukt
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};