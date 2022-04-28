// Summary: create two functions, one that anonymous function that squares all
//          values in an array and one that modulus's all values in an array.
// @author Evan Pompa, Alia Toth-Smith
// @since  4.28.2022

// create an array of numbers
var MyNumbers = [1, -12, 500, 30, 24, -200];

//create a function that modulus's all values in my array
function modulusTwo(x){
    return x % 2;
}

//modulus all values in my array and store it in a variable (modArray)
var modArray = MyNumbers.map(modulusTwo);
//print modArray to the console
console.log(modArray);

//create an anonymous function that squares every value in my array and store it in a variable (sqrArray)
var sqrArray = MyNumbers.map(function(x){return x ** 2;});
//print sqrArray to the console.
console.log(sqrArray);

//create a main function that will display modArray and sqrArray on my HTML page
function main(){
  // test to see if the button works
  console.log("button is working");

  //create a variable that holds the element inside of our index file.
  var outputEL = document.getElementById("output");
  //in the specified element, display modArray and sqrArray;
  outputEL.innerHTML = modArray + "<br>" + sqrArray;
}
