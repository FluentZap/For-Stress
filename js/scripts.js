$(document).ready(function(){
  $("form#fortune").submit(function(event){
    event.preventDefault();
    $(".hidden").hide();
    var goodLuck = 0;
    var badLuck = 0;
    $("input:checkbox[name=badVibes]:checked").each(function(){

      badLuck++;
    });

    $("input:checkbox[name=goodVibes]:checked").each(function(){
      goodLuck++;

    })
      if(badLuck === goodLuck) {
        $("#neutral").show();
      } else if(badLuck >= goodLuck + 2) {
        //check highest amount first
          $("#badResponses2").show();
      } else if(goodLuck >= badLuck +2) {
          $("#goodResponses2").show();
      } else if (badLuck > goodLuck) {
          $("#badResponses1").show();
      } else if (goodLuck > badLuck) {
          $("#goodResponses1").show();
      }


  });
});
