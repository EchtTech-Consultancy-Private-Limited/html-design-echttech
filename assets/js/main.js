
var baseurl = window.location.origin;

//alert(baseurl + "/set-language");
function setlang(value) {
    // alert(value)
    $.ajax({
        url: baseurl + "/set-language",
        data: { data: value },
        success: function (result) {
            //alert(result.data);
            location.reload();
        }
    });
}



(function ($) {
    "use strict";
    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);

    win.on('scroll', function () {
        var scroll = win.scrollTop();
        if (scroll < 1) {
            header.removeClass("sticky");
        } else {
            header.addClass("sticky");
        }

        $("section").each(function () {
            var elementTop = $(this).offset().top - $('#rs-header').outerHeight();
            if (scroll >= elementTop) {
                $(this).addClass('loaded');
            }
        });

    });

    //window load
    $(window).on('load', function () {
        $("#loading").delay(1500).fadeOut(500);
        $("#loading-center").on('click', function () {
            $("#loading").fadeOut(500);
        })
    })

    // Parallax Stuff
    if ($("#stuff").length) {
        var stuff = $('#stuff').get(0);
        var parallaxInstance = new Parallax(stuff);
    }

    // onepage nav
    var navclose = $('#onepage-menu');
    if (navclose.length) {
        $(".nav-menu li a").on("click", function () {
            if ($(".showhide").is(":visible")) {
                $(".showhide").trigger("click");
            }
        });

        if ($.fn.onePageNav) {
            $(".nav-menu").onePageNav({
                currentClass: "active-menu"
            });
        }
    }

    //Testimonials Slider
    var sliderfor = $('.slider-for');
    if (sliderfor.length) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: '.slider-nav',
            autoplay: true
        });
    }
    var slidernav = $('.slider-nav');
    if (slidernav.length) {
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
        });
    }

    // collapse hidden
    var navMain = $(".navbar-collapse");
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });

    // video
    if ($('.player').length) {
        $(".player").YTPlayer();
    }

    // wow init
    new WOW().init();

    // image loaded portfolio init
    var gridfilter = $('.grid');
    if (gridfilter.length) {
        $('.grid').imagesLoaded(function () {
            $('.gridFilter').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item',
                }
            });
        });
    }

    // project Filter
    if ($('.gridFilter button').length) {
        var projectfiler = $('.gridFilter button');
        if (projectfiler.length) {
            $('.gridFilter button').on('click', function (event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });
        }
    }

    // magnificPopup init
    var imagepopup = $('.image-popup');
    if (imagepopup.length) {
        $('.image-popup').magnificPopup({
            type: 'image',
            callbacks: {
                beforeOpen: function () {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInDown');
                }
            },
            gallery: {
                enabled: true
            }
        });
    }

    // Get a quote popup
    var popupquote = $('.popup-quote');
    if (popupquote.length) {
        $('.popup-quote').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#qname',
            removalDelay: 200,
            callbacks: {
                beforeOpen: function () {
                    this.st.mainClass = this.st.el.attr('data-effect');
                    if (win.width() < 800) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#qname';
                    }
                }
            }
        });
    }

    //preloader
    $(window).on('load', function () {
        $("#loader").delay(200).fadeOut(80);
    })

    //Videos popup jQuery
    // var popupvideos = $('.popup-videos');
    // if(popupvideos.length){
    //     $('.popup-videos').magnificPopup({
    //         disableOn: 10,
    //         type: 'iframe',
    //         mainClass: 'mfp-fade',
    //         removalDelay: 160,
    //         preloader: false,
    //         fixedContentPos: false
    //     });
    // }

    /*-------------------------------------
        OwlCarousel
    -------------------------------------*/
    $('.rs-carousel').each(function () {
        var owlCarousel = $(this),
            loop = owlCarousel.data('loop'),
            items = owlCarousel.data('items'),
            margin = owlCarousel.data('margin'),
            stagePadding = owlCarousel.data('stage-padding'),
            autoplay = owlCarousel.data('autoplay'),
            autoplayTimeout = owlCarousel.data('autoplay-timeout'),
            smartSpeed = owlCarousel.data('smart-speed'),
            dots = owlCarousel.data('dots'),
            nav = owlCarousel.data('nav'),
            navSpeed = owlCarousel.data('nav-speed'),
            xsDevice = owlCarousel.data('mobile-device'),
            xsDeviceNav = owlCarousel.data('mobile-device-nav'),
            xsDeviceDots = owlCarousel.data('mobile-device-dots'),
            smDevice = owlCarousel.data('ipad-device'),
            smDeviceNav = owlCarousel.data('ipad-device-nav'),
            smDeviceDots = owlCarousel.data('ipad-device-dots'),
            smDevice2 = owlCarousel.data('ipad-device2'),
            smDeviceNav2 = owlCarousel.data('ipad-device-nav2'),
            smDeviceDots2 = owlCarousel.data('ipad-device-dots2'),
            mdDevice = owlCarousel.data('md-device'),
            centerMode = owlCarousel.data('center-mode'),
            HoverPause = owlCarousel.data('hoverpause'),
            mdDeviceNav = owlCarousel.data('md-device-nav'),
            mdDeviceDots = owlCarousel.data('md-device-dots');
        owlCarousel.owlCarousel({
            loop: (loop ? true : false),
            items: (items ? items : 4),
            lazyLoad: true,
            center: (centerMode ? true : false),
            autoplayHoverPause: (HoverPause ? true : false),
            margin: (margin ? margin : 0),
            //stagePadding: (stagePadding ? stagePadding : 0),
            autoplay: (autoplay ? true : false),
            autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
            smartSpeed: (smartSpeed ? smartSpeed : 250),
            dots: (dots ? true : false),
            nav: (nav ? true : false),
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            navSpeed: (navSpeed ? true : false),
            responsiveClass: true,
            responsive: {
                0: {
                    items: (xsDevice ? xsDevice : 1),
                    nav: (xsDeviceNav ? true : false),
                    dots: (xsDeviceDots ? true : false),
                    center: false,
                },
                576: {
                    items: (smDevice2 ? smDevice2 : 2),
                    nav: (smDeviceNav2 ? true : false),
                    dots: (smDeviceDots2 ? true : false),
                    center: false,
                },
                768: {
                    items: (smDevice ? smDevice : 3),
                    nav: (smDeviceNav ? true : false),
                    dots: (smDeviceDots ? true : false),
                    center: false,
                },
                992: {
                    items: (mdDevice ? mdDevice : 4),
                    nav: (mdDeviceNav ? true : false),
                    dots: (mdDeviceDots ? true : false),
                }
            }
        });
    });

    // Skill bar
    var skillbar = $('.skillbar');
    if (skillbar.length) {
        $('.skillbar').skillBars({
            from: 0,
            speed: 4000,
            interval: 100,
            decimals: 0,
        });
    }

    // Counter Up
    var counter = $('.rs-count');
    if (counter.length) {
        $('.rs-count').counterUp({
            delay: 20,
            time: 1500
        });
    }

    // scrollTop init
    var totop = $('#scrollUp');
    win.on('scroll', function () {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });



    // Skip to Content
    var totop = $('#scrollUp');
    win.on('scroll', function () {
        if (win.scrollbottom() < 450) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function () {
        $("#scrollUp").animate({
            scrollTop: 0
        }, 500)
    });


    //canvas menu
    var navexpander = $('#nav-expander');
    if (navexpander.length) {
        $('#nav-expander').click(function (e) {
            e.preventDefault();
            $('body').addClass('nav-expanded');
        });

        $('#nav-expander').focus(function (e) {
            e.preventDefault();
            $('body').addClass('nav-expanded');
        });
    }
    var navclose = $('#nav-close');
    if (navclose.length) {
        $('#nav-close').on('click', function (e) {
            e.preventDefault();
            $('body').removeClass('nav-expanded');
        });
    }

    // $("body").on('click',function(){
    //     $('body').removeClass('nav-expanded');
    // });

    $(".tab-close").focus(function () {
        $('body').removeClass('nav-expanded');
    });


    // View Course
    $('.course-view-part .view-icons .view-grid').on('click', function (e) {
        e.preventDefault();
        $('.rs-popular-courses').removeClass('list-view');
    });
    $('.course-view-part .view-icons .view-list').on('click', function (e) {
        e.preventDefault();
        $('.rs-popular-courses').addClass('list-view');
    });


    /*----------------------------
    single-productjs active
    ------------------------------ */
    var singleproductimage = $('.single-product-image');
    if (singleproductimage.length) {
        $('.single-product-image').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.single-product-nav'
        });
    }

    var singleproductnav = $('.single-product-nav');
    if (singleproductnav.length) {
        $('.single-product-nav').slick({
            slidesToShow: 3,
            asNavFor: '.single-product-image',
            dots: false,
            focusOnSelect: true,
            centerMode: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 591,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
    }

    // categories btn
    $('.cat-menu-inner').hide();
    $('.cat-btn').on('click', function () {
        $('.cat-menu-inner').slideToggle();
    })

    var tilt = $('.js-tilt');
    if (tilt.length) {
        const tilt = $('.js-tilt').tilt();
    }


})(jQuery);

$(document).ready(function () {

    var currentUrl = window.location.href;

    if (currentUrl.indexOf('tab=nhrl') !== -1) {
        $('#master-layout_0').removeClass('active show');
        $('#master-layout_2').addClass('active show');
    }

    if (currentUrl.indexOf('tab=narl') !== -1) {
        $('#master-layout_0').removeClass('active show');
        $('#master-layout_3').addClass('active show');
    }

    $(".rs-menu li.menu-item-has-children > a").focus(function () {
        // $(".rs-menu li.menu-item-has-children > a").addClass('main-anchor');
        $(".rs-menu li.menu-item-has-children > a.main-anchor.show").removeClass('show');
        // $(".rs-menu li.menu-item-has-children.multi-menu > a.main-anchor.show").removeClass('show');
        // $(".rs-menu li.menu-item-has-children.multi-menu > a.main-anchor").addClass('show');
        $(this).addClass('show');
    });




    $(".full-width-header .rs-header .menu-area .main-menu .rs-menu ul.nav-menu li:last-child a").focus(function () {

        $(".rs-menu li.menu-item-has-children > a.main-anchor.show").removeClass('show');

    });


    $("li.menu-item-has-children ul.sub-menu li.menu-item-has-children > a").focus(function () {
        $(".rs-menu li.menu-item-has-childre > a.main-anchor").addClass('show');
    });

    $("body").click(function () {

        $(".rs-menu li.menu-item-has-children > a.main-anchor.show").removeClass('show');

    });

});

// Font-Increment

function increaseFontSize() {
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, li, button,.about-t,h2.title,.desc-text-title, .copyright-text');

    elements.forEach((element) => {
        // Get the current font size and convert it to a number
        let currentFontSize = parseFloat(window.getComputedStyle(element).fontSize);

        // Check if the current font size is less than the maximum size (25px)
        if (currentFontSize < 40) {
            // Increase the font size by 1px
            currentFontSize += 1;
            // Set the new font size
            element.style.fontSize = currentFontSize + 'px';
        }
    });
}


function normaltext() {
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, li,.desc, button,.about-t,h2.title,.desc-text-title, .copyright-text');

    elements.forEach((element) => {
        // Check if the current font size is less than the maximum size (25px)
        element.style.fontSize = '';
    });
}


function decreaseFontSize() {
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, li,.desc, button,.about-t,h2.title,.desc-text-title, .copyright-text');

    elements.forEach((element) => {
        // Get the current font size and convert it to a number
        let currentFontSize = parseFloat(window.getComputedStyle(element).fontSize);

        // Check if the current font size is less than the maximum size (25px)
        if (currentFontSize > 12) {
            // Increase the font size by 1px
            currentFontSize -= 2;
            // Set the new font size
            element.style.fontSize = currentFontSize + 'px';
        }
    });
}



// Tabindex js

$(document).ready(function () {
    // $(".dropdown-toggle.focus-open-add").click(function(){
    //     $(".dropdown-toggle.focus-open-add.show").removeClass('show');
    //     $(".dropdown-menu.add-class-focus.show").removeClass('show');
    // });

    $("p, h1, h2, h3, h4, h5, h6, a, button,.about-t,h2.title,.desc-text-title,.desc, .copyright-text").attr('tabindex', '0');

    $(".text-assesbility ").focus(function () {
        $(".text-assesbility-button").addClass('d-block');
    });

    $(".theme-btn-light").focus(function () {
        $(".text-assesbility-button").removeClass('d-block');
    });

    // $(".banner").focus(function(){
    //     $(".text-assesbility-button").removeClass('d-block');
    // });
});


// Dark mode button






// enable dark mode and light mode
function setTheme() {
    var baseURL = $("meta[name='basepath']").attr('content');


    if (document.getElementById('mode').checked) {
        $('#mode').attr('checked');
        const linkElement = document.getElementById('theme-style');
        linkElement.href = localStorage.getItem('theme-mode');
        linkElement.href = baseURL + `/dark-mode.css`;


        // {{asset('assets/css/dark-mode.css')}}
        //localStorage.getItem('theme-mode')
        // Store the theme preference in local storage
        localStorage.setItem('theme-mode', baseURL + `/dark-mode.css`);


        // Set the initial theme based on local storage or default to 'light'
        //   const initialTheme = localStorage.getItem('theme') || 'light';
        //   setTheme(initialTheme);

    } else {
        const linkElement = document.getElementById('theme-style');
        linkElement.href = `${'assets/css/style'}.css`;
        $('#mode').removeAttr('checked');
        // Store the theme preference in local storage
        localStorage.removeItem('theme-mode');
    }

}



// change darkemode

//   function swapStyleSheet(){
//     document.getElementById('pageStyle').setAttribute('href', 'assets/css/dark-mode.css');

//     window.localStorage.setItem("pageStyle", 'assets/css/dark-mode.css');


//   }
//   // Set the initial theme based on local storage or default to 'light'
//   const initialTheme = localStorage.getItem('theme') || 'light';
//   setTheme(initialTheme);





// slider add pause button
// Custom Button
var owl_1 = $('#banner1');
$('.customNextBtn').click(function () {
    owl_1.trigger('next.owl.carousel', 500);
});
$('.customPreviousBtn').click(function () {
    owl_1.trigger('prev.owl.carousel', 500);
});
$('.customPause').click(function () {
    owl_1.trigger('stop.owl.autoplay', 500);
});
$('.customPlay').click(function () {
    owl_1.trigger('play.owl.autoplay', 500);
});


var pause = document.querySelector(".customPause");
var play = document.querySelector(".customPlay");
pause.addEventListener("click", function () {
    play.style.display = "block";
    pause.style.display = "none"
});

play.addEventListener("click", function () {
    play.style.display = "none";
    pause.style.display = "block"
});
//   second latest news

var owl_2 = $('#banner2');
$('#customNextBtn2').click(function () {
    owl_2.trigger('next.owl.carousel', 500);
});
$('#customPreviousBtn2').click(function () {
    owl_2.trigger('prev.owl.carousel', 500);
});
$('#customPause2').click(function () {
    owl_2.trigger('stop.owl.autoplay', 500);
});
$('#customPlay2').click(function () {
    owl_2.trigger('play.owl.autoplay', 500);
});



var pause2 = document.querySelector("#customPause2");
var play2 = document.querySelector("#customPlay2");
pause2.addEventListener("click", function () {
    play2.style.display = "block";
    pause2.style.display = "none"
});

play2.addEventListener("click", function () {
    play2.style.display = "none";
    pause2.style.display = "block"
});



//   third photo gallery latest news

var owl_3 = $('#banner3');
$('#customNextBtn3').click(function () {
    owl_3.trigger('next.owl.carousel', 500);
});
$('#customPreviousBtn3').click(function () {
    owl_3.trigger('prev.owl.carousel', 500);
});
$('#customPause3').click(function () {
    owl_3.trigger('stop.owl.autoplay', 500);
});
$('#customPlay3').click(function () {
    owl_3.trigger('play.owl.autoplay', 500);
});



var pause3 = document.querySelector("#customPause3");
var play3 = document.querySelector("#customPlay3");
pause3.addEventListener("click", function () {
    play3.style.display = "block";
    pause3.style.display = "none"
});

play3.addEventListener("click", function () {
    play3.style.display = "none";
    pause3.style.display = "block"
});



var $ticker = $('[data-ticker="list"]'),
    tickerItem = '[data-ticker="item"]'
    itemCount = $(tickerItem).length,
    viewportWidth = 0;

function setupViewport(){
    $ticker.find(tickerItem).clone().prependTo('[data-ticker="list"]');

    for (i = 0; i < itemCount; i ++){
        var itemWidth = $(tickerItem).eq(i).outerWidth();
        viewportWidth = viewportWidth + itemWidth;
    }

    $ticker.css('width', viewportWidth);
}

function animateTicker(){
    $ticker.animate({
        marginLeft: -viewportWidth
      }, 40000, "linear", function() {
        $ticker.css('margin-left', '0');
        animateTicker();
      });
}

function initializeTicker(){
    setupViewport();
    animateTicker();

    $ticker.on('mouseenter', function(){
        $(this).stop(true);
    }).on('mouseout', function(){
        animateTicker();
    });
}

initializeTicker();




//   fourth video gallery latest news

var owl_4 = $('#banner4');
$('#customNextBtn4').click(function () {
    owl_4.trigger('next.owl.carousel', 500);
});
$('#customPreviousBtn4').click(function () {
    owl_4.trigger('prev.owl.carousel', 500);
});
$('#customPause4').click(function () {
    owl_4.trigger('stop.owl.autoplay', 500);
});
$('#customPlay4').click(function () {
    owl_4.trigger('play.owl.autoplay', 500);
});



var pause4 = document.querySelector("#customPause4");
var play4 = document.querySelector("#customPlay4");
pause4.addEventListener("click", function () {
    play4.style.display = "block";
    pause4.style.display = "none"
});

play4.addEventListener("click", function () {
    play4.style.display = "none";
    pause4.style.display = "block"
});



//   Five video gallery latest news

var owl_5 = $('#banner5');
$('#customNextBtn5').click(function () {
    owl_5.trigger('next.owl.carousel', 500);
});
$('#customPreviousBtn5').click(function () {
    owl_5.trigger('prev.owl.carousel', 500);
});
$('#customPause5').click(function () {
    owl_5.trigger('stop.owl.autoplay', 500);
});
$('#customPlay5').click(function () {
    owl_5.trigger('play.owl.autoplay', 500);
});

var pause5 = document.querySelector("#customPause5");
var play5 = document.querySelector("#customPlay5");
pause5.addEventListener("click", function () {
    play5.style.display = "block";
    pause5.style.display = "none"
});

play5.addEventListener("click", function () {
    play5.style.display = "none";
    pause5.style.display = "block"
});



// Skip to main content

function slipttobottom() {
    $(window).scrollTop(450);
}

$('.myslider').slick({

    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    speed: 5000,

});


function fun() {


    var calculate = $('#calculate').val();
    var selectedRIG = $('input[name="RIG"]:checked').val();

    if (calculate.trim() === '' || !selectedRIG) {

        if (calculate.trim() === '') {
            alert('Weight of Patient is blank ');
            $('.dose_unit').hide();
        }

        if (!selectedRIG) {
            alert('RIG is blank ');

        }


    } else {

        var total = calculate * selectedRIG;
        if(selectedRIG =='40'){
            var valData = `Equine RIG: 300 IU = ${Math.ceil(total/300)} ml`;
        }else{
            var valData = `Human RIG: 150 IU = ${Math.ceil(total/150)} ml`;
        }
        $('.calculate_dosse').html(`
        <h3>Calculated Dosage of ERIG is:
            <span class="dose_unit measurement">
                <span id='dosageValue'>${total}</span>

            </span>
            <ul class="measurement" >
                  <li>${valData}</li>
            </ul>
        </h3>
    `);
    }
}

// function printDiv(newMapA) {
//     var printContents = document.getElementById(newMapA).innerHTML;
//     var originalContents = document.body.innerHTML;
//     document.body.innerHTML = printContents;
//     window.print();
//     document.body.innerHTML = originalContents;
// }




function printContent(printDivId) {
    // Get the content of the element to be printed
    var printContents = document.getElementById(printDivId).innerHTML;

    // Save the current content of the body
    var originalContents = document.body.innerHTML;

    // Set the body content to the content to be printed
    document.body.innerHTML = printContents;

    // Print the content
    window.print();

    // Restore the original content of the body
    document.body.innerHTML = originalContents;
}
