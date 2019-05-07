$(document).ready(function () {

    //initializes materialize functionality
    $('.parallax').parallax();
    $('.carousel').carousel();
    
    $(document).scroll(function () {
        var nav = $("#navigationBar");
        var para = $(".parallax-container")
        nav.toggleClass('fixedLoc', $(this).scrollTop() > (para.height()));
        para.toggleClass('paraBottomFix', $(this).scrollTop() > (para.height()));
        
    });
    
    $(".learn-more-button").on("click", function () {
        $("#moreAbout").fadeToggle("slow");
    })

 

});

