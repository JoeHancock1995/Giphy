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
addSearchBtns();

$(document).on("click", ".btn" , function () {
  $("#results").html("");
})

 var queryURL ="https://api.giphy.com/v1/gifs/search?";
var query;
var params = {
  q: query,
  limit: 10,
  api_key: "ZJqlCvnXXccVUVpatKWlVNZ959QmuuHE",
  fmt:"json"
};
if ($(this).hasClass("search-btn")) {
  query = $(this).val();
} else if ($("#user-search").val() !== "") {
  query = $("#user-search").val();
  topics.push(query);
  if (topics.length > 11) {
    topics.shift();
  }
  addSearchBtns();
}
params.q = query;
 $.ajax({
   url: queryURL + $.param(params),
   method: "GET",
   success: function (r) {
     for (i=0; i < params.limit; i++) {
       var $img = $("<img>");
       var $div = $("<div>");
     }
   }
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

