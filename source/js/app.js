$(document).ready(function () {
    init();
});

$(window).resize(function () {
});

function init(){
    $(".sidebar").niceScroll();
    $(".post-description img").parent("a").addClass("fancybox");
    $(".fancybox").fancybox();
}
