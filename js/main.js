function getData(){
  var input = $("#searchtext").val()
  var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=ZJqlCvnXXccVUVpatKWlVNZ959QmuuHE&limit=10");
  xhr.done(function(response) { 
      console.log("success got data", response); 
      var jiffs = response.data
      for (i in jiffs)
      {
          $('.inner').append("<img src='"+jiffs[i].images.original.url+"' style='height:350px; width:350px;'/>")
      }
          });
  }

//////// buttons /////////////

$("button").on("click", function() {
  var person = $(this).attr("data-person");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=ZJqlCvnXXccVUVpatKWlVNZ959QmuuHE";
  $.ajax({
    url: queryURL,
    method: "GET"
  })
 
    .then(function(response) {
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        if (results[i].rating !== "" ) {
        
      var gifDiv = $("<div>");
      var rating = results[i].rating;
      var p = $("<p>").text("Rating: " + rating);
      var personImage = $("<img>");

          personImage.attr("src", results[i].images.original.url);
          gifDiv.append(p);
          gifDiv.append(personImage);
          $("#gifs-appear-here").prepend(gifDiv);
        }
      }
    });
});
