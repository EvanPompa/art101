// Summary: sort a name inputted by the user.
// values in an array and one that modulus's all values in an array.
// @author Evan Pompa, Alia Toth-Smith
// @since  5.6.2022

//function sorts letters in alphebetical order with capitals first.
function nameSort(userName){
    // turns our username into an array
    let newName = userName.split("");
    // sorts the array alphebetically
    newName.sort();
    // turn the array bak into a string
    return newName.join("");
}

function anagram(userName){
  //lowercase all letters
  var lowerName = userName.toLowerCase();
  //split name into characters
  var splitName = lowerName.split('');
  //randomly pick letters from array and put it somewhere else
  for(let i = 0; i < splitName.length; i++){
    // pick a random letter in the array
    let letter = splitName[Math.floor(Math.random() * splitName.length)];

    //find where the letter was and delete it
    for(let i = 0; i < splitName.length; i++){
      //if the element in the array is equal to the selected letter...
      if (splitName[i] == letter){
        //delete the element
        splitName.splice(i,1);
        //get out of the loop
        break;
      }
    }
    // add the letter back into the array at a different spot
    splitName.push(letter);
  }

  //make first letter capital
  splitName[0] = splitName[0].toUpperCase();

  // go through every letter in array to capitalize letters as neccessary
  for(let i = 0; i < splitName.length; i++){

    // if we arent on the first letter
    if (i != 0){

      // if the element beforer the letter we are currently on is a space, dash, or apostophe
      if(splitName[i-1] == " " || splitName[i-1] == "-" || splitName[i-1] == "'"){

        // make the currently selected letter a captial letter
        splitName[i] = splitName[i].toUpperCase();
      }
    }
  }
  //append to string
  var name = splitName.join("");
  //return string
  return(name);
}

// assign the output div to a variable
var outputEl = document.getElementById("output");

// assign the button to a variable
var sortButtonEl = document.getElementById('my-button');

// add an event listener to the button that takes the value from the input field and sorts it.
sortButtonEl.addEventListener("click",function(){

  // get the value from the input field
  let inputValue = document.getElementById("user-name").value;

  // log the value from the input field to the console before and after it is sorted
  console.log("users name: " + inputValue);
  console.log("users sorted name: " + nameSort(inputValue));

  // output the value from the input field to the output div before and after it is sorted
  outputEl.innerHTML = "Users name: " + inputValue + "<br>";
  outputEl.innerHTML += "Users sorted name: " + nameSort(inputValue) + "<br>";
  outputEl.innerHTML += "Users name as an anagram: " + anagram(inputValue);
});
