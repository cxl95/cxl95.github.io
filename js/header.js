

$(document).ready(function () {
    
     $('#logoandmore').hover(
         function () {$('#arrow').css('background-position', 'center 0px') ;}, 
         function () {$('#arrow').css('background-position', 'center -16px') ;}
        );
    
     $('#logoandmore').click(
         function (e) {
            e.preventDefault();
            $('#menu').slideToggle('1000', "easeOutQuad", function () {
                
                if ($(this).is(':visible')) {
                        $('#header').addClass('active');
                        $('#header').removeClass('inactive');
                        $('#arrow').css("background-image", "url(/css/img/arrow-sprite-active.png)");} 
                else {
                        $('#header').addClass('inactive');
                        $('#header').removeClass('active');
                        $('#arrow').css("background-image", "url(/css/img/arrow-sprite.png)");}
            })});
});