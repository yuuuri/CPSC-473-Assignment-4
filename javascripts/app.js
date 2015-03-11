// We had some help by Chris Danan https://github.com/chrisdanan/Test-YQL/blob/master/app.js

var main = function () {

    var $ul = $("<ul>");
    var $li = $("<li>");

    // using YQL and JSONP
    $.ajax ({
        url: "http://api.rottentomatoes.com/api/public/v1.0/lists/dvds.json?apikey=x4ctzpadpg34rzvsy9nduyt8",
        
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


        }
    }); // end .ajax
};

$(document).ready(main);
