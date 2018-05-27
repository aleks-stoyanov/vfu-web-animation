$( document ).ready(function() {

    $('.biker').removeClass("intro"); //get into a cycle


    $('#btn-continue').click(function (e) {
        e.preventDefault();// prevent default anchor behavior
        var goTo = this.getAttribute("href"); // store anchor href
        $('.biker').addClass("exit"); 

        setTimeout(function(){
            window.location = goTo;
        },1500);       
    }); 

    $("input, select, textarea").on('blur', function(e) {
        if($(e.target).length > 0 && $(e.target).val() != '') {
            $(e.target).addClass("has-content");
        }
    });
    
});