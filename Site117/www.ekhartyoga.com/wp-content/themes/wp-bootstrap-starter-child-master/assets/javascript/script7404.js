// Fix for GOOGLE LIGHTHOUSE ERRORS - Does not use passive listeners
jQuery.event.special.touchstart = {
    setup: function( _, ns, handle ){
        this.addEventListener("touchstart", handle, { passive: true });
    }
};

jQuery(function($) {

    // Add custom script here. Please backup the file before editing/modifying. Thanks

    $(document).ready(function() {
		
		// add class on focus search

        $('#search-box input').on("click", function (e) {
            $('#search-box').addClass('focused');
            e.stopPropagation()
        });

        $(document).on("click", function(e) {
            if ($(e.target).is("#search-box") === false) {
                $("#search-box").removeClass("focused");
            }
        });

        $(".additional-search label").on("click", function(e) {

            var searchparam = "";

            console.log(searchparam);

            var typesearch = $(this).text();
            $('.search-type').text('');
            $('.search-type').append(typesearch);
           
            
            $(this).addClass("active")
            .siblings('.additional-search label').removeClass("active");

            if (typesearch == "All content") {
                searchparam = '/search';
            } else if(typesearch == "Classes") {
                searchparam = '/classes/browse_all'
            } else if (typesearch == "Articles") {
                searchparam = '/articles/browse_all'
            } else if (typesearch == "Playlists") {
                searchparam = '/playlists/browse_all'
            } else if (typesearch == "Programs") {
                searchparam = '/programs/browse_all'
            } else if (typesearch == "Teachers") {
                searchparam = '/teachers'
            } else if (typesearch == "Workshops") {
                searchparam = '/workshops'
            } else if (typesearch == "Workshops") {
                searchparam = '/workshops'
            } else if (typesearch == "Resources") {
                searchparam = '/resources/yoga-poses'
            }  else if (typesearch == "Resources") {
                searchparam = '/resources/yoga-poses'
            }

           

            var action = $('form.search-form').attr('action');

            $('form.search-form').submit(function(){

                var domainvalue = 'https://www.ekhartyoga.com'

                $("form.search-form").attr('action', domainvalue + searchparam);
                
            });
            
        });
		
		 if ($(".homepage-block-2.dynamic-price-block")[0]) {
			
			$.ajax({ 
				type:"POST",
				url:"https://zeroapi.ekhartyoga.com/api/services/app/Products/GetPriceByCode",
				data: JSON.stringify({ "code": "Membership_Monthly" }), 
				contentType: 'application/json',
				success: function(res) {
					
					
					$( ".monthvalue" ).append(res['result'].currencySymbol);
					$( ".monthvalue" ).append(res['result'].unitPrice);

				},
				error: function(xhr, status, err) {
					console.error(xhr, status, err.toString());
				}
			});
			
			$.ajax({ 
				type:"POST",
				url:"https://zeroapi.ekhartyoga.com/api/services/app/Products/GetPriceByCode",
				data: JSON.stringify({ "code": "Membership_Annual" }), 
				contentType: 'application/json',
				success: function(res) {
					
					
					$( ".yearvalue" ).append(res['result'].currencySymbol);
					$( ".yearvalue" ).append(res['result'].unitPrice);

				},
				error: function(xhr, status, err) {
					console.error(xhr, status, err.toString());
				}
			});

        }


        $('#submitnewsletter').prop('disabled', true);
        $("#submitnewsletter").addClass("disabled");

        $('#subscribe-to-newsletter-check').change(function() {
            if ($(this).prop('checked')) {
                //alert("You have selected to show your checkout history."); //checked
                $('#submitnewsletter').prop('disabled', false);
                $("#submitnewsletter").removeClass("disabled");
            }
            else {
                //alert("You have elected to turn off checkout history."); //not checked
                $('#submitnewsletter').prop('disabled', true);
                $("#submitnewsletter").addClass("disabled");
            }
        });

        var emailvalueformurl = $(".email-value-from-url").text();
        $(".newsletter-email").val(emailvalueformurl);


    });

    $(document).ready(function() {

        $('div.scrollbar-sidemenu, div.footer-sidebar-scroll-section, div.user-sidebar-scroll-section').overlayScrollbars({
            className: "os-theme-dark"
        });

    });

    // Run the script once the document is ready
    $(document).ready(function() {

        $("#masthead .user-menu .navbar-link").click(function(){
            $("#masthead .user-menu").toggleClass("is-active");
        });

        $(".sidebar-bottom-section .user-menu .navbar-link").click(function(){
            $(".user-sidebar").toggleClass("is-active");
        });

        $('#related_posts ul').slick({
            infinite: true,
            draggable:true,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true
        });

    });


    $(document).ready(function() {

        // Glavni meni sidebar
        $(".navbar-light .navbar-toggler-icon").click(function(){
            $("body").toggleClass("yoga-active-alert");
        });


        // share button
        $(".second-header-share-button svg").on('click', function (e) {
            e.stopPropagation();
            $(".share-pop-up").not($(this)).removeClass('active');
            $("body").not($(this)).removeClass('darkbackground');
            $('.share-pop-up').toggleClass('active');
            $('body').toggleClass('darkbackground');
        });

        $('.navbar-toggler').on('click', function (e) {
            e.stopPropagation();
            $('#ekhartyoga').not($(this)).removeClass('yoga-active-alert')
            $('#ekhartyoga').toggleClass('yoga-active-alert');
        });

        $('.navbar-toggler svg.close').on('click', function (e) {
            e.stopPropagation();
            $('#ekhartyoga.yoga-active-alert').removeClass('yoga-active-alert');
        })

        $(document).click(function (e) {
            $('#ekhartyoga.yoga-active-alert').removeClass('yoga-active-alert');
            $("body").removeClass('darkbackground');
            $(".share-pop-up").removeClass("active");
        })

        $('#sidebar-float-menu').click(function(event){
            event.stopPropagation();
        });

    });


    $(document).ready(function() {

        var $carousel = $('.three-slides .three-slides-slider');

        var settings = {
            dots: false,
            lazyLoad: 'progressive',
            appendArrows: '.news-slider',
            slide: '.news-item',
            slidesToShow: 2,
            arrows:true,
            autoplaySpeed: 3000,
            speed: 1000,
            centerMode: true,
            centerPadding: '10%',
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '20%'
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '20%'
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '13%'
                    }
                },
            ]
        };

        function setSlideVisibility() {
            //Find the visible slides i.e. where aria-hidden="false"
            var visibleSlides = $carousel.find('.slick-slideshow__slide[aria-hidden="false"]');
            //Make sure all of the visible slides have an opacity of 1
            $(visibleSlides).each(function() {
                $(this).css('opacity', 1);
            });

            //Set the opacity of the first and last partial slides.
            $(visibleSlides).first().prev().css('opacity', 0);
        }

        $carousel.slick(settings);
        $carousel.slick('slickGoTo', 1);
        setSlideVisibility();

        $carousel.on('afterChange', function() {
            setSlideVisibility();
        });

    });

    // News slider - Why ekhart page
    $(document).ready(function() {

        var $carousel = $('.no-additional-class .news-slider');

        var settings = {
            dots: false,
            appendArrows: '.no-additional-class .news-slider',
            slide: '.news-item',
            slidesToShow: 1,
            arrows:true,
			rows:0,
            autoplay: false,
            autoplaySpeed: 3000,
            speed: 1000,
            centerMode: true,
            centerPadding: '40%',
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '20%'
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '25%'
                    }
                },
            ]
        };

        function setSlideVisibility() {
            //Find the visible slides i.e. where aria-hidden="false"
            var visibleSlides = $carousel.find('.slick-slideshow__slide[aria-hidden="false"]');
            //Make sure all of the visible slides have an opacity of 1
            $(visibleSlides).each(function() {
                $(this).css('opacity', 1);
            });

            //Set the opacity of the first and last partial slides.
            $(visibleSlides).first().prev().css('opacity', 0);
        }

        $carousel.slick(settings);
        $carousel.slick('slickGoTo', 1);
        setSlideVisibility();

        $carousel.on('afterChange', function() {
            setSlideVisibility();
        });

    });


    // Why ekhart page - scroll slider only on mobile
    $(document).ready(function() {

        function mobileOnlySlider() {
            $('.scroll-block').slick({
                autoplay: false,
                speed: 1000,
                centerMode: true,
                slidesToShow: 1,
                arrows:false,
                centerPadding: '20%',
                autoplaySpeed: 5000
            });
        }

        if(window.innerWidth < 600) {
            mobileOnlySlider();
        }

        $(window).resize(function(e){
            if(window.innerWidth < 600) {
                if(!$('.scroll-block').hasClass('slick-initialized')){
                    mobileOnlySlider();
                }

            }else{
                if($('.scroll-block').hasClass('slick-initialized')){
                    $('.scroll-block').slick('unslick');
                }
            }
        });

    });

    // Open class slider only under 1366
    $(document).ready(function() {

        function FreeClassOnlySlider() {
            $('.logged-in .you-may-also-like-slider').slick({
                autoplay: true,
                speed: 1000,
                centerMode: true,
                slidesToShow: 3,
                arrows:false,
                centerPadding: '20%',
                autoplaySpeed: 5000,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            centerPadding: '20%'
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1,
                            centerPadding: '25%'
                        }
                    },
                ]
            });
        }

        function FreeClassNotLoggedInSlider() {
            $('.not-logged-in .you-may-also-like-slider').slick({
                autoplay: true,
                speed: 1000,
                centerMode: true,
                slidesToShow: 3,
                arrows:false,
                centerPadding: '20%',
                autoplaySpeed: 5000,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            centerPadding: '20%'
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1,
                            centerPadding: '25%'
                        }
                    },
                ]
            });
        }

        function HomepageBlock1Slider() {
            $('.homepage-block-1-content .slide-section').slick({
                autoplay: false,
                speed: 1000,
                centerMode: true,
                slidesToShow: 1,
                arrows:false,
                centerPadding: '10%',
                autoplaySpeed: 5000
            });
        }

        function HomepageBlock2Slider() {
            $('.homepage-block-2-content .slide-section').slick({
                autoplay: false,
                speed: 1000,
                centerMode: true,
                slidesToShow: 1,
                arrows:false,
                centerPadding: '10%',
                autoplaySpeed: 5000
            });
        }

        if(window.innerWidth < 1367) {
            FreeClassOnlySlider();
        }

        if(window.innerWidth < 1024) {
            FreeClassNotLoggedInSlider();
        }

        if(window.innerWidth < 700) {
            HomepageBlock1Slider();
            HomepageBlock2Slider();
        }

        $(window).resize(function(e){
            if(window.innerWidth < 1367) {
                if(!$('.logged-in .you-may-also-like-slider').hasClass('slick-initialized')){
                    FreeClassOnlySlider();
                }

            } else {
                if($('.logged-in .you-may-also-like-slider').hasClass('slick-initialized')){

                    $('.logged-in .you-may-also-like-slider').slick('unslick');
                }
            }

            if(window.innerWidth < 1025) {
                if(!$('.not-logged-in .you-may-also-like-slider').hasClass('slick-initialized')){
                    FreeClassNotLoggedInSlider();
                }

            }else{
                if($('.not-logged-in .you-may-also-like-slider').hasClass('slick-initialized')){
                    $('.not-logged-in .you-may-also-like-slider').slick('unslick');
                }
            }

            if(window.innerWidth < 700) {
                if (!$('.homepage-block-1-content .slide-section, .homepage-block-2-content .slide-section').hasClass('slick-initialized')) {
                    HomepageBlock1Slider();
                    HomepageBlock2Slider();
                }

            } else {
                if($('.homepage-block-1-content .slide-section, .homepage-block-2-content .slide-section').hasClass('slick-initialized')){

                    $('.homepage-block-1-content .slide-section, .homepage-block-2-content .slide-section').slick('unslick');
                }
            }

        });

    });


    $(document).ready(function() {

        var $carousel = $('.full-width .testimonials-slider');

        var settings = {
            dots: false,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 3000,
            speed: 1000,
            appendArrows: '.testimonials-top',
            slide: '.testimonial-item',
            slidesToShow: 2,
			rows:0,
            swipeToSlide:true,
            adaptiveHeight: true,
            centerMode: true,
            centerPadding: '163px',
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 2,
                        centerPadding: '0px'
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '25%'
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows:false,
                        centerPadding: '25%'
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        centerMode: true,
                        centerPadding: '70px'
                    }
                },
            ]
        };

        function setSlideVisibility() {
            //Find the visible slides i.e. where aria-hidden="false"
            var visibleSlides = $carousel.find('.slick-slideshow__slide[aria-hidden="false"]');
            //Make sure all of the visible slides have an opacity of 1
            $(visibleSlides).each(function() {
                $(this).css('opacity', 1);
            });

            //Set the opacity of the first and last partial slides.
            $(visibleSlides).first().prev().css('opacity', 0);
        }

        $carousel.slick(settings);
        $carousel.slick('slickGoTo', 1);
        setSlideVisibility();

        $carousel.on('afterChange', function() {
            setSlideVisibility();
        });

    });

    $(document).ready(function() {

        var $carousel = $('.no-additional-class .testimonials-slider');

        var settings = {
            dots: false,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 3000,
            speed: 1000,
            appendArrows: '.testimonials-top',
            slide: '.testimonial-item',
            slidesToShow: 3,
			rows:0,
            swipeToSlide:true,
            adaptiveHeight: true,
            centerMode: true,
            centerPadding: '163px',
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 2,
                        centerPadding: '0px'
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '25%'
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        centerPadding: '70px'
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        centerPadding: '70px'
                    }
                },
            ]
        };

        function setSlideVisibility() {
            //Find the visible slides i.e. where aria-hidden="false"
            var visibleSlides = $carousel.find('.slick-slideshow__slide[aria-hidden="false"]');
            //Make sure all of the visible slides have an opacity of 1
            $(visibleSlides).each(function() {
                $(this).css('opacity', 1);
            });

            //Set the opacity of the first and last partial slides.
            $(visibleSlides).first().prev().css('opacity', 0);
        }

        $carousel.slick(settings);
        $carousel.slick('slickGoTo', 1);
        setSlideVisibility();

        $carousel.on('afterChange', function() {
            setSlideVisibility();
        });

    });

    window.onscroll = function() {myFunction()};

    var header = document.getElementById("masthead");
    var main = document.getElementById("ekhartyoga");
    var sticky = header.offsetTop;


    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            main.classList.add("sticky");

        } else {
            header.classList.remove("sticky");
            main.classList.remove("sticky");
        }
    }


    // close sidebar sections
    $("button.sidebar-bottom-button,  .workshop-footer-sidebar .custom-sidebar-back-button").click(function(){

        $(".workshop-footer-sidebar").toggle();
        if($("sidebar.user-sidebar").hasClass("is-active")) {
            $(".user-sidebar").removeClass("is-active");
            $(".user-sidebar").toggle();
        }

    });

    $(".user-sidebar .custom-sidebar-back-button,  .sidebar-bottom-section .user-menu .navbar-link").click(function(){
        $(".user-sidebar").toggle();

        if($(".workshop-footer-sidebar").is( ":visible" )) {
            $(".workshop-footer-sidebar").removeClass("is-active");
            $(".workshop-footer-sidebar").toggle();
        }


    });

    if ($("body").hasClass("logged-in")) {

        var name = $(".data .name").text();
        var email = $(".data .email").text();
        //alert(vrijednostunesena);

        var inputname = $('.username');
        var inputemail = $('.email');

        inputname.val(name);
        inputemail.val(email);

    }

    // REplace free class menu on maintence page
    var path = window.location.href;
    if (path.indexOf("/maintenance/classes/") >= 0) {
        $( "div.classes-archive-main-page" ).find( "div.custom-maintence-message" ).css( "display", "block" );

        $("body").addClass("remove-header-menu");

        $('#taxonomy-description a').each(function(){
            this.href = this.href.replace('free/classes/', 'maintenance/classes/');
        });

    }

    // ajax follow teacher
    $(document).ready( function() {
        $("#followbutton").click( function(e) {

            if ($("#followbutton" ).hasClass( "Follow" )) {
                e.preventDefault();
                resourceId = $(this).attr("data-teacher-id");
                jQuery.ajax({
                    type: "post",
                    dataType: "json",
                    url: ajaxurl2,
                    data: {action: "follow_teacher", resourceId: resourceId},
                    success: function (response) {
                        if (response.success === true) {
                            $("#followbutton").removeClass("Follow").addClass("Following");
                            $("#followbutton").text("Following");
                        }
                        else {
                            window.location.replace("http://ekhartyoga.com/login");
                        }
                    }
                });

            } else {
                
                e.preventDefault();
                resourceId = $(this).attr("data-teacher-id");
                jQuery.ajax({
                    type: "post",
                    dataType: "json",
                    url: ajaxurl2,
                    data: {action: "unfollow_teacher", resourceId: resourceId},
                    success: function (response) {
                        if (response.success === true) {
                            $("#followbutton").removeClass("Following").addClass("Follow");
                            $("#followbutton").text("Follow");
                        }
                        else {
                            window.location.replace("http://ekhartyoga.com/login");
                        }
                    }
                });

            }

        });
    });

 


});



