var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var players = document.querySelectorAll(".youtube-player"),
    currentVideoIndex = 0;
function onYouTubeIframeAPIReady() {
    players.forEach(function (e, t) {
        new YT.Player(e, {
            height: "400",
            width: "100%",
            videoId: e.getAttribute("data-video-id"),
            events: {
                onStateChange: function (e) {
                    e.data === YT.PlayerState.ENDED &&
                        ((currentVideoIndex =
                            (currentVideoIndex + 1) % players.length),
                        players[currentVideoIndex].loadVideoById(
                            players[currentVideoIndex].getAttribute(
                                "data-video-id"
                            )
                        ));
                },
            },
        });
    });
}
jQuery(".fancybox-close").click(function () {
    $(".youtube-iframe").each(function (e) {
        var t = $(this).attr("src");
        $(this).attr("src", t + "?autoplay=0");
    });
});
let contact_submit = $(".message");
contact_submit.on("click", () => {
    setTimeout(function () {
        document.getElementById("toast-container").style.display = "none";
    }, 3e3);
});
var baseurl = window.location.origin;
function setlang(e) {
    $.ajax({
        url: baseurl + "/set-language",
        data: { data: e },
        success: function (e) {
            location.reload();
        },
    });
}
function changeClass() {
    var e = document.getElementsByClassName("text-slide"),
        t = document.getElementsByClassName("scroll-text");
    e[0].classList.toggle("pause"), t[0].classList.toggle("stop");
}
function changeClass01() {
    var e = document.getElementsByClassName("text-slide01"),
        t = document.getElementsByClassName("scroll-text01");
    e[0].classList.toggle("pause"), t[0].classList.toggle("stop");
}
function changeClass1() {
    var e = document.getElementById("tender_pause_button");
    var t = document.getElementById("tender_scroll");
    e.classList.toggle("pause");
    t.classList.toggle("stop");
}

function ctime() {
    if (document.getElementById) {
        timeElement = document.getElementById("timeid");
        var e = new Date(),
            t = e.getHours(),
            a = e.getMinutes(),
            o = e.getSeconds(),
            n = "PM";
        t < 12 && (n = "AM"),
            t > 12 && (t -= 12),
            0 == t && (t = 12),
            a <= 9 && (a = "0" + a),
            o <= 9 && (o = "0" + o);
        var i = t + ":" + a + ":" + o + " " + n;
        (timeElement.innerHTML = "<p class='time'>" + i + "</p>"),
            setTimeout("ctime()", 1e3);
    }
}
$(window).load(function () {
    $("#flexCarouse2").flexslider({
        animation: "slide",
        animationLoop: !1,
        itemWidth: 380,
        itemMargin: 25,
        minItems: 1,
        maxItems: 1,
        move: 1,
        pausePlay: !0,
        pauseText: "Pause",
        playText: "Play",
        controlNav: !1,
        start: function (e) {
            $("body").removeClass("loading"),
                1 === e.pagingCount && e.addClass("flex-centered");
        },
    });
}),
    $(window).load(function () {
        $("#flexSlider").flexslider({
            animation: "slide",
            pausePlay: !0,
            controlNav: !0,
            start: function (e) {
                $("body").removeClass("loading");
            },
        }),
            $("#flexSlider1").flexslider({
                animation: "slide",
                controlNav: !1,
                start: function (e) {
                    $("body").removeClass("loading");
                },
            }),
            $("#flexSlider2").flexslider({
                animation: "slide",
                controlNav: !1,
                start: function (e) {
                    $("body").removeClass("loading");
                },
            }),
            $("#contSlider1").flexslider({
                animation: "swing",
                controlNav: !1,
                directionNav: !1,
                direction: "vertical",
                easing: "linear",
                prevText: " ",
                nextText: " ",
                minItems: 2,
                maxItems: 2,
                move: 2,
                itemMargin: 0,
                pausePlay: !0,
                pauseOnHover: !0,
                slideshowSpeed: 1e3,
                animationSpeed: 1e4,
            }),
            $("#contSlider2").flexslider({
                animation: "slide",
                controlNav: !1,
                start: function (e) {
                    $("body").removeClass("loading");
                },
            }),
            $("#flexCarousel1").flexslider({
                animation: "slide",
                animationLoop: !1,
                itemWidth: 168,
                itemMargin: 20,
                minItems: 1,
                maxItems: 4,
                slideshow: 1,
                move: 1,
                controlNav: !1,
                start: function (e) {
                    $("body").removeClass("loading");
                },
            }),
            $("#breaking_news").flexslider({
                animation: "slide",
                controlNav: !1,
                animationLoop: !0,
                directionNav: !1,
                direction: "horizontal",
                slideshowSpeed: 7e3,
                animationSpeed: 600,
                initDelay: 1e3,
                pausePlay: !0,
                pauseText: "",
                playText: "",
                pauseOnHover: !1,
            }),
            $("#galleryCarousel").flexslider({
                animation: "fade",
                controlNav: "thumbnails",
                start: function (e) {
                    $("body").removeClass("loading");
                },
            });
    }),
    $(document).ready(function () {
        $("figure img").ma5gallery({ preload: !0 }),
            $("#socialTab").easyResponsiveTabs({
                type: "default",
                width: "auto",
                fit: !0,
                tabidentify: "socialTab_1",
                activate: function (e) {
                    var t = $(this),
                        a = $("#nested-tabInfo");
                    $("span", a).text(t.text()), a.show();
                },
            }),
            $("#feedTab").easyResponsiveTabs({
                type: "default",
                width: "auto",
                fit: !0,
                tabidentify: "feedTab_1",
                activate: function (e) {
                    var t = $(this),
                        a = $("#nested-tabInfo");
                    $("span", a).text(t.text()), a.show();
                },
            }),
            $(".resp-tabs-list li a").click(function (e) {
                e.preventDefault();
            });
    }),
    $(document).ready(function () {
        $("figure img").ma5gallery({ preload: !0 });
    }),
    $(document).ready(function () {
        $("#parentHorizontalTab").easyResponsiveTabs({
            type: "default",
            width: "auto",
            fit: !0,
            tabidentify: "hor_1",
            activate: function (e) {
                var t = $(this),
                    a = $("#nested-tabInfo");
                $("span", a).text(t.text()), a.show();
            },
        }),
            $("#ChildVerticalTab_1").easyResponsiveTabs({
                type: "vertical",
                width: "auto",
                fit: !0,
                tabidentify: "ver_1",
                activetab_bg: "#fff",
                inactive_bg: "#fff",
                active_border_color: "#c1c1c1",
                active_content_border_color: "#5AB1D0",
            });
        var e,
            t = document.getElementsByClassName("video-wrapper")[0],
            a = document.getElementsByTagName("video")[0];
        ({
            renderVideoPlayButton: function () {
                t.contains(a) &&
                    (this.formatVideoPlayButton(),
                    a.classList.add("has-media-controls-hidden"),
                    (e = document.getElementsByClassName(
                        "video-overlay-play-button"
                    )[0]).addEventListener("click", this.hideVideoPlayButton));
            },
            formatVideoPlayButton: function () {
                t.insertAdjacentHTML(
                    "beforeend",
                    '                    <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">                        <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>                        <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>                    </svg>                    '
                );
            },
            hideVideoPlayButton: function () {
                a.play(),
                    e.classList.add("is-hidden"),
                    a.classList.remove("has-media-controls-hidden"),
                    a.setAttribute("controls", "controls");
            },
        }).renderVideoPlayButton();
    }),
    $(document).ready(function () {
        $(document).scroll(function () {
            $(this).scrollTop() > 100
                ? $("#scroll").fadeIn()
                : $("#scroll").fadeOut();
        }),
            $("#scroll").click(function () {
                return $("html, body").animate({ scrollTop: 0 }, 800), !1;
            });
    }),
    (window.onload = ctime),
    $("document").ready(function () {
        setTimeout(function () {
            $("div.alert").remove();
        }, 5e3);
    }),
    $(document).ready(() => {
        $(".sl-accordion").click(() => {}),
            $("#sidebarDropdown2").click(() => {
                $("#sidebarDropdown2").css({ "background-color": "#000" });
            });
    }),
    $(document).ready(function () {
        $(".image-popup").magnificPopup({
            type: "image",
            mainClass: "mfp-with-zoom",
            gallery: { enabled: !0 },
        });
    }),
    $(document).ready(function () {
        $("a.btn-gallery").on("click", function (e) {
            e.preventDefault();
            var t = $(this).attr("href");
            $(t)
                .magnificPopup({
                    delegate: "a",
                    type: "image",
                    gallery: { enabled: !0 },
                })
                .magnificPopup("open");
        }),
            document
                .querySelectorAll(
                    ".accordion-collapse .accordion-body ul li ul li"
                )
                .forEach((e) => {
                    if (e.classList.contains("qm-active")) {
                        let t = e.closest(".accordion").id,
                            a =
                                (e
                                    .closest(".accordion")
                                    .parentElement.parentElement.parentElement.classList.add(
                                        "show"
                                    ),
                                document
                                    .getElementById(t)
                                    .classList.add("menu-active"),
                                e.closest(".accordion"),
                                document.getElementById(t)),
                            o = a.firstElementChild.childNodes[3];
                        o && o.classList.add("show");
                        let n = a.firstElementChild.childNodes[1].childNodes[1];
                        n && n.classList.add("collapsed");
                    }
                }),
            document
                .querySelectorAll(".accordion-collapse .accordion-body ul li")
                .forEach((e) => {
                    if (e.classList.contains("qm-active")) {
                        let t = e.closest(".accordion").id,
                            a =
                                (document
                                    .getElementById(t)
                                    .classList.add("menu-active"),
                                e.closest(".accordion"),
                                document.getElementById(t)),
                            o = a.firstElementChild.childNodes[3];
                        o && o.classList.add("show");
                        let n = a.firstElementChild.childNodes[1].childNodes[1];
                        n && n.classList.add("collapsed");
                    }
                });
    }),
    $("#mobile_no").keypress(function (e) {
        var t = new RegExp("^[0-9_]"),
            a = String.fromCharCode(e.charCode ? e.charCode : e.which);
        return !!t.test(a) || (e.preventDefault(), !1);
    }),
    $(".preventnumeric").keypress(function (e) {
        var t = new RegExp(/^[a-zA-Z\s]+$/),
            a = String.fromCharCode(e.charCode ? e.charCode : e.which);
        return !!t.test(a) || (e.preventDefault(), !1);
    }),
    $(document).ready(function () {
        $(".fl-accordion").click(function () {
            $(this).addClass("fl-accordion-active");
        }),
            $(".fl-n-accordion").click;
    }),
    $(".latest_news_marquee").marquee({
        speed: 5e3,
        gap: 5,
        delayBeforeStart: 0,
        direction: "left",
        duplicated: !0,
        pauseOnHover: !0,
    }),
    $(".marquee-with-options").marquee({
        speed: 200,
        gap: 50,
        delayBeforeStart: 0,
        direction: "left",
        duplicated: !0,
        pauseOnHover: !0,
    }),
    $(".color").on("click", function () {
        let e = $(this).attr("data-id");
        $(".change-color-code").css("background", e),
            $(".banner-wrapper .flex-control-nav").css("background", e),
            $(".banner-wrapper .flex-pauseplay").css("background", e),
            $(".latest-new-title:before").css("border-color", e),
            $(".change-border-color-text").css({ "border-color": e, color: e }),
            $(".change-text-color").css("color", e);
    });
let accordion_collapse = $(".accordion-collapse.collapse");
accordion_collapse.on("show.bs.collapse", function () {
    let e = $(this).closest(".accordion");
    accordion_collapse.not(e).removeClass("show");
});
let sidebarDropdown_5 = $("#sidebarDropdown_5"),
    fl_accordion = $(".fl-accordion");
fl_accordion.click(function () {
    fl_accordion.parent().parent().parent().addClass("show");
}),
    // $(document).ready(function () {
    //     getCookie("modalShownToday") ||
    //         ($(".modal").each(function (e) {
    //             $(this).on("show.bs.modal", function (e) {
    //                 var t = $(this).attr("data-easein");
    //                 "shake" == t ||
    //                 "pulse" == t ||
    //                 "tada" == t ||
    //                 "flash" == t ||
    //                 "bounce" == t ||
    //                 "swing" == t
    //                     ? $(".modal-dialog").velocity("callout." + t)
    //                     : $(".modal-dialog").velocity("transition." + t);
    //             });
    //         }),
    //         setTimeout(function () {
    //             $("#costumModal8").modal("show");
    //         }, 1e3),
    //         setCookie("modalShownToday", "true", 1));
    // }),
    $("#submitForm").click(function (e) {
        $("#contact_form input, #contact_form textarea").focus(function () {
            var e = $(this).attr("name");
            $("#" + e + "-error").html("");
        }),
            e.preventDefault();
        var t = $("#contact_form").serialize(),
            a = $('meta[name="csrf-token"]').attr("content");
        $.ajaxSetup({ headers: { "X-CSRF-TOKEN": a } }),
            $.ajax({
                type: "POST",
                url: baseUrl1 + "/contact-us",
                data: t,
                success: function (e) {
                    e.success
                        ? ($("#contact_form")[0].reset(),
                          $("#contact-error").html(
                              '<div id="toast-container" class="toast-top-right"><div class="toast toast-success" aria-live="polite" style="display: block;"><div class="toast-message">Your information successfully done.</div></div></div>'
                          ))
                        : e.captchaError
                        ? $("#contact-error").html(
                              '<div id="toast-container" class="toast-top-right"><div class="toast toast-error" aria-live="assertive" style="display: block;"><div class="toast-message">Captcha Invalid .</div></div></div>'
                          )
                        : toastr.error("Oops something went wrong");
                },
                error: function (e) {
                    if (e.responseJSON && e.responseJSON.errors) {
                        var t = e.responseJSON.errors;
                        for (var a in t)
                            t.hasOwnProperty(a) &&
                                $("#" + a + "-error").html(t[a][0]);
                    }
                },
            });
    }),
    $("#feedback_button").click(function (e) {
        $("#feedback_form input, #feedback_form textarea").focus(function () {
            var e = $(this).attr("name");
            $("#" + e + "-error").html("");
        }),
            e.preventDefault();
        var t = $("#feedback_form").serialize(),
            a = $('meta[name="csrf-token"]').attr("content");
        $.ajaxSetup({ headers: { "X-CSRF-TOKEN": a } }),
            $.ajax({
                type: "POST",
                url: baseUrl1 + "/feedbackStore",
                data: t,
                success: function (e) {
                    e.success
                        ? ($("#feedback_form")[0].reset(),
                          $("#response-error").html(
                              '<div id="toast-container" class="toast-top-right"><div class="toast toast-success" aria-live="polite" style="display: block;"><div class="toast-message">Your information successfully done.</div></div></div>'
                          ))
                        : e.captchaError
                        ? $("#response-error").html(
                              '<div id="toast-container" class="toast-top-right"><div class="toast toast-error" aria-live="assertive" style="display: block;"><div class="toast-message">Captcha Invalid.</div></div></div>'
                          )
                        : toastr.error("Oops something went wrong");
                },
                error: function (e) {
                    if (e.responseJSON && e.responseJSON.errors) {
                        var t = e.responseJSON.errors;
                        for (var a in t)
                            t.hasOwnProperty(a) &&
                                $("#" + a + "-error").html(t[a][0]);
                    }
                },
            });
    });
let mybutton = document.getElementById("myBtn");
function scrollFunction() {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
        ? (mybutton.style.display = "block")
        : (mybutton.style.display = "none");
}
(window.onscroll = function () {
    scrollFunction();
}),
    $(".rs-carousel").each(function () {
        var e = $(this),
            t = e.data("loop"),
            a = e.data("items"),
            o = e.data("margin"),
            n = (e.data("stage-padding"), e.data("autoplay")),
            i = e.data("autoplay-timeout"),
            s = e.data("smart-speed"),
            l = e.data("dots"),
            c = e.data("nav"),
            r = e.data("nav-speed"),
            d = e.data("mobile-device"),
            u = e.data("mobile-device-nav"),
            m = e.data("mobile-device-dots"),
            p = e.data("ipad-device"),
            f = e.data("ipad-device-nav"),
            y = e.data("ipad-device-dots"),
            v = e.data("ipad-device2"),
            g = e.data("ipad-device-nav2"),
            h = e.data("ipad-device-dots2"),
            b = e.data("md-device"),
            w = e.data("center-mode"),
            x = e.data("hoverpause"),
            k = e.data("md-device-nav"),
            _ = e.data("md-device-dots");
        e.owlCarousel({
            loop: !!t,
            items: a || 4,
            lazyLoad: !0,
            center: !!w,
            autoplayHoverPause: !!x,
            margin: o || 0,
            autoplay: !!n,
            autoplayTimeout: i || 1e3,
            smartSpeed: s || 250,
            dots: !!l,
            nav: !!c,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>",
            ],
            navSpeed: !!r,
            responsiveClass: !0,
            responsive: {
                0: { items: d || 1, nav: !!u, dots: !!m, center: !1 },
                576: { items: v || 2, nav: !!g, dots: !!h, center: !1 },
                768: { items: p || 2, nav: !!f, dots: !!y, center: !1 },
                992: { items: b || 2, nav: !!k, dots: !!_ },
            },
        });
    });
var owl_3 = $("#banner3");
$("#customNextBtn3").click(function () {
    owl_3.trigger("next.owl.carousel", 500);
}),
    $("#customPreviousBtn3").click(function () {
        owl_3.trigger("prev.owl.carousel", 500);
    }),
    $("#customPause3").click(function () {
        owl_3.trigger("stop.owl.autoplay", 500);
    }),
    $("#customPlay3").click(function () {
        owl_3.trigger("play.owl.autoplay", 500);
    });
owl_3 = $("#banner3");
$("#customNextBtn3").click(function () {
    owl_3.trigger("next.owl.carousel", 500);
}),
    $("#customPreviousBtn3").click(function () {
        owl_3.trigger("prev.owl.carousel", 500);
    }),
    $("#customPause3").click(function () {
        owl_3.trigger("stop.owl.autoplay", 500);
    }),
    $("#customPlay3").click(function () {
        owl_3.trigger("play.owl.autoplay", 500);
    });
var pause3 = document.querySelector("#customPause3"),
    play3 = document.querySelector("#customPlay3");
pause3.addEventListener("click", function () {
    (play3.style.display = "block"), (pause3.style.display = "none");
}),
    play3.addEventListener("click", function () {
        (play3.style.display = "none"), (pause3.style.display = "block");
    });
var owl_4 = $("#banner4");
$("#customNextBtn4").click(function () {
    owl_4.trigger("next.owl.carousel", 500);
}),
    $("#customPreviousBtn4").click(function () {
        owl_4.trigger("prev.owl.carousel", 500);
    }),
    $("#customPause4").click(function () {
        owl_4.trigger("stop.owl.autoplay", 500);
    }),
    $("#customPlay4").click(function () {
        owl_4.trigger("play.owl.autoplay", 500);
    });
var pause4 = document.querySelector("#customPause4"),
    play4 = document.querySelector("#customPlay4");
pause4.addEventListener("click", function () {
    (play4.style.display = "block"), (pause4.style.display = "none");
}),
    play4.addEventListener("click", function () {
        (play4.style.display = "none"), (pause4.style.display = "block");
    }),
    $(document).ready(function () {
        $(".scroll-animation").each(function () {
            $(this).height() > 200 &&
                $(this).css({
                    // height: "-webkit-fill-available",
                    "-webkit-animation": "scroll-left 30s linear infinite",
                    animation: "scroll-left 30s linear infinite",
                    "-webkit-transform" : "translateY(100%)",
                    transform: "translateY(100%)"
                });
        });
    });
