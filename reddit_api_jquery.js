$(document).ready(function () {
  // Get the value from the text box

  $('#submitButtonGet').click(function () {
    const subreddit = $('#myTextbox').val();
    // https://www.reddit.com/r/{subreddit}/hot.json
    const endpoint1 = 'https://www.reddit.com/r/' + subreddit + '/hot.json';
    $('#resultGet').text(endpoint1);
    $.get(endpoint1, function (response) {
      // Display the value

      $('#resultGet').text(JSON.stringify(response, null, 2));
    });
  });
});
