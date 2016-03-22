$(document).ready(function() {


    $(".flashCards").click(function() {
      $(this).children("p").toggle();
      $(this).siblings().children("p").hide();

    });
});
