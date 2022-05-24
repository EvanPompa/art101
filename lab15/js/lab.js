/* Summary: Find an API and output its data onto the webpage.*/
// @author Evan Pompa, Alia Toth-Smith
// @since  5.24.2022

//Create an endpoint for each API
var endpoint = "https://itsthisforthat.com/api.php?text";
var endpoint2 = "https://api.nasa.gov/planetary/apod?api_key=R02I4PqAia1pmHjDYhQgpCT6SsnqKDrNFKdxm9SJ";

//this function takes the api information and outputs it to output
function getAjax(){
	$.ajax({
  	url: endpoint,
    type: "GET"
  })
  .done(function(data){
    $("#output").html(data);
  })
  .fail(function(data){
  	$("#output").html("Ther be an error matey.");
  })
}

//this function takes the api information and outputs it to output 2
function getAjax2(){
	$.ajax({
  	url: endpoint2,
    type: "GET"
  })
  .done(function(data){
    $("#output2").append("<p>" + data.copyright + "</p>");
    $("#output2").append("<p>" + data.date + "</p>");
    $("#output2").append("<p>" + data.title + "</p>");
    $("#output2").append("<img src='" + data.url + "'>");
    $("#output2").append("<p>" + data.explanation + "</p>");
  })
  .fail(function(data){
  	$("#output2").html("Ther be an error matey.");
  })
}

// Call each function when the button is clicked
$("#activate").click(getAjax);
$("#activate2").click(getAjax2);
