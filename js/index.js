$(document).ready(function(){
  $("body").attr('id', 'lahaut');
  $("#navbar a").click(function(){
    $("#navbar li").removeClass("active");
    $(this).parent("li").addClass("active");
  });
  
});