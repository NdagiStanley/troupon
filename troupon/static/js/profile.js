$(document).ready(function() {

    var telInput = $("#mobile-number")
    telInput.intlTelInput({
        initialCountry: "auto",
        geoIpLookup: function(callback) {
            $.get('http://ipinfo.io', function() {}, "jsonp").always(function(resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
        });
    },
        utilsScript: "../../static/lib/libphonenumber/build/utils.js",
        nationalMode: "true"
    });

    var errorMsg = $("#error-msg");
    var validMsg = $("#valid-msg");

    var reset = function() {
        telInput.removeClass("error");
        errorMsg.addClass("hide");
        validMsg.addClass("hide");
    };

    // on blur: validate
    telInput.blur(function() {
        reset();
            if ($.trim(telInput.val())) {
            if (telInput.intlTelInput("isValidNumber")) {
              validMsg.removeClass("hide");
            } else {
              telInput.addClass("error");
              errorMsg.removeClass("hide");
            }
        }
    });

    // on keyup / change flag: reset
    telInput.on("keyup change", reset);

        $("form").submit(function() {
        $("#hidden").val(telInput.intlTelInput("getNumber"));

        var firstName = $.trim($('#first_name').val());
        var lastName = $.trim($('#last_name').val());
        var occupation = $.trim($('#occupation').val());
        var phonenumber = $.trim(telInput.val());
        var intlnumber = $.trim($('#hidden').val());

         // Check if empty or not
        if ( firstName != '' || lastName != '' || occupation != '' || phonenumber != '' || intlnumber != '')
        {
            console.log('it works');
        }
        else{
            alert("Form should not be submitted empty");
            return false;
        }
    });
});