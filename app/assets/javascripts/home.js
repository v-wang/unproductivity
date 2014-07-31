//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://coffeescript.org/



$(document).ready(function(){
  
        $.ajaxSetup({
              headers: {
              'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                      }
                      }); 

      //   $(".article_source_dropdown").hide();
      //   $("#reddit_button").click(function(){
      //     if ($("#reddit_articles").is(':hidden')) {
      //       $("#reddit_articles").animate({height:"show"});
      //       $("#arrow").css({WebkitTransform: 'rotate(' + 90 + 'deg)'})}
      //     else {
      //       $("#reddit_articles").animate({height:"hide"});
      //       $("#arrow").css({WebkitTransform: 'rotate(' + 0 + 'deg)'})}
      //   });
        
      //   $("#mashable_button").click(function(){
      //     if ($("#mashable_articles").is(':hidden')) {
      //       $("#mashable_articles").animate({height:"show"})}
      //     else {
      //       $("#mashable_articles").animate({height:"hide"})}
      //   });
     
      // $("#remove").on("click", function(){
      //   $("#showup").remove();
      //   $("#inbox").show();
      });
function clickable() {
    var stlg = $(".articles").length;
    var myArray = [];
    if(stlg>0){
    for(i=0; i<stlg; i++){
      myArray.push("#art_"+i)
    };
    for(j=0; j<myArray.length; j++){
      
      $(myArray[j]).on("click", function(){
        $("#showup").remove();
        $("#outlook_email_body").append("<img src='/images/ajax-loader.gif' id='loader' >");
        $.ajax({
                type: 'POST',
                url: '/show',
                data: {article_select: $(this)[0].id.split("_")[1]},
              });

        
      })
    }}
    };
    function Mclickable() {
    var stlg = $(".articles").length;
    var myArray = [];
    if(stlg>0){
    for(i=0; i<stlg; i++){
      myArray.push("#art_"+i)
    };
    for(j=0; j<myArray.length; j++){
      
      $(myArray[j]).on("click", function(){
        $("#inbox").hide(); 
        $("#articleBody").append("<img src='/images/ajax-loader.gif' id='loader' >");
        $.ajax({
                type: 'POST',
                url: '/machshow',
                data: {article_select: $(this)[0].id.split("_")[1]},
              });

        
      })
    }}
    };
clickable();
Mclickable();
    















 });
