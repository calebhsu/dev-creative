$(document).ready(function(){
    $("#splash").click(function(){
      $(".fadeImg").fadeOut(3000, function() {
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
});