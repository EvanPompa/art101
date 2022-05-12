// Summary: Create a function sortingHat() that takes a name (string) as an argument and assigns the name to a hogwarts house.
// @author Evan Pompa, Alia Toth-Smith
// @since  5.12.2022

// Create a function sortingHat() that takes a name (string) as an argument and assigns the name to a hogwarts house.
function sortingHat(name){
  //Create an array of hogwarts houses
  var houses = [
    {name: "Gryffindor", description:"Gryffindor's are brave to a fault."},
    {name: "Gryffinclaw", description:"Gryffindor's are brave and too smart."},
    {name: "Ravenclaw", description:"Ravenclaw's are too smart for their own good."},
    {name: "Slytherin", description:"Slytherin's will do anything to get what they want."},
    {name: "Hufflepuff", description:"Hufflepuff's are nice and overlooked."},
    {name: "Slytherpuff", description:"Slytherin's will do anything to be nice and overlooked"}
  ]

  //choose a name based off of the index of the array and the length of the name.
  return(houses[name.length % houses.length]);
}

// Create an click listener attached to #button
$("#button").click(function(){
  // Empty the Div so only one result is displayed at a time
  $("#output").empty();

  // assign the inputted name to a variable
  let name = $("#input").val();

  // run the name through the sorting hat
  let house = sortingHat(name);

  // add the result to the page.
  $("#output").append("<p>The Sorting Hat has sorted you into " + house.name + ". " + house.description);
});
