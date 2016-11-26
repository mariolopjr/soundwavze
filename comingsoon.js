// Create lines and glitch effects modified from: http://jsfiddle.net/M34JL/2/

// Loads title
title = $(".title").html();

// Creates lines throughout the site
function createlines() {
  var n = $(document).height() - ($(document).height() / 100 * 5); // Gets the height of the page
  console.log(n);
  for(var i = 0; i < n / 2; i++){
    $(".container").append("<div class='line'></div>"); // Appends lines
  }
}

createlines(); // Create lines

window.addEventListener('load', createlines()); // Add to load of site page

// Creates the glitches
setInterval(function() {
  if(Math.floor((Math.random() * 2) + 1) == 1) {
    var x = Math.floor((Math.random() * 6) + 2);
  }
  else {
    var x = Math.floor((Math.random() * 6) + 2) *- 1;
  }
  if(Math.floor((Math.random() * 2) + 1) == 1) {
    var y = Math.floor((Math.random() * 2) + 1);
  }
  else {
    var y = Math.floor((Math.random() * 2) + 1) *- 1;
  }
  if(Math.floor((Math.random() * 100) + 1) >= 93) {
    if(Math.floor((Math.random() * 10) + 1) >= 9) {
      $(".title").html($(".title").html().replace(/e/g, "3"));
      $(".title").html($(".title").html().replace(/o/g, "0"));
      $(".title").html($(".title").html().replace(/i/g, "1"));
    }
    if(Math.floor((Math.random() * 10) + 1) >= 8) {
      $(".title").css({"color":"rgba(0,0,0,1)","text-shadow": ""+x+"px "+y+"px 0 rgba(51, 153, 255, 0.75), "+x*-1+"px "+y*-1+"px 0 rgba(255, 102, 102, 1)"});
    }
    else {
      $(".title").css({"color":"rgba(0,0,0,0)","text-shadow": ""+x+"px "+y+"px 0 rgba(51, 153, 255, 0.5), "+x*-1+"px "+y*-1+"px 0 rgba(255, 102, 102, 0.75)"});
    }
  }
  else {
    if(Math.floor((Math.random() * 10) + 1) <= 7) {
    $(".title").css({"color":"#fff","text-shadow":"0 0 0 #000"});
      if(Math.floor((Math.random() * 3) + 1) > 2) {
        $(".title").html($(".title").html().replace(/3/g, "e"));
        $(".title").html($(".title").html().replace(/0/g, "o"));
        $(".title").html($(".title").html().replace(/1/g, "i"));
      }
    }
  }
}, 50);
