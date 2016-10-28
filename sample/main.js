   var appMaster = {
        scrollMenu: function(){
            var num = 50; //number of pixels before modifying styles

            $(window).bind('scroll', function () {
                if ($(window).scrollTop() > num) {
                    $('nav').addClass('scrolled');
                    $('a.navbar-brand img').attr('src', 'img/logo-simple.png');

                } else {
                    $('nav').removeClass('scrolled');
                    $('a.navbar-brand img').attr('src', 'img/logo-white.png');
                }
            });
        }
    }

$(document).ready(function() {    

    appMaster.scrollMenu();
    

});