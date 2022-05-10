// Summary: Using jQuery, create buttons to add to the challenge, problems, and results sections of my document.
// @author Evan Pompa, Alia Toth-Smith
// @since  5.10.2022

//Find the section you want to add the button to
var challengeEl = $("#challenge");
var problemsEl = $("#problems");
var resultsEl = $("#results");
var outputEl = $("#output");

//Create the button, give it a text label, add it to the section;
challengeEl.append("<button id='challengeElBtn'>Click Me to change the background!</button>");

problemsEl.append("<button id='problemsElBtn'>Click Me to change the font color!</button>");

resultsEl.append("<button id='resultsElBtn'>Click Me to change the font type!</button>");

// these are the bonus task buttons
outputEl.append("<button id='button1'>I effect button 2</button>");
outputEl.append("<button id='button2'>I effect button 1</button>");

//add a click event to each button
$("#challengeElBtn").click(function(){
  challengeEl.toggleClass("bgchanger");
});

$("#problemsElBtn").click(function(){
  problemsEl.toggleClass("colorchanger");
});

$("#resultsElBtn").click(function(){
  resultsEl.toggleClass("sizechanger");
});

$("#button1").click(function(){
  $("#button2").toggleClass("buttonchanger");
});

$("#button2").click(function(){
  $("#button1").toggleClass("buttonchanger");
});
