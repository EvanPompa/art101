// Summary: create two HTML elements using javascript and append them to an output Div inside of the D.O.M.
// values in an array and one that modulus's all values in an array.
// @author Evan Pompa, Alia Toth-Smith
// @since  5.3.2022

// Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("output");

// Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement("p");

// Change the html attribute of new1El to say something new.
new1El.innerHTML = "Uhhhhhhhhhhhhhh hello I guess...."

// Create another new element and assign it to a variable new2El
var new2El = document.createElement("p");

// Change the html attribute of new2El to say something else.
new2El.innerHTML = "So... hows the weather from where you currently are?"

// Append both new elements one at a time using appendChild() to your output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the css attributes of at least two elements of your page
new1El.style.fontSize = "2em";
new1El.style.color = "Orange";
new2El.style.color = "Red";
new2El.style.fontFamily = "Impact";

//create another new element
var new3El = document.createElement("p");

//add content to this new element
new3El.innerHTML = "I was created for bonus points! I was inserted above the other elements in this output div!";

// style this new element
new3El.style.color = "purple";

// append this new element to the output div.
outputEl.appendChild(new3El);

//move the element above another element
outputEl.insertBefore(new3El, new1El);
