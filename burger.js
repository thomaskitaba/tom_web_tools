function handleWindowResize(){
    var windowWidth = $(window).width();
    if (windowWidth > 769)
    {
        $(".nav_bar").css('display', 'flex');
    }
}
// Event listener for window resize using jQuery


$(document).ready(function () {

    let clickStatus = 0;
    var windowWidth = $(window).width();
    // toggle ".nav_bar' between display flex and none
    // when the burger icon is clicked
    // add hover effect to the burger menu itself
    $('.burger').hover(function(){
        $(".burger").addClass("burger_highlight");
    }, function(){$(".burger").removeClass("burger_highlight");
        $(".nav_bard").css("display", "none");
        $(window).resize(handleWindowResize);
    });
    $('.burger').click(function () {
        if (clickStatus === 0) {
          $('.nav_bar').css('display', 'flex');

          clickStatus = 1;
        } else {
          $('.nav_bar').css('display', 'none');

          clickStatus = 0;
        }
      });


  });
