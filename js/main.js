const gifForm = document.querySelector("#gif-form");
gifForm.addEventListener("submit", fetchGiphs);

function fetchGiphs(e) {
    e.preventDefault();
    const searchTerm = document.querySelector(".search").value;
    fetch(`https://api.giphy.com/v1/gifs/search?&q=${searchTerm}&limit=10&api_key=ZJqlCvnXXccVUVpatKWlVNZ959QmuuHE`)
    .then((response) => {return response.json(); })
    .then((resp => {
        // Here we get the data array from the response object
        let dataArray = resp.data
        // We pass the array to showGiphs function
        showGiphs(dataArray);
    }))
    .catch(err => console.log(err)); // We use catch method for Error handling
}

function showGiphs(dataArray) {
  const results = document.querySelector(".results");
  let output = '<div class="container">';
  dataArray.forEach((imgData) => {
    output += `
  <img src="${imgData.images.fixed_width.url}"/>
`;
  });
  document.querySelector('.results').innerHTML = output;
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
    // After the data comes back from the API
    .then(function(response) {
      // Storing an array of results in the results variable
      var results = response.data;
      // Looping over every result item
      for (var i = 0; i < results.length; i++) {
        // Only taking action if the photo has an appropriate rating
        if (results[i].rating !== "" ) {
          // Creating a div for the gif
          var gifDiv = $("<div>");
          // Storing the result item's rating
          var rating = results[i].rating;
          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + rating);
          // Creating an image tag
          var personImage = $("<img>");
          // Giving the image tag an src attribute of a proprty pulled off the
          // result item
          personImage.attr("src", results[i].images.fixed_height.url);
          // Appending the paragraph and personImage we created to the "gifDiv" div we created
          gifDiv.append(p);
          gifDiv.append(personImage);
          // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
          $("#gifs-appear-here").prepend(gifDiv);
        }
      }
    });
});


/*function getData(){
var input = $("#searchtext").val()
var xhr = $.get("http://api.giphy.com/v1/gifs/search&api_key=ZJqlCvnXXccVUVpatKWlVNZ959QmuuHE&limit=10");
xhr.done(function(response) { 
    console.log("success got data", response); 
    var jiffs = response.data
    for (i in jiffs)
    {
        $('.inner').append("<img src='"+jiffs[i].images.original.url+"' style='height:350px; width:350px;'/>")
    }
        });
}*/
