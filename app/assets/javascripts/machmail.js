$(document).on('ready page:load', function () {


	$(".dropdownTitle").is(":hidden");
  
	// This slides the sidebar menus up and down
	$(".dropdownTitle").click(function(){
  	if ( $(this).next("ul").is(":hidden") ) {
  		$(this).next("ul").slideDown();
  	} else {
  		$(this).next("ul").slideUp();
  	}
  });

  // adds active state to sidebar folders
  $(".dropdownItem a").each(function() {   
    if (this.href == window.location.href) {
        $(this).addClass("dropdownItemActive a");
    }
  });

  // checks all the checkboxes
	$("#selectAll").click(function(){
		$(".myCheckbox").prop("checked",$("#selectAll").prop("checked"))
	})

  // lets user return to inbox view when logo is clicked
	$("#remove2").on("click", function(){
        $("#showup").remove();
        $("#inbox").show();
      });


});