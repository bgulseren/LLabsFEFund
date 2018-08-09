var horoscopeData = {
  "sunsign": "Gemini",
  "credit": "(c) Kelli Fox, The Astrologer, http://new.theastrologer.com",
  "date": "2018-03-09",
  "horoscope": "The world is your oyster today. So what are you waiting for? Get out there and find your adventure. It's a perfect day for learning something new. This can be formalized through taking a class, or it can be an informal, impromptu process. That's what 'the world is your oyster' means -- your pearl of knowledge is out there, just waiting to be discovered. So where will you search for it first?(c) Kelli Fox, The Astrologer, http://new.theastrologer.com",
  "meta": {
      "mood": "strange",
      "keywords": "one-sided, fervor",
      "intensity": "87%"
  }
}

var searchWord = "";

$(document).ready(function() {
  // WRITE YOUR CODE HERE.
  $('form').on('submit', function(event) {
    event.preventDefault();
    searchWord = $('input').val(); //collects the search keyword.
    $('form').hide(200);
    //$('#searchresults').fadeIn(2000);

    //jquery show, fades plays with display attribute.

    $('#searchresults').removeClass('noshow');
    $('#searchresults').addClass('flex');

    // We are putting this function call here as if check should happen after submit.
    if (searchWord === horoscopeData.sunsign) {
      $('#searchresults').append("<p>" + "Credit: " + horoscopeData.credit + "</p>");
      $('#searchresults').append("<p>" + "Date: " + horoscopeData.date + "</p>");
      $('#searchresults').append("<p>" + horoscopeData.horoscope + "</p>");
      $('#searchresults').append("<p>" + "Mood: " + horoscopeData.meta.mood + "</p>");
      $('#searchresults').append("<p>" + "Keywords: " + horoscopeData.meta.keywords + "</p>");
      $('#searchresults').append("<p>" + "Intensity: " + horoscopeData.meta.intensity + "</p>");
    } else {
      $('#searchresults').append("<p>" + "Sorry! Sign not found" + "</p>");
    }
  });

  $('form').children().on('focus', function() {
    $('form').children().addClass('highlight');
  });

  $('form').children().on('blur', function() {
    $('form').children().removeClass('highlight');
  });

});

$('#again').on('click', function(event) {
  $('#searchresults').removeClass('flex');
  $('#searchresults').addClass('noshow');
  $('form').fadeIn(1000);
});


