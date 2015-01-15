$(function(){
    $(".seemore a").click(function(event) {
        $("#other-sections").show();
        event.stopPropagation();
        var curScrollTop = $("body").scrollTop();
        
        $("html, body").animate({ scrollTop: curScrollTop + 100 }, "fast");
        return false;
    });
});