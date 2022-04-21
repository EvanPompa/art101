// Summary: Practicing using arrays and objects
// @author Evan Pompa, Alia Toth-Smith
// @since  4.21.2022

var myTransport = ["legs","bus","car","bicycle","surfboard"];

var myMainRide = {
    make: "Ford",
    model: "Explorer",
    color: "white",
    year: 2002,
    ownIt: false,
    age: function(){
        return 2022 - myMainRide.year;
    }
};

document.writeln("ways I get around: </br>");

for(var i = 0; i < myTransport.length;i++){
  if(i === myTransport.length - 1){
    document.writeln(myTransport[i] + ". </br></br>");
  }
  else{
    document.writeln(myTransport[i] + ", </br>");
  }

}

// printing out objects Code from Wes Modes
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
