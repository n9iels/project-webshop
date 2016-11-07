var RegisterViewHelper = function()
{
    // Change the view of the page
    function setView()
    {
        $("#component").load('views/register/register.html');
    }

    // Change the view of the page
    /** 
    function setView(viewToLoad)
    {
        $("#component").load(viewToLoad); //example of viewToLoad: 'views/register/register.html'
    }
    */

    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        // user fills in register form
        // user presses 'register'

        // if user presses 'register', perform action
        $("#component").on("click", "#registerbutton", action);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};