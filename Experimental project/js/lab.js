var key = "4336dafda23749c6a0aa1f180ab825fb";
var endpoint = "https://api.rawg.io/api/games?key="+key;
var specificGameEndpoint = "https://api.rawg.io/api/games/"
var next;
var mainEL = $("#main");

function getAjax(){
  $.ajax({
    url: endpoint,
    type: "GET"
  })
  .done(function(data){
    console.log(data);
    for(var i = 0; i < data.results.length; i++){

      mainEL.append("<div><div class='bodydiv' id='"+data.results[i].id+"'>"+data.results[i].name+"</div><div class='bodydiv'>"+"<img src='"+data.results[i].background_image+"'></div></div>");
      let identifier = data.results[i].id;
      console.log(identifier)

      $("#"+identifier).click(function(){

        $.ajax({
          url: specificGameEndpoint+identifier+"?key="+key,
          type: "GET"
        })
        .done(function(game){
          $("#"+identifier).append("<p>"+game.description+"</p>");
          $("#"+identifier).parent().append("<br style='clear: both'>");
        })
        .fail(function(game){
          console.log("Game description could not be aquired");
        })

      });
    }
    next = data.next;
  })
  .fail(function(data){
    console.log("something went wrong");
  })
};
getAjax();
