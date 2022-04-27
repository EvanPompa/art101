// Summary: Sort letters of a users name
// @author Evan Pompa, Alia Toth-Smith
// @since  4.26.2022

//function sorts letters in alphebetical order with capitals first.
function nameSort(userName){
    // turns our username into an array
    let newName = userName.split("");
    // sorts the array alphebetically
    newName.sort();
    // turn the array bak into a string
    return newName.join("");
}

//prompt the user to enter their name into a window
var userName = window.prompt();
// sort the name and output it to the html file
document.writeln("<div id = 'output'>" + nameSort(userName) + "</div>");
