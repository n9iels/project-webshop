var ProductController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed(event)
    {
        model.GetProductInfo(function (data) {
            viewHelper.setView(data);
        });
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        viewHelper.setActionListener(actionPerformed);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main,
    }
};