$('form#betatest').submit(function() {
    
    var $form = $(this);
    
    $.ajax({
        type: "POST",
        url: "http://localhost/~kehrwasser/hmnd-api/public/users/", //"/rest/public/users/",
        data: $form.serialize(),
        dataType: "json",
        success: function(data) {
            
            window.location.href = "https://humanoid.fivetwenty.de/elasticwork/";
            
        },
        error: function(data) {
            
            console.error("error", data);
            alert("Bitte versuchen Sie es später erneut.");
            
        }
    });
    
    return false;
    
});