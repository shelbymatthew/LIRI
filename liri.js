require("dotenv").config();
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var request = require('request');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


var ui1 = process.argv[2];
var ui2 = process.argv[3];

switch (ui1) {
    case 'my-tweets':
    client.get('statuses/home_timeline', function(error, tweets, response) {
        if(error) throw error;
        // console.log(tweets);  // The favorites. 
        // console.log(response);  // Raw response object. 
        var jTweets =JSON.stringify(tweets, null, 2)
        // console.log(JSON.parse(jTweets).text)
      });
    break;
    case "spotify-this-song":
    spotify.search({ type: 'track', query: ui2 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        var jSpot =JSON.stringify(data, null, 2)
        //  JSON.parse(jSpot).text   
      console.log(JSON.parse(jSpot).text);
    });
    break;
    case "movie-this":
    var request = require("request");

// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t=" + ui2 +"&y=&plot=short&apikey=570679e2", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  }
});
}