$(document).ready(function() {
  $(".cross-2").click(function() {
    $(".cross-list-1").addClass("cross-list-2");
  });
  $(".subgrid-row-nav-2").hide();
  $(".container-title-5")
    .delay(4000)
    .animate({ marginRight: "30px" }, 500, "swing");
  // Display & Hide Menu
  $("#nav-icon1").click(function() {
    $(this).toggleClass("open");
    $(".subgrid-row-nav-2")
      .fadeToggle()
      .css("zIndex", "199");
    $("#vid_menu")[0].play(0);
    $(".container-nav-2").animate({ paddingLeft: "0px" }, 500);
    $(".container-nav-3")
      .delay(90)
      .animate({ paddingLeft: "0px" }, 500);
  });
  $("#nav-icon2").click(function() {
    $(this).toggleClass("open");
    $(".subgrid-row-nav-2")
      .fadeToggle()
      .css("zIndex", "199");
  });
  // Scroll to location on page after pressing link button
  $(".scroll-to").click(function() {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 30
      },
      1500,
      "swing"
    );
    return false;
  });
  // Display & Hide Menu on White Background
  $(".nav-invert1").click(function() {
    $(this).toggleClass("nav-invert-1");
  });
  // Menu Contninued - Click menu option for more options
  $("#nav-ministries").click(function() {
    $(".container-nav-6").css({ visibility: "hidden", opacity: 0.0 });
    $(".container-nav-7").css({ visibility: "hidden", opacity: 0.0 });
    $(".container-nav-8").css({ visibility: "hidden", opacity: 0.0 });
    $(".container-nav-9").css({ visibility: "hidden", opacity: 0.0 });
    if ($(".container-nav-5").css("visibility") == "hidden")
      $(".container-nav-5")
        .css({ visibility: "visible", opacity: 0.0 })
        .animate({ opacity: 1.0 }, 200);
    else
      $(".container-nav-5")
        .css({ visibility: "hidden", opacity: 1.0 })
        .animate({ opacity: 0.0 }, 200);
  });
  $("#nav-next").click(function() {
    $(".container-nav-5").css({ visibility: "hidden", opacity: 0.0 });
    $(".container-nav-7").css({ visibility: "hidden", opacity: 0.0 });
    $(".container-nav-8").css({ visibility: "hidden", opacity: 0.0 });
    $(".container-nav-9").css({ visibility: "hidden", opacity: 0.0 });
    if ($(".container-nav-6").css("visibility") == "hidden")
      $(".container-nav-6")
        .css({ visibility: "visible", opacity: 0.0 })
        .animate({ opacity: 1.0 }, 200);
    else
      $(".container-nav-6")
        .css({ visibility: "hidden", opacity: 1.0 })
        .animate({ opacity: 0.0 }, 200);
  });

  $("#nav-kit").click(function() {
    $(".container-nav-5").css({ visibility: "hidden", opacity: 0.0 });
    $(".container-nav-7").css({ visibility: "hidden", opacity: 0.0 });
    $(".container-nav-8").css({ visibility: "hidden", opacity: 0.0 });
    $(".container-nav-6").css({ visibility: "hidden", opacity: 0.0 });
    if ($(".container-nav-9").css("visibility") == "hidden")
      $(".container-nav-9")
        .css({ visibility: "visible", opacity: 0.0 })
        .animate({ opacity: 1.0 }, 200);
    else
      $(".container-nav-9")
        .css({ visibility: "hidden", opacity: 1.0 })
        .animate({ opacity: 0.0 }, 200);
  });

  $("#nav-contact").click(function() {
    $(".container-nav-5").css({ visibility: "hidden", opacity: 0.0 });
    $(".container-nav-6").css({ visibility: "hidden", opacity: 0.0 });
    $(".container-nav-8").css({ visibility: "hidden", opacity: 0.0 });
    $(".container-nav-9").css({ visibility: "hidden", opacity: 0.0 });
    if ($(".container-nav-7").css("visibility") == "hidden")
      $(".container-nav-7")
        .css({ visibility: "visible", opacity: 0.0 })
        .animate({ opacity: 1.0 }, 200);
    else
      $(".container-nav-7")
        .css({ visibility: "hidden", opacity: 1.0 })
        .animate({ opacity: 0.0 }, 200);
  });
  $("#nav-about").click(function() {
    $(".container-nav-5").css({ visibility: "hidden", opacity: 0.0 });
    $(".container-nav-6").css({ visibility: "hidden", opacity: 0.0 });
    $(".container-nav-7").css({ visibility: "hidden", opacity: 0.0 });
    $(".container-nav-9").css({ visibility: "hidden", opacity: 0.0 });
    if ($(".container-nav-8").css("visibility") == "hidden")
      $(".container-nav-8")
        .css({ visibility: "visible", opacity: 0.0 })
        .animate({ opacity: 1.0 }, 200);
    else
      $(".container-nav-8")
        .css({ visibility: "hidden", opacity: 1.0 })
        .animate({ opacity: 0.0 }, 200);
  });
  // Video Player - hide controls until click
  $(".video-display").click(function() {
    this.paused ? this.play() : this.pause();
  });
  // Circular points - display text on hover
  $("#circle-container-1").mouseenter(function() {
    $("#circle-container-1b")
      .css("visibility", "visible")
      .hide()
      .stop()
      .delay("150")
      .slideDown("350");
  });
  $("#circle-container-1").mouseleave(function() {
    $("#circle-container-1b")
      .stop()
      .slideUp("350");
  });
  $("#circle-container-2").mouseenter(function() {
    $("#circle-container-2b")
      .css("visibility", "visible")
      .hide()
      .stop()
      .delay("150")
      .slideDown("350");
  });
  $("#circle-container-2").mouseleave(function() {
    $("#circle-container-2b")
      .stop()
      .slideUp("350");
  });
  $("#circle-container-3").mouseenter(function() {
    $("#circle-container-3b")
      .css("visibility", "visible")
      .hide()
      .stop()
      .delay("150")
      .slideDown("350");
  });
  $("#circle-container-3").mouseleave(function() {
    $("#circle-container-3b")
      .stop()
      .slideUp("350");
  });
  $("#circle-container-4").mouseenter(function() {
    $("#circle-container-4b")
      .css("visibility", "visible")
      .hide()
      .stop()
      .delay("150")
      .slideDown("350");
  });
  $("#circle-container-4").mouseleave(function() {
    $("#circle-container-4b")
      .stop()
      .slideUp("350");
  });
  $("#circle-container-5").mouseenter(function() {
    $("#circle-container-5b")
      .css("visibility", "visible")
      .hide()
      .stop()
      .delay("150")
      .slideDown("350");
  });
  $("#circle-container-5").mouseleave(function() {
    $("#circle-container-5b")
      .stop()
      .slideUp("350");
  });
  $("#circle-container-6").mouseenter(function() {
    $("#circle-container-6b")
      .css("visibility", "visible")
      .hide()
      .stop()
      .delay("150")
      .slideDown("350");
  });
  $("#circle-container-6").mouseleave(function() {
    $("#circle-container-6b")
      .stop()
      .slideUp("350");
  });
  // Animated scroll to top (up arrow). Refer below for display on scroll.
  $("#scrollToTop")
    .hide()
    .click(function() {
      $("html, body").animate({ scrollTop: 0 }, 1000, "swing");
      return false;
    });
  // Tithe calculator
  // Input Field - center
  $.fn.textWidth = function(text, font) {
    if (!$.fn.textWidth.fakeEl)
      $.fn.textWidth.fakeEl = $("<span>")
        .hide()
        .appendTo(document.body);
    $.fn.textWidth.fakeEl
      .text(text || this.val() || this.text() || this.attr("placeholder"))
      .css("font", font || this.css("font"));
    return $.fn.textWidth.fakeEl.width();
  };
  $(".responsive-input-1")
    .on("input", function() {
      var inputWidth = $(this).textWidth();
      $(this).css({
        width: inputWidth + 10
      });
    })
    .trigger("input");
  function inputWidth(elem, minW, maxW) {
    elem = $(this);
    console.log(elem);
  }
  // Input Field - center when form reset
  $("#titheresetting").click(function() {
    $(".responsive-input-1")
      .on("input", function() {
        var inputWidth = $(this).textWidth();
        $(this).css({
          width: inputWidth + 10
        });
      })
      .trigger("input");
    $("html, body").animate(
      {
        scrollTop: parseInt($(".subgrid-row-text-1").offset().top + -20)
      },
      500
    );
    $("#tithevalue").focus();
  });
  // Tithe focus
  setTimeout(function() {
    $("#tithevalue").focus();
  }, 1);
  // Error messages if values incorrect
  $("#tithesubmit").click(function() {
    if ($("#tithevalue").val() < 10) {
      return false;
    }
    if ($("#tithepercent").val() < 1) {
      return false;
    }
    if ($("#tithepercent").val() > 99) {
      return false;
    }
    // Expand calculations table on click
    if ($(".container-tithing-10").css("display") == "none") {
      $(".container-tithing-10")
        .hide()
        .removeClass("displaynone")
        .slideDown("250")
        .css("display", "block");
    }
    $("html, body").animate(
      {
        scrollTop: parseInt($(".container-tithing-10").offset().top + -40)
      },
      500
    );
  });
  // Measurement conversions
  $("[name=convertRadio]").on("change", function() {
    if ($("#weight-1").is(":checked")) {
      $("#weightSelected").removeClass("displaynone");
      $("#lengthSelected").addClass("displaynone");
      $("#volumeSelected").addClass("displaynone");
      $("#volumetwoSelected").addClass("displaynone");
      $("#weightNote").removeClass("displaynone");
      $("#lengthNote").addClass("displaynone");
      $("#volumeNote").addClass("displaynone");
      $("#volumetwoNote").addClass("displaynone");
      $("#weightTable").removeClass("displaynone");
      $("#volumeTable").addClass("displaynone");
      $("#volumetwoTable").addClass("displaynone");
      $("#lengthTable").addClass("displaynone");
    }
    if ($("#length-1").is(":checked")) {
      $("#lengthSelected").removeClass("displaynone");
      $("#weightSelected").addClass("displaynone");
      $("#volumeSelected").addClass("displaynone");
      $("#volumetwoSelected").addClass("displaynone");
      $("#lengthNote").removeClass("displaynone");
      $("#weightNote").addClass("displaynone");
      $("#volumeNote").addClass("displaynone");
      $("#volumetwoNote").addClass("displaynone");
      $("#lengthTable").removeClass("displaynone");
      $("#weightTable").addClass("displaynone");
      $("#volumeTable").addClass("displaynone");
      $("#volumetwoTable").addClass("displaynone");
    }
    if ($("#volume-1").is(":checked")) {
      $("#volumeSelected").removeClass("displaynone");
      $("#volumetwoSelected").addClass("displaynone");
      $("#lengthSelected").addClass("displaynone");
      $("#weightSelected").addClass("displaynone");
      $("#volumeNote").removeClass("displaynone");
      $("#volumetwoNote").addClass("displaynone");
      $("#lengthNote").addClass("displaynone");
      $("#weightNote").addClass("displaynone");
      $("#volumeTable").removeClass("displaynone");
      $("#weightTable").addClass("displaynone");
      $("#volumetwoTable").addClass("displaynone");
      $("#lengthTable").addClass("displaynone");
    }
    if ($("#volume-2").is(":checked")) {
      $("#volumetwoSelected").removeClass("displaynone");
      $("#volumeSelected").addClass("displaynone");
      $("#lengthSelected").addClass("displaynone");
      $("#weightSelected").addClass("displaynone");
      $("#volumetwoNote").removeClass("displaynone");
      $("#volumeNote").addClass("displaynone");
      $("#lengthNote").addClass("displaynone");
      $("#weightNote").addClass("displaynone");
      $("#volumetwoTable").removeClass("displaynone");
      $("#weightTable").addClass("displaynone");
      $("#volumeTable").addClass("displaynone");
      $("#lengthTable").addClass("displaynone");
    }
    $(".dropdown-measurements-1").val("");
    $("#convertValue").val("");
    $("#convertResult").val("");
  });
  $("#weightTo").change(function() {
    if ($("#weightFrom").val() > 0 && $("#weightTo").val() > 0) {
      $("#convertValue").focus();
    }
  });
  $("#lengthTo").change(function() {
    if ($("#lengthFrom").val() > 0 && $("#lengthTo").val() > 0) {
      $("#convertValue").focus();
    }
  });
  $("#volumeTo").change(function() {
    if ($("#volumeFrom").val() > 0 && $("#volumeTo").val() > 0) {
      $("#convertValue").focus();
    }
  });
  $("#volumetwoTo").change(function() {
    if ($("#volumetwoFrom").val() > 0 && $("#volumetwoTo").val() > 0) {
      $("#convertValue").focus();
    }
  });
  $(".dropdown-measurements-1").change(function() {
    $("#convertValue").val("");
    $("#convertResult").val("");
  });
  // Expand measurement table on calculate
  $("#convertSubmit").click(function() {
    if ($(".container-tithing-10").css("display") == "none") {
      $(".container-tithing-10")
        .hide()
        .removeClass("displaynone")
        .slideDown("250")
        .css("display", "block");
    }
  });
  // Events page. Click and reveal text.
  $(".container-box-1").click(function() {
    $(this)
      .children(".container-box-5")
      .slideToggle("500")
      .css("display", "block");
    $(this)
      .children(".container-articles-2")
      .toggleClass("radius-one");
  });
  // Load random images (homepage - advert banner)
  var image = new Array();
  image[0] = "https://city.org.nz/img/title_01_113_150.jpg";
  image[1] = "https://city.org.nz/img/title_02_113_150.jpg";
  image[2] = "https://city.org.nz/img/title_03_113_150.jpg";
  image[3] = "https://city.org.nz/img/title_04_113_150.jpg";
  image[4] = "https://city.org.nz/img/title_05_113_150.jpg";
  image[5] = "https://city.org.nz/img/title_06_113_150.jpg";
  image[6] = "https://city.org.nz/img/title_07_113_150.jpg";
  var size = image.length;
  var x = Math.floor(size * Math.random());
  $("#random-image").attr("src", image[x]);
  // Gradient colours on homepage Pt 1 (refer Pt2 before & Pt3 main.css for more)
  var colors = new Array(
    [210, 33, 54],
    [94, 35, 157],
    [33, 118, 255],
    [33, 118, 255]
  );
  var step = 0;
  var colorIndices = [0, 1, 2, 3];
  var gradientSpeed = 0.001;
  function updateGradient() {
    if ($ === undefined) return;
    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];
    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
    $("#gradient")
      .css({
        background:
          "-webkit-gradient(linear, left top, right bottom, from(" +
          color1 +
          "), to(" +
          color2 +
          "))"
      })
      .css({
        background:
          "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
      });
    step += gradientSpeed;
    if (step >= 1) {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      colorIndices[1] =
        (colorIndices[1] +
          Math.floor(1 + Math.random() * (colors.length - 1))) %
        colors.length;
      colorIndices[3] =
        (colorIndices[3] +
          Math.floor(1 + Math.random() * (colors.length - 1))) %
        colors.length;
    }
    // Remove notification by pressing X on homepage.
    $(".x-close-1").click(function() {
      $("#close-container").css({ display: "none" });
    });
  }
  setInterval(updateGradient, 10);
  // Pick random scripture for Devotions page
  $.get("quotes.txt", function(data) {
    var quotes = data.split("@");
    var idx = Math.floor(quotes.length * Math.random());
    $(".quotes").html(quotes[idx]);
  });
  // Display random articles as ads at the bottom of each article
  function shuffle(items) {
    for (var i = items.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = items[i];
      items[i] = items[j];
      items[j] = temp;
    }
    return items;
  }
  // Blog
  $.get("https://city.org.nz/blog.php", function(data) {
    var $quotes = $(data).find(".container-articles-5");
    var $adContainers = $(".blog-ad-1");
    shuffle($quotes).each(function(index) {
      $adContainers.eq(index).append(this);
    });
  });
  // Kit
  $.get("https://city.org.nz/kit.php", function(data) {
    var $quotes = $(data).find(".container-kit-1");
    var $adContainers = $(".kit-ad-1");
    shuffle($quotes).each(function(index) {
      $adContainers.eq(index).append(this);
    });
  });
  // Modals
  $("#myBtn-1").click(function() {
    $("#myModal-1")
      .addClass("modal-1")
      .removeClass("displaynone")
      .css({ visibility: "visible", opacity: 0.0 })
      .animate({ opacity: 1.0 }, 150);
    $(".modal-content")
      .css({ visibility: "visible", opacity: 0.0 })
      .animate({ opacity: 1.0 }, 200);
    setTimeout(function() {
      $("#focused").focus();
    }, 500);
  });
  $("#myBtn-2").click(function() {
    $("#myModal-2")
      .addClass("modal-1")
      .removeClass("displaynone")
      .css({ visibility: "visible", opacity: 0.0 })
      .animate({ opacity: 1.0 }, 150);
    $(".modal-content")
      .css({ visibility: "visible", opacity: 0.0 })
      .animate({ opacity: 1.0 }, 200);
    setTimeout(function() {
      $("#focused").focus();
    }, 500);
  });
  $(".x-close-2").click(function() {
    $(this)
      .parent()
      .parent()
      .addClass("displaynone")
      .removeClass("modal-1");
  });
  $(".modal-close-1").click(function() {
    $(this)
      .parent()
      .parent()
      .parent()
      .addClass("displaynone")
      .removeClass("modal-1");
  });
});

// Rotate images sequentially like a gif
window.onload = function() {
  var nav = document.getElementById("img1");
  if (nav != null) {
    window.displayImgCount = 0;
    function cycleImage() {
      if (displayImgCount !== 0) {
        document.getElementById("img" + displayImgCount).style.display = "none";
      }
      displayImgCount = displayImgCount === 6 ? 1 : displayImgCount + 1;
      document.getElementById("img" + displayImgCount).style.display = "block";
      setTimeout(cycleImage, 450);
    }
    cycleImage();
  }
};

// Display scroll to top arrow. This manages display only on scroll. Refer above for animation and default display when page loads
$(window).on("scroll", function() {
  var scrollPos = $(window).scrollTop();
  if (scrollPos <= 80) {
    $("#scrollToTop")
      .fadeTo(0, 0)
      .hide();
  } else {
    $("#scrollToTop")
      .fadeTo(0, 1)
      .show();
  }
});

// Copyright date & Devotions date
$(window).on("load", function() {
  // Gradient colours on homepage Pt 2 (refer Pt1 above & Pt3 main.css for more)
  $("#gradient5")
    .hide()
    .delay(1000)
    .fadeIn(1000);
});

//Remove event if the date has expired
window.setInterval(function() {
  var current = new Date();
  var d = new Date(); // today!
  var x = 0; // change 0 to 1 to add days

  $(".date-event").each(function() {
    var expiry = new Date($(this).html());

    if (d.setDate(d.getDate() - x) > expiry.getTime()) {
      $(this)
        .parent()
        .hide();
    }
  });
});

// View /js/outofview.js document for code to ensure function only works on scroll down, not up.

// IGNORE ALL ERROR JAVASCRIPT!
window.onerror = function() {
  return true;
};

// IGNORE ALL ERROR JQUERY!
$(window).error(function(e) {
  e.preventDefault();
});
