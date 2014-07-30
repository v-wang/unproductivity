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

	$("#selectAll").click(function(){
		$(".myCheckbox").prop("checked",$("#selectAll").prop("checked"))
	})


});