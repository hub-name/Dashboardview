$(document).ready(function(){
	$("#firstpane h3.menu_head").click(function(){
		$(this).addClass("current").next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
		$(this).siblings().removeClass("current");
		$(".sbt-show-body").hide();
		$(".substation-show").hide();
	});
	$(".pc-leftsidemenu").on("click",function(){
		var leftWidth = $(".e-left").width()+2;
		console.log(leftWidth);
		if (!$(".e-left").hasClass("hide")) {
			console.log("aa");
			$(".e-left").addClass("hide");
			$(".e-left").animate({left:-leftWidth});
		} else{
			$(".e-left").removeClass("hide");
			$(".e-left").animate({left:0});
			console.log("bb");
		}
	});
	$(".pc-rightsidemenu").on("click",function(){
		var rightWidth = $(".e-right").width();
		console.log(rightWidth);
		if (!$(".e-right").hasClass("hide")) {
			console.log("aa");
			$(".e-right").addClass("hide");
			$(".e-right").animate({right:-rightWidth});
		} else{
			$(".e-right").removeClass("hide");
			$(".e-right").animate({right:0});
			console.log("bb");
		}
	})
	//mapChart(); 
});
$(window).resize(function() {
	var leftWidth = $(".e-left").width()+14;
	var rightWidth = $(".e-right").width()+14;
	if ($(".e-left").hasClass("hide")) {
		$(".e-left").css("left",-leftWidth);
	}
	if ($(".e-right").hasClass("hide")) {
		$(".e-right").css("right",-leftWidth);
	}
	//mapChart(); 
});