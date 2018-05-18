// subscribe popup

$(document).ready(function() {

  var delay = 300; // milliseconds
  var cookie_expire = 0; // days

  var cookie = localStorage.getItem("list-builder");
  if (cookie == undefined || cookie == null) {
    cookie = 0;
  }

  if (((new Date()).getTime() - cookie) / (1000 * 60 * 60 * 24) > cookie_expire) {
    $("#list-builder").delay(delay).fadeIn("fast", () => {
      $("#popup-box").fadeIn("fast", () => {});
    });

    $("button[name=subscribe]").click(() => {
      $.ajax({
        type: "POST",
        url: $("#popup-form").attr("action"),
        data: $("#popup-form").serialize(),
        success: (data) => {
          $("#popup-box-content").html("<p style='text-align: center'>Thank you for subscribing to The Polyglot Developer newsletter!</p>");
        }
      });
    });

    $("#popup-close").click(() => {
      $("#list-builder, #popup-box").hide();
      localStorage.setItem("list-builder", (new Date()).getTime());
    });
  }

});


// portfolio
$(document).ready(function() {

  var $sm = 480;
  var $md = 768;

  function resizeThis() {
    $imgH = $('.middle img').width();
    if ($(window).width() >= $sm) {
      $('.left,.right,.section').css('height', $imgH);
    } else {
      $('.left,.right,.section').css('height', 'auto');
    }
  }

  resizeThis();

  $(window).resize(function() {
    resizeThis();
  });

  $(window).scroll(function() {
    $('.section').each(function() {
      var $elementPos = $(this).offset().top;
      var $scrollPos = $(window).scrollTop();

      var $sectionH = $(this).height();
      var $h = $(window).height();
      var $sectionVert = (($h / 2) - ($sectionH / 4));


      if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
        $(this).addClass('animate');
      } else {
        $(this).removeClass('animate');
      }
    });
  });

  $('.btn-primary').click(function() {
  });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
