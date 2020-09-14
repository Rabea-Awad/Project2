// show color option div when click on the gear
$(document).ready(function() {

    
    $(".gear-check").click(function() {
        $(".color-option").slideToggle();
    });

// change Theme color on click

    var colorLi = $(".color-option ul li");
    colorLi
        .eq(0).css("backgroundColor","#E41B17").end()
        .eq(1).css("backgroundColor","#0895D1").end()
        .eq(2).css("backgroundColor","#d91b83").end()
        .eq(3).css("backgroundColor","#17e460d1").end()


    colorLi.click(function() {

        $("link[href*='theme']").attr("href", $(this).attr("data-value"));

        // console.log($(this.attr("data-value"))


    });   
});


// scroll top

$(function() {

    var scrollButton = $("#scroll-top");

    $(window).scroll(function() {

        if($(this).scrollTop() >= 700 ) 
        {
           scrollButton.fadeIn(1000);
        } else
        {
            scrollButton.fadeOut(1000); 
        }

       // console.log($(this).scrollTop()); 

       scrollButton.click(function() {

           $(window).scrollTop(0);

     });


    });
    
});

