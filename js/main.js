

var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=ZJqlCvnXXccVUVpatKWlVNZ959QmuuHE&limit=10");
xhr.done(function(data) { console.log("success got data", data); });