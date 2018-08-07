$(document).ready(function() {
  // WRITE YOUR CODE HERE.
  $('form').on('submit', function(event) {
    event.preventDefault();
    $('form').hide(200);
    $('#searchresults').fadeIn(2000);
  });

  $('form').children().on('focus', function() {
    $('form').children().addClass('highlight');
  });

  $('form').children().on('blur', function() {
    $('form').children().removeClass('highlight');
  });

});
