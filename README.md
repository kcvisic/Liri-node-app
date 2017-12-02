# liri-node-app

## Description

```bash
* This application was created using Node JS, just like an iPhone-SIRI takes commands through speech. LIRI BOT takes commands through the command line, using a node. The app that takes in arguments and returns data based on one of four commands:

* my-tweets

* spotify-this-song

* movie-this

* do-what-it-says

```

## Installation

Clone the repository
```bash
git clone git @github.com:kcvisic/Liri-node-app.git

```
## Directions
Node commands:
```bash

1. node liri.js my-tweets

  * This command will return data with 20 latest tweets


2. node liri.js spotify-this-song <song time>

    * This will show the following information about the song in your terminal/bash window:

         * Artist(s)
         *  The songs name
         * A preview link of the song from Spotify
         * The album that the song is from

         * If no song is provided then your program will default to "The Sign" by Ace of Base.

3. node liri.js movie-this <movie name here>

   * This will output the following information to your terminal/bash window:
         * Title of the movie.
         * Year the movie came out.
         * IMDB Rating of the movie.
         * Rotten Tomatoes Rating of the movie.
         * Country where the movie was produced.
         * Language of the movie.
         * Plot of the movie.
         * Actors in the movie.

         * Or if no movie is passed through, it will default to "Mr. Nobody"

4.  node liri.js do-what-it-says

    * Takes the text from random.txt and runs the song through spotify-this-song command


```
## Technology used

```bash
  * node.js
  * Twitter NPM Package
  * Spotify NPM Package
  * Request NPM Package
```
