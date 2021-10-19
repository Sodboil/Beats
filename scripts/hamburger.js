$(document).ready(function(){
	$(".hamburger, .menu__close").click(function(){
		$(".hambuger--menu").toggleClass("hambuger--menu--active"); return false;
	});
});