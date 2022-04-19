// Summary: Practicing declaring variables, writing them to a document, and displaying them in an html page in a JavaScript file.
// @author Evan Pompa, Alia Toth-Smith
// @since  4.19.2022

//declaring variables for car
var make,model,color,year;
make = "Ford";
model = "Explorer";
color = "white";
year = 2002;
var ownIt = false;
//calculate cars age
var age = 2022 - year;

//print out car variables into document
document.writeln("Make:" + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Age: " + age + "years<br>");
document.writeln("Do I own it?: " + ownIt + "<br>");
