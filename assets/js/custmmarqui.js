

        console.log("hello @#@@ ")

    $(".marquee").marquee();


    $(".marquee").trigger("forward");




    $(".marquee").hover(function() {
        $(this).trigger("pause");
    }, function() {
        $(this).trigger("forward");
    });
