//Use Strict Mode
(function ($) {
    "use strict";

    //Begin - Window Load
    $(window).load(function () {


        //==============___Page Loader___================

        $('#page-loader').delay(300).fadeOut(400, function () {

        });

        $('#loader-name').addClass('loader-left');
        $('#loader-job').addClass('loader-right');
        $('#loader-animation').addClass('loader-hide');

    });

    //Begin - Document Ready
    $(document).ready(function () {
        /*profile target animation*/
        var profile_target = $('h2[id^="profile-target-"]').hide(),
            i = 0;

        (function cycle() {

            profile_target.eq(i).fadeIn(400)
                .delay(5000)
                .fadeOut(400, cycle);

            i = ++i % profile_target.length;

        })();

        //==============___Page Loader___================
        $('#loading-wraper').fadeIn(300);

        //==============___Testimonials - owl Carousel___================
        $("#testimonial-carousel").owlCarousel({
            navigation: false, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,
            pagination: true,
            singleItem: true,
            navigationText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
        });

        //==============_Lightbox_================
        //Nivo Lightbox
        $('a.nivobox').nivoLightbox({
            effect: 'fade'
        });


        //==============___Scrollbars___================
        $('.section-vcardbody').perfectScrollbar({
            wheelSpeed: 0.9
        });
    });
})(jQuery);
