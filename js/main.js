var topics = ["glitch art" , "static art" , "synthesis" , "pixel sorting" , "brutalism"
 , "pixel mosh" , "data bend" , "webpunk" , "analog" , "videosynth" , "distortion art"];

 function addSearchBtns() {
  $("#buttons").html("");
  for (i = 0; i < topics.length; i++) {
    var $button = $("<input type='button' class='btn btn-sm search-btn' />");
    $button.val(topics[i]);
    $("#buttons").append($button);
  }
}
$("#add-gif").on("click", function(event) {
  event.preventDefault();
  var topic = $("#gif-input").val();
  topics.push(topic);
  addSearchBtns();
});
addSearchBtns();

$(document).on("click", ".btn", function() {
  $("#results").html("");
  var queryURL = "https://api.giphy.com/v1/gifs/search?";
  var query;
  var params = {
    q: query,
    limit: 10,
    api_key: "aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB",
    fmt: "json"
  };
  if ($(this).hasClass("search-btn")) {
    query = $(this).val();
  } else if ($("#user-search").val() !== "") {
    query = $("#user-search").val();
    topics.push(query);
    if (topics.length > 6) {
      topics.shift();
    }
    addSearchBtns();
  }
  params.q = query;

  if ($(this).hasClass("trending")) {
    queryURL = "https://api.giphy.com/v1/gifs/trending?";
    delete params.q;
  }
  $.ajax({
    url: queryURL + $.param(params),
    method: "GET",
    success: function(r) {
      for (i = 0; i < params.limit; i++) {
        var $img = $("<img>");
        var $div = $("<div>");
        var $rating = $("<h6>");
        var gifObj = r.data[i];
        var gif = gifObj.images;

    
        $img.attr({
          src: gif.fixed_height_still.url,
          "data-animate": gif.fixed_height.url,
          "data-still": gif.fixed_height_still.url,
          "data-state": "still",
          class: "gif"
        });
        // $div.attr("id", "gif-" + i);
        $div.addClass("gif-box");
        $rating.text("Rating: " + gifObj.rating);
        $div.append($img, $rating);
        $("#results").append($div);
      }

      $(".gif").on("click", function() {
        var state = $(this).attr("data-state");
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });
    }
  });
});


