// Get the current year for the copyright
$('#year').text(new Date().getFullYear());
$(document).ready(function(){

    // $('body').css('paddingTop',$(' .header nav ').innerHeight());

    //smoth scroll
    $('.header nav  li a').click(function (e) {
        // e.preventDefault();
        $('html ,body').animate({
            scrollTop:$( '#' + $(this).data('scroll')).offset().top - 60
        },1600);


    });
    //add active
    $(' .header nav  li a').click(function () {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');

    });


    $(window).scroll(function () {

        $('.block').each(function() {
            if ($(window).scrollTop() > $(this).offset().top ){
                var blockID =$(this).attr('id');
                $(' .header nav .navbar-nav a').removeClass('active');

                $('.header nav .navbar-nav li a[data-scroll = "' + blockID +  '"]').addClass('active');

            }
        });



    });

    jQuery(function($) {
        var path = window.location.href;
        // because the 'href' property of the DOM element is the absolute path
        $('.menu-mobile ul a').each(function() {
            if (this.href === path) {
                $(this).addClass('active');
            }
        });
    });


});
