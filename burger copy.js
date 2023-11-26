function handleWindowResize(){
    var windowsWidth = $(window).width();
    if (windowWidth > 769)
    {
        $(".nav_bar").css('display', 'flex');
    }
}
// Event listener for window resize using jQuery
$(window).resize(handleWindowResize);

$(document).ready(function () {
    handleWindowResize();
    let clickStatus = 0;
    var windowWidth = $(window).width();
    // toggle ".nav_bar' between display flex and none
    // when the burger icon is clicked

    $('.burger').click(function () {
        if (clickStatus === 0) {
          $('.nav_bar').css('display', 'flex');

          clickStatus = 1;
        } else {
          $('.nav_bar').css('display', 'none');
          clickStatus = 0;
        }
      });
      if (windowWidth <= 769)
      if (windowWidth <= 769)
      {
        $(document).click(function (e) {
        if (!$(e.target).closest('.nav_bar').length && !$(e.target).closest('.burger').length) {
          // If the clicked element is neither .nav_bar nor .burger, hide .nav_bar
          $('.nav_bar').css('display', 'none');
          clickStatus = 0;
        }
      });
    }
    if (windowWidth > 769)
    {
        $(".nav_bar").css('display', 'flex');
    }
    // add hover effect to the burger menu itself
    $('.burger').hover(function(){
        $(".burger").addClass("burger_highlight");
    }, function(){$(".burger").removeClass("burger_highlight");
        $(".nav_bard").css("display", "none");
    });
  });
