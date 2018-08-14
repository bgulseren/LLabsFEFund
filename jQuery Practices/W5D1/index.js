var horoscopeData;

var searchWord = "";

$(document).ready(function() {
  // WRITE YOUR CODE HERE.
  $('form').on('submit', function(event) {
    event.preventDefault(); //it is good practice to keep this at top.
    searchWord = $('input').val(); //collects the search keyword.

    $.get('http://horoscope-lhl.herokuapp.com/horoscopes/' + searchWord, function(data) {
      console.log(data);
      if (data.horoscope != "") {
        displayResults(data);
      } else {
        $('form').hide(200);
        $('#searchresults').removeClass('noshow');
        $('#searchresults').append("<p>" + "Sorry! Sign not found" + "</p>");
      }
    })

  });

/*   $('form').children().on('focus', function() {
    $('form').children().addClass('highlight');
  });

  $('form').children().on('blur', function() {
    $('form').children().removeClass('highlight');
  }); */

  $('form').children().on('click', function() {
    $('form').children().toggleClass('highlight');
  });

});

$('#again').on('click', function(event) {
  $('#searchresults').removeClass('flex');
  $('#searchresults').addClass('noshow');
  $('form').fadeIn(1000);
});

function displayResults(horoscopeData) {
  $('form').hide(200);
  //$('#searchresults').fadeIn(2000);

  //jquery show, fades plays with display attribute.

  $('#searchresults').removeClass('noshow');
  $('#searchresults').addClass('flex');

  $('#leftside').html("<p>" + "Sign:" + "</p>");
  $('#leftside').append("<p>" + "Date:" + "</p>");
  $('#leftside').append("<p>" + "Hor:" + "</p>");

  //takes more time to append a lot of elements instead of using a big html with a long string.
  $('#rightside').html("<p>" + horoscopeData.sign + "</p>");
  $('#rightside').append("<p>" + horoscopeData.date + "</p>");
  $('#rightside').append("<p>" + horoscopeData.horoscope + "</p>");
}
