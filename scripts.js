/* Smiling School scripts */
$(document).ready(function() {
    $.get("https://smileschool-api.hbtn.info/quotes", function (data) {
        if (data){
            data.forEach(quote => {
                $("#quotes").prepend("<div class=\"carousel-item\" id=\"quote-" + quote.id + "\"></div>");

                $("#quote-" + quote.id).append("<div class=\"d-flex flex-column flex-sm-row align-items-center justify-content-center py-5 px-0 px-md-5 text-center\" id=\"q-img-" + quote.id + "\"></div>");

                $("#q-img-" + quote.id).append("<div class=\"col-12 col-sm-4 col-lg-3 my-4 my-md-5\" id=\"q-img-" + quote.id + "-cont\"></div>");

                $("#q-img-" + quote.id + "-cont").append("<img class=\"rounded-circle\" src=" + quote.pic_url + " height=\"160px\" width=\"160px\" alt=\"person\"></img>");
                
                $("#q-img-" + quote.id + "-cont").append("<a class=\"carousel-control-prev d-sm-none text-decoration-none\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\" id=\"rs-q-btn-prev\"></a>");
                $("#rs-q-btn-prev").append("<span class=\"holberton_school-icon-arrow_4\"></span>");
                $("#rs-q-btn-prev").append("<span class=\"sr-only\">Previous</span>");
                
                $("#q-img-" + quote.id + "-cont").append("<a class=\"carousel-control-next d-sm-none text-decoration-none\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\" id=\"rs-q-btn-next-" + quote.id + "\"></a>");
                $("#rs-q-btn-next-" + quote.id).append("<span class=\"holberton_school-icon-arrow_3\"></span>");
                $("#rs-q-btn-next-" + quote.id).append("<span class=\"sr-only\">Next</span>");

                $("#q-img-" + quote.id).append("<div class=\"col-12 col-sm-5 col-md-6 col-lg-7 text-left my-4 my-md-5\" id=\"inner-quote-" + quote.id + "\"></div>");

                $("#inner-quote-" + quote.id).append("<p class=\"font-weight-light\">" + quote.text + "</p>");
                $("#inner-quote-" + quote.id).append("<h3 class=\"font-weight-bold\">" + quote.name + "</h3>");
                $("#inner-quote-" + quote.id).append("<p class=\"font-italic\">" + quote.title + "</p>");
            });
            $("#quotes div:first-child").addClass("active");

            $("#loader").addClass("visually-hidden");
        } else {
            console.log("No quotes data recieved");
        }
    });

    $.get("https://smileschool-api.hbtn.info/popular-tutorials", function (data) {
        if (data){
            $("#pop-tutorials").append("<div class=\"owl-carousel owl-reponsive row justify-content-center mx-lg-n5 px-lg-3\" id=\"pop-tutorials-inner\"></div>");
            data.forEach(tutorial => {
                $("#pop-tutorials-inner").append("<div class=\"card border-0 px-0 mb-5\" id=\"pt-card-" + tutorial.id + "\"></div>");

                $("#pt-card-" + tutorial.id).append("<img class=\"card-img-top\" src=\"" + tutorial.thumb_url + "\" alt=\"video\" height=\"154\" width=\"255\"></img>");
                $("#pt-card-" + tutorial.id).append("<div class=\"card-img-overlay d-flex justify-content-center align-items-center p-0\" id=\"pt-img-over-" + tutorial.id + "\"></div>");
                $("#pt-img-over-" + tutorial.id).append("<img class=\"videoplayer w-auto\" src=\"images/play.png\" alt=\"videoplayer\" height=\"64px\" width=\"64px\">");
                
                $("#pt-card-" + tutorial.id).append("<div class=\"card-body text-left p-2\" id=\"pt-card-bd-" + tutorial.id + "\"></div>");
                $("#pt-card-bd-" + tutorial.id).append("<h6 class=\"card-title font-weight-bold\">" + tutorial.title + "</h6>");
                $("#pt-card-bd-" + tutorial.id).append("<p class=\"card-text text-muted small\">" + tutorial["sub-title"] + "</p>");
                
                $("#pt-card-bd-" + tutorial.id).append("<div class=\"d-flex flex-row w-100\" id=\"pt-card-auth-" + tutorial.id + "\"></div>");
                $("#pt-card-auth-" + tutorial.id).append("<img class=\"rounded-circle mr-2 w-auto\" src=\"" + tutorial.author_pic_url + "\" height=\"30px\" width=\"30px\" alt=\"person\"></img>");
                $("#pt-card-auth-" + tutorial.id).append("<p class=\"p-0 m-0 text-primary font-weight-bold text-nowrap\">" + tutorial.author + "</p>");

                $("#pt-card-bd-" + tutorial.id).append("<div class=\"w-100 d-flex justify-content-between mx-0\" id=\"pt-card-stars-" + tutorial.id + "\"></div>");
                $("#pt-card-stars-" + tutorial.id).append("<div class=\"w-auto d-flex flex-row px-0 py-1\" id=\"pt-stars-" + tutorial.id + "\"></div>");
                for (let i = 0; i < 5; i++) {
                    if (i < tutorial.star){
                        $("#pt-stars-" + tutorial.id).append("<img class=\"w-auto\" src=\"images/star_on.png\" alt=\"star\" height=\"15\" width=\"15\"></img>");
                    } else {
                        $("#pt-stars-" + tutorial.id).append("<img class=\"w-auto\" src=\"images/star_off.png\" alt=\"star\" height=\"15\" width=\"15\"></img>");
                    }
                }
                $("#pt-card-stars-" + tutorial.id).append("<p class=\"text-nowrap text-primary font-weight-bold small col-1 m-0 pr-5\">" + tutorial.duration + "</p>");         
            });

            /* Carousel slide */ 
            $('.owl-carousel').owlCarousel({
                stagePadding: 0,
                margin:20,
                rewind:true,
                nav:true,
                navText: ["<a class='carousel-control-prev text-decoration-none ml-n4 ml-sm-n5' role='button'><span class='holberton_school-icon-arrow_4 text-dark ml-n4 ml-sm-n5'></span></a>",
                    "<a class='carousel-control-next text-decoration-none mr-n4 mr-sm-n5' role='button'><span class='holberton_school-icon-arrow_3 text-dark mr-n5 mr-sm-n5'></span></a>"],
                responsive:{
                    0:{
                        center:true,
                        items:1
                    },
                    576:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    1200:{
                        items:4
                    }
                }
            });
            $(".owl-carousel").owlCarousel();            
            $("#loader2").addClass("visually-hidden");
        } else {
            console.log("No 'Most popular tutorials' data recieved");
        }
    });

    $.get("https://smileschool-api.hbtn.info/latest-videos", function (data) {
        if (data){
            $("#latest-videos").append("<div class=\"owl-carousel owl-reponsive owl-2 row justify-content-center mx-lg-n5 px-lg-3\" id=\"latest-videos-inner\"></div>");
            data.forEach(video => {
                $("#latest-videos-inner").append("<div class=\"card border-0 px-0 mb-5\" id=\"lv-card-" + video.id + "\"></div>");

                $("#lv-card-" + video.id).append("<img class=\"card-img-top\" src=\"" + video.thumb_url + "\" alt=\"video\" height=\"154\" width=\"255\"></img>");
                $("#lv-card-" + video.id).append("<div class=\"card-img-overlay d-flex justify-content-center align-items-center p-0\" id=\"lv-img-over-" + video.id + "\"></div>");
                $("#lv-img-over-" + video.id).append("<img class=\"videoplayer w-auto\" src=\"images/play.png\" alt=\"videoplayer\" height=\"64px\" width=\"64px\">");
                
                $("#lv-card-" + video.id).append("<div class=\"card-body text-left p-2\" id=\"lv-card-bd-" + video.id + "\"></div>");
                $("#lv-card-bd-" + video.id).append("<h6 class=\"card-title font-weight-bold\">" + video.title + "</h6>");
                $("#lv-card-bd-" + video.id).append("<p class=\"card-text text-muted small\">" + video["sub-title"] + "</p>");
                
                $("#lv-card-bd-" + video.id).append("<div class=\"d-flex flex-row w-100\" id=\"lv-card-auth-" + video.id + "\"></div>");
                $("#lv-card-auth-" + video.id).append("<img class=\"rounded-circle mr-2 w-auto\" src=\"" + video.author_pic_url + "\" height=\"30px\" width=\"30px\" alt=\"person\"></img>");
                $("#lv-card-auth-" + video.id).append("<p class=\"p-0 m-0 text-primary font-weight-bold text-nowrap\">" + video.author + "</p>");

                $("#lv-card-bd-" + video.id).append("<div class=\"w-100 d-flex justify-content-between mx-0\" id=\"lv-card-stars-" + video.id + "\"></div>");
                $("#lv-card-stars-" + video.id).append("<div class=\"w-auto d-flex flex-row px-0 py-1\" id=\"lv-stars-" + video.id + "\"></div>");
                for (let i = 0; i < 5; i++) {
                    if (i < video.star){
                        $("#lv-stars-" + video.id).append("<img class=\"w-auto\" src=\"images/star_on.png\" alt=\"star\" height=\"15\" width=\"15\"></img>");
                    } else {
                        $("#lv-stars-" + video.id).append("<img class=\"w-auto\" src=\"images/star_off.png\" alt=\"star\" height=\"15\" width=\"15\"></img>");
                    }
                }
                $("#lv-card-stars-" + video.id).append("<p class=\"text-nowrap text-primary font-weight-bold small col-1 m-0 pr-5\">" + video.duration + "</p>");
            });

            /* Carousel slide */ 
            $('.owl-2').owlCarousel({
                stagePadding: 0,
                margin:20,
                rewind:true,
                nav:true,
                navText: ["<a class='carousel-control-prev text-decoration-none ml-n4 ml-sm-n5' role='button'><span class='holberton_school-icon-arrow_4 text-dark ml-n4 ml-sm-n5'></span></a>",
                    "<a class='carousel-control-next text-decoration-none mr-n4 mr-sm-n5' role='button'><span class='holberton_school-icon-arrow_3 text-dark mr-n5 mr-sm-n5'></span></a>"],
                responsive:{
                    0:{
                        center:true,
                        items:1
                    },
                    576:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    1200:{
                        items:4
                    }
                }
            });
            $(".owl-carousel").owlCarousel();            
            $("#loader3").addClass("visually-hidden");
        } else {
            console.log("No 'Most popular tutorials' data recieved");
        }
    });

    $("#search").change(function() {
        filter();
    });
    $("#dd-menu1").change(function() {
        filter();
    });
    $("#dd-menu2").change(function() {
        filter();
    });

    function filter() {
        $.get("https://smileschool-api.hbtn.info/courses",
            { "q": $("#search").val(),
                "topic": $("#dd-menu1").val(),
                "sort": $("#dd-menu2").val().toLowerCase().replace(" ", "_") },
            function (data) {
                if (data){     
                    $("#filter-videos").empty();

                    let videos = data.courses;

                    $("#filter-videos").append("<p class=\"float-left text-muted small pl-2 pl-sm-5\">" + videos.length + " videos</p>");
                    videos.forEach(video => {
                        $("#filter-videos").append("<div class=\"card border-0 px-0 mb-5 mx-2 \" id=\"fltr-card-" + video.id + "\"></div>");

                        $("#fltr-card-" + video.id).append("<img class=\"card-img-top\" src=\"" + video.thumb_url + "\" alt=\"video\" height=\"154\" width=\"255\"></img>");
                        $("#fltr-card-" + video.id).append("<div class=\"card-img-overlay d-flex justify-content-center align-items-center p-0\" id=\"fltr-img-over-" + video.id + "\"></div>");
                        $("#fltr-img-over-" + video.id).append("<img class=\"videoplayer w-auto\" src=\"images/play.png\" alt=\"videoplayer\" height=\"64px\" width=\"64px\">");
                        
                        $("#fltr-card-" + video.id).append("<div class=\"card-body text-left p-2\" id=\"fltr-card-bd-" + video.id + "\"></div>");
                        $("#fltr-card-bd-" + video.id).append("<h6 class=\"card-title font-weight-bold\">" + video.title + "</h6>");
                        $("#fltr-card-bd-" + video.id).append("<p class=\"card-text text-muted small\">" + video["sub-title"] + "</p>");
                        
                        $("#fltr-card-bd-" + video.id).append("<div class=\"d-flex flex-row w-100\" id=\"fltr-card-auth-" + video.id + "\"></div>");
                        $("#fltr-card-auth-" + video.id).append("<img class=\"rounded-circle mr-2 w-auto\" src=\"" + video.author_pic_url + "\" height=\"30px\" width=\"30px\" alt=\"person\"></img>");
                        $("#fltr-card-auth-" + video.id).append("<p class=\"p-0 m-0 text-primary font-weight-bold text-nowrap\">" + video.author + "</p>");
        
                        $("#fltr-card-bd-" + video.id).append("<div class=\"w-100 d-flex justify-content-between mx-0\" id=\"fltr-card-stars-" + video.id + "\"></div>");
                        $("#fltr-card-stars-" + video.id).append("<div class=\"w-auto d-flex flex-row px-0 py-1\" id=\"fltr-stars-" + video.id + "\"></div>");
                        for (let i = 0; i < 5; i++) {
                            if (i < video.star){
                                $("#fltr-stars-" + video.id).append("<img class=\"w-auto\" src=\"images/star_on.png\" alt=\"star\" height=\"15\" width=\"15\"></img>");
                            } else {
                                $("#fltr-stars-" + video.id).append("<img class=\"w-auto\" src=\"images/star_off.png\" alt=\"star\" height=\"15\" width=\"15\"></img>");
                            }
                        }
                        $("#fltr-card-stars-" + video.id).append("<p class=\"text-nowrap text-primary font-weight-bold small col-1 m-0 pr-5\">" + video.duration + "</p>");
                    });
                    $("#loader4").addClass("visually-hidden");
                } else {
                    console.log("No 'Most popular tutorials' data recieved");
                }
        });
    }
    filter();
});