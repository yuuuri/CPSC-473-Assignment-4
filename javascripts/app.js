// We had some help by Chris Danan https://github.com/chrisdanan/Test-YQL/blob/master/app.js
// Reference: http://api.rottentomatoes.com/api/public/v1.0.json?apikey=x4ctzpadpg34rzvsy9nduyt8"

var main = function () {


    $.ajax ({
        // accessing Rotten Tomatoes API with using api key
        url: "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=16&country=us&apikey=x4ctzpadpg34rzvsy9nduyt8",
        
        // the name of the callback parameter, as specfied by the YQL service
        jsonp: "callback",

        // tell jQuery we are expecting JSONP
        dataType: "jsonp",

        // tell YQL what we want and that we want JSON
        data: {
            q: "select * from search where query = 'lists'",
                format: "json"
        },
        // work with the response
        success: function( response ) {
            console.log( response );  // server response

            var movies = response.movies;
            console.log( movies );

            console.log( movies[0].synopsis);

            movies.forEach(function(elements) {
              console.log( elements.title )
              console.log( elements.synopsis );
        
              $("#result").append($("<p>").text(elements.title));
              $("#result").append($("<p>").text(elements.mpaa_rating));

            });


        }
    }); // end .ajax
    
};

$(document).ready(main);
