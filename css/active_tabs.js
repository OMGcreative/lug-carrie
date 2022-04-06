
jQuery(document).ready(function( $ ){
    // using UI
    // $(".tab-item a").click(function(){
    //   $(this).tab('show');
    // });

    $(".tabs > .tab-item").click(function (e) {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        index = $(this).index();

        $(".tab-content .tab-pane").removeClass("active");
        $(".tabs .tab-content > div:nth-child(" + (index + 1) + ")").addClass("active");
    });
    
});