$(document).ready(function () {
    let clickStatus = 0;
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
    // add hover effect to the burger menu itself
    $('.burger').hover(function(){
        $(".burger").addClass("burger_highlight");
    }, function(){$(".burger").removeClass("burger_highlight");
        $(".nav_bard").css("display", "none");
    });

  });