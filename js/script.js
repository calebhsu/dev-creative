$(document).ready(function(){
  $("#splash").click(function(){
    $("#splash").fadeOut(2000, function() {
      $("main").show(); 
    });
  });

  var border = "5px double rgba(0, 0, 0, 0.4)"

  /* Dropdown Toggles */
  $(".first").click(function(){
      $(".stanza1").slideToggle("slow");
      $(".p1").css({"border-right": border, "border-left" : border});
      $(".first").css({"background-color": "rgba(255, 255, 255, 0.85)"});
  });
  $(".second").click(function(){
      $(".stanza2").slideToggle("slow");
      $(".p2").css({"border-right": border, "border-left" : border});
      $(".second").css({"background-color": "rgba(255, 255, 255, 0.85)"});
  });
  $(".third").click(function(){
      $(".stanza3").slideToggle("slow");
      $(".p3").css({"border-right": border, "border-left" : border});
      $(".third").css({"background-color": "rgba(255, 255, 255, 0.85)"});
  });
});

