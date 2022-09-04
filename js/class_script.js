$(document).ready(function() {
    //
    let togglerStatus = false;
    $(".navbar-toggler").click(function(e) {
        // alert("get")
        e.preventDefault();
        togglerStatus = !togglerStatus;
        if (togglerStatus) {
            $(".navbar-toggler .bar1").addClass("change");
            $(".navbar-toggler .bar2").addClass("change");
            $(".navbar-toggler .bar3").addClass("change");
        } else {
            $(".navbar-toggler .bar1").removeClass("change");
            $(".navbar-toggler .bar2").removeClass("change");
            $(".navbar-toggler .bar3").removeClass("change");

        }
    });

    $(".nav-item-move a").click(function(link) {
        link.preventDefault();

        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - 150
        }, 3000);
        $(".navbar-toggler").toggleClass("change");
        $("#myNavbar").collapse("hide");
    });
    // //window scroll
    // $(window).scroll(function(){
    //     let position = $(this).scrollTop();
    //     // 56+93=149
    //     if(position >= 149){
    //         $('.navbar').addClass('navbar-background');
    //         $(".navbar").addClass("fixed-top");
    //     }
    //     else{
    //         $('.navbar').removeClass('navbar-background');
    //         $(".navbar").removeClass("fixed-top");
    //     }
    // });
    //smooth scroll
    //   $(".nav-item a").click(function(link){
    //     link.preventDefault();

    //     let target = $(this).attr('href');
    //     $('html, body').stop().animate({
    //         scrollTop:$(target).offset().top-150
    //     }, 3000);
    //     $(".navbar-toggler").toggleClass("change");
    //     $("#myNavbar").collapse("hide");
    // });

    // // Isotope
    // let $grid = $(".grid").isotope({
    //     // options
    // });
    // // filter items on button click
    // $(".filter-button-group").on("click","button", function(){
    //     let filterValue = $(this).attr("data-filter");
    //     $grid.isotope({
    //         filter: filterValue
    //     });
    // });
});