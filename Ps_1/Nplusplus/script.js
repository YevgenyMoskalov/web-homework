$(document).ready(function () {
    const $body = $("body, html");
    $(".anchor").on("click", function (event) {
        event.preventDefault();
        const $target = $($(this).attr("href"));
        const $targetHeight = $($(this).attr("href")).height();
        const $windowHeight = $(window).height();
        const $offset = $targetHeight > $windowHeight ?
            $target.offset().top :
            $target.offset().top - ($windowHeight - $targetHeight) / 2;
        $body.animate({scrollTop: $offset}, 1500);
    });

    const $backToTopButton =  $("#back-to-top");
    $(window).scroll(function(){
        $(this).scrollTop() > 100 ?
            $backToTopButton.fadeIn() : $backToTopButton.fadeOut();

    });

    $backToTopButton.on("click", function (){
        $body.stop(true, true);
        $body.animate({scrollTop: 0}, 500);

    });
});