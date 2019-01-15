$(function(){
	$("#writeway").on("click",function(){
		$("#writeway").css("border-bottom","3px solid orange");
		$("#lookway").css("border-bottom","0");
		$(".wayo").css("display","none");
		$(".wayt").css("display","block");
	});
	$("#lookway").on("click",function(){
		$("#writeway").css("border-bottom","0");
		$("#lookway").css("border-bottom","3px solid orange");
		$(".wayo").css("display","block");
		$(".wayt").css("display","none");
	});
	$("#dknow").mousemove(function(){
		$("#sknow").css("display","block");
	});
	$("#dknow").mouseleave(function(){
		$("#sknow").css("display","none");
		$("#dknow").css("translateX","72px");
		$("#dknow").css("transition","1s all");
	});
})