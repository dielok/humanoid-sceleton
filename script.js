var lazyHmndUserId = localStorage.getItem('lazyHmndUserId');

if ( ! lazyHmndUserId) {
    
    $.ajax({
        type: "POST",
        url: basepath + "users/",
        dataType: "json",
        success: function(data) {
            
            lazyHmndUserId = data.user_id;
            
            localStorage.setItem('lazyHmndUserId', lazyHmndUserId);
            
            console.log("created lazy user", data);
        
        },
        error: function(data) {
        
            console.error("error creating lazy user", data);
        
        }
    });
    
}

$('form#betatest').submit(function() {
    
    var $form = $(this), url = basepath + "users/";
    
    if (lazyHmndUserId) {
        
        url = url + lazyHmndUserId + "/";
        
    }
    
    console.log("url", url);
    
    $.ajax({
        type: "POST",
        url: url,
        data: $form.serialize(),
        dataType: "json",
        success: function(data) {
            
            window.location.href = "https://humanoid.fivetwenty.de/elasticwork/login.html";
            
        },
        error: function(data) {
            
            console.error("error", data);
            alert("Nutzer bereits vorhanden");
            
        }
    });
    
    return false;
    
});

