var AdminsertController = function(viewHelper, model)
{
    var Model = model;
    var ViewHelper = viewHelper;

    function main()
    {
        ViewHelper.setView();
        ViewHelper.setActionListener(formToData);
    }

    function formToData()
    {
        console.log("action listener triggered: in formToData()");
        // Prevent sending the form
        event.preventDefault();

        // reset error messages
        $("#error__message").hide();

        // put form fields in javascript Object
        var formData = {};

        $.each($(this).serializeArray(), function (i, field) {
            formData[field.name] = field.value;
        });

        // check whether any mandatory field is left empty by user and
        // if so, abort function
        var mandatoryFieldMisses = false;
        var mandatoryFields = ["publisher", "title", "subtitle", "genre", "franchise", "description", "ean_number", "platform", "stock", "price", "image"]; //dropdowns (like gender) are always filled in, so don't put in this list

        // (reset all fields to 'valid' because user may have filled in fields since
        // the previous time this function was called)
        $.each(mandatoryFields, function (i, manField) {
            $("#" + manField).removeClass("invalid");
        })

        $.each(mandatoryFields, function (i, manField) {
            if (formData[manField] == "")
            {
                $("#" + manField).addClass("invalid");

                mandatoryFieldMisses = true;
            }
        })
        
        // if a mandatory field is empty, show error message to user and abort function
        if (mandatoryFieldMisses)
        { 
            // scroll to top of page so that users see message "something is not filled in"
            window.scrollTo(0, 0);
            // show message "something is not filled in"
            $("#error__message").show();
            return false;
        }

        // let model send game info to API
        updateDB(formData);

    }

    function updateDB(formData)
    {
        Model.updateDB(formData, function()
        {
            console.log("game succesvol opgeslagen met pi_id ....")
        });
    }

    return {
        main: main
    }
};