$(function(){
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $(".sidebar-nav a").click(function(e){
        // close the menu
        $("#wrapper").toggleClass("toggled");
    });

    $(window).on('hashchange', function() {
        handleDeeplink();
    });

    function updateGrid(tag) {
        $(".tagged").hide();
        $(".tag-" + tag).show();
    }


    function handleDeeplink() {
        // handle deep link if it happened to be the case
        var url = document.location.toString();
        if (url.match('#')) {
            var secondPart = url.split('#')[1];
            updateGrid(secondPart);          
        }
    } 


    // on load
    handleDeeplink();
});
