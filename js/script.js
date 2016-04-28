$(document).ready(function(){
  $("#splash").click(function(){
    $("#splash").fadeOut(2000, function() {
      $("main").show(); 
    });
  });

  /* Dropdown Toggles */
  $("#first").click(function(){
      $(".stanza1").slideToggle("slow");
  });
  $("#second").click(function(){
      $(".stanza2").slideToggle("slow");
  });
  $("#third").click(function(){
      $(".stanza3").slideToggle("slow");
  });

  $(".box").hover(function(){
    $(this).css({"background-color": "rgba(255, 255, 255, 0.7)"});
    }, function(){
      $(this).css({"background-color": "rgba(255, 255, 255, 0.5)", "color": "black"});
    });
});

