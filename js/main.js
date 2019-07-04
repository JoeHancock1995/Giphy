var topics = ["glitchart" , "static" , "synthesis" , "pixelsorting" , "brutalism"
 , "pixelmosh" , "databend" , "webpunk" , "analogglitch" , "videosynth" , "nihilminus"];

function addSearchBtns() {
  $("#buttons").html("");
  for (i=0; i < topics.length; i++) {
    var $button = $("<input type='button' class= 'btn btn-sm search-btn' />");
    $button.val(topics[i]);
    $("#buttons").append($button);
  }
}


  
$("button").on("click", function(){
 var digital = $(this).attr("data-digital");
 var queryURL ="https://api.giphy.com/v1/gifs/search?q=" + 
 digital + "&api_key=ZJqlCvnXXccVUVpatKWlVNZ959QmuuHE&limit=10"; 

 $.ajax({
   url: queryURL,
   method: "GET"
 })

 .then(function(response){
   console.log(queryURL);
   console.log(response);

   var results = response.data;
   for (var i = 0; i < results.length; i++) {
     var digitalDiv = $("<div>");

     var digitalImage = $("<img>");
     digitalImage.attr("src", results[i].images.fixed_height.url);
     digitalDiv.append(digitalImage);

     $("#gifs-here").prepend(digitalDiv);
   }
 });
});

