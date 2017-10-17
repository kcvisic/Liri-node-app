//Grab data from keys.js
var keys = require('./keys.js');
var request = require('request');
var twitter = require('twitter');
var spotify = require('node-spotify-api');
var client = new twitter(keys.twitterKeys);
var clientSpotify = new spotify(keys.spotifyKeys)
var fs = require('fs');


function handleTwitter() {


    var parameters = {
        screen_name: "CatCvisic",
        count: 20,

    }
    var argumnets = process.argv[2];


    client.get("statuses/user_timeline", parameters, function(error, tweets, response) {
        if (error) {
            console.log(JSON.stringify(error));
            throw error;
        }
        console.log(tweets[0].user.name);
        console.log(tweets[0].user["statuses_count"]);

        for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].text);
        }





    });
}

function handleSpotify() {
    var argument = process.argv;
    var song = argument[3]

    if (process.argv[3] === undefined) {
        song = "The Sign Ace of Base"

    }


    clientSpotify.search({
        preview_url: song,
        type: "track",
        query: song,
        limit: 1,

    }, function(err, data) {

        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data.tracks.items[0].album.name);
        console.log(data.tracks.items[0].album.artists[0].name);
        console.log(data.tracks.items[0].album["album_type"]);
        console.log(data.tracks.items[0].album["external_urls"]);


    });
}

function handleMovie() {

    var nodeArgs = process.argv;
    // ...
    movieName = ""

    if (process.argv[3] === undefined) {
        movieName = "Mr.Nobody"
    }




    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
    request(queryUrl, function(error, response, body) {

        if (!error && response.statusCode === 200) {
            console.log("The movie year is: " + JSON.parse(body).Year);
            console.log("The movie title is: " + JSON.parse(body).Title);
            console.log("The movie is rated: " + JSON.parse(body).Rated);
            console.log("The movie rotten tomatos: " + JSON.parse(body).Ratings[1].Value);
            console.log("The movie country: " + JSON.parse(body).Country);
            console.log("The movie language: " + JSON.parse(body).Language);
            console.log("The movie plot: " + JSON.parse(body).Plot);
            console.log("The movie actors: " + JSON.parse(body).Actors);
        }
        console.log(queryUrl);
    });
}

function handleRandom() {

    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
            return console.log(err);
        }

        data = data.split(",");

        var dataIndex0 = data[0];
        var dataIndex1 = data[1];
        var args = process.argv;
        args[2] = dataIndex0;
        args[3] = dataIndex1;


        main()


    })

}

function main() {

    if (process.argv[2] === "my-tweets") {
        handleTwitter();
    } else if (process.argv[2] === "spotify-this-song") {
        handleSpotify();
    } else if (process.argv[2] === "movie-this") {
        handleMovie();
    } else if (process.argv[2] === "do-what-it-says") {
        handleRandom();

    }

}

main()