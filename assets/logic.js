$(document).ready(function () {

    //initializes materialize functionality
    $('.parallax').parallax();
    $('.carousel').carousel();

   
   // creates appear/disappear effect on classes
    window.sr = ScrollReveal({reset:true});
    sr.reveal('.section',
        { 
            duration: 500,
            origin: 'right',
            // , rotate: { x: 360, y: 360, z: 360 }
            mobile: true,
            // , viewFactor: 0.7
            duration: 1000,
            delay: 100,

         }
    );

    
        $(document).scroll(function () {
            var nav = $("#navigationBar");
            var para = $(".parallax-container")
            nav.toggleClass('fixedLoc', $(this).scrollTop() > (para.height()));
            para.toggleClass('paraBottomFix', $(this).scrollTop() > (para.height()));
            
        });
    
    $(".learn-more-button").on("click", function () {
        // $("#moreAbout").toggleClass("hidden-html");
        // if (learnFlag === false) {
        //     $(".learn-more-button").text("Learn Less");
        //     learnFlag = true;
        // } else {
        //     $(".learn-more-button").text("Learn More"); 
        //     learnFlag = false;
        // }
        $("#moreAbout").fadeToggle("slow");
    })

 

});

