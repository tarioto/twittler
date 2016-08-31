$(document).ready(function(){
  var $hero = $('.hero');
  $hero.html('');

  function findNewTweets() {
    $('.hero').find('div').remove();
    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message);
      var $time = $('<div data-livestamp=' + moment(tweet.created_at).format() + '></div>');
      $tweet.addClass(tweet.user);
      $time.addClass(tweet.user);
      $tweet.appendTo($hero);
      $time.appendTo($hero);
      index -= 1;
    }
  }

  findNewTweets();

  $('.latest').on('click', function() {
    findNewTweets();
  });


  for (var i = 0; i < users.length; i++) {
    var people = users[i];
    var $people = $('<button></button>');
    $people.text('@' + users[i]);
    $people.addClass(users[i]);
    $people.appendTo($('.filtering'));
  }

  $('.filtering').on('click', 'button', function() {
    var currentClass = $(this).attr("class");
      $('.hero').find("div").not("div." + currentClass).toggle();

  });

  for (var j = 0; j < users.length; j++) {
    var $peopleToFilter = $('<button></button>');
    $peopleToFilter.text('@' + users[j]);
    $peopleToFilter.addClass(users[j]);
    $peopleToFilter.appendTo($('.following'));
  }

  $('.following').on('click', 'button', function() {
    var currentClass = $(this).attr("class");
    var tweets = streams.users[currentClass];
    $('.hero').find('div').remove();
    for (var i = 0; i < tweets.length; i++) {
      var $tweet = $('<div></div>');
      $tweet.text('@' + tweets[i].user + ': ' + tweets[i].message);
      var $time = $('<div data-livestamp=' + moment(tweets[i].created_at).format() + '></div>');
      $tweet.addClass(tweets[i].user);
      $time.addClass(tweets[i].user);

      $time.prependTo($hero);
      $tweet.prependTo($hero);

    }

  });

});
