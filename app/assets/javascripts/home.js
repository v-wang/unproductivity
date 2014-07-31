//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://coffeescript.org/


$(document).on('ready page:load', function(){
  
       // $.ajaxSetup({
       //        headers: {
       //        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
       //                }
       //                }); 

        $(".article_source_dropdown").hide();
        $("#reddit_button").click(function(){
          if ($("#reddit_articles").is(':hidden')) {
            $("#reddit_articles").animate({height:"show"});
            $("#arrow").css({WebkitTransform: 'rotate(' + 90 + 'deg)'})}
          else {
            $("#reddit_articles").animate({height:"hide"});
            $("#arrow").css({WebkitTransform: 'rotate(' + 0 + 'deg)'})}
        });
        
        $("#mashable_button").click(function(){
          if ($("#mashable_articles").is(':hidden')) {
            $("#mashable_articles").animate({height:"show"})}
          else {
            $("#mashable_articles").animate({height:"hide"})}
        });
     
      $("#remove").on("click", function(){
        $("#showup").remove();
        $("#inbox").show();
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
                beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
                url: '/show',
                data: {article_select: $(this)[0].id.split("_")[1]},
              });

        
      })
    }}};

    
    function Mclickable() {
    var stlg = parseInt($(".articles:last")[0].id.split("_")[1]) + 1;
    var myArray = [];
    if(window.location.pathname.split("/").length < 4 || window.location.pathname.split("/")[3] == ""){
      var provider = "huffP"
    }else{
      var provider = window.location.pathname.split("/")[3]
    };
    if(stlg>0){
    for(i=0; i<stlg; i++){
      myArray.push("#art_"+i)
    };
    for(j=0; j<myArray.length; j++){
      
      $(myArray[j]).on("click", function(){
        $("#inbox").hide(); 
        $("#articleBody").append("<div id='loader'><img src='/images/ajax-loader.gif' ><h4> Loading, please be patient </h4> </div>");
        $.ajax({
                type: 'POST',
                beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
                url: '/machshow',
                data: {article_select: $(this)[0].id.split("_")[1], prov: provider},
              });

        
      })
    }}
    };
    if(window.location.pathname.split("/")[2] == "index"){
    clickable();
    }else{
     
    Mclickable();
    };


 });
