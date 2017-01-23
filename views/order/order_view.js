var OrderViewHelper = function()
{
    // Change the view of the page
    function setView()
    {
        document.title = "Bestellen - AZ Games";

        $("#component").load('/views/order/order.html');
    }

    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        $(document).ready(action);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};