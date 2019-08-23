// JavaScript Document
$(document).ready(function(){  
	
	$('.toggle-btn').click(function(){
		//alert('Hi');
		$('.dashboard').toggleClass('is-active');
		$('.toggle-btn').toggleClass('active');
	});	
	
	$('.tr-toggle-btn').click(function(e){ 
		e.stopPropagation();
		$(this).closest('tr').next('tr').toggleClass('active');
		$(this).closest('tr').next('tr').toggleClass('open');
		$(this).toggleClass('active');

	});	
	
});
jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function() {
		$(".sidebar-submenu").slideUp(200);
	if (
    $(this)
      .parent()
      .hasClass("active")
	) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});
 
});

