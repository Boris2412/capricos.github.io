$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
$('header').addClass("glide");
}
else{
$('header').removeClass("glide");
}
});


$(document).ready(function(){
	$(".btn-nav").on("click", function() {
		var target = $(this).data("target");
		$(target).toggleClass("nav__list--open");
		$('header').toggleClass("glide_plus");
	});
});