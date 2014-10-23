$(document).ready(function () {
    init();
    var flip = 0;
    $("#menuLink").click(function(event){
        event.preventDefault();
        $(".content-header").toggle( flip++ % 2 === 0 );
    });
});

$(window).resize(function () {
});

function init(){
    $(".sidebar").niceScroll();
    $(".post-description img").parent("a").addClass("fancybox");
    $(".fancybox").fancybox();
}
