/* Summary: Create a "FizzBuzz" function that loops through numbers 1 to 200.
   If the number is a multiple of 3, if should print "Fizz!"
   If the number is a multiple of 5, it should print "Buzz!"
   If the number is a multiple of 7, it should print "Boom!"
   If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom.*/

// @author Evan Pompa, Alia Toth-Smith

// @since  5.17.2022

// Create a "FizzBuzz" function that loops through a set of numbers. depending
// on if the number is a multiple of another number, assign the number a name
// such as fizz or buzz. Then format and return the value.

function FizzBuzz(fac1, fac2, fac3, fac4, name1, name2, name3, name4, max){

  /* store all of the values into a string called output. the string will wrap
     all of the values in a paragraph tag*/
  var answer = "<p>";

  //create an array of multiples
  var multiples = [
    {factor: fac1, nametag: name1},
    {factor: fac2, nametag: name2},
    {factor: fac3, nametag: name3},
    {factor: fac4, nametag: name4}
  ];

  // loop through all of the numbers
  for(var num = 1; num <= max; num++){

    // add the current number to the string.
    answer += num;
    answer += ": ";

    // go through each multiple and see if our number is divisible by a factor.
    for (var i = 0; i < multiples.length; i++) {
      if(num % multiples[i].factor == 0){
        answer += multiples[i].nametag;
      }
    }

    // check to see if our number was divisible by any factor so we can apply formatting.
    if(num % multiples[0].factor == 0 || num % multiples[1].factor == 0 || num % multiples[2].factor == 0 || num % multiples[3].factor == 0){
      answer += "!";
    }

    // Once the loop runs through, format a closing and opening paragraph tag.
    answer += "</p><p>"
  }

  // Once the loop is completely run through, close the last paragraph
  answer += "</p>"

  // finally, return the formatted string!
  return answer;
}


// get the output div element and the submit button element.
var outputEl = $("#output");
var button = $("#button");

// add a click event to the button.
button.click(function(){
  // empty the output div so it doesn't add multiple answers
  $("#output").empty();

  // gather all of the factors the user inputted
  var fac1 = $("#fac1");
  var fac2 = $("#fac2");
  var fac3 = $("#fac3");
  var fac4 = $("#fac4");

  // gather all of the nametags the user inputted
  var name1 = $("#name1");
  var name2 = $("#name2");
  var name3 = $("#name3");
  var name4 = $("#name4");

  // gather the max number the user wants to go to.
  var max = $("#max");

  // Call the function and append the output to the output div.
  outputEl.append(FizzBuzz(fac1.val(), fac2.val(), fac3.val(), fac4.val(), name1.val(), name2.val(), name3.val(), name4.val(), max.val()));
});
