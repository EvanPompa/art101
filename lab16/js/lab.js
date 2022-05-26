/* Summary: Use an API that returns an object to display a comic.*/
// @author Evan Pompa, Alia Toth-Smith
// @since  5.26.2022

// Set the end points to get each comic
var endpoint = "https://xkcd.com/info.0.json";

// also set the incremental comic number
var comicNbr = 1
var endpoint2 = "https://xkcd.com/" + comicNbr +"/info.0.json";

//get a new comic depending on what the comic number is and display it on the page.
function getNewComic(){
  $.ajax({
    url: endpoint2,
    type: "GET"
  })
  .done(function(data){
    $("#output2").html("<p>" + data.title + " #" + data.num);
    $("#output2").append("<p>" + data.month + "-" + data.day + "-" + data.year +"</p>");
    $("#output2").append("<img src='" + data.img + "'>");
    $("#output2").append("<p>" + data.alt + "</p>");
  })
  .fail(function(data){
    $("#output2").html("Comic Not Found");
  })
}

// get the currently selected comic and display it on the page.
function getAjax(){
	$.ajax({
  	url: endpoint,
    type: "GET"
  })
  .done(function(data){
    $("#output").append("<p>" + data.title + " #" + data.num);
    $("#output").append("<p>" + data.month + "-" + data.day + "-" + data.year +"</p>");
    $("#output").append("<img src='" + data.img + "'>");
    $("#output").append("<p>" + data.alt + "</p>");
  })
  .fail(function(data){
  	$("#output").html("Ther be an error matey.");
  })
}

//depending on what button is clicked, increment or decrement the comic number.
$("#prev").click(function(){
  if(comicNbr != 1){
    comicNbr -= 1;
  }
  endpoint2 = "https://xkcd.com/" + comicNbr +"/info.0.json";
  getNewComic();
});

$("#next").click(function(){
  comicNbr += 1;
  endpoint2 = "https://xkcd.com/" + comicNbr +"/info.0.json";
  getNewComic();
});

//call both functions
getAjax();
getNewComic();
