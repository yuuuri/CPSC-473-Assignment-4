// We had some help by Chris Danan https://github.com/chrisdanan/Test-YQL/blob/master/app.js
// We also got some help by Mario Andrade https://github.com/Xoriam/CS473/tree/master/Assigment_4-Webpage
// Reference: http://api.rottentomatoes.com/api/public/v1.0.json?apikey=XXXXXXXXXXXXXXXXXXXXXXXX"

var main = function () {


    $.ajax ({
        // accessing Rotten Tomatoes API with using api key
        url: "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=16&country=us&apikey=??????????????????",
        
        // the name of the callback parameter
        jsonp: "callback",

        // tell jQuery we are expecting JSONP
        dataType: "jsonp",

        
        // work with the response
        success: function( response ) {
            console.log( response );  // server response

            var movies = response.movies;
            console.log( movies );

            console.log( movies[0].synopsis);

            movies.forEach(function(elements) {
              console.log( elements.title )
              console.log( elements.synopsis );
        
              //$("#result").append($("<p>").text(elements.title));
              //$("#result").append($("<p>").text(elements.mpaa_rating));

              $("#result").append($("<p>").text("Title: " + elements.title 
			                                    + ", Rated: " + elements.mpaa_rating
												+ ", Release Date: " + elements.release_dates.theater
												+ ", Audience Score: " + elements.ratings.audience_score));


            });


        }
    }); // end .ajax
    
};

$(document).ready(main);
