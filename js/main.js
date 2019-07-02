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
