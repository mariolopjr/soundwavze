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
