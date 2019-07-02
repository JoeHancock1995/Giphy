

var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=cats&api_key=ZJqlCvnXXccVUVpatKWlVNZ959QmuuHE&limit=10");

xhr.done(function(response) { 
    console.log("success got data", response); 

var jiffs = response.data

for (i in jiffs)
{
    $('.inner').append("<img src='"+jiffs[i].images.original.url+"';/>")
}
    });